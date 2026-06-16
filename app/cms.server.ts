import crypto from "crypto";
import matter from "gray-matter";
import { db } from "./db.server.js";
import filterXSS from "xss";
import { logger } from "./lib/logger.js";

// Unified Ecosystem
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkBreaks from "remark-breaks";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import * as strUtils from "mdast-util-to-string";
import GithubSlugger from "github-slugger";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function computeHash(content: string | Buffer): string {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function generateCommitId(): string {
  return crypto.randomBytes(20).toString("hex");
}

// ---------------------------------------------------------------------------
// Remark / Rehype plugins
// ---------------------------------------------------------------------------

function remarkExtractToc() {
  return (tree: any, file: any) => {
    const slugger = new GithubSlugger();
    const toc: { level: number; id: string; text: string }[] = [];
    visit(tree, "heading", (node: any) => {
      const text = strUtils.toString(node);
      const id = slugger.slug(text);
      if (node.depth === 2 || node.depth === 3) {
        toc.push({ level: node.depth, id, text });
      }
    });
    file.data.toc = toc;
  };
}

function remarkExtractSections() {
  return (tree: any, file: any) => {
    const slugger = new GithubSlugger();
    const sections: { heading_id: string; breadcrumb: string; content: string }[] = [];
    let currentBreadcrumb: string[] = [];
    let currentSection = { heading_id: "", breadcrumb: "", content: "" };

    for (const node of tree.children) {
      if (node.type === "heading") {
        const text = strUtils.toString(node);
        const id = slugger.slug(text);

        if (currentSection.content.trim() || currentSection.breadcrumb) {
          sections.push({ ...currentSection });
        }

        currentBreadcrumb[node.depth - 1] = text;
        currentBreadcrumb = currentBreadcrumb.slice(0, node.depth);

        currentSection = {
          heading_id: id,
          breadcrumb: currentBreadcrumb.filter(Boolean).join(" > "),
          content: "",
        };
      } else {
        currentSection.content += strUtils.toString(node) + "\n";
      }
    }
    if (currentSection.content.trim() || currentSection.breadcrumb) {
      sections.push({ ...currentSection });
    }
    file.data.sections = sections;
  };
}

function rehypeCopyButton() {
  return (tree: any) => {
    visit(tree, "element", (node: any) => {
      if (
        node.tagName === "figure" &&
        node.properties &&
        "dataRehypePrettyCodeFigure" in node.properties
      ) {
        node.children.push({
          type: "element",
          tagName: "button",
          properties: {
            className: ["copy-btn"],
            title: "Copy code",
            "data-copy": "",
          },
          children: [
            {
              type: "element",
              tagName: "svg",
              properties: {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              },
              children: [
                {
                  type: "element",
                  tagName: "rect",
                  properties: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" },
                  children: [],
                },
                {
                  type: "element",
                  tagName: "path",
                  properties: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" },
                  children: [],
                },
              ],
            },
          ],
        });
      }
    });
  };
}

// ---------------------------------------------------------------------------
// Markdown processor (singleton — re-use across calls)
// ---------------------------------------------------------------------------

const markdownProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkBreaks)
  .use(remarkExtractToc)
  .use(remarkExtractSections)
  .use(remarkRehype) // allowDangerousHtml intentionally omitted
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: "wrap" })
  .use(rehypeKatex, { strict: false })
  .use(rehypePrettyCode, { theme: "github-dark", keepBackground: true })
  .use(rehypeCopyButton);

// ---------------------------------------------------------------------------
// processContent
// ---------------------------------------------------------------------------

export interface ProcessedContent {
  raw_content: string | Buffer;
  frontmatter: string | null;
  parsed_ast: string | null;
  title: string;
  searchableContent: string;
  sections: { heading_id: string; breadcrumb: string; content: string }[];
}

