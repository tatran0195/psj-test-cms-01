/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
import {
  Outlet,
  useLoaderData,
  useLocation,
  useFetcher,
  useNavigate,
  redirect,
} from "react-router";
import { useState, useEffect, useMemo } from "react";
import {
  getTree,
  getBranches,
  search,
  getBranchHead,
  isBranchDraft,
  createBranch,
  deleteBranch,
  publishBranch,
  commitChanges,
} from "../cms.server";
import {
  getUser,
  requireUser,
  requireAdmin,
  getOrInitCsrfToken,
  commitSession,
  getSession,
  rotateCsrfToken,
} from "../session.server";
import { pushToGitHub } from "../github.server";
import { Sidebar } from "../components/layout/Sidebar";
import { SearchCommand } from "../components/layout/SearchCommand";
import { Topbar } from "../components/layout/Topbar";
import {
  validateParams,
  CreateBranchSchema,
  DeleteBranchSchema,
  PublishBranchSchema,
  CreateFileSchema,
  DeleteFileSchema,
  SearchQuerySchema,
  LocaleSchema,
  BranchNameSchema,
} from "../lib/validation.js";
import { logger } from "../lib/logger.js";
import { checkRateLimit, ACTION_RATE_LIMIT } from "../lib/rate-limit.server.js";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

// ---------------------------------------------------------------------------
// Action
// ---------------------------------------------------------------------------

