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

/**
 * Returns all branches.
 * @param publishedOnly When true, only returns non-draft branches (safe for public readers).
 */
export function getBranches(publishedOnly = false): any[] {
  if (publishedOnly) {
    return db
      .prepare("SELECT * FROM branches WHERE is_draft = 0 ORDER BY name ASC")
      .all() as any[];
  }
  return db.prepare("SELECT * FROM branches ORDER BY name ASC").all() as any[];
}

export function getBranchHead(branchName: string): string | null {
  const b = db
    .prepare("SELECT head_version FROM branches WHERE name = ?")
    .get(branchName) as any;
  return b ? b.head_version : null;
}

export function isBranchDraft(branchName: string): boolean {
  const b = db
    .prepare("SELECT is_draft FROM branches WHERE name = ?")
    .get(branchName) as any;
  return b ? b.is_draft === 1 : false;
}

/**
 * Creates a new branch in DRAFT state (is_draft = 1).
 * Draft branches are not visible to unauthenticated / public readers.
 */
export function createBranch(newBranch: string, fromBranch: string): void {
  const baseVersion = getBranchHead(fromBranch);
  if (!baseVersion) throw new Error("Base branch not found");
  db.prepare(
    "INSERT INTO branches (name, head_version, is_draft) VALUES (?, ?, 1)",
  ).run(newBranch, baseVersion);
  logAudit("create_branch", "system", newBranch, `Created from ${fromBranch} (draft)`);
}

export function deleteBranch(branchName: string): void {
  db.prepare("DELETE FROM branches WHERE name = ?").run(branchName);
  logAudit("delete_branch", "system", branchName, "Branch deleted");
}

// ---------------------------------------------------------------------------
// publishBranch
// ---------------------------------------------------------------------------

export interface PublishResult {
  squashCommitId: string;
  filesChanged: number;
  squashMessage: string;
  /** Paths of all files that changed on the branch — use to push to GitHub. */
  changedPaths: string[];
}

/**
 * Publishes a draft branch by:
 *  1. Collecting every file path that differs between the branch base and
 *     its current HEAD (i.e. all changes made on the branch).
 *  2. Creating a single "squash" commit that records those changes with a
 *     uniform, parseable message — perfect for automated release note generation.
 *  3. Marking the branch as `is_draft = 0` and recording the event in
 *     `branch_publish_log`.
 *
 * The squash commit message format:
 *   "publish(<branch>): <N> file(s) changed\n\n- path/one.md\n- path/two.md"
 */