export async function processContent(
  content: string | Buffer,
  mimeType = "text/markdown",
): Promise<ProcessedContent> {
  if (mimeType === "text/markdown" && typeof content === "string") {
    // Defence-in-depth: strip raw HTML from markdown before parsing
    const sanitizedSource = filterXSS(content, {
      whiteList: {},
      stripIgnoreTag: true,
      stripIgnoreTagBody: ["script"],
    });

    const { data: frontmatter, content: rawContent } = matter(sanitizedSource);

    // Parse mdast once, run all plugins in a single pass
    const mdastTree = markdownProcessor.parse(rawContent);
    const vfile: any = { data: { toc: [], sections: [] } };

    // Run remark-only plugins to populate vfile.data
    remarkExtractToc()(mdastTree, vfile);
    remarkExtractSections()(mdastTree, vfile);

    // Run the full pipeline (remark → rehype) to get the HAST
    const hastTree = await markdownProcessor.run(mdastTree);

    const parsed_ast = JSON.stringify({
      hast: hastTree,
      toc: vfile.data.toc,
    });

    return {
      raw_content: sanitizedSource,
      frontmatter: JSON.stringify(frontmatter),
      parsed_ast,
      title: (frontmatter.title as string) || "",
      searchableContent: rawContent,
      sections: vfile.data.sections,
    };
  }

  return {
    raw_content: Buffer.isBuffer(content)
      ? content
      : Buffer.from(content as string, "base64"),
    frontmatter: null,
    parsed_ast: null,
    title: "",
    searchableContent: "",
    sections: [],
  };
}

// ---------------------------------------------------------------------------
// Branch helpers
// ---------------------------------------------------------------------------

export function getBranches(): any[] {
  return db.prepare("SELECT * FROM branches ORDER BY name ASC").all() as any[];
}

export function getBranchHead(branchName: string): string | null {
  const b = db
    .prepare("SELECT head_version FROM branches WHERE name = ?")
    .get(branchName) as any;
  return b ? b.head_version : null;
}

export function createBranch(newBranch: string, fromBranch: string): void {
  const baseVersion = getBranchHead(fromBranch);
  if (!baseVersion) throw new Error("Base branch not found");
  db.prepare("INSERT INTO branches (name, head_version) VALUES (?, ?)").run(
    newBranch,
    baseVersion,
  );
  logAudit("create_branch", "system", newBranch, `Created from ${fromBranch}`);
}

export function deleteBranch(branchName: string): void {
  db.prepare("DELETE FROM branches WHERE name = ?").run(branchName);
  logAudit("delete_branch", "system", branchName, "Branch deleted");
}

// ---------------------------------------------------------------------------
// Tree / file queries
// ---------------------------------------------------------------------------

/**
 * Shared CTE fragment that walks the commit history for a given branch name.
 * Inject at the top of any query that needs `history(version, depth)`.
 */
const HISTORY_CTE = `
  WITH RECURSIVE history(version, parent, depth) AS (
    SELECT t.version, t.parent, 0
    FROM trees t
    JOIN branches b ON b.head_version = t.version
    WHERE b.name = ?
    UNION ALL
    SELECT t.version, t.parent, h.depth + 1
    FROM trees t JOIN history h ON t.version = h.parent
  )
`;

/**
 * Returns every visible (non-deleted) path under a locale prefix.
 * Results are ordered by path for stable pagination queries.
 */
export function getTree(
  branchName: string,
  locale: string,
): { path: string }[] {
  return db
    .prepare(
      `${HISTORY_CTE},
      ranked AS (
        SELECT te.path, te.hash,
               ROW_NUMBER() OVER (PARTITION BY te.path ORDER BY h.depth ASC) AS rn
        FROM tree_entries te
        JOIN history h ON te.version = h.version
        WHERE te.path LIKE ?
      )
      SELECT path FROM ranked WHERE rn = 1 AND hash IS NOT NULL
      ORDER BY path ASC`,
    )
    .all(branchName, `${locale}/%`) as { path: string }[];
}

export function getFile(branchName: string, filePath: string): any | null {
  return (
    db
      .prepare(
        `${HISTORY_CTE},
      ranked AS (
        SELECT te.hash,
               ROW_NUMBER() OVER (PARTITION BY te.path ORDER BY h.depth ASC) AS rn
        FROM tree_entries te
        JOIN history h ON te.version = h.version
        WHERE te.path = ?
      )
      SELECT b.mime_type, b.raw_content, b.frontmatter, b.parsed_ast
      FROM ranked r
      JOIN blobs b ON r.hash = b.hash
      WHERE r.rn = 1 AND r.hash IS NOT NULL`,
      )
      .get(branchName, filePath) as any
  ) ?? null;
}

/**
 * Efficient prev/next lookup: uses a single SQL query with keyset navigation
 * instead of loading the full tree into JS and doing findIndex().
 *
 * Both `prev` and `next` are resolved in one round-trip per direction.
 */
