import React, { useEffect, useState } from "react";

export interface Heading {
  level: number;
  id: string;
  text: string;
}

export function TOC({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="app-toc hidden xl:block w-[220px] shrink-0 sticky top-12 h-[calc(100vh-96px)] border-l border-border pl-6">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">On this page</h4>
      {headings.length > 0 ? (
        <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
          {headings.map((h, i) => (
            <li key={i} style={{ paddingLeft: h.level === 3 ? 12 : 0 }}>
              <a href={`#${h.id}`} className={`toc-link ${activeId === h.id ? "active" : ""}`}>
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[13px] text-muted-foreground">No headings found.</p>
      )}
    </div>
  );
}