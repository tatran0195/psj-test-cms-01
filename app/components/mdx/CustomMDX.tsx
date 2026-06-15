import React from "react";

export function Callout({ children, type = "info", title }: { children: React.ReactNode, type?: "info" | "warning" | "danger", title?: string }) {
  const bgColors = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
    danger: "bg-red-50 border-red-200 text-red-900",
  };
  
  return (
    <div className={`my-6 border-l-4 rounded-r-lg p-4 ${bgColors[type]}`}>
      {title && <div className="font-bold mb-2">{title}</div>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function VersionBadge({ version }: { version: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 ml-2 border border-green-200 align-middle">
      Added in {version}
    </span>
  );
}

export function DeprecatedBadge({ version }: { version: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 ml-2 border border-red-200 align-middle">
      Deprecated in {version}
    </span>
  );
}

export function Property({ name, type, added, deprecated, children }: { name: string, type: string, added?: string, deprecated?: string, children?: React.ReactNode }) {
  return (
    <div className="py-3 border-b border-border last:border-0">
      <div className="flex items-center gap-2 mb-1">
        <code className="text-sm font-semibold text-primary">{name}</code>
        <span className="text-xs font-mono text-muted-foreground">{type}</span>
        {added && <VersionBadge version={added} />}
        {deprecated && <DeprecatedBadge version={deprecated} />}
      </div>
      <div className="text-sm text-secondary-foreground">
        {children}
      </div>
    </div>
  );
}