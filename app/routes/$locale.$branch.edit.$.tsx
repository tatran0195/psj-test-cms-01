import { useLoaderData, Form, redirect, useNavigate, useSubmit, useFetcher } from "react-router";
import { getFile, getBranchHead, commitChanges } from "../cms.server";
import { requireUser } from "../session.server";
import { pushToGitHub } from "../github.server";
import { useState, useEffect, useRef } from "react";
import { Save, Eye, Code, ArrowLeft, Image as ImageIcon } from "lucide-react";
import Editor from "@monaco-editor/react";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";
import { MDXRenderer } from "../components/mdx/MDXRenderer";

export async function loader({ params, request }: LoaderFunctionArgs) {
  await requireUser(request);
  const locale = params.locale as string;
  const branchName = decodeURIComponent(params.branch as string);
  const path = `${locale}/${params["*"]}`;
  const headVersion = getBranchHead(branchName);
  const file = getFile(headVersion, path);
  if (!file) throw new Response("Not Found", { status: 404 });
  return { file, path: params["*"] as string, locale, branch: branchName };
}

export async function action({ request, params }: ActionFunctionArgs) {
  const user = await requireUser(request);
  const formData = await request.formData();
  const content = formData.get("content") as string;
  const message = (formData.get("message") as string) || `Update ${params["*"]}`;
  const pendingAssetsStr = formData.get("pendingAssets") as string;
  const locale = params.locale as string;
  const branch = decodeURIComponent(params.branch as string);
  
  let changedFiles: any[] = [{ path: `${locale}/${params["*"]}`, content, mime_type: "text/markdown" }];
  
  if (pendingAssetsStr) {
    const assets = JSON.parse(pendingAssetsStr);
    changedFiles = changedFiles.concat(assets);
  }

  // PRODUCTION FEATURE: Push directly to GitHub if user has token!
  if (user.token && process.env.GITHUB_REPO) {
    try {
      await pushToGitHub(user.token, process.env.GITHUB_REPO, branch, message, changedFiles);
      // Wait, we still update local SQLite so UI updates instantly without waiting for webhook
    } catch (e) {
      console.error("GitHub Push Failed:", e);
      // Decide whether to block or allow local-only save if GH push fails
    }
  }

  await commitChanges({
    branch: branch,
    author: user.username,
    message: message,
    changedFiles,
    deletedFiles: []
  });

  return redirect(`/${locale}/${encodeURIComponent(branch)}/${params["*"]}`);
}

