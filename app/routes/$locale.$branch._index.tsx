import { useLoaderData, Link } from "react-router";
import { BookOpen, Search, ArrowRight, Zap, Database } from "lucide-react";
import type { LoaderFunctionArgs } from "react-router";
import { validateParams, LocaleSchema, BranchNameSchema } from "../lib/validation.js";

export async function loader({ params }: LoaderFunctionArgs) {
  const branch = validateParams(BranchNameSchema, decodeURIComponent(params.branch as string));
  const locale = validateParams(LocaleSchema, params.locale);
  return {
    branch,
    locale,
    isRelease: process.env.IS_CLIENT_RELEASE === "true"
  };
}

export default function BranchIndex() {
  const { branch, locale, isRelease } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">
        Welcome to PSJ Documentation
      </h1>
      <p className="text-lg text-muted-foreground mb-10">
        You are currently viewing the <strong className="text-foreground">{branch}</strong> branch in <strong className="text-foreground">{locale}</strong>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div className="card p-6 hover:shadow-md transition-all">
          <BookOpen className="mb-3 text-accent" size={28} />
          <h3 className="font-semibold mb-1">Getting Started</h3>
          <p className="text-sm text-muted-foreground mb-4">Learn how to install and configure the Parametric Scripting Journal engine.</p>
          <Link to={`/${locale}/${encodeURIComponent(branch)}/intro`} className="btn-outline w-full text-sm inline-flex items-center justify-center gap-2">
            Read Intro <ArrowRight size={14} />
          </Link>
        </div>

        <div className="card p-6 hover:shadow-md transition-all">
          <Search className="mb-3 text-accent" size={28} />
          <h3 className="font-semibold mb-1">Looking for something?</h3>
          <p className="text-sm text-muted-foreground mb-4">Press <kbd className="kbd">Cmd + K</kbd> to search anywhere.</p>
        </div>

        <div className="card p-6 hover:shadow-md transition-all">
          <Zap className="mb-3 text-accent" size={28} />
          <h3 className="font-semibold mb-1">Versioning</h3>
          <p className="text-sm text-muted-foreground mb-4">Git-like immutable history with flattened tree entries.</p>
        </div>

        <div className="card p-6 hover:shadow-md transition-all">
          <Database className="mb-3 text-accent" size={28} />
          <h3 className="font-semibold mb-1">Storage</h3>
          <p className="text-sm text-muted-foreground mb-4">Content-addressable blobs + SQLite FTS5 search.</p>
        </div>
      </div>
    </div>
  );
}
