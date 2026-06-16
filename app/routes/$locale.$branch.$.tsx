import {
  useLoaderData,
  Link,
  useRouteError,
  isRouteErrorResponse,
} from "react-router";
import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { getFileHistory, getFileWithFallback, getAdjacentFiles } from "../cms.server";
import { motion, AnimatePresence } from "framer-motion";
import type { LoaderFunctionArgs } from "react-router";
import { RevisionHistory } from "../components/RevisionHistory";
import { MDXRenderer } from "../components/mdx/MDXRenderer";
import { DocHeader } from "../components/layout/DocHeader";
import { TOC } from "../components/layout/TOC";
import { ArticlePagination } from "../components/layout/Pagination";
import readingTime from "reading-time";
import {
  validateParams,
  LocaleSchema,
  BranchNameSchema,
  FilePathSchema,
} from "../lib/validation.js";
import filterXSS from "xss";

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

export function meta({ data }: any) {
  if (!data?.file) return [{ title: "Not Found - PSJ Docs" }];
  const fm = data.file.frontmatter ? JSON.parse(data.file.frontmatter) : {};
  const title = fm.title ?? data.path.split("/").pop();
  return [
    { title: `${title} - PSJ Docs` },
    { name: "description", content: fm.description ?? `Documentation for ${title}` },
    { property: "og:title", content: title },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary" },
  ];
}

// ---------------------------------------------------------------------------
// Error boundary
// ---------------------------------------------------------------------------

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <AlertTriangle size={64} className="text-red-500 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Oops! Document Error</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        {isRouteErrorResponse(error)
          ? "This file could not be found in the current branch."
          : "There was a syntax error compiling this MDX document."}
      </p>
      <Link to="/" className="btn">
        Return to Home
      </Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HAST sanitisation (run at read time as defence-in-depth)
// ---------------------------------------------------------------------------

function sanitizeHast(node: any): void {
  if (!node || typeof node !== "object") return;
  if (node.type === "raw" && typeof node.value === "string") {
    node.value = filterXSS(node.value, {
      whiteList: {},
      stripIgnoreTag: true,
      stripIgnoreTagBody: ["script"],
    });
  }
  if (node.properties?.dataDangerousHtml) {
    delete node.properties.dataDangerousHtml;
  }
  if (Array.isArray(node.children)) {
    node.children.forEach(sanitizeHast);
  }
}

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export async function loader({ params }: LoaderFunctionArgs) {
  const locale = validateParams(LocaleSchema, params.locale);
  const branchName = validateParams(
    BranchNameSchema,
    decodeURIComponent(params.branch as string),
  );
  const filePath = `${locale}/${params["*"]}`;
  validateParams(FilePathSchema, params["*"]);

  const result = getFileWithFallback(branchName, filePath);
  if (!result) throw new Response("Not Found", { status: 404 });
  const { file, sourceBranch } = result;

  const isRelease = process.env.IS_CLIENT_RELEASE === "true";
  const history = isRelease ? [] : getFileHistory(branchName, filePath);

  const stats =
    file.mime_type === "text/markdown" ? readingTime(file.raw_content) : null;

  // O(1) SQL keyset query — replaces the O(n) JS getTree().findIndex() pattern
  const { prev: prevPage, next: nextPage } = getAdjacentFiles(
    branchName,
    locale,
    filePath,
  );

  // Sanitize HAST before sending to client
  let sanitizedAst = file.parsed_ast;
  if (file.parsed_ast) {
    try {
      const ast = JSON.parse(file.parsed_ast);
      if (ast.hast) sanitizeHast(ast.hast);
      sanitizedAst = JSON.stringify(ast);
    } catch {
      sanitizedAst = file.parsed_ast;
    }
  }

  // Resolve page titles from frontmatter for prev/next links
  function resolvePageTitle(
    page: { path: string; frontmatter: string | null } | null,
  ): { path: string; title: string } | null {
    if (!page) return null;
    try {
      const fm = page.frontmatter ? JSON.parse(page.frontmatter) : {};
      return { path: page.path, title: fm.title ?? page.path.split("/").pop() };
    } catch {
      return { path: page.path, title: page.path.split("/").pop() ?? page.path };
    }
  }

  return {
    file: { ...file, parsed_ast: sanitizedAst },
    path: params["*"] as string,
    locale,
    branch: branchName,
    sourceBranch,
    isRelease,
    isBinary: file.mime_type !== "text/markdown",
    mimeType: file.mime_type,
    history,
    stats,
    prevPage: resolvePageTitle(prevPage),
    nextPage: resolvePageTitle(nextPage),
  };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function FileView() {
  const {
    file,
    path,
    locale,
    branch,
    sourceBranch,
    isRelease,
    isBinary,
    mimeType,
    history,
    stats,
    prevPage,
    nextPage,
  } = useLoaderData<typeof loader>();
  const [showHistory, setShowHistory] = useState(false);

  const handleCopyClick = (e: React.MouseEvent) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".copy-btn");
    if (!btn) return;
    e.preventDefault();
    const figure = btn.closest("figure");
    const code = figure?.querySelector("code");
    if (!code) return;
    navigator.clipboard.writeText(code.innerText);
    const originalSvg = btn.innerHTML;
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    setTimeout(() => {
      btn.innerHTML = originalSvg;
    }, 2000);
  };

  const frontmatter = file?.frontmatter ? JSON.parse(file.frontmatter) : {};
  const parsed = file?.parsed_ast
    ? JSON.parse(file.parsed_ast)
    : { hast: null, toc: [] };

  if (isBinary) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-5">📦</div>
        <h2 className="mb-2 text-2xl font-bold">{path}</h2>
        <p className="text-muted-foreground mb-6">
          This is a binary asset ({mimeType}).
        </p>
        <a
          href={`/${locale}/${encodeURIComponent(branch)}/assets/${path}`}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          View Raw File
        </a>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col xl:flex-row gap-10 items-start mx-[-48px] px-8 md:px-12"
    >
      <div className="flex-1 min-w-0 w-full">
        {sourceBranch !== branch && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              marginBottom: 16,
              borderRadius: 8,
              background: "rgba(234,179,8,0.08)",
              border: "1px solid rgba(234,179,8,0.3)",
              fontSize: "0.8rem",
              color: "#a16207",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            This file doesn&apos;t exist on{" "}
            <strong style={{ fontWeight: 600 }}>{branch}</strong>{" "}
            yet — showing inherited content from{" "}
            <a
              href={`/${locale}/${encodeURIComponent(sourceBranch)}/${path}`}
              style={{ fontWeight: 600, textDecoration: "underline", color: "inherit" }}
            >
              {sourceBranch}
            </a>.
          </div>
        )}

        <DocHeader
          path={path}
          branch={branch}
          locale={locale}
          title={frontmatter.title ?? path.split("/").pop()}
          description={frontmatter.description}
          isRelease={isRelease}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          stats={stats}
          lastUpdate={history.length > 0 ? history[0] : null}
          prevPage={prevPage}
          nextPage={nextPage}
        />

        <AnimatePresence>
          {showHistory && <RevisionHistory history={history} />}
        </AnimatePresence>

        {/* biome-ignore lint/a11y/useKeyWithClickEvents: copy button is inside rendered content */}
        <div onClick={handleCopyClick}>
          <MDXRenderer
            htmlAstStr={file.parsed_ast}
            locale={locale}
            branch={branch}
          />
        </div>

        <ArticlePagination
          prev={prevPage}
          next={nextPage}
          locale={locale}
          branch={branch}
        />
      </div>

      <TOC headings={parsed.toc ?? []} />
    </motion.div>
  );
}