export default function FileEdit() {
  const { file, path, locale, branch } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const submit = useSubmit();
  const fetcher = useFetcher<any>();
  const formRef = useRef<HTMLFormElement>(null);
  const monacoRef = useRef<any>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  
  const [content, setContent] = useState(file.raw_content);
  const [pendingAssets, setPendingAssets] = useState<any[]>([]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    
    debounceRef.current = setTimeout(() => {
      let previewMd = content;
      pendingAssets.forEach(asset => {
        const dataUri = `data:${asset.mime_type};base64,${asset.content}`;
        previewMd = previewMd.replace(`/${locale}/${encodeURIComponent(branch)}/${asset.path}`, dataUri);
      });
      
      const fd = new FormData();
      fd.append("content", previewMd);
      fetcher.submit(fd, { method: "post", action: "/api/preview" });
    }, 500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [content, pendingAssets, branch, locale]);

  const astPreviewStr = fetcher.data?.parsed_ast || file.parsed_ast;

  const handleEditorDidMount = (editor: any, monaco: any) => {
    monacoRef.current = editor;
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        formData.set("content", editor.getValue());
        if (!formData.get("message")) {
          formData.set("message", `Quick save ${path.split('/').pop()}`);
        }
        submit(formData, { method: "post" });
      }
    });
  };

  const handlePasteOrDrop = (e: React.ClipboardEvent | React.DragEvent) => {
    const items = (e as React.ClipboardEvent).clipboardData?.items || (e as React.DragEvent).dataTransfer?.items;
    if (!items) return;
    
    for (const item of items) {
      if (item.type.indexOf("image") !== -1) {
        e.preventDefault();
        const fileUpload = item.getAsFile();
        if (!fileUpload) continue;
        
        const reader = new FileReader();
        reader.onload = (event) => {
          if (!event.target?.result) return;
          const base64 = (event.target.result as string).split(',')[1];
          const ext = fileUpload.type.split('/')[1] || 'png';
          const fileName = `img-${Date.now()}.${ext}`;
          const assetPath = `${locale}/assets/${fileName}`;

          setPendingAssets(prev => [...prev, { path: assetPath, content: base64, mime_type: fileUpload.type }]);

          const editor = monacoRef.current;
          if (editor && (window as any).monaco) {
            const position = editor.getPosition();
            const text = `![${fileUpload.name}](/${locale}/${encodeURIComponent(branch)}/assets/${fileName})`;
            editor.executeEdits("upload", [{
              range: new (window as any).monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
              text: text,
              forceMoveMarkers: true
            }]);
          }
        };
        reader.readAsDataURL(fileUpload);
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 140px)", margin: "-40px -60px", background: "var(--bg-sidebar)" }}>
      {/* Editor Header */}
      <div style={{ padding: "16px 24px", background: "var(--bg-body)", borderBottom: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button type="button" onClick={() => navigate(`/${locale}/${encodeURIComponent(branch)}/${path}`)} className="btn-ghost px-2 py-1"><ArrowLeft size={20} /></button>
          <div>
            <div style={{ fontWeight: 600, fontSize: "1rem" }}>Editing {path.split('/').pop()}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Branch: {branch}</div>
          </div>
        </div>
      </div>

      <Form method="post" ref={formRef} style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div 
          onPaste={handlePasteOrDrop}
          onDrop={handlePasteOrDrop}
          onDragOver={(e) => e.preventDefault()}
          style={{ flex: 1, display: "flex", flexDirection: "column", borderRight: "1px solid var(--border-color)", background: "var(--bg-body)" }}
        >
          <div style={{ padding: "8px 16px", background: "var(--bg-sidebar)", borderBottom: "1px solid var(--border-color)", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Code size={16} /> Markdown Source
              <span style={{ marginLeft: 8, fontSize: "10px", background: "var(--accent-bg)", color: "var(--accent)", padding: "2px 6px", borderRadius: 4, display: "flex", alignItems: "center", gap: 4 }}>
                <ImageIcon size={10} /> Paste/Drop Images
              </span>
            </div>
            <kbd className="kbd" style={{ fontSize: "11px", opacity: 0.7 }}>Cmd + S</kbd>
          </div>
          <div style={{ flex: 1, position: "relative" }}>
             <Editor
               height="100%"
               language="markdown"
               theme="vs-light"
               value={content}
               onMount={handleEditorDidMount}
               onChange={(val) => setContent(val || "")}
               options={{
                 minimap: { enabled: false },
                 wordWrap: "on",
                 fontSize: 14,
                 lineNumbers: "on",
                 renderLineHighlight: "all",
                 padding: { top: 16 }
               }}
             />
             <input type="hidden" name="content" value={content} />
             <input type="hidden" name="pendingAssets" value={JSON.stringify(pendingAssets)} />
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "var(--bg-body)", overflow: "hidden" }}>
          <div style={{ padding: "8px 16px", background: "var(--bg-sidebar)", borderBottom: "1px solid var(--border-color)", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
            <Eye size={16} /> Live Preview {fetcher.state !== "idle" && <span className="text-xs font-normal text-muted-foreground ml-2">(Syncing...)</span>}
          </div>
          <div className="markdown-body" style={{ flex: 1, overflowY: "auto", padding: 32 }}>
            <MDXRenderer htmlAstStr={astPreviewStr} locale={locale} branch={branch} />
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 24px", background: "var(--bg-body)", borderTop: "1px solid var(--border-color)", display: "flex", gap: 16, alignItems: "center", zIndex: 10 }}>
          <input 
            type="text" 
            name="message" 
            placeholder="Commit message (e.g. Fixed grammar)" 
            className="input flex-1" 
          />
          <button type="submit" className="btn px-6 py-2"><Save size={18} /> Commit Changes</button>
        </div>
      </Form>
    </div>
  );
}