import crypto from "crypto";
import matter from "gray-matter";
import { DatabaseSync } from "node:sqlite";
import path from "path";

// Unified Ecosystem
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import * as strUtils from "mdast-util-to-string";
import GithubSlugger from "github-slugger";

const dbPath = path.resolve(process.cwd(), process.env.DB_FILE || "cms.db");
const db = new DatabaseSync(dbPath);

db.exec("PRAGMA journal_mode = WAL");
db.exec("PRAGMA synchronous = NORMAL");

// Setup the new Advanced FTS Schema if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS blobs (
      hash TEXT PRIMARY KEY,
      mime_type TEXT DEFAULT 'text/markdown',
      raw_content BLOB NOT NULL,
      frontmatter TEXT,
      parsed_ast TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS trees (
      version TEXT PRIMARY KEY,
      parent TEXT REFERENCES trees(version),
      author TEXT DEFAULT 'system',
      message TEXT DEFAULT 'Commit',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS branches (
      name TEXT PRIMARY KEY,
      head_version TEXT REFERENCES trees(version),
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS tree_entries (
      version TEXT REFERENCES trees(version),
      path TEXT,
      hash TEXT REFERENCES blobs(hash),
      PRIMARY KEY (version, path)
  );
  
  -- The Ultimate Section-based FTS5 Engine
  CREATE VIRTUAL TABLE IF NOT EXISTS blob_sections_fts USING fts5(
    hash UNINDEXED, 
    heading_id UNINDEXED, 
    breadcrumb, 
    content, 
    tokenize="trigram"
  );
`);

function computeHash(content: string | Buffer) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function generateCommitId() {
  return crypto.randomBytes(20).toString("hex");
}

function remarkExtractToc() {
  return (tree: any, file: any) => {
    const toc: any[] = [];
    visit(tree, "heading", (node: any) => {
      if (node.depth === 2 || node.depth === 3) {
        const text = node.children.filter((c: any) => c.type === "text").map((c: any) => c.value).join("");
        const id = text.toLowerCase().replace(/\\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        toc.push({ level: node.depth, id, text });
      }
    });
    file.data.toc = toc;
  };
}

// ✨ ADVANCED ALGORITHM: Chunk Markdown into Sections
function remarkExtractSections() {
  return (tree: any, file: any) => {
    const slugger = new GithubSlugger();
    const sections: any[] = [];
    let currentBreadcrumb: string[] = [];
    let currentSection = { heading_id: "", breadcrumb: "", content: "" };

    for (const node of tree.children) {
      if (node.type === "heading") {
        const text = strUtils.toString(node);
        const id = slugger.slug(text);

        // Push previous section if it has content
        if (currentSection.content.trim() || currentSection.breadcrumb) {
          sections.push({ ...currentSection });
        }

        // Update Breadcrumb hierarchy
        currentBreadcrumb[node.depth - 1] = text;
        currentBreadcrumb = currentBreadcrumb.slice(0, node.depth);

        currentSection = {
          heading_id: id,
          breadcrumb: currentBreadcrumb.filter(Boolean).join(" > "),
          content: ""
        };
      } else {
        currentSection.content += strUtils.toString(node) + "\\n";
      }
    }
    // Push the final section
    if (currentSection.content.trim() || currentSection.breadcrumb) {
      sections.push({ ...currentSection });
    }
    file.data.sections = sections;
  };
}

function rehypeCopyButton() {
  return (tree: any) => {
    visit(tree, "element", (node: any) => {
      if (node.tagName === "figure" && node.properties && "dataRehypePrettyCodeFigure" in node.properties) {
        node.children.push({
          type: "element",
          tagName: "button",
          properties: { className: ["copy-btn"], title: "Copy code", "data-copy": "" },
          children: [{
            type: "element",
            tagName: "svg",
            properties: { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            children: [
              { type: "element", tagName: "rect", properties: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }, children: [] },
              { type: "element", tagName: "path", properties: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }, children: [] }
            ]
          }]
        });
      }
    });
  };
}

export async function processContent(content: string | Buffer, mimeType: string = "text/markdown") {
  if (mimeType === "text/markdown" && typeof content === "string") {
    const { data: frontmatter, content: rawContent } = matter(content);
    
    const processor = unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkExtractToc)
      .use(remarkExtractSections) // Our new AI Chunking engine!
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
      .use(rehypeKatex, { strict: false })
      .use(rehypePrettyCode, {
        theme: "github-dark",
        keepBackground: true,
      })
      .use(rehypeCopyButton);

    const hastTree = await processor.run(processor.parse(rawContent));
    
    const vfile = { data: { toc: [], sections: [] } };
    remarkExtractToc()(hastTree, vfile as any);
    remarkExtractSections()(processor.parse(rawContent), vfile as any);
    
    const parsed_ast = JSON.stringify({ 
      hast: hastTree, 
      toc: vfile.data.toc 
    });

    return {
      raw_content: content,
      frontmatter: JSON.stringify(frontmatter),
      parsed_ast,
      title: frontmatter.title || "",
      searchableContent: rawContent,
      sections: vfile.data.sections // We return the sections to insert them into DB
    };
  }
  
  return {
    raw_content: Buffer.isBuffer(content) ? content : Buffer.from(content as string, "base64"),
    frontmatter: null,
    parsed_ast: null,
    title: "",
    searchableContent: "",
    sections: []
  };
}

export function getBranches() {
  return db.prepare("SELECT * FROM branches ORDER BY name ASC").all() as any[];
}

export function getBranchHead(branchName: string) {
  const b = db.prepare("SELECT head_version FROM branches WHERE name = ?").get(branchName) as any;
  return b ? b.head_version : null;
}

export function createBranch(newBranch: string, fromBranch: string) {
  const baseVersion = getBranchHead(fromBranch);
  if (!baseVersion) throw new Error("Base branch not found");
  db.prepare("INSERT INTO branches (name, head_version) VALUES (?, ?)").run(newBranch, baseVersion);
}

export function getTree(version: string, locale: string) {
  return db.prepare(`SELECT path FROM tree_entries WHERE version = ? AND path LIKE ? ORDER BY path ASC`).all(version, `${locale}/%`) as { path: string }[];
}

export function getFile(version: string, path: string) {
  return db.prepare(`
    SELECT b.mime_type, b.raw_content, b.frontmatter, b.parsed_ast
    FROM tree_entries te
    JOIN blobs b ON te.hash = b.hash
    WHERE te.version = ? AND te.path = ?
  `).get(version, path) as any;
}

// ✨ THE ULTIMATE SEARCH ENGINE: Section-based with Breadcrumbs
export function search(version: string, locale: string, query: string) {
  return db.prepare(`
    SELECT 
      te.path, 
      b.frontmatter, 
      fts.heading_id, 
      fts.breadcrumb, 
      snippet(blob_sections_fts, 3, '<mark>', '</mark>', '...', 20) as snippet
    FROM tree_entries te
    JOIN blob_sections_fts fts ON te.hash = fts.hash
    JOIN blobs b ON te.hash = b.hash
    WHERE te.version = ? AND te.path LIKE ? AND blob_sections_fts MATCH ?
    ORDER BY rank LIMIT 20
  `).all(version, `${locale}/%`, query) as any[];
}

export function getFileHistory(branchName: string, path: string) {
  const query = `
    WITH RECURSIVE branch_history(version, parent, author, message, created_at) AS (
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
    ORDER BY bh.created_at DESC;
  `;
  
  const rows = db.prepare(query).all(branchName, path) as any[];
  const changes = [];
  let lastHash = null;
  for (let i = rows.length - 1; i >= 0; i--) {
    if (rows[i].hash !== lastHash) {
      changes.unshift(rows[i]); 
      lastHash = rows[i].hash;
    }
  }
  return changes;
}

export async function commitChanges({ branch, author, message, changedFiles, deletedFiles }: any) {
  const parentVersion = getBranchHead(branch);
  const newCommitId = generateCommitId();

  const processedFiles = await Promise.all(changedFiles.map(async (file: any) => {
    const processed = await processContent(file.content, file.mime_type);
    const hash = computeHash(processed.raw_content);
    return { ...file, hash, processed };
  }));

  db.exec("BEGIN");
  try {
    db.prepare(`INSERT INTO trees (version, parent, author, message) VALUES (?, ?, ?, ?)`).run(newCommitId, parentVersion, author, message);
    
    const changedHashes = new Map();
    const insertBlob = db.prepare(`INSERT OR IGNORE INTO blobs (hash, mime_type, raw_content, frontmatter, parsed_ast) VALUES (?, ?, ?, ?, ?)`);
    const insertSection = db.prepare(`INSERT INTO blob_sections_fts (hash, heading_id, breadcrumb, content) VALUES (?, ?, ?, ?)`);

    for (const item of processedFiles) {
      insertBlob.run(item.hash, item.mime_type || 'text/markdown', item.processed.raw_content, item.processed.frontmatter, item.processed.parsed_ast);
      
      if (item.mime_type === "text/markdown" || !item.mime_type) {
        // We only insert into FTS if the hash is not already indexed
        // This is safe because if the blob already existed, its sections are already indexed!
        const existingFTS = db.prepare("SELECT 1 FROM blob_sections_fts WHERE hash = ? LIMIT 1").get(item.hash);
        if (!existingFTS && item.processed.sections) {
          for (const section of item.processed.sections) {
            insertSection.run(item.hash, section.heading_id, section.breadcrumb, section.content);
          }
        }
      }
      changedHashes.set(item.path, item.hash);
    }

    if (parentVersion) {
      const copyTreeEntries = db.prepare(`
        INSERT INTO tree_entries (version, path, hash)
        SELECT ?, path, hash FROM tree_entries 
        WHERE version = ? AND path NOT IN (` + 
        (deletedFiles.length > 0 ? deletedFiles.map(() => '?').join(',') : "''") + `)
      `);
      if (deletedFiles.length > 0) {
        copyTreeEntries.run(newCommitId, parentVersion, ...deletedFiles);
      } else {
        copyTreeEntries.run(newCommitId, parentVersion);
      }
    }

    const insertTreeEntry = db.prepare(`INSERT OR REPLACE INTO tree_entries (version, path, hash) VALUES (?, ?, ?)`);
    for (const [path, hash] of changedHashes.entries()) {
      insertTreeEntry.run(newCommitId, path, hash);
    }

    db.prepare(`INSERT OR REPLACE INTO branches (name, head_version, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)`).run(branch, newCommitId);
    db.exec("COMMIT");
  } catch (err) {
    db.exec("ROLLBACK");
    throw err;
  }
  return newCommitId;
}