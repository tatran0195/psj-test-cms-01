import React from "react";
import { Command } from "cmdk";
import { Search, FileText, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: any[];
  isLoading: boolean;
  branch: string;
  locale: string;
}

export function SearchCommand({ open, onOpenChange, searchQuery, setSearchQuery, searchResults, isLoading, branch, locale }: SearchCommandProps) {
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div className="cmdk-overlay" onClick={() => onOpenChange(false)}>
      <div className="cmdk-dialog" onClick={(e) => e.stopPropagation()}>
        <Command className="cmdk-root" label="Search Docs" shouldFilter={false}>
          <div className="cmdk-input-wrapper">
            <Search size={18} className="text-muted mr-2" />
            <Command.Input 
              autoFocus 
              className="cmdk-input" 
              placeholder="Search documentation..." 
              value={searchQuery} 
              onValueChange={setSearchQuery} 
            />
            <button className="kbd" onClick={() => onOpenChange(false)}>ESC</button>
          </div>
          <Command.List className="cmdk-list">
            {isLoading && <div className="cmdk-empty">Searching...</div>}
            {searchQuery.length > 1 && searchResults.length === 0 && !isLoading && (
              <Command.Empty className="cmdk-empty">No results found for "{searchQuery}"</Command.Empty>
            )}
            {searchResults.map((res: any, idx: number) => {
              const fm = res.frontmatter ? JSON.parse(res.frontmatter) : { title: "" };
              const cleanPath = res.path.substring(locale.length + 1);
              const anchor = res.heading_id ? `#${res.heading_id}` : "";
              
              return (
                <Command.Item 
                  key={`${res.path}-${idx}`} className="cmdk-item"
                  onSelect={() => { 
                    navigate(`/${locale}/${encodeURIComponent(branch)}/${cleanPath}${anchor}`); 
                    onOpenChange(false); 
                  }}
                >
                  <div className="cmdk-item-title">
                    <FileText size={14} className="text-accent shrink-0" />
                    <span>{fm.title || cleanPath}</span>
                    {res.breadcrumb && (
                      <>
                        <ChevronRight size={12} className="text-muted shrink-0" />
                        <span className="text-[12px] font-normal text-muted-foreground truncate">{res.breadcrumb}</span>
                      </>
                    )}
                  </div>
                  <div className="cmdk-item-snippet" dangerouslySetInnerHTML={{ __html: res.snippet }} />
                </Command.Item>
              )
            })}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}