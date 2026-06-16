import {
  useLoaderData,
  Form,
  redirect,
  useNavigate,
  useSubmit,
  useFetcher,
  useActionData,
  useOutletContext,
} from "react-router";
import { getFile, commitChanges } from "../cms.server";
import {
  requireUser,
  getOrInitCsrfToken,
  commitSession,
  rotateCsrfToken,
  getSession,
} from "../session.server";
import { pushToGitHub } from "../github.server";
import { useState, useEffect, useRef } from "react";
import { Save, Eye, Code, ArrowLeft, Image as ImageIcon } from "lucide-react";
import Editor from "@monaco-editor/react";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";
import { MDXRenderer } from "../components/mdx/MDXRenderer";
import {
  validateParams,
  EditFileSchema,
  LocaleSchema,
  BranchNameSchema,
  FilePathSchema,
} from "../lib/validation.js";
import { logger } from "../lib/logger.js";
import { checkRateLimit, EDIT_RATE_LIMIT } from "../lib/rate-limit.server.js";

// Max size for the entire pendingAssets payload (to prevent oversized form submissions)
const MAX_PENDING_ASSETS_BYTES = 5 * 1024 * 1024; // 5 MB

export interface EditLoaderData {
  file: any;
  path: string;
  locale: string;
  branch: string;
  csrfToken: string;
}

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export async function loader({
  params,
  request,
}: LoaderFunctionArgs): Promise<EditLoaderData> {
  await requireUser(request);
  const locale = validateParams(LocaleSchema, params.locale);
  const branchName = validateParams(
    BranchNameSchema,
    decodeURIComponent(params.branch as string),
  );
  const path = `${locale}/${params["*"]}`;
  const file = getFile(branchName, path);
  if (!file) throw new Response("Not Found", { status: 404 });

  // Lazy CSRF init — do NOT rotate here to avoid concurrent-tab invalidation
  const { csrfToken, session, needsCommit } = await getOrInitCsrfToken(request);

  const data: EditLoaderData = {
    file,
    path: params["*"] as string,
    locale,
    branch: branchName,
    csrfToken,
  };

  const headers = needsCommit
    ? { "Set-Cookie": await commitSession(session) }
    : undefined;

  return Response.json(data, { headers }) as unknown as EditLoaderData;
}

// ---------------------------------------------------------------------------
// Action
// ---------------------------------------------------------------------------

