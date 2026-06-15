import React, { useEffect, useState } from "react";
import { Form } from "react-router";
import { Menu, LogOut, User, Sun, Moon } from "lucide-react";

interface TopbarProps {
  setSidebarOpen: (val: boolean) => void;
  locale?: string;
  branch?: string;
  user: any;
  isRelease: boolean;
}

export function Topbar({ setSidebarOpen, user, isRelease }: TopbarProps) {
  const [isDark, setIsDark] = useState(false);

  // Sync state with the current class on mount (anti-FOUC)
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="app-topbar flex shrink-0 h-14 px-4 items-center justify-between border-b border-border bg-background lg:justify-end">
      <div className="flex items-center gap-4 lg:hidden">
        <button onClick={() => setSidebarOpen(true)} className="btn-ghost p-2 -ml-2"><Menu size={20} /></button>
        <div className="font-bold text-sm">PSJ Docs</div>
      </div>
      
      <div className="flex items-center gap-2">
        {/* Dark Mode Toggle */}
        <button
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
            <Form method="post" className="hidden sm:flex gap-2 items-center">
              <input type="hidden" name="_action" value="createBranch" />
              <input type="text" name="newBranch" placeholder="New branch..." className="input w-[140px] h-8" required />
              <button type="submit" className="btn-outline h-8 px-3 rounded-md text-xs font-semibold">Branch</button>
            </Form>
            <div className="w-[1px] h-6 bg-border hidden sm:block" />
            {user ? (
              <div className="flex items-center gap-3">
                <img src={user.avatar} alt="avatar" className="w-7 h-7 rounded-full border border-border" />
                <Form action="/auth/logout" method="post">
                  <button type="submit" className="btn-ghost p-1" title="Logout"><LogOut size={16} /></button>
                </Form>
              </div>
            ) : (
              <a href="/auth/github" className="btn-outline px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2">
                <User size={14} /> Login
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
}