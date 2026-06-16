import React from "react";
import { Link, Form, useSubmit } from "react-router";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Select from "@radix-ui/react-select";
import { ChevronRight, FileText, Folder, BookOpen, GitBranch, Search, User, LogOut, FileImage, Check, X, Globe, Trash2, Plus } from "lucide-react";

function isNodeActive(node: any, currentPath: string): boolean {
  if (node.isFile) return node.path === currentPath;
  return currentPath.startsWith(node.path + "/");
}

function RadixTreeFolder({ node, locale, branch, currentPath, onSelect, onCreateFile, onDeleteFile, isRelease }: any) {
  const isActive = isNodeActive(node, currentPath);
  
  if (node.isFile) {
    const isImage = node.name.endsWith('.svg') || node.name.endsWith('.png') || node.name.endsWith('.jpg');
    return (
      <div className="group flex items-center pr-2">
        <Link to={`/${locale}/${encodeURIComponent(branch)}/${node.path}`} onClick={onSelect} className="TreeItem flex-1" data-active={node.path === currentPath ? "true" : "false"}>
          {isImage ? <FileImage size={14} className="text-muted" /> : <FileText size={14} className="text-muted" />}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">{node.name}</span>
        </Link>
        {!isRelease && (
          <button 
            className="hidden group-hover:block btn-ghost p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded" 
            onClick={(e) => { e.preventDefault(); onDeleteFile(node.path); }}
            title="Delete file"
          >
            <Trash2 size={12} />
          </button>
        )}
      </div>
    );
  }

  return (
    <Collapsible.Root defaultOpen={isActive}>
      <div className="group flex items-center pr-2">
        <Collapsible.Trigger className="TreeFolderTrigger flex-1">
          <ChevronRight size={14} className="chevron text-muted" style={{ transition: "transform 0.2s" }} />
          <Folder size={14} fill="currentColor" className="text-muted opacity-50" />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">{node.name}</span>
        </Collapsible.Trigger>
        {!isRelease && (
          <button 
            className="hidden group-hover:block btn-ghost p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded" 
            onClick={(e) => { e.preventDefault(); onCreateFile(node.path); }}
            title="New file"
          >
            <Plus size={12} />
          </button>
        )}
      </div>
      <Collapsible.Content className="TreeFolderContent">
        {Object.values(node.children).map((child: any) => (
          <RadixTreeFolder key={child.name} node={child} locale={locale} branch={branch} currentPath={currentPath} onSelect={onSelect} onCreateFile={onCreateFile} onDeleteFile={onDeleteFile} isRelease={isRelease} />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

export function Sidebar({ locale, branch, branches, treeRoot, currentPath, isRelease, user, sidebarOpen, setSidebarOpen, setSearchOpen }: any) {
  const locales = ["en", "ja"];
  const submit = useSubmit();

  const handleCreateFile = (folderPath: string) => {
    let name = prompt("Enter new file name (e.g. new-doc.md):");
    if (name) {
      if (!name.endsWith('.md')) name += '.md';
      const fullPath = folderPath ? `${folderPath}/${name}` : name;
      const fd = new FormData();
      fd.append("_action", "createFile");
      fd.append("path", fullPath);
      submit(fd, { method: "post" });
    }
  };

  const handleDeleteFile = (filePath: string) => {
    if (confirm(`Are you sure you want to delete ${filePath}?`)) {
      const fd = new FormData();
      fd.append("_action", "deleteFile");
      fd.append("path", filePath);
      submit(fd, { method: "post" });
    }
  };

  return (
    <aside className={`app-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="flex justify-between items-center">
          <Link to={`/${locale}/${encodeURIComponent(branch)}`} onClick={() => setSidebarOpen(false)} className="flex items-center gap-2 text-heading font-bold text-[15px]">
            <BookOpen size={20} className="text-accent" /> PSJ Docs
          </Link>
          <button className="lg:hidden btn-ghost p-1" onClick={() => setSidebarOpen(false)}><X size={20} /></button>
        </div>

        <div className="flex gap-2">
          {!isRelease ? (
            <>
              <Select.Root value={branch} onValueChange={(val) => window.location.href = `/${locale}/${encodeURIComponent(val)}`}>
                <Select.Trigger className="SelectTrigger flex-1">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <GitBranch size={14} className="text-muted shrink-0" /> <span className="truncate">{branch}</span>
                  </div>
                  <Select.Icon><ChevronRight size={14} style={{ transform: "rotate(90deg)" }} className="text-muted" /></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="SelectContent" position="popper" sideOffset={4}>
                    <Select.Viewport className="SelectViewport">
                      {branches.map((b: any) => (
                        <Select.Item key={b.name} value={b.name} className="SelectItem">
                          <Select.ItemIndicator className="SelectItemIndicator"><Check size={14} /></Select.ItemIndicator>
                          <Select.ItemText>{b.name}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
              {branch !== "main" && user && (
                <Form method="post" onSubmit={(e) => !confirm(`Are you sure you want to delete branch '${branch}'?`) && e.preventDefault()}>
                  <input type="hidden" name="_action" value="deleteBranch" />
                  <input type="hidden" name="branchToDelete" value={branch} />
                  <button type="submit" className="btn-ghost p-1.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded" title={`Delete branch ${branch}`}>
                    <Trash2 size={14} />
                  </button>
                </Form>
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center gap-1.5 px-3 py-1.5 bg-accent-bg text-accent rounded-md text-[13px] font-semibold truncate">
              <GitBranch size={14} className="shrink-0" /> <span className="truncate">{branch}</span>
            </div>
          )}

          <Select.Root value={locale} onValueChange={(val) => window.location.href = `/${val}/${encodeURIComponent(branch)}/${currentPath}`}>
            <Select.Trigger className="SelectTrigger w-[65px] px-2 shrink-0">
              <div className="flex items-center gap-1">
                <Globe size={14} className="text-muted" /> <span className="uppercase">{locale}</span>
              </div>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="SelectContent min-w-[80px]" position="popper" sideOffset={4}>
                <Select.Viewport className="SelectViewport">
                  {locales.map((l: string) => (
                    <Select.Item key={l} value={l} className="SelectItem px-6">
                      <Select.ItemIndicator className="SelectItemIndicator"><Check size={14} /></Select.ItemIndicator>
                      <Select.ItemText className="uppercase">{l}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <button className="search-trigger" onClick={() => setSearchOpen(true)}>
          <div className="flex items-center gap-2"><Search size={14} /> <span>Search...</span></div>
          <span className="kbd hidden sm:inline">⌘K</span>
        </button>
      </div>

      <div className="sidebar-scrollarea">
        <div className="TreeRoot">
          {!isRelease && user && (
            <div className="flex justify-end px-2 mb-1">
              <button 
                className="btn-ghost p-1 text-xs flex items-center gap-1 text-muted hover:text-foreground" 
                onClick={() => handleCreateFile("")}
                title="New file in root"
              >
                <Plus size={12} /> New File
              </button>
            </div>
          )}
          {treeRoot && Object.values(treeRoot.children).map((child: any) => (
            <RadixTreeFolder key={child.name} node={child} locale={locale} branch={branch} currentPath={currentPath} onSelect={() => setSidebarOpen(false)} onCreateFile={handleCreateFile} onDeleteFile={handleDeleteFile} isRelease={isRelease || !user} />
          ))}
        </div>
      </div>

      {!isRelease && (
        <div className="p-4 border-t border-border flex items-center gap-3 lg:hidden">
          {user ? (
            <>
              <img src={user.avatar} alt="avatar" className="w-7 h-7 rounded-full border border-border" />
              <div className="flex-1 text-xs font-semibold">{user.username}</div>
              <Form action="/auth/logout" method="post">
                <button type="submit" className="btn-ghost p-1" title="Logout"><LogOut size={14} /></button>
              </Form>
            </>
          ) : (
            <a href="/auth/github" className="btn-outline w-full justify-center text-xs py-1.5 flex items-center gap-2"><User size={14} /> Login</a>
          )}
        </div>
      )}
    </aside>
  );
}