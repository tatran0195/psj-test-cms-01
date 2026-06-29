import { redirect } from "react-router";
import { getBranches } from "../cms.server";
import { Database, GitBranch, Loader2 } from "lucide-react";

export async function loader({ request }: import("react-router").LoaderFunctionArgs) {
  const branches = getBranches();
  if (branches.length > 0) {
    // Prefer a published branch for the initial redirect; fall back to the
    // first branch (which will trigger the auth redirect if it's a draft).
    const published = branches.find((b: any) => !b.is_draft) ?? branches[0];
    throw redirect(`/en/${encodeURIComponent(published.name)}`);
  }
  return { branches };
}

export default function Index() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Animated logo mark */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 mb-8 mx-auto">
          <Database size={36} className="text-accent" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent" />
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-foreground tracking-tight mb-3">
          Initializing CMS
        </h1>
        <p className="text-base text-muted-foreground mb-8 leading-relaxed">
          The documentation database is empty. Sync a GitHub repository or create a new branch to get started.
        </p>

        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sidebar border border-border text-muted-foreground">
            <Loader2 size={16} className="animate-spin text-accent shrink-0" />
            <span>Waiting for branch data…</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sidebar border border-border text-muted-foreground opacity-50">
            <GitBranch size={16} className="shrink-0" />
            <span>No branches found in the database</span>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Trigger a GitHub webhook or run{" "}
          <code className="font-mono bg-sidebar border border-border px-1.5 py-0.5 rounded">
            pnpm sync
          </code>{" "}
          to populate content.
        </p>
      </div>
    </div>
  );
}
