import React from "react";
import { motion } from "framer-motion";
import { GitCommit, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export interface RevisionItem {
  commitId: string;
  message: string;
  author: string;
  created_at: string;
}

interface RevisionHistoryProps {
  history: RevisionItem[];
}

export function RevisionHistory({ history }: RevisionHistoryProps) {
  if (!history || history.length === 0) return null;

  return (
    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-8">
      <div className="p-6 bg-sidebar rounded-xl border border-border shadow-inner">
        <h3 className="m-0 mb-5 text-sm text-foreground flex items-center gap-2">
          <Clock size={16} className="text-accent" /> File Revision History
        </h3>
        <div className="flex flex-col gap-4 relative">
          <div className="absolute left-[15px] top-2.5 bottom-2.5 w-[2px] bg-border z-0" />
          {history.map((rev, idx) => (
            <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.05 }} key={rev.commitId} className="flex gap-4 relative z-10" data-testid="revision-item">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${idx === 0 ? 'bg-accent border-accent' : 'bg-white border-border'}`}>
                <GitCommit size={14} className={idx === 0 ? "text-white" : "text-muted-foreground"} />
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg border border-border shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">{rev.message}</span>
                  <span className="text-xs text-muted-foreground bg-sidebar px-2 py-0.5 rounded-full" title={new Date(rev.created_at).toLocaleString()}>
                    {formatDistanceToNow(new Date(rev.created_at), { addSuffix: true })}
                  </span>
                </div>
                <div className="text-[13px] text-secondary-foreground flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-border flex items-center justify-center text-[10px] font-bold">{rev.author[0].toUpperCase()}</div>
                  <span className="font-semibold">{rev.author}</span> committed <code className="text-muted-foreground text-xs bg-sidebar px-1.5 py-0.5 rounded">{rev.commitId.slice(0,7)}</code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}