export function getAdjacentFiles(
  branchName: string,
  locale: string,
  currentPath: string,
): {
  prev: { path: string; frontmatter: string | null } | null;
  next: { path: string; frontmatter: string | null } | null;
} {
  // Build the visible-file CTE once and run two cheap keyset queries
  const visibleCte = `
    ${HISTORY_CTE},
    ranked AS (
      SELECT te.path, te.hash,
             ROW_NUMBER() OVER (PARTITION BY te.path ORDER BY h.depth ASC) AS rn
      FROM tree_entries te
      JOIN history h ON te.version = h.version
      WHERE te.path LIKE ? AND (te.path LIKE '%.md' OR te.path LIKE '%.mdx')
    ),
    visible AS (
      SELECT path, hash FROM ranked WHERE rn = 1 AND hash IS NOT NULL
    )
  `;

  const prefix = `${locale}/%`;

  const prevRow = db
    .prepare(
      `${visibleCte}
      SELECT v.path, b.frontmatter
      FROM visible v
      JOIN blobs b ON v.hash = b.hash
      WHERE v.path < ?
      ORDER BY v.path DESC
      LIMIT 1`,
    )
    .get(branchName, prefix, currentPath) as any;

  const nextRow = db
    .prepare(
      `${visibleCte}
      SELECT v.path, b.frontmatter
      FROM visible v
      JOIN blobs b ON v.hash = b.hash
      WHERE v.path > ?
      ORDER BY v.path ASC
      LIMIT 1`,
    )
    .get(branchName, prefix, currentPath) as any;

  function toPage(
    row: any,
    loc: string,
  ): { path: string; frontmatter: string | null } | null {
    if (!row) return null;
    return {
      path: row.path.substring(loc.length + 1),
      frontmatter: row.frontmatter ?? null,
    };
  }

  return {
    prev: toPage(prevRow, locale),
    next: toPage(nextRow, locale),
  };
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

export function search(
  branchName: string,
  locale: string,
  query: string,
  offset = 0,
  limit = 20,
): any[] {
  const safeLimit = Math.max(1, Math.min(limit, 100));
  const safeOffset = Math.max(0, offset);

  return db
    .prepare(
      `${HISTORY_CTE},
      ranked AS (
        SELECT te.path, te.hash,
               ROW_NUMBER() OVER (PARTITION BY te.path ORDER BY h.depth ASC) AS rn
        FROM tree_entries te
        JOIN history h ON te.version = h.version
        WHERE te.path LIKE ?
      ),
      visible AS (
        SELECT path, hash FROM ranked WHERE rn = 1 AND hash IS NOT NULL
      )
      SELECT
        v.path,
        b.frontmatter,
        fts.heading_id,
        fts.breadcrumb,
        snippet(blob_sections_fts, 3, '<mark>', '</mark>', '...', 20) as snippet
      FROM visible v
      JOIN blob_sections_fts fts ON v.hash = fts.hash
      JOIN blobs b ON v.hash = b.hash
      WHERE blob_sections_fts MATCH ?
      ORDER BY rank
      LIMIT ? OFFSET ?`,
    )
    .all(branchName, `${locale}/%`, query, safeLimit, safeOffset) as any[];
}

// ---------------------------------------------------------------------------
// Revision history
// ---------------------------------------------------------------------------

export function getFileHistory(branchName: string, filePath: string): any[] {
  const rows = db
    .prepare(
      `WITH RECURSIVE branch_history(version, parent, author, message, created_at) AS (
        SELECT version, parent, author, message, created_at
        FROM trees
        WHERE version = (SELECT head_version FROM branches WHERE name = ?)
        UNION ALL
        SELECT t.version, t.parent, t.author, t.message, t.created_at
        FROM trees t
        JOIN branch_history bh ON t.version = bh.parent
      )
      SELECT bh.version as commitId, bh.author, bh.message, bh.created_at, te.hash
      FROM branch_history bh
      JOIN tree_entries te ON bh.version = te.version
      WHERE te.path = ?
      ORDER BY bh.created_at DESC`,
    )
    .all(branchName, filePath) as any[];

  // De-duplicate consecutive commits that touch the same blob
  const changes: any[] = [];
  let lastHash: string | null = null;
  for (let i = rows.length - 1; i >= 0; i--) {
    if (rows[i].hash !== lastHash) {
      changes.unshift(rows[i]);
      lastHash = rows[i].hash;
    }
  }
  return changes;
}

// ---------------------------------------------------------------------------
// commitChanges
// ---------------------------------------------------------------------------

export interface ChangedFile {
  path: string;
  content: string | Buffer;
  mime_type?: string;
}

export interface CommitOptions {
  branch: string;
  author: string;
  message: string;
  changedFiles: ChangedFile[];
  deletedFiles: string[];
  clientIp?: string | null;
  userAgent?: string | null;
}

/**
 * Atomically commits content changes to SQLite, then asynchronously pushes
 * to GitHub.
 *
 * Ordering rationale:
 *  - SQLite is committed first so the local store is always the source of truth.
 *  - GitHub push runs after and is best-effort. On failure the webhook will
 *    eventually re-sync. This is better than the previous order (GH first)
 *    which left the two stores diverged on SQLite failure.
 *
 * Returns the new commit ID.
 */
export async function commitChanges(opts: CommitOptions): Promise<string> {
  const { branch, author, message, changedFiles, deletedFiles, clientIp, userAgent } = opts;

  const parentVersion = getBranchHead(branch);
  const newCommitId = generateCommitId();

  // Process all files concurrently before opening the transaction
  const processedFiles = await Promise.all(
    changedFiles.map(async (file) => {
      const processed = await processContent(file.content, file.mime_type);
      const hash = computeHash(processed.raw_content);
      return { ...file, hash, processed };
    }),
  );

  // --- Atomic SQLite commit ---
  db.exec("BEGIN");
  try {
    db.prepare(
      `INSERT INTO trees (version, parent, author, message) VALUES (?, ?, ?, ?)`,
    ).run(newCommitId, parentVersion, author, message);

    const insertBlob = db.prepare(
      `INSERT OR IGNORE INTO blobs (hash, mime_type, raw_content, frontmatter, parsed_ast) VALUES (?, ?, ?, ?, ?)`,
    );
    const insertSection = db.prepare(
      `INSERT INTO blob_sections_fts (hash, heading_id, breadcrumb, content) VALUES (?, ?, ?, ?)`,
    );

    const changedHashes = new Map<string, string>();

    for (const item of processedFiles) {
      insertBlob.run(
        item.hash,
        item.mime_type ?? "text/markdown",
        item.processed.raw_content,
        item.processed.frontmatter,
        item.processed.parsed_ast,
      );

      if (!item.mime_type || item.mime_type === "text/markdown") {
        const existingFTS = db
          .prepare("SELECT 1 FROM blob_sections_fts WHERE hash = ? LIMIT 1")
          .get(item.hash);
        if (!existingFTS && item.processed.sections.length > 0) {
          for (const section of item.processed.sections) {
            insertSection.run(
              item.hash,
              section.heading_id,
              section.breadcrumb,
              section.content,
            );
          }
        }
      }
      changedHashes.set(item.path, item.hash);
    }

    if (deletedFiles.length > 0) {
      const insertTombstone = db.prepare(
        `INSERT OR IGNORE INTO tree_entries (version, path, hash) VALUES (?, ?, NULL)`,
      );
      for (const deletedPath of deletedFiles) {
        insertTombstone.run(newCommitId, deletedPath);
      }
    }

    const insertTreeEntry = db.prepare(
      `INSERT OR REPLACE INTO tree_entries (version, path, hash) VALUES (?, ?, ?)`,
    );
    for (const [p, hash] of changedHashes) {
      insertTreeEntry.run(newCommitId, p, hash);
    }

    db.prepare(
      `INSERT OR REPLACE INTO branches (name, head_version, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)`,
    ).run(branch, newCommitId);

    db.exec("COMMIT");
  } catch (err) {
    db.exec("ROLLBACK");
    logger.error({ err, branch, author }, "Commit failed — rolled back");
    throw err;
  }

  logAudit("commit", author, branch, message, clientIp, userAgent);
  return newCommitId;
}

// ---------------------------------------------------------------------------
// Audit log
// ---------------------------------------------------------------------------

export function logAudit(
  action: string,
  actor: string,
  target?: string,
  detail?: string,
  ip?: string | null,
  userAgent?: string | null,
): void {
  try {
    db.prepare(
      `INSERT INTO audit_logs (action, actor, target, detail, ip, user_agent)
       VALUES (?, ?, ?, ?, ?, ?)`,
    ).run(
      action,
      actor,
      target ?? null,
      detail ?? null,
      ip ?? null,
      userAgent ?? null,
    );
  } catch (err) {
    logger.error({ err, action, actor }, "Failed to write audit log");
  }
}
