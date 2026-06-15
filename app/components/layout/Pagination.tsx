import React from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

interface PageInfo {
  path: string;
  title: string;
}

interface PaginationProps {
  prev: PageInfo | null;
  next: PageInfo | null;
  locale: string;
  branch: string;
}

export function MiniPagination({ prev, next, locale, branch }: PaginationProps) {
  return (
    <div className="flex items-center gap-1">
      {prev ? (
        <Link 
          to={`/${locale}/${encodeURIComponent(branch)}/${prev.path}`}
          className="btn-ghost p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-border/50 hover:shadow-sm transition-all"
          title={`Previous: ${prev.title}`}
        >
          <ChevronLeft size={18} />
        </Link>
      ) : (
        <div className="p-1.5 text-muted-foreground/30"><ChevronLeft size={18} /></div>
      )}
      {next ? (
        <Link 
          to={`/${locale}/${encodeURIComponent(branch)}/${next.path}`}
          className="btn-ghost p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-border/50 hover:shadow-sm transition-all"
          title={`Next: ${next.title}`}
        >
          <ChevronRight size={18} />
        </Link>
      ) : (
        <div className="p-1.5 text-muted-foreground/30"><ChevronRight size={18} /></div>
      )}
    </div>
  );
}

export function ArticlePagination({ prev, next, locale, branch }: PaginationProps) {
  if (!prev && !next) return null;

  return (
    <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-6 justify-between items-stretch">
      {prev ? (
        <Link 
          to={`/${locale}/${encodeURIComponent(branch)}/${prev.path}`}
          className="flex-1 group relative overflow-hidden flex flex-col items-start p-6 rounded-2xl border border-border bg-gradient-to-br from-sidebar to-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 text-[11px] tracking-widest uppercase font-bold text-muted-foreground mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" /> 
            Previous Article
          </div>
          <div className="relative z-10 text-xl font-extrabold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {prev.title}
          </div>
        </Link>
      ) : <div className="flex-1" />}

      {next ? (
        <Link 
          to={`/${locale}/${encodeURIComponent(branch)}/${next.path}`}
          className="flex-1 group relative overflow-hidden flex flex-col items-end text-right p-6 rounded-2xl border border-border bg-gradient-to-bl from-sidebar to-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 text-[11px] tracking-widest uppercase font-bold text-muted-foreground mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
            Next Article
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          <div className="relative z-10 text-xl font-extrabold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {next.title}
          </div>
        </Link>
      ) : <div className="flex-1" />}
    </div>
  );
}
