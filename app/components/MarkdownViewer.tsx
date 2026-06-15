import React, { useEffect, useState } from "react";

interface Heading {
  level: number;
  id: string;
  text: string;
}

interface MarkdownViewerProps {
  html: string;
  headings: Heading[];
}

export function MarkdownViewer({ html, headings }: MarkdownViewerProps) {
  const [activeId, setActiveId] = useState("");

  // TOC Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id); });
    }, { rootMargin: "0px 0px -80% 0px" });

    headings.forEach((h: any) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings, html]);

  // Clean React Event Delegation for Copy Buttons
  const handleCopyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const btn = target.closest('.copy-btn') as HTMLButtonElement;
    if (!btn) return;
    
    const pre = btn.closest('figure')?.querySelector('pre');
    const code = pre?.innerText || "";
    navigator.clipboard.writeText(code);
    
    const originalSvg = btn.innerHTML;
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    btn.style.borderColor = "rgba(34,197,94,0.3)";
    btn.style.background = "rgba(34,197,94,0.1)";
    
    setTimeout(() => {
      btn.innerHTML = originalSvg;
      btn.style.borderColor = "";
      btn.style.background = "";
    }, 2000);
  };

  return (
    <>
      <div className="flex-1 min-w-0">
        <div 
          className="markdown-body" 
          onClick={handleCopyClick}
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      </div>

      <div className="app-toc w-[220px] shrink-0 sticky top-12 h-[calc(100vh-96px)] border-l border-border pl-6">
        <h4>On this page</h4>
        {headings.length > 0 ? (
          <ul>
            {headings.map((h: any, i: number) => (
              <li key={i} style={{ paddingLeft: h.level === 3 ? 12 : 0 }}>
                <a href={`#${h.id}`} className={`toc-link ${activeId === h.id ? "active" : ""}`}>{h.text}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[13px] text-muted-foreground">No headings found.</p>
        )}
      </div>
    </>
  );
}