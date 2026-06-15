import { Outlet, useLoaderData, useLocation, useFetcher, redirect } from "react-router";
import { useState, useEffect, useMemo } from "react";
import { getTree, getBranches, search, getBranchHead, createBranch, deleteBranch } from "../cms.server";
import { getUser } from "../session.server";
import { Sidebar } from "../components/layout/Sidebar";
import { SearchCommand } from "../components/layout/SearchCommand";
import { Topbar } from "../components/layout/Topbar";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

export async function action({ request, params }: ActionFunctionArgs) {
  if (process.env.IS_CLIENT_RELEASE === "true") throw new Response("Read Only", { status: 403 });
  const formData = await request.formData();
  if (formData.get("_action") === "createBranch") {
    const newBranch = formData.get("newBranch") as string;
    createBranch(newBranch, decodeURIComponent(params.branch as string));
    return redirect(`/${params.locale}/${encodeURIComponent(newBranch)}`);
  }
  
  if (formData.get("_action") === "deleteBranch") {
    const branchToDelete = formData.get("branchToDelete") as string;
    deleteBranch(branchToDelete);
    return redirect(`/${params.locale}/main`);
  }
  return null;
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  const locale = params.locale as string;
  const branchName = decodeURIComponent(params.branch as string);
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  
  const headVersion = getBranchHead(branchName);
  if (!headVersion) throw new Response("Branch Not Found", { status: 404 });
  
  if (q !== null) return { searchResults: q ? search(branchName, locale, q) : [] };

  const branches = getBranches();
  const treeList = getTree(branchName, locale);
  const user = await getUser(request);
  const isRelease = process.env.IS_CLIENT_RELEASE === "true";

  // Build nested JSON Tree, stripping locale prefix for the UI
  const treeRoot: any = { name: "root", children: {}, path: "" };
  treeList.forEach((item: any) => {
    // Remove "en/" or "ja/" from the start
    const relPath = item.path.substring(locale.length + 1);
    const parts = relPath.split('/');
    let current = treeRoot;
    parts.forEach((part: string, i: number) => {
      if (!current.children[part]) {
        current.children[part] = {
          name: part, 
          isFile: i === parts.length - 1, 
          path: current.path ? `${current.path}/${part}` : part, 
          children: {}
        };
      }
      current = current.children[part];
    });
  });

  return { locale, branch: branchName, branches, treeRoot, user, isRelease };
}

export default function BranchLayout() {
  const { locale, branch, branches, treeRoot, user, isRelease } = useLoaderData<typeof loader>();
  const location = useLocation();
  const fetcher = useFetcher<any>();
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Safely extract the current path without locale and branch
  const matchRegex = new RegExp(`^/${locale}/[^/]+/(edit/|assets/)?(.+)$`);
  const currentPathMatch = location.pathname.match(matchRegex);
  const currentPath = currentPathMatch ? currentPathMatch[2] : '';

  const flatTreeList = useMemo(() => {
    const list: any[] = [];
    const traverse = (node: any) => {
      if (node.isFile) {
        list.push({ title: node.name, path: `${locale}/${node.path}`, snippet: "Matched from document title (Fuzzy search)" });
      }
      Object.values(node.children || {}).forEach(traverse);
    };
    traverse(treeRoot);
    return list;
  }, [treeRoot, locale]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setSearchOpen((o) => !o); }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) fetcher.load(`/${locale}/${encodeURIComponent(branch)}?q=${searchQuery}`);
  }, [searchQuery, branch, locale]);

  return (
    <div className="app-layout">
      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />
      
      <Sidebar 
        locale={locale} branch={branch} branches={branches} treeRoot={treeRoot} 
        currentPath={currentPath} isRelease={isRelease} user={user}
        sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} 
        setSearchOpen={setSearchOpen} 
      />
      
      <div className="app-main-wrapper">
        <Topbar setSidebarOpen={setSidebarOpen} locale={locale} branch={branch} user={user} isRelease={isRelease} />
        
        <main className="app-main" id="scroll-container">
          <div className="content-container">
            <Outlet />
          </div>
        </main>
      </div>

      <SearchCommand 
        open={searchOpen} onOpenChange={setSearchOpen} 
        searchQuery={searchQuery} setSearchQuery={setSearchQuery} 
        searchResults={fetcher.data?.searchResults || []} 
        isLoading={fetcher.state === "loading"} 
        locale={locale} branch={branch}
        treeList={flatTreeList}
      />
    </div>
  );
}