export async function action({ request, params }: ActionFunctionArgs) {
  if (process.env.IS_CLIENT_RELEASE === "true") {
    throw new Response("Read Only", { status: 403 });
  }

  const clientIp = request.headers.get("x-forwarded-for") ?? "unknown";
  if (!checkRateLimit(clientIp, ACTION_RATE_LIMIT)) {
    throw new Response("Rate limit exceeded. Try again in a minute.", { status: 429 });
  }

  const locale = validateParams(LocaleSchema, params.locale);
  const branchParam = validateParams(
    BranchNameSchema,
    decodeURIComponent(params.branch as string),
  );

  const formData = await request.formData();
  const raw = Object.fromEntries(formData);
  const actionType = raw._action as string;

  // CSRF: compare the submitted token against the session token
  const session = await getSession(request.headers.get("Cookie"));
  const csrfToken = formData.get("csrf_token") as string;
  if (!csrfToken || csrfToken !== session.get("csrf_token")) {
    throw new Response("Invalid or missing CSRF token", { status: 403 });
  }

  // Rotate token after passing validation so subsequent requests get a fresh one
  const { setCookie: newCsrfCookie } = await rotateCsrfToken(request);

  if (actionType === "createBranch") {
    const data = validateParams(CreateBranchSchema, raw);
    await requireUser(request);
    createBranch(data.newBranch, branchParam);
    logger.info(
      { action: "createBranch", branch: data.newBranch, from: branchParam, ip: clientIp },
      "Branch created",
    );
    return redirect(`/${locale}/${encodeURIComponent(data.newBranch)}`, {
      headers: { "Set-Cookie": newCsrfCookie },
    });
  }

  if (actionType === "deleteBranch") {
    const data = validateParams(DeleteBranchSchema, raw);
    await requireAdmin(request);
    deleteBranch(data.branchToDelete);
    logger.info(
      { action: "deleteBranch", branch: data.branchToDelete, ip: clientIp },
      "Branch deleted",
    );
    return redirect(`/${locale}/main`, {
      headers: { "Set-Cookie": newCsrfCookie },
    });
  }

  if (actionType === "publishBranch") {
    const data = validateParams(PublishBranchSchema, raw);
    const user = await requireUser(request);
    const result = await publishBranch(
      data.branchToPublish,
      user.username,
      data.releaseMessage,
    );
    logger.info(
      {
        action: "publishBranch",
        branch: data.branchToPublish,
        squashCommitId: result.squashCommitId,
        filesChanged: result.filesChanged,
        ip: clientIp,
      },
      "Branch published",
    );
    return redirect(`/${locale}/${encodeURIComponent(data.branchToPublish)}`, {
      headers: { "Set-Cookie": newCsrfCookie },
    });
  }

  if (actionType === "createFile") {
    const data = validateParams(CreateFileSchema, raw);
    const user = await requireUser(request);
    const fullPath = `${locale}/${data.path}`;
    const initialContent = `# ${data.path.split("/").pop()?.replace(".md", "")}\n\nStart writing...`;
    const changedFiles = [{ path: fullPath, content: initialContent, mime_type: "text/markdown" }];

    // SQLite commit first — GitHub push is best-effort / async
    await commitChanges({
      branch: branchParam,
      author: user.username,
      message: `Create ${fullPath}`,
      changedFiles,
      deletedFiles: [],
      clientIp,
      userAgent: request.headers.get("user-agent"),
    });

    if (user.token && process.env.GITHUB_REPO) {
      pushToGitHub(
        user.token,
        process.env.GITHUB_REPO,
        branchParam,
        `Create ${fullPath}`,
        changedFiles,
      ).catch((e: unknown) =>
        logger.error({ err: e, user: user.username }, "GitHub push failed during createFile"),
      );
    }

    logger.info(
      { action: "createFile", path: fullPath, user: user.username, ip: clientIp },
      "File created",
    );
    return redirect(
      `/${locale}/${encodeURIComponent(branchParam)}/edit/${data.path}`,
      { headers: { "Set-Cookie": newCsrfCookie } },
    );
  }

  if (actionType === "deleteFile") {
    const data = validateParams(DeleteFileSchema, raw);
    const user = await requireUser(request);
    const fullPath = `${locale}/${data.path}`;

    // SQLite commit first — GitHub push is best-effort / async
    await commitChanges({
      branch: branchParam,
      author: user.username,
      message: `Delete ${fullPath}`,
      changedFiles: [],
      deletedFiles: [fullPath],
      clientIp,
      userAgent: request.headers.get("user-agent"),
    });

    if (user.token && process.env.GITHUB_REPO) {
      pushToGitHub(
        user.token,
        process.env.GITHUB_REPO,
        branchParam,
        `Delete ${fullPath}`,
        [],
        [fullPath],
      ).catch((e: unknown) =>
        logger.error({ err: e, user: user.username }, "GitHub push failed during deleteFile"),
      );
    }

    logger.info(
      { action: "deleteFile", path: fullPath, user: user.username, ip: clientIp },
      "File deleted",
    );
    return redirect(`/${locale}/${encodeURIComponent(branchParam)}`, {
      headers: { "Set-Cookie": newCsrfCookie },
    });
  }

  return null;
}

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export interface BranchLoaderData {
  locale: string;
  branch: string;
  branches: any[];
  treeRoot: any;
  user: any;
  isRelease: boolean;
  isDraft: boolean;
  csrfToken: string;
  searchResults?: any[];
}

