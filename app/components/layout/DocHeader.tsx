import React from "react";
import { Link } from "react-router";
import { Edit3, Clock, Calendar, BookOpen } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { MiniPagination } from "./Pagination";

interface DocHeaderProps {
  path: string;
  branch: string;
  locale: string;
  title: string;
  description?: string;
  isRelease: boolean;
  showHistory: boolean;
  setShowHistory: (val: boolean) => void;
  stats?: any;
  lastUpdate?: any;
  prevPage?: any;
  nextPage?: any;
}

export function DocHeader({ path, branch, locale, title, description, isRelease, showHistory, setShowHistory, stats, lastUpdate, prevPage, nextPage }: DocHeaderProps) {
  return (
    <div className="mb-8 border-b border-border pb-8">
      {/* Top Actions Row */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="text-accent text-[13px] font-semibold flex items-center gap-2 flex-wrap">
          {path.split('/').map((p, i, arr) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-muted-foreground">/</span>}
              <span className={i === arr.length - 1 ? "text-foreground" : "inherit"}>{p}</span>
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-1 shrink-0">
          {!isRelease && (
            <>
              <button onClick={() => setShowHistory(!showHistory)} className={`btn-ghost p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-border/50 ${showHistory ? 'bg-sidebar text-foreground' : ''}`} title="Revision History">
                <Clock size={16} />
              </button>
              <Link to={`/${locale}/${encodeURIComponent(branch)}/edit/${path}`} className="btn-ghost p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-border/50" title="Edit this page">
                <Edit3 size={16} />
              </Link>
            </>
          )}
          <div className="w-[1px] h-4 bg-border mx-1" />
          {/* Mini Pagination Buttons */}
          <MiniPagination prev={prevPage} next={nextPage} locale={locale} branch={branch} />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-foreground m-0 mb-4 tracking-tight break-words">
        {title}
      </h1>
      
      {description && (
        <p className="text-base md:text-lg text-secondary-foreground m-0 mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {/* Semantic Metadata Row */}
      <div className="flex items-center gap-6 text-[13px] text-muted-foreground">
        {stats && (
          <div className="flex items-center gap-1.5" title={`${stats.words} words`}>
            <BookOpen size={14} /> {Math.ceil(stats.minutes)} min read
          </div>
        )}
        {lastUpdate && (
          <div className="flex items-center gap-1.5" title={new Date(lastUpdate.created_at).toLocaleString()}>
            <Calendar size={14} /> Last updated {formatDistanceToNow(new Date(lastUpdate.created_at), { addSuffix: true })} by {lastUpdate.author}
          </div>
        )}
      </div>
    </div>
  );
}