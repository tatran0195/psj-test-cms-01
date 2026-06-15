import React from "react";
import { Form } from "react-router";
import { Menu, LogOut, User } from "lucide-react";

interface TopbarProps {
  setSidebarOpen: (val: boolean) => void;
  branch: string;
  user: any;
  isRelease: boolean;
}

export function Topbar({ setSidebarOpen, user, isRelease }: TopbarProps) {
  return (
    <header className="app-topbar flex shrink-0 h-14 px-4 items-center justify-between border-b border-border bg-background lg:justify-end">
      <div className="flex items-center gap-4 lg:hidden">
        <button onClick={() => setSidebarOpen(true)} className="btn-ghost p-2 -ml-2"><Menu size={20} /></button>
        <div className="font-bold text-sm">PSJ Docs</div>
      </div>
      
      <div className="flex items-center gap-4">
        {!isRelease && (
          <div className="flex items-center gap-4">
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