export async function action({ request, params }: ActionFunctionArgs) {
  const user = await requireUser(request);

  const clientIp = request.headers.get("x-forwarded-for") ?? "unknown";
  if (!checkRateLimit(clientIp, EDIT_RATE_LIMIT)) {
    throw new Response("Rate limit exceeded. Try again later.", { status: 429 });
  }

  const locale = validateParams(LocaleSchema, params.locale);
  const branch = validateParams(
    BranchNameSchema,
    decodeURIComponent(params.branch as string),
  );
  const filePath = validateParams(FilePathSchema, params["*"]);

  const formData = await request.formData();
  const raw = Object.fromEntries(formData);

  // CSRF validation
  const session = await getSession(request.headers.get("Cookie"));
  const csrfToken = formData.get("csrf_token") as string;
  if (!csrfToken || csrfToken !== session.get("csrf_token")) {
    throw new Response("Invalid or missing CSRF token", { status: 403 });
  }

  let validated;
  try {
    validated = validateParams(EditFileSchema, raw);
  } catch (e) {
    if (e instanceof Response) return e;
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  const content = validated.content;
  const message = validated.message || `Update ${filePath}`;

  // Parse and validate pending assets; enforce total payload size cap
  let pendingAssets: any[] = [];
  if (validated.pendingAssets) {
    try {
      const parsed = JSON.parse(validated.pendingAssets);
      if (!Array.isArray(parsed)) {
        return Response.json(
          { error: "pendingAssets must be a JSON array" },
          { status: 400 },
        );
      }
      const totalBytes = new TextEncoder().encode(validated.pendingAssets).length;
      if (totalBytes > MAX_PENDING_ASSETS_BYTES) {
        return Response.json(
          {
            error: `Pending assets exceed the ${MAX_PENDING_ASSETS_BYTES / 1024 / 1024} MB limit. Upload images separately.`,
          },
          { status: 413 },
        );
      }
      pendingAssets = parsed;
    } catch {
      pendingAssets = [];
    }
  }

  const changedFiles = [
    { path: `${locale}/${filePath}`, content, mime_type: "text/markdown" },
    ...pendingAssets,
  ];

  // SQLite commit first — GitHub push is best-effort
  try {
    await commitChanges({
      branch,
      author: user.username,
      message,
      changedFiles,
      deletedFiles: [],
      clientIp,
      userAgent: request.headers.get("user-agent"),
    });
  } catch (e) {
    logger.error({ err: e, user: user.username, path: filePath }, "SQLite commit failed");
    return Response.json({ error: "Failed to save changes." }, { status: 500 });
  }

  if (user.token && process.env.GITHUB_REPO) {
    pushToGitHub(
      user.token,
      process.env.GITHUB_REPO,
      branch,
      message,
      changedFiles,
    ).catch((e: unknown) =>
      logger.error(
        { err: e, user: user.username, path: filePath },
        "GitHub push failed during edit",
      ),
    );
  } else {
    logger.warn(
      { user: user.username, repo: process.env.GITHUB_REPO },
      "Skipping GitHub push: missing token or repo",
    );
  }

  logger.info(
    { action: "edit", path: filePath, user: user.username, ip: clientIp },
    "File edited",
  );

  // Rotate CSRF token after successful commit
  const { setCookie: newCsrfCookie } = await rotateCsrfToken(request);

  return redirect(`/${locale}/${encodeURIComponent(branch)}/${filePath}`, {
    headers: { "Set-Cookie": newCsrfCookie },
  });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function FileEdit() {
  const { file, path, locale, branch, csrfToken } =
    useLoaderData<EditLoaderData>();
  const navigate = useNavigate();
  const submit = useSubmit();
  const fetcher = useFetcher<any>();
  const formRef = useRef<HTMLFormElement>(null);
  const monacoRef = useRef<any>(null);
  const monacoInstanceRef = useRef<any>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [content, setContent] = useState<string>(file.raw_content);
  const [pendingAssets, setPendingAssets] = useState<any[]>([]);

  const actionData = useActionData<any>();

  // Live preview — debounced 500 ms
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      let previewMd = content;
      pendingAssets.forEach((asset) => {
        const dataUri = `data:${asset.mime_type};base64,${asset.content}`;
        previewMd = previewMd.replace(
          `/${locale}/${encodeURIComponent(branch)}/${asset.path}`,
          dataUri,
        );
      });

      const fd = new FormData();
      fd.append("content", previewMd);
      fd.append("csrf_token", csrfToken);
      fetcher.submit(fd, { method: "post", action: "/api/preview" });
    }, 500);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, pendingAssets, branch, locale]);

  const astPreviewStr = fetcher.data?.parsed_ast ?? file.parsed_ast;

  const handleImageFile = (fileUpload: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target?.result) return;
      const base64 = (event.target.result as string).split(",")[1];
      const ext = fileUpload.type.split("/")[1] ?? "png";
      const fileName = `img-${Date.now()}.${ext}`;
      const assetPath = `${locale}/assets/${fileName}`;

      setPendingAssets((prev) => [
        ...prev,
        { path: assetPath, content: base64, mime_type: fileUpload.type },
      ]);

      const editor = monacoRef.current;
      const monacoInstance = monacoInstanceRef.current;
      if (editor && monacoInstance) {
        const position = editor.getPosition();
        const text = `![${fileUpload.name}](/${locale}/${encodeURIComponent(branch)}/assets/${fileName})`;
        editor.executeEdits("upload", [
          {
            range: new monacoInstance.Range(
              position.lineNumber,
              position.column,
              position.lineNumber,
              position.column,
            ),
            text,
            forceMoveMarkers: true,
          },
        ]);
      }
    };
    reader.readAsDataURL(fileUpload);
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    monacoRef.current = editor;
    monacoInstanceRef.current = monaco;

    // Cmd+S / Ctrl+S quick save
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        formData.set("content", editor.getValue());
        if (!formData.get("message")) {
          formData.set("message", `Quick save ${path.split("/").pop()}`);
        }
        submit(formData, { method: "post" });
      }
    });

    // Image paste into Monaco (native paste event)
    editor.getDomNode().addEventListener(
      "paste",
      (e: ClipboardEvent) => {
        const items = e.clipboardData?.items;
        if (!items) return;
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.type.startsWith("image/")) {
            e.preventDefault();
            e.stopPropagation();
            const fileUpload = item.getAsFile();
            if (fileUpload) handleImageFile(fileUpload);
          }
        }
      },
      true,
    );
  };

  const handlePasteOrDrop = (e: React.ClipboardEvent | React.DragEvent) => {
    const items =
      (e as React.ClipboardEvent).clipboardData?.items ??
      (e as React.DragEvent).dataTransfer?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        e.stopPropagation();
        const fileUpload = item.getAsFile();
        if (fileUpload) handleImageFile(fileUpload);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 140px)",
        margin: "-40px -60px",
        background: "var(--bg-sidebar)",
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          padding: "16px 24px",
          background: "var(--bg-body)",
          borderBottom: "1px solid var(--border-color)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            type="button"
            onClick={() =>
              navigate(`/${locale}/${encodeURIComponent(branch)}/${path}`)
            }
            className="btn-ghost px-2 py-1"
            aria-label="Back to document"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <div style={{ fontWeight: 600, fontSize: "1rem" }}>
              Editing {path.split("/").pop()}
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Branch: {branch}
            </div>
          </div>
        </div>
      </div>

      <Form
        method="post"
        ref={formRef}
        style={{ display: "flex", flex: 1, overflow: "hidden" }}
      >
        <input type="hidden" name="csrf_token" value={csrfToken} />

        {/* Editor pane */}
        <div
          onPasteCapture={handlePasteOrDrop}
          onDrop={handlePasteOrDrop}
          onDragOver={(e) => e.preventDefault()}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid var(--border-color)",
            background: "var(--bg-body)",
          }}
        >
          <div
            style={{
              padding: "8px 16px",
              background: "var(--bg-sidebar)",
              borderBottom: "1px solid var(--border-color)",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Code size={16} /> Markdown Source
              <span
                style={{
                  marginLeft: 8,
                  fontSize: "10px",
                  background: "var(--accent-bg)",
                  color: "var(--accent)",
                  padding: "2px 6px",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <ImageIcon size={10} /> Paste/Drop Images
              </span>
            </div>
            <kbd className="kbd" style={{ fontSize: "11px", opacity: 0.7 }}>
              Cmd + S
            </kbd>
          </div>

          {actionData?.error && (
            <div className="bg-red-50 text-red-600 p-2 text-xs font-medium border-b border-red-200">
              Error: {actionData.error}
            </div>
          )}

          <div style={{ flex: 1, position: "relative" }}>
            <Editor
              height="100%"
              language="markdown"
              theme="vs-light"
              value={content}
              onMount={handleEditorDidMount}
              onChange={(val) => setContent(val ?? "")}
              options={{
                minimap: { enabled: false },
                wordWrap: "on",
                fontSize: 14,
                lineNumbers: "on",
                renderLineHighlight: "all",
                padding: { top: 16 },
              }}
            />
            <input type="hidden" name="content" value={content} />
            <input
              type="hidden"
              name="pendingAssets"
              value={JSON.stringify(pendingAssets)}
            />
          </div>
        </div>

        {/* Preview pane */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            background: "var(--bg-body)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "8px 16px",
              background: "var(--bg-sidebar)",
              borderBottom: "1px solid var(--border-color)",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Eye size={16} /> Live Preview{" "}
            {fetcher.state !== "idle" && (
              <span className="text-xs font-normal text-muted-foreground ml-2">
                (Syncing...)
              </span>
            )}
          </div>
          <div
            className="markdown-body"
            style={{ flex: 1, overflowY: "auto", padding: 32 }}
          >
            <MDXRenderer
              htmlAstStr={astPreviewStr}
              locale={locale}
              branch={branch}
            />
          </div>
        </div>

        {/* Commit bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px 24px",
            background: "var(--bg-body)",
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            gap: 16,
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <input
            type="text"
            name="message"
            placeholder="Commit message (e.g. Fixed grammar)"
            className="input flex-1"
          />
          <button type="submit" className="btn px-6 py-2">
            <Save size={18} /> Commit Changes
          </button>
        </div>
      </Form>
    </div>
  );
}
