import React from "react";
import { Command } from "cmdk";
import { Search, FileText, ChevronRight, GitBranch, Loader2, Hash, ArrowUp, ArrowDown, CornerDownLeft, X } from "lucide-react";
import { useNavigate } from "react-router";


interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: any[];
  isLoading: boolean;
  isLoadingMore?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
  branch: string;
  locale: string;
}

// ---------------------------------------------------------------------------
// Loading skeleton
// ---------------------------------------------------------------------------

function SearchSkeleton() {
  return (
    <div className="search-skeleton-list">
      {[0.9, 0.6, 0.75].map((w, i) => (
        <div key={i} className="search-skeleton-item">
          <div className="search-skeleton-icon" />
          <div className="search-skeleton-text">
            <div className="search-skeleton-title" style={{ width: `${w * 100}%` }} />
            <div className="search-skeleton-sub" style={{ width: `${w * 60}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function SearchEmpty({ query }: { query: string }) {
  if (!query) {
    return (
      <div className="search-tips">
        <p className="search-tips-heading">Search tips</p>
        <ul className="search-tips-list">
          <li>Use <kbd className="kbd">↑</kbd><kbd className="kbd">↓</kbd> to navigate results</li>
          <li>Press <kbd className="kbd">↵</kbd> to open a result</li>
          <li>Type to start searching — even a single character</li>
        </ul>
      </div>
    );
  }
  return (
    <div className="search-empty-state">
      <Search size={28} className="search-empty-icon" />
      <p className="search-empty-title">No results for "{query}"</p>
      <p className="search-empty-sub">Try different keywords or check your spelling.</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Result item
// ---------------------------------------------------------------------------

function SearchResultItem({
  res,
  idx,
  currentBranch,
  locale,
  onSelect,
}: {
  res: any;
  idx: number;
  currentBranch: string;
  locale: string;
  onSelect: () => void;
}) {
  const fm = res.frontmatter ? JSON.parse(res.frontmatter) : { title: "" };
  const resultBranch: string = res.sourceBranch ?? currentBranch;
  const cleanPath = res.path.substring(locale.length + 1);
  const anchor = res.heading_id ? `#${res.heading_id}` : "";
  const isCrossBranch = resultBranch !== currentBranch;
  const title = fm.title || cleanPath.split("/").pop()?.replace(".md", "") || cleanPath;

  // Build breadcrumb from path segments (exclude filename)
  const pathParts = cleanPath.split("/");
  const breadcrumb = pathParts.length > 1 ? pathParts.slice(0, -1).join(" / ") : null;

  const navigate = useNavigate();

  return (
    <Command.Item
      key={`${res.path}-${idx}`}
      className="search-result-item"
      onSelect={() => {
        navigate(`/${locale}/${encodeURIComponent(resultBranch)}/${cleanPath}${anchor}`);
        onSelect();
      }}
    >
      <div className="search-result-icon-col">
        {anchor ? (
          <Hash size={13} className="text-accent" />
        ) : (
          <FileText size={13} className="text-accent" />
        )}
      </div>
      <div className="search-result-body">
        <div className="search-result-title">{title}</div>
        {breadcrumb && (
          <div className="search-result-breadcrumb">
            {breadcrumb}
          </div>
        )}
        {res.snippet && (
          <div
            className="search-result-snippet"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: server-sanitised snippet
            dangerouslySetInnerHTML={{ __html: res.snippet }}
          />
        )}
      </div>
      {isCrossBranch && (
        <span className="search-branch-pill" title={`From branch: ${resultBranch}`}>
          <GitBranch size={9} />
          {resultBranch}
        </span>
      )}
    </Command.Item>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function SearchCommand({
  open,
  onOpenChange,
  searchQuery,
  setSearchQuery,
  searchResults,
  isLoading,
  isLoadingMore = false,
  hasMore = false,
  onLoadMore,
  branch,
  locale,
}: SearchCommandProps) {
  const displayResults = searchResults;

  // Split into current-branch and cross-branch groups
  const currentResults = displayResults.filter(
    (r: any) => !r.sourceBranch || r.sourceBranch === branch,
  );
  const crossResults = displayResults.filter(
    (r: any) => r.sourceBranch && r.sourceBranch !== branch,
  );

  if (!open) return null;

  const hasQuery = searchQuery.length >= 1;
  const hasResults = displayResults.length > 0;

  return (
    <div
      className="cmdk-overlay"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="cmdk-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="cmdk-root" label="Search Docs" shouldFilter={false}>
          {/* Input row */}
          <div className="cmdk-input-wrapper">
            {isLoading ? (
              <Loader2 size={16} className="text-accent animate-spin shrink-0" />
            ) : (
              <Search size={16} className="text-muted shrink-0" />
            )}
            <Command.Input
              autoFocus
              className="cmdk-input"
              placeholder="Search documentation…"
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            {searchQuery && (
              <button
                type="button"
                className="cmdk-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
            <button
              type="button"
              className="kbd cmdk-esc-btn"
              onClick={() => onOpenChange(false)}
              aria-label="Close search"
            >
              ESC
            </button>
          </div>

          {/* Results list */}
          <Command.List className="cmdk-list">
            {/* Loading state */}
            {isLoading && <SearchSkeleton />}

            {/* Empty / tip state */}
            {!isLoading && (!hasQuery || !hasResults) && (
              <SearchEmpty query={searchQuery} />
            )}

            {/* Current-branch results */}
            {!isLoading && hasResults && currentResults.length > 0 && (
              <Command.Group
                heading={
                  <div className="search-group-heading">
                    <GitBranch size={11} />
                    {branch}
                  </div>
                }
              >
                {currentResults.map((res: any, idx: number) => (
                  <SearchResultItem
                    key={`cur-${res.path}-${idx}`}
                    res={res}
                    idx={idx}
                    currentBranch={branch}
                    locale={locale}
                    onSelect={() => onOpenChange(false)}
                  />
                ))}
              </Command.Group>
            )}

            {/* Cross-branch results */}
            {!isLoading && hasResults && crossResults.length > 0 && (
              <Command.Group
                heading={
                  <div className="search-group-heading search-group-heading--cross">
                    <GitBranch size={11} />
                    Other branches
                  </div>
                }
              >
                {crossResults.map((res: any, idx: number) => (
                  <SearchResultItem
                    key={`cross-${res.path}-${idx}`}
                    res={res}
                    idx={idx}
                    currentBranch={branch}
                    locale={locale}
                    onSelect={() => onOpenChange(false)}
                  />
                ))}
              </Command.Group>
            )}
          </Command.List>

          {/* Load More */}
          {!isLoading && hasResults && (hasMore || isLoadingMore) && (
            <div className="cmdk-load-more">
              <button
                type="button"
                className="cmdk-load-more-btn"
                onClick={onLoadMore}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? (
                  <Loader2 size={13} className="animate-spin" />
                ) : null}
                {isLoadingMore ? "Loading…" : "Load more results"}
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="cmdk-footer">
            <span className="cmdk-footer-hint">
              <kbd className="kbd"><ArrowUp size={9} /></kbd>
              <kbd className="kbd"><ArrowDown size={9} /></kbd>
              navigate
            </span>
            <span className="cmdk-footer-hint">
              <kbd className="kbd"><CornerDownLeft size={9} /></kbd>
              open
            </span>
            <span className="cmdk-footer-hint">
              <kbd className="kbd">ESC</kbd>
              close
            </span>
            {hasResults && (
              <span className="cmdk-footer-count">
                {displayResults.length} result{displayResults.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </Command>
      </div>
    </div>
  );
}