export async function publishBranch(
  branchName: string,
  actor: string,
  customMessage?: string,
): Promise<PublishResult> {
  // 1. Find the "fork point" — the base version the branch was cut from.
  //    Walk the branch history until we find a commit also reachable from main.
  const branchHead = getBranchHead(branchName);
  if (!branchHead) throw new Error(`Branch '${branchName}' not found`);

  const mainHead = getBranchHead("main");

  // Collect all versions in the branch commit chain
  const branchVersions = db
    .prepare(
      `WITH RECURSIVE h(version, parent) AS (
        SELECT version, parent FROM trees WHERE version = ?
        UNION ALL
        SELECT t.version, t.parent FROM trees t JOIN h ON t.version = h.parent
      ) SELECT version FROM h`,
    )
    .all(branchHead) as { version: string }[];
  const branchVersionSet = new Set(branchVersions.map((r) => r.version));

  // Collect all versions reachable from main
  const mainVersions = mainHead
    ? (db
        .prepare(
          `WITH RECURSIVE h(version, parent) AS (
            SELECT version, parent FROM trees WHERE version = ?
            UNION ALL
            SELECT t.version, t.parent FROM trees t JOIN h ON t.version = h.parent
          ) SELECT version FROM h`,
        )
        .all(mainHead) as { version: string }[])
    : [];
  const mainVersionSet = new Set(mainVersions.map((r) => r.version));

  // Fork point = first version in branch chain that is also in main chain
  let forkVersion: string | null = null;
  for (const { version } of branchVersions) {
    if (mainVersionSet.has(version)) {
      forkVersion = version;
      break;
    }
  }

  // 2. Determine changed paths: every path touched in branch-only commits
  //    that is NOT in the fork version's state (or has a different hash).
  const branchOnlyVersions = branchVersions
    .map((r) => r.version)
    .filter((v) => !mainVersionSet.has(v));

  let changedPaths: string[] = [];
  if (branchOnlyVersions.length > 0) {
    // All unique paths touched in branch-only commits
    const placeholders = branchOnlyVersions.map(() => "?").join(", ");
    const touchedPaths = db
      .prepare(
        `SELECT DISTINCT path FROM tree_entries WHERE version IN (${placeholders})`,
      )
      .all(...branchOnlyVersions) as { path: string }[];
    changedPaths = touchedPaths.map((r) => r.path).sort();
  }

  // 3. Build squash commit message
  const n = changedPaths.length;
  const defaultMsg = `publish(${branchName}): ${n} file${n !== 1 ? "s" : ""} changed`;
  const fileList = changedPaths.map((p) => `- ${p}`).join("\n");
  const squashMessage = customMessage
    ? `${customMessage}\n\nFiles changed (${n}):\n${fileList}`
    : `${defaultMsg}\n\n${fileList}`;

  // 4. Atomic SQLite transaction: write squash commit + mark branch published
  const squashCommitId = generateCommitId();

  db.exec("BEGIN");
  try {
    // Squash commit — parent is the current branch HEAD (keeps history intact)
    db.prepare(
      `INSERT INTO trees (version, parent, author, message) VALUES (?, ?, ?, ?)`,
    ).run(squashCommitId, branchHead, actor, squashMessage);

    // The squash commit itself carries no tree_entries — it's a metadata-only
    // commit that documents what was changed. The actual files are already
    // tracked by the branch's previous commits.

    // Update branch HEAD to squash commit and mark as published
    db.prepare(
      `UPDATE branches
       SET head_version = ?, is_draft = 0, published_at = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
       WHERE name = ?`,
    ).run(squashCommitId, branchName);

    // Record in publish log for release note generation
    db.prepare(
      `INSERT INTO branch_publish_log (branch, actor, commit_id, message, files_changed)
       VALUES (?, ?, ?, ?, ?)`,
    ).run(branchName, actor, squashCommitId, squashMessage, n);

    db.exec("COMMIT");
  } catch (err) {
    db.exec("ROLLBACK");
    logger.error({ err, branch: branchName, actor }, "Publish branch failed — rolled back");
    throw err;
  }

  logAudit("publish_branch", actor, branchName, squashMessage);
  logger.info({ branch: branchName, actor, squashCommitId, filesChanged: n }, "Branch published");

  return { squashCommitId, filesChanged: n, squashMessage, changedPaths };
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
 * Tries to load a file from `branchName`. If not found (file never existed
 * or was deleted on this branch), walks the commit ancestry to find the
 * nearest ancestor branch that has the file — providing transparent
 * content inheritance between branches.
 *
 * Returns `{ file, sourceBranch }` where `sourceBranch` equals `branchName`
 * when the file was found on the requested branch, or the name of the
 * fallback branch otherwise. Returns `null` when the file doesn't exist
 * anywhere in the ancestry.
 *
 * Algorithm (single SQL round-trip):
 *   1. Walk the commit history of `branchName` via recursive CTE.
 *   2. Join each ancestor commit against `branches.head_version` to find
 *      which branch "owns" that commit as its HEAD.
 *   3. For each candidate branch (ordered by ancestry depth = closeness),
 *      check whether the file exists on that branch.
 *   4. Return the first hit.
 */
export function getFileWithFallback(
  branchName: string,
  filePath: string,
): { file: any; sourceBranch: string } | null {
  // Fast path: file exists on the requested branch
  const direct = getFile(branchName, filePath);
  if (direct) return { file: direct, sourceBranch: branchName };

  // Find all branches whose head_version sits somewhere in the ancestry chain,
  // ordered from closest ancestor (depth 1) to furthest (main).
  const ancestorBranches = db
    .prepare(
      `WITH RECURSIVE history(version, parent, depth) AS (
        SELECT t.version, t.parent, 0
        FROM trees t
        JOIN branches b ON b.head_version = t.version
        WHERE b.name = ?
        UNION ALL
        SELECT t.version, t.parent, h.depth + 1
        FROM trees t JOIN history h ON t.version = h.parent
      )
      SELECT DISTINCT b.name, MIN(h.depth) AS closeness
      FROM history h
      JOIN branches b ON b.head_version = h.version
      WHERE b.name != ?
      GROUP BY b.name
      ORDER BY closeness ASC`,
    )
    .all(branchName, branchName) as { name: string; closeness: number }[];

  for (const { name } of ancestorBranches) {
    const file = getFile(name, filePath);
    if (file) return { file, sourceBranch: name };
  }

  return null;
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
// File content helpers
// ---------------------------------------------------------------------------

/**
 * Fetches the current effective content of specific file paths on a branch.
 * Used to push changed files to GitHub after a commit or publish.
 * Binary files are returned as base64 strings; markdown as UTF-8 strings.
 */
export function getFilesForPaths(
  branchName: string,
  paths: string[],
): { path: string; content: string; mime_type: string }[] {
  if (paths.length === 0) return [];
  const placeholders = paths.map(() => "?").join(", ");
  const rows = db
    .prepare(
      `${HISTORY_CTE},
      ranked AS (
        SELECT te.path, te.hash,
               ROW_NUMBER() OVER (PARTITION BY te.path ORDER BY h.depth ASC) AS rn
        FROM tree_entries te
        JOIN history h ON te.version = h.version
        WHERE te.path IN (${placeholders})
      )
      SELECT r.path, b.raw_content, b.mime_type
      FROM ranked r
      JOIN blobs b ON r.hash = b.hash
      WHERE r.rn = 1 AND r.hash IS NOT NULL`,
    )
    .all(branchName, ...paths) as { path: string; raw_content: Buffer | string; mime_type: string }[];

  return rows.map((row) => ({
    path: row.path,
    content: Buffer.isBuffer(row.raw_content)
      ? row.raw_content.toString("base64")
      : (row.raw_content as string),
    mime_type: row.mime_type,
  }));
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

/**
 * Returns true if the string contains CJK (Chinese, Japanese, Korean) characters.
 * CJK text has no word boundaries, so trigram-based FTS works best for it.
 */
function hasCJK(s: string): boolean {
  return /[\u3000-\u9fff\uac00-\ud7af\uf900-\ufaff\uff00-\uffef]/.test(s);
}

function getEdits(word: string): string[] {
  const edits = new Set<string>();
  // Transpositions (swap adjacent chars)
  for (let i = 0; i < word.length - 1; i++) {
    const chars = word.split('');
    const temp = chars[i];
    chars[i] = chars[i + 1];
    chars[i + 1] = temp;
    edits.add(chars.join(''));
  }
  // Deletions (remove 1 char)
  for (let i = 0; i < word.length; i++) {
    edits.add(word.slice(0, i) + word.slice(i + 1));
  }
  return Array.from(edits);
}

/**
 * Builds an FTS5 MATCH query for the trigram tokenizer with multilingual support.
 *
 * Trigram indexes every 3-char sequence — optimal for:
 *   - Japanese/CJK: character-based languages with no word boundaries
 *   - Latin substring matching: "load" is found by trigrams "loa" + "oad"
 *
 * Returns empty string when the query can't be expressed as an FTS MATCH
 * (e.g. all tokens < 3 chars). The caller then uses a LIKE fallback.
 *
 * Query generation strategy:
 *   CJK >= 3 chars -> generate all 3-char substrings (trigrams) OR-ed
 *   CJK <  3 chars -> return null (-> LIKE fallback)
 *   Latin >= 3     -> exact phrase + all trigrams + edit-distance-1 variants
 *   Latin <  3     -> return null (-> LIKE fallback)
 */
function buildFuzzyQuery(query: string): string {
  const cleanQuery = query.replace(/["*()]/g, ' ').trim();
  const words = cleanQuery.split(/\s+/).filter(Boolean);

  if (words.length === 0) return '""';

  const fuzzyParts = words.map(word => {
    const terms = new Set<string>();

    if (hasCJK(word)) {
      // CJK: generate trigrams. Words < 3 chars -> caller uses LIKE fallback.
      if (word.length < 3) return null;
      for (let i = 0; i <= word.length - 3; i++) {
        terms.add(`"${word.slice(i, i + 3)}"`);
      }
    } else {
      // Latin / mixed: words < 3 chars -> caller uses LIKE fallback.
      if (word.length < 3) return null;
      // Exact phrase
      terms.add(`"${word}"`);
      // All trigrams from the word
      for (let i = 0; i <= word.length - 3; i++) {
        terms.add(`"${word.slice(i, i + 3)}"`);
      }
      // Edit-distance-1 variants (handles single typos like "laod" -> "load")
      if (word.length <= 8) {
        for (const edit of getEdits(word)) {
          if (edit.length >= 3) {
            terms.add(`"${edit}"`);
          }
        }
      }
    }

    return `(${Array.from(terms).join(' OR ')})`;
  });

  // Any null part means a token can't be expressed in FTS -> LIKE fallback
  if (fuzzyParts.some(p => p === null)) return '';

  return fuzzyParts.join(' AND ');
}

export function search(
  branchName: string,
  locale: string,
  query: string,
  offset = 0,
  limit = 20,
): any[] {
  const safeLimit = Math.max(1, Math.min(limit, 100));
  const safeOffset = Math.max(0, offset);
  const ftsQuery = buildFuzzyQuery(query);

  // When ftsQuery is empty the query is too short for trigram FTS (< 3 chars
  // per token, e.g. "lo", "AI", "東京"). Fall back to a case-insensitive LIKE
  // search directly on the section content. Covers:
  //   - Short Latin abbreviations: "JS", "AI", "v2"
  //   - 1-2 char CJK queries: "東", "東京", "検索"
  if (!ftsQuery) {
    const likePattern = `%${query.replace(/['"*()%_]/g, ' ').trim()}%`;
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
        substr(fts.content, 1, 200) as snippet
      FROM visible v
      JOIN blob_sections_fts fts ON v.hash = fts.hash
      JOIN blobs b ON v.hash = b.hash
      WHERE (fts.content LIKE ? OR fts.breadcrumb LIKE ?)
      ORDER BY v.path
      LIMIT ? OFFSET ?`,
      )
      .all(branchName, `${locale}/%`, likePattern, likePattern, safeLimit, safeOffset) as any[];
  }

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
    .all(branchName, `${locale}/%`, ftsQuery, safeLimit, safeOffset) as any[];
}


export function searchAllBranches(
  locale: string,
  query: string,
  branchNames: string[],
  offset = 0,
  limit = 20,
): any[] {
  const safeLimit = Math.max(1, Math.min(limit, 100));
  const safeOffset = Math.max(0, offset);
  const pathOwner = new Map<string, string>();
  const results: any[] = [];

  for (const branchName of branchNames) {
    const branchResults = search(branchName, locale, query, 0, safeOffset + safeLimit);
    for (const r of branchResults) {
      if (!pathOwner.has(r.path)) {
        pathOwner.set(r.path, branchName);
      }
      // Only include results from the branch that "owns" this path
      // (the first branch in the list that contains it)
      if (pathOwner.get(r.path) === branchName) {
        results.push({ ...r, sourceBranch: branchName });
      }
    }
  }

  return results.slice(safeOffset, safeOffset + safeLimit);
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
