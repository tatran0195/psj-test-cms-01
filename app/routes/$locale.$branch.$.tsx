import { useLoaderData, Link, useRouteError, isRouteErrorResponse } from "react-router";
import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { getFileHistory, getFile, getBranchHead, getTree } from "../cms.server";
import { motion, AnimatePresence } from "framer-motion";
import type { LoaderFunctionArgs } from "react-router";
import { RevisionHistory } from "../components/RevisionHistory";
import { MDXRenderer } from "../components/mdx/MDXRenderer";
import { DocHeader } from "../components/layout/DocHeader";
import { TOC } from "../components/layout/TOC";
import { ArticlePagination } from "../components/layout/Pagination";
import readingTime from "reading-time";

export function meta({ data }: any) {
  if (!data || !data.file) return [{ title: "Not Found - PSJ Docs" }];
  const fm = data.file.frontmatter ? JSON.parse(data.file.frontmatter) : {};
  const title = fm.title || data.path.split('/').pop();
  return [
    { title: `${title} - PSJ Docs` },
    { name: "description", content: fm.description || `Documentation for ${title}` }
  ];
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <AlertTriangle size={64} className="text-red-500 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Oops! Document Error</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        {isRouteErrorResponse(error) ? "This file could not be found in the current branch." : "There was a syntax error compiling this MDX document."}
      </p>
      <Link to="/" className="btn">Return to Home</Link>
    </div>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const locale = params.locale as string;
  const branchName = decodeURIComponent(params.branch as string);
  const path = `${locale}/${params["*"]}`; // e.g., en/macro/intro.mdx
  const headVersion = getBranchHead(branchName);
  
  const file = getFile(headVersion, path);
  if (!file) throw new Response("Not Found", { status: 404 });

  const isRelease = process.env.IS_CLIENT_RELEASE === "true";
  let history = [];
  if (!isRelease) history = getFileHistory(branchName, path);

  const stats = file.mime_type === "text/markdown" ? readingTime(file.raw_content) : null;

  // Compute Prev / Next Pages
  const tree = getTree(headVersion, locale)
    .filter(t => t.path.endsWith('.md') || t.path.endsWith('.mdx'))
    .map(t => t.path.substring(locale.length + 1));

  const currentIndex = tree.findIndex(t => t === params["*"]);
  
  let prevPage = null;
  if (currentIndex > 0) {
    const prevPath = tree[currentIndex - 1];
    const prevFile = getFile(headVersion, `${locale}/${prevPath}`);
    const fm = prevFile?.frontmatter ? JSON.parse(prevFile.frontmatter) : {};
    prevPage = { path: prevPath, title: fm.title || prevPath.split('/').pop() };
  }
  
  let nextPage = null;
  if (currentIndex !== -1 && currentIndex < tree.length - 1) {
    const nextPath = tree[currentIndex + 1];
    const nextFile = getFile(headVersion, `${locale}/${nextPath}`);
    const fm = nextFile?.frontmatter ? JSON.parse(nextFile.frontmatter) : {};
    nextPage = { path: nextPath, title: fm.title || nextPath.split('/').pop() };
  }

  return { 
    file, 
    path: params["*"] as string, // keep display path clean
    locale,
    branch: branchName, 
    isRelease, 
    isBinary: file.mime_type !== "text/markdown", 
    mimeType: file.mime_type, 
    history,
    stats,
    prevPage,
    nextPage
  };
}

export default function FileView() {
  const { file, path, locale, branch, isRelease, isBinary, mimeType, history, stats, prevPage, nextPage } = useLoaderData<typeof loader>();
  const [showHistory, setShowHistory] = useState(false);

  const frontmatter = file && file.frontmatter ? JSON.parse(file.frontmatter) : {};
  const parsed = file && file.parsed_ast ? JSON.parse(file.parsed_ast) : { hast: null, toc: [] };

  if (isBinary) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-5">📦</div>
        <h2 className="mb-2 text-2xl font-bold">{path}</h2>
        <p className="text-muted-foreground mb-6">This is a binary asset ({mimeType}).</p>
        <a href={`/${locale}/${encodeURIComponent(branch)}/assets/${path}`} target="_blank" rel="noreferrer" className="btn">View Raw File</a>
      </div>
    );
  }
  
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="flex flex-col xl:flex-row gap-10 items-start mx-[-48px] px-8 md:px-12">
      <div className="flex-1 min-w-0 w-full">
        
        <DocHeader 
          path={path}
          branch={branch}
          locale={locale}
          title={frontmatter.title || path.split('/').pop()}
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

        <MDXRenderer htmlAstStr={file.parsed_ast} />
        
        <ArticlePagination prev={prevPage} next={nextPage} locale={locale} branch={branch} />

      </div>

      <TOC headings={parsed.toc || []} />
    </motion.div>
  );
}