import { useLoaderData, Link } from "react-router";
import { BookOpen, Search, ArrowRight, Zap, Database } from "lucide-react";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ params }: LoaderFunctionArgs) {
  return { 
    branch: decodeURIComponent(params.branch as string), 
    locale: params.locale, 
    isRelease: process.env.IS_CLIENT_RELEASE === "true" 
  };
}

export default function BranchIndex() {
  const { branch, locale, isRelease } = useLoaderData<typeof loader>();
  
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ display: "inline-flex", padding: 12, background: "var(--accent-bg)", borderRadius: 16, marginBottom: 24 }}>
          <BookOpen size={48} color="var(--accent)" />
        </div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--text-heading)", margin: "0 0 12px 0", letterSpacing: "-0.02em" }}>
          Welcome to PSJ Documentation
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", margin: 0 }}>
          You are currently viewing the <strong style={{ color: "var(--text-heading)" }}>{branch}</strong> branch in <strong className="uppercase">{locale}</strong>.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ border: "1px solid var(--border-color)", padding: 24, borderRadius: 12, background: "var(--bg-body)" }}>
          <Zap size={20} color="var(--accent)" style={{ marginBottom: 12 }} />
          <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", color: "var(--text-heading)" }}>Getting Started</h3>
          <p style={{ fontSize: "14px", color: "var(--text-secondary)", margin: "0 0 16px 0", lineHeight: 1.5 }}>
            Learn how to install and configure the Parametric Scripting Journal engine.
          </p>
          <Link to={`/${locale}/${encodeURIComponent(branch)}/index.mdx`} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "13px", fontWeight: 600 }}>
            Read Intro <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div style={{ marginTop: 48, padding: 24, background: "var(--bg-sidebar)", borderRadius: 12, border: "1px solid var(--border-color)", textAlign: "center" }}>
        <Search size={24} color="var(--text-muted)" style={{ margin: "0 auto 12px" }} />
        <h3 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>Looking for something?</h3>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", margin: 0 }}>
          Press <kbd style={{ padding: "2px 6px", background: "var(--bg-body)", border: "1px solid var(--border-color)", borderRadius: 4, fontSize: "12px" }}>Cmd + K</kbd> to search anywhere.
        </p>
      </div>
    </div>
  );
}