import React, { useEffect, useState } from "react";
import { Form, useOutletContext } from "react-router";
import { Menu, LogOut, User, Sun, Moon } from "lucide-react";

interface TopbarProps {
  setSidebarOpen: (val: boolean) => void;
  locale?: string;
  branch?: string;
  user: any;
  isRelease: boolean;
}

/**
 * The Topbar reads the CSRF token from the outlet context that the branch
 * layout injects — the same token the sidebar and edit forms use.
 */
export function Topbar({ setSidebarOpen, user, isRelease }: TopbarProps) {
  const [isDark, setIsDark] = useState(false);

  // Sync React state with whatever the anti-FOUC inline script applied to <html>
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    const root = document.documentElement;
    const nowDark = root.classList.toggle("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };

  // Pull CSRF token from outlet context (set by the branch layout loader)
  const ctx = useOutletContext<{ csrfToken?: string }>();
  const csrfToken = ctx?.csrfToken ?? "";

  return (
    <header className="app-topbar flex shrink-0 h-14 px-4 items-center justify-between border-b border-border bg-background lg:justify-end">
      <div className="flex items-center gap-4 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="btn-ghost p-2 -ml-2"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="font-bold text-sm">PSJ Docs</div>
      </div>

      <div className="flex items-center gap-2">
        {/* Dark mode toggle — state is already set server-side via the anti-FOUC script */}
        <button
          type="button"
          onClick={toggleDark}
          className="btn-ghost p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-border/50 transition-all"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {!isRelease && (
          <div className="flex items-center gap-2">
            <div className="w-[1px] h-6 bg-border hidden sm:block" />

            {/* New-branch form — includes CSRF token from outlet context */}
            <Form method="post" className="hidden sm:flex gap-2 items-center">
              <input type="hidden" name="_action" value="createBranch" />
              <input type="hidden" name="csrf_token" value={csrfToken} />
              <input
                type="text"
                name="newBranch"
                placeholder="New branch..."
                className="input w-[140px] h-8"
                required
              />
              <button
                type="submit"
                className="btn-outline h-8 px-3 rounded-md text-xs font-semibold"
              >
                Branch
              </button>
            </Form>

            <div className="w-[1px] h-6 bg-border hidden sm:block" />

            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-7 h-7 rounded-full border border-border"
                />
                <Form action="/auth/logout" method="post">
                  <button
                    type="submit"
                    className="btn-ghost p-1"
                    title="Logout"
                    aria-label="Logout"
                  >
                    <LogOut size={16} />
                  </button>
                </Form>
              </div>
            ) : (
              <a
                href="/auth/github"
                className="btn-outline px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2"
              >
                <User size={14} /> Login
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
