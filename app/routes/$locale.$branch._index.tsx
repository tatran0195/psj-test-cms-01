import { useLoaderData, Link } from "react-router";
import {
  BookOpen,
  Search,
  ArrowRight,
  Zap,
  Database,
  GitBranch,
  Terminal,
  Layers,
} from "lucide-react";
import type { LoaderFunctionArgs } from "react-router";
import { validateParams, LocaleSchema, BranchNameSchema } from "../lib/validation.js";

export async function loader({ params }: LoaderFunctionArgs) {
  const branch = validateParams(BranchNameSchema, decodeURIComponent(params.branch as string));
  const locale = validateParams(LocaleSchema, params.locale);
  return {
    branch,
    locale,
    isRelease: process.env.IS_CLIENT_RELEASE === "true",
  };
}

const FEATURE_CARDS = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn how to install and configure the PSJ engine from scratch.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    cta: "Read Intro",
    href: "intro",
  },
  {
    icon: Search,
    title: "Full-text Search",
    description: "Press ⌘K to search across all documentation instantly.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    cta: null,
    href: null,
  },
  {
    icon: GitBranch,
    title: "Git Branching",
    description: "Create draft branches, iterate, and publish with one click.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    cta: null,
    href: null,
  },
  {
    icon: Zap,
    title: "Live Preview",
    description: "Changes appear instantly — no build step required.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    cta: null,
    href: null,
  },
  {
    icon: Database,
    title: "SQLite + FTS5",
    description: "Content-addressable blobs with blazing-fast full-text search.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    cta: null,
    href: null,
  },
  {
    icon: Layers,
    title: "Version History",
    description: "Every commit is tracked — revert to any point in time.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    cta: null,
    href: null,
  },
];

export default function BranchIndex() {
  const { branch, locale, isRelease } = useLoaderData<typeof loader>();

  return (
    <div className="py-12 max-w-3xl mx-auto px-2">
      {/* Hero */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 mb-6">
          <GitBranch size={12} />
          <span className="font-mono">{branch}</span>
          {!isRelease && (
            <span className="ml-1 text-muted-foreground">· editing mode</span>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4 leading-tight">
          PSJ Documentation
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          The complete reference for the Parametric Scripting Journal engine.
          Pick a topic from the sidebar or search with{" "}
          <kbd className="kbd">⌘K</kbd>.
        </p>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {FEATURE_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`group relative flex flex-col p-5 rounded-xl border ${card.border} bg-sidebar hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden`}
            >
              {/* Glow blob */}
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${card.bg} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />
              <div
                className={`relative inline-flex items-center justify-center w-10 h-10 rounded-lg ${card.bg} ${card.border} border mb-4`}
              >
                <Icon size={20} className={card.color} />
              </div>
              <h3 className="relative font-bold text-foreground mb-1.5">{card.title}</h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed flex-1">
                {card.description}
              </p>
              {card.cta && card.href && (
                <Link
                  to={`/${locale}/${encodeURIComponent(branch)}/${card.href}`}
                  className={`relative mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${card.color} hover:underline`}
                >
                  {card.cta}
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick start code block */}
      <div className="rounded-xl border border-border bg-[#0d1117] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 text-xs text-slate-400 font-mono">
          <Terminal size={13} />
          <span>Quick start</span>
        </div>
        <pre className="p-5 text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
          <span className="text-slate-500"># Clone the repo and install</span>
          {"\n"}
          <span className="text-emerald-400">$</span>
          {" git clone https://github.com/your-org/psj-docs\n"}
          <span className="text-emerald-400">$</span>
          {" pnpm install\n\n"}
          <span className="text-slate-500"># Start the dev server</span>
          {"\n"}
          <span className="text-emerald-400">$</span>
          {" pnpm dev"}
        </pre>
      </div>
    </div>
  );
}