export async function loader({
  params,
  request,
}: LoaderFunctionArgs): Promise<BranchLoaderData> {
  const locale = validateParams(LocaleSchema, params.locale);
  const branchName = validateParams(
    BranchNameSchema,
    decodeURIComponent(params.branch as string),
  );
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  const headVersion = getBranchHead(branchName);
  if (!headVersion) throw new Response("Branch Not Found", { status: 404 });

  const user = await getUser(request);
  const isDraft = isBranchDraft(branchName);

  // Draft branches require authentication — redirect to login instead of 404
  // so users aren't permanently locked out when all branches are drafts.
  if (isDraft && !user) {
    const returnTo = new URL(request.url).pathname;
    throw redirect(`/auth/github?returnTo=${encodeURIComponent(returnTo)}`);
  }

  if (q !== null) {
    const validated = validateParams(SearchQuerySchema, { q });
    const results = validated.q ? search(branchName, locale, validated.q) : [];
    return Response.json({ searchResults: results }, {
      headers: { "Cache-Control": "public, max-age=30" },
    }) as unknown as BranchLoaderData;
  }

  const branches = getBranches();
  // Anonymous users only see published (non-draft) branches in the switcher
  const visibleBranches = user ? branches : branches.filter((b: any) => !b.is_draft);
  const treeList = getTree(branchName, locale);
  const isRelease = process.env.IS_CLIENT_RELEASE === "true";

  // Lazy CSRF init: read existing token from session; generate only if absent.
  // This avoids invalidating tokens in concurrent tabs.
  const { csrfToken, session, needsCommit } = await getOrInitCsrfToken(request);

  // Build tree from flat list — O(n) but unavoidable for sidebar rendering
  const treeRoot: any = { name: "root", children: {}, path: "" };
  for (const item of treeList) {
    const relPath = item.path.substring(locale.length + 1);
    const parts = relPath.split("/");
    let current = treeRoot;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!current.children[part]) {
        current.children[part] = {
          name: part,
          isFile: i === parts.length - 1,
          path: current.path ? `${current.path}/${part}` : part,
          children: {},
        };
      }
      current = current.children[part];
    }
  }

  const data: BranchLoaderData = {
    locale,
    branch: branchName,
    branches: visibleBranches,
    treeRoot,
    user,
    isRelease,
    isDraft,
    csrfToken,
  };

  // Only commit the session when we just initialised the token
  const headers = needsCommit
    ? { "Set-Cookie": await commitSession(session) }
    : undefined;

  return Response.json(data, { headers }) as unknown as BranchLoaderData;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function BranchLayout() {
  const { locale, branch, branches, treeRoot, user, isRelease, isDraft, csrfToken } =
    useLoaderData<BranchLoaderData>();
  const location = useLocation();
  const navigate = useNavigate();
  const fetcher = useFetcher<any>();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const matchRegex = new RegExp(`^/${locale}/[^/]+/(edit/|assets/)?(.+)$`);
  const currentPathMatch = location.pathname.match(matchRegex);
  const currentPath = currentPathMatch ? currentPathMatch[2] : "";

  const flatTreeList = useMemo(() => {
    const list: any[] = [];
    const traverse = (node: any) => {
      if (node.isFile) {
        list.push({
          title: node.name,
          path: `${locale}/${node.path}`,
          snippet: "Matched from document title (Fuzzy search)",
        });
      }
      Object.values(node.children ?? {}).forEach(traverse);
    };
    traverse(treeRoot);
    return list;
  }, [treeRoot, locale]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (searchQuery.length > 1) {
      fetcher.load(
        `/${locale}/${encodeURIComponent(branch)}?q=${encodeURIComponent(searchQuery)}`,
      );
    }
  }, [searchQuery, branch, locale]);

  // Branch switcher: use React Router navigation instead of full-page reload
  const handleBranchChange = (val: string) => {
    navigate(`/${locale}/${encodeURIComponent(val)}`);
  };

  // Locale switcher: preserve current path
  const handleLocaleChange = (val: string) => {
    navigate(`/${val}/${encodeURIComponent(branch)}/${currentPath}`);
  };

  return (
    <div className="app-layout">
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <Sidebar
        locale={locale}
        branch={branch}
        branches={branches}
        treeRoot={treeRoot}
        currentPath={currentPath}
        isRelease={isRelease}
        isDraft={isDraft}
        user={user}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setSearchOpen={setSearchOpen}
        onBranchChange={handleBranchChange}
        onLocaleChange={handleLocaleChange}
        csrfToken={csrfToken}
      />
      <div className="app-main-wrapper">
        <Topbar
          setSidebarOpen={setSidebarOpen}
          locale={locale}
          branch={branch}
          user={user}
          isRelease={isRelease}
        />
        <main className="app-main" id="scroll-container">
          <div className="content-container">
            <Outlet context={{ csrfToken }} />
          </div>
        </main>
      </div>
      <SearchCommand
        open={searchOpen}
        onOpenChange={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={fetcher.data?.searchResults ?? []}
        isLoading={fetcher.state === "loading"}
        locale={locale}
        branch={branch}
        treeList={flatTreeList}
      />
    </div>
  );
}
