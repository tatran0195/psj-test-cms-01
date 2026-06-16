import React, { useState } from "react";
import { Link, Form, useSubmit } from "react-router";
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Select from "@radix-ui/react-select";
import {
  ChevronRight,
  FileText,
  Folder,
  BookOpen,
  GitBranch,
  Search,
  User,
  LogOut,
  FileImage,
  Check,
  X,
  Globe,
  Trash2,
  Plus,
  AlertTriangle,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Inline modal (replaces window.prompt / window.confirm)
// ---------------------------------------------------------------------------

type ModalState =
  | { type: "none" }
  | { type: "createFile"; folderPath: string }
  | { type: "deleteFile"; filePath: string }
  | { type: "deleteBranch"; branchName: string };

function Modal({
  state,
  onConfirm,
  onCancel,
}: {
  state: ModalState;
  onConfirm: (value?: string) => void;
  onCancel: () => void;
}) {
  const [inputValue, setInputValue] = useState("");

  if (state.type === "none") return null;

  const isDestructive =
    state.type === "deleteFile" || state.type === "deleteBranch";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-background border border-border rounded-xl shadow-2xl p-6 w-full max-w-sm mx-4">
        {state.type === "createFile" && (
          <>
            <h2 className="font-bold text-lg mb-1">New file</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Enter a file name for{" "}
              <code className="text-xs bg-muted px-1 rounded">
                {state.folderPath || "root"}
              </code>
            </p>
            <input
              autoFocus
              type="text"
              placeholder="e.g. new-doc.md"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onConfirm(inputValue);
                if (e.key === "Escape") onCancel();
              }}
              className="input w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <button type="button" className="btn-ghost px-4 py-2" onClick={onCancel}>
                Cancel
              </button>
              <button
                type="button"
                className="btn px-4 py-2"
                disabled={!inputValue.trim()}
                onClick={() => onConfirm(inputValue)}
              >
                Create
              </button>
            </div>
          </>
        )}

        {state.type === "deleteFile" && (
          <>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <AlertTriangle size={20} />
              <h2 className="font-bold text-lg">Delete file?</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              This will permanently delete{" "}
              <code className="text-xs bg-muted px-1 rounded">{state.filePath}</code>
              . This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button type="button" className="btn-ghost px-4 py-2" onClick={onCancel}>
                Cancel
              </button>
              <button
                type="button"
                className="btn bg-red-600 hover:bg-red-700 text-white px-4 py-2"
                onClick={() => onConfirm()}
              >
                Delete
              </button>
            </div>
          </>
        )}

        {state.type === "deleteBranch" && (
          <>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <AlertTriangle size={20} />
              <h2 className="font-bold text-lg">Delete branch?</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              This will permanently delete branch{" "}
              <code className="text-xs bg-muted px-1 rounded">{state.branchName}</code>
              . This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button type="button" className="btn-ghost px-4 py-2" onClick={onCancel}>
                Cancel
              </button>
              <button
                type="button"
                className="btn bg-red-600 hover:bg-red-700 text-white px-4 py-2"
                onClick={() => onConfirm()}
              >
                Delete branch
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tree nodes
// ---------------------------------------------------------------------------

function isNodeActive(node: any, currentPath: string): boolean {
  if (node.isFile) return node.path === currentPath;
  return currentPath.startsWith(node.path + "/");
}

interface TreeFolderProps {
  node: any;
  locale: string;
  branch: string;
  currentPath: string;
  onSelect: () => void;
  onCreateFile: (folderPath: string) => void;
  onDeleteFile: (filePath: string) => void;
  isRelease: boolean;
}

function RadixTreeFolder({
  node,
  locale,
  branch,
  currentPath,
  onSelect,
  onCreateFile,
  onDeleteFile,
  isRelease,
}: TreeFolderProps) {
  const isActive = isNodeActive(node, currentPath);

  if (node.isFile) {
    const isImage =
      node.name.endsWith(".svg") ||
      node.name.endsWith(".png") ||
      node.name.endsWith(".jpg");
    return (
      <div className="group flex items-center pr-2">
        <Link
          to={`/${locale}/${encodeURIComponent(branch)}/${node.path}`}
          onClick={onSelect}
          className="TreeItem flex-1"
          data-active={node.path === currentPath ? "true" : "false"}
        >
          {isImage ? (
            <FileImage size={14} className="text-muted" />
          ) : (
            <FileText size={14} className="text-muted" />
          )}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {node.name}
          </span>
        </Link>
        {!isRelease && (
          <button
            type="button"
            className="hidden group-hover:block btn-ghost p-1 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
            onClick={(e) => {
              e.preventDefault();
              onDeleteFile(node.path);
            }}
            title="Delete file"
            aria-label={`Delete ${node.name}`}
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
          <ChevronRight
            size={14}
            className="chevron text-muted"
            style={{ transition: "transform 0.2s" }}
          />
          <Folder size={14} fill="currentColor" className="text-muted opacity-50" />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {node.name}
          </span>
        </Collapsible.Trigger>
        {!isRelease && (
          <button
            type="button"
            className="hidden group-hover:block btn-ghost p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded"
            onClick={(e) => {
              e.preventDefault();
              onCreateFile(node.path);
            }}
            title="New file"
            aria-label={`New file in ${node.name}`}
          >
            <Plus size={12} />
          </button>
        )}
      </div>
      <Collapsible.Content className="TreeFolderContent">
        {Object.values(node.children).map((child: any) => (
          <RadixTreeFolder
            key={child.name}
            node={child}
            locale={locale}
            branch={branch}
            currentPath={currentPath}
            onSelect={onSelect}
            onCreateFile={onCreateFile}
            onDeleteFile={onDeleteFile}
            isRelease={isRelease}
          />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

// ---------------------------------------------------------------------------
// Sidebar
// ---------------------------------------------------------------------------

interface SidebarProps {
  locale: string;
  branch: string;
  branches: any[];
  treeRoot: any;
  currentPath: string;
  isRelease: boolean;
  user: any;
  sidebarOpen: boolean;
  setSidebarOpen: (val: boolean) => void;
  setSearchOpen: (val: boolean) => void;
  /** CSRF token from the branch layout session */
  csrfToken: string;
  /** Called by the parent when the user picks a different branch */
  onBranchChange: (branch: string) => void;
  /** Called by the parent when the user picks a different locale */
  onLocaleChange: (locale: string) => void;
}

const LOCALES = ["en", "ja"] as const;

export function Sidebar({
  locale,
  branch,
  branches,
  treeRoot,
  currentPath,
  isRelease,
  user,
  sidebarOpen,
  setSidebarOpen,
  setSearchOpen,
  onBranchChange,
  onLocaleChange,
  csrfToken,
}: SidebarProps) {
  const submit = useSubmit();
  const [modal, setModal] = useState<ModalState>({ type: "none" });

  // ---------------------------------------------------------------------------
  // Modal handlers
  // ---------------------------------------------------------------------------

  const handleCreateFile = (folderPath: string) => {
    setModal({ type: "createFile", folderPath });
  };

  const handleDeleteFile = (filePath: string) => {
    setModal({ type: "deleteFile", filePath });
  };

  const handleDeleteBranch = () => {
    setModal({ type: "deleteBranch", branchName: branch });
  };

  const handleModalConfirm = (value?: string) => {
    if (modal.type === "createFile") {
      let name = (value ?? "").trim();
      if (!name) return;
      if (!name.endsWith(".md")) name += ".md";
      const fullPath = modal.folderPath ? `${modal.folderPath}/${name}` : name;
      const fd = new FormData();
      fd.append("_action", "createFile");
      fd.append("csrf_token", csrfToken);
      fd.append("path", fullPath);
      submit(fd, { method: "post" });
    } else if (modal.type === "deleteFile") {
      const fd = new FormData();
      fd.append("_action", "deleteFile");
      fd.append("csrf_token", csrfToken);
      fd.append("path", modal.filePath);
      submit(fd, { method: "post" });
    } else if (modal.type === "deleteBranch") {
      const fd = new FormData();
      fd.append("_action", "deleteBranch");
      fd.append("csrf_token", csrfToken);
      fd.append("branchToDelete", modal.branchName);
      submit(fd, { method: "post" });
    }
    setModal({ type: "none" });
  };

  const handleModalCancel = () => setModal({ type: "none" });

  return (
    <>
      <Modal state={modal} onConfirm={handleModalConfirm} onCancel={handleModalCancel} />

      <aside className={`app-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="flex justify-between items-center">
            <Link
              to={`/${locale}/${encodeURIComponent(branch)}`}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-2 text-heading font-bold text-[15px]"
            >
              <BookOpen size={20} className="text-accent" /> PSJ Docs
            </Link>
            <button
              type="button"
              className="lg:hidden btn-ghost p-1"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex gap-2">
            {!isRelease ? (
              <>
                {/* Branch selector */}
                <Select.Root value={branch} onValueChange={onBranchChange}>
                  <Select.Trigger className="SelectTrigger flex-1">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <GitBranch size={14} className="text-muted shrink-0" />
                      <span className="truncate">{branch}</span>
                    </div>
                    <Select.Icon>
                      <ChevronRight
                        size={14}
                        style={{ transform: "rotate(90deg)" }}
                        className="text-muted"
                      />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      className="SelectContent"
                      position="popper"
                      sideOffset={4}
                    >
                      <Select.Viewport className="SelectViewport">
                        {branches.map((b: any) => (
                          <Select.Item
                            key={b.name}
                            value={b.name}
                            className="SelectItem"
                          >
                            <Select.ItemIndicator className="SelectItemIndicator">
                              <Check size={14} />
                            </Select.ItemIndicator>
                            <Select.ItemText>{b.name}</Select.ItemText>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>

                {/* Delete branch button — triggers modal */}
                {branch !== "main" && user && (
                  <button
                    type="button"
                    className="btn-ghost p-1.5 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                    title={`Delete branch ${branch}`}
                    aria-label={`Delete branch ${branch}`}
                    onClick={handleDeleteBranch}
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </>
            ) : (
              <div className="flex-1 flex items-center gap-1.5 px-3 py-1.5 bg-accent-bg text-accent rounded-md text-[13px] font-semibold truncate">
                <GitBranch size={14} className="shrink-0" />
                <span className="truncate">{branch}</span>
              </div>
            )}

            {/* Locale selector */}
            <Select.Root value={locale} onValueChange={onLocaleChange}>
              <Select.Trigger className="SelectTrigger w-[65px] px-2 shrink-0">
                <div className="flex items-center gap-1">
                  <Globe size={14} className="text-muted" />
                  <span className="uppercase">{locale}</span>
                </div>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="SelectContent min-w-[80px]"
                  position="popper"
                  sideOffset={4}
                >
                  <Select.Viewport className="SelectViewport">
                    {LOCALES.map((l) => (
                      <Select.Item key={l} value={l} className="SelectItem px-6">
                        <Select.ItemIndicator className="SelectItemIndicator">
                          <Check size={14} />
                        </Select.ItemIndicator>
                        <Select.ItemText className="uppercase">{l}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <button
            type="button"
            className="search-trigger"
            onClick={() => setSearchOpen(true)}
          >
            <div className="flex items-center gap-2">
              <Search size={14} /> <span>Search...</span>
            </div>
            <span className="kbd hidden sm:inline">⌘K</span>
          </button>
        </div>

        <div className="sidebar-scrollarea">
          <div className="TreeRoot">
            {!isRelease && user && (
              <div className="flex justify-end px-2 mb-1">
                <button
                  type="button"
                  className="btn-ghost p-1 text-xs flex items-center gap-1 text-muted hover:text-foreground"
                  onClick={() => handleCreateFile("")}
                  title="New file in root"
                >
                  <Plus size={12} /> New File
                </button>
              </div>
            )}
            {treeRoot &&
              Object.values(treeRoot.children).map((child: any) => (
                <RadixTreeFolder
                  key={child.name}
                  node={child}
                  locale={locale}
                  branch={branch}
                  currentPath={currentPath}
                  onSelect={() => setSidebarOpen(false)}
                  onCreateFile={handleCreateFile}
                  onDeleteFile={handleDeleteFile}
                  isRelease={isRelease || !user}
                />
              ))}
          </div>
        </div>

        {!isRelease && (
          <div className="p-4 border-t border-border flex items-center gap-3 lg:hidden">
            {user ? (
              <>
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-7 h-7 rounded-full border border-border"
                />
                <div className="flex-1 text-xs font-semibold">{user.username}</div>
                <Form action="/auth/logout" method="post">
                  <button
                    type="submit"
                    className="btn-ghost p-1"
                    title="Logout"
                    aria-label="Logout"
                  >
                    <LogOut size={14} />
                  </button>
                </Form>
              </>
            ) : (
              <a
                href="/auth/github"
                className="btn-outline w-full justify-center text-xs py-1.5 flex items-center gap-2"
              >
                <User size={14} /> Login
              </a>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
