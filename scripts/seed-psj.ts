import crypto from "crypto";
import matter from "gray-matter";
import { DatabaseSync } from "node:sqlite";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

const dbPath = path.resolve(process.cwd(), "cms.db");
const db = new DatabaseSync(dbPath);

function computeHash(content: string) {
  return crypto.createHash("sha256").update(content).digest("hex");
}
function generateCommitId() {
  return crypto.randomBytes(20).toString("hex");
}
async function processContent(content: string) {
  const { data: frontmatter, content: rawContent } = matter(content);
  
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypePrettyCode, {
      theme: "github-dark"
    })
    .use(rehypeStringify)
    .process(rawContent);

  const html = String(file);
  return {
    raw_content: content,
    frontmatter: JSON.stringify(frontmatter),
    parsed_ast: JSON.stringify({ html }),
    title: frontmatter.title || "",
    searchableContent: rawContent
  };
}

async function commitToDB(branch: string, parentVersion: string | null, author: string, message: string, changedFiles: any[]) {
  const newCommitId = generateCommitId();
  
  const processedFiles = await Promise.all(changedFiles.map(async file => {
    return { ...file, hash: computeHash(file.content), processed: await processContent(file.content) };
  }));

  db.exec("BEGIN");
  try {
    db.prepare(`INSERT INTO trees (version, parent, author, message) VALUES (?, ?, ?, ?)`).run(newCommitId, parentVersion, author, message);
    
    const changedHashes = new Map();
    for (const item of processedFiles) {
      db.prepare(`INSERT OR IGNORE INTO blobs (hash, mime_type, raw_content, frontmatter, parsed_ast) VALUES (?, 'text/markdown', ?, ?, ?)`)
        .run(item.hash, item.processed.raw_content, item.processed.frontmatter, item.processed.parsed_ast);
      db.prepare(`INSERT OR IGNORE INTO blobs_fts (hash, content, title) VALUES (?, ?, ?)`)
        .run(item.hash, item.processed.searchableContent, item.processed.title);
      changedHashes.set(item.path, item.hash);
    }

    if (parentVersion) {
      db.prepare(`INSERT INTO tree_entries (version, path, hash) SELECT ?, path, hash FROM tree_entries WHERE version = ?`).run(newCommitId, parentVersion);
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

(async () => {
  console.log("Seeding Unified-rendered PSJ Docs...");
  // 1. Base initialization for v4.1.2
  const initCommit = generateCommitId();
  db.prepare(`INSERT OR IGNORE INTO trees (version, parent, author, message) VALUES (?, null, 'system', 'Init v4.1.2')`).run(initCommit);
  db.prepare(`INSERT OR IGNORE INTO branches (name, head_version) VALUES ('v4.1.2', ?)`).run(initCommit);

  const v4Head = await commitToDB("v4.1.2", initCommit, "system", "Create v4.1.2 documentation", [
    {
      path: "general/intro.mdx",
      content: "---\ntitle: Introduction to PSJ\n---\n# PSJ Environment\nPSJ (Parametric Scripting Journal) is a powerful macro language for CAE simulations."
    },
    {
      path: "api/commands/macro.mdx",
      content: "---\ntitle: Macro Commands\n---\n# `macro.run()`\nExecutes a pre-defined PSJ macro file.\n\n```javascript\n// Example usage\nmacro.run(\"setup.psj\", { x: 10, y: 20 });\n```\n\n**Parameters:**\n- `file` (string): The path to the macro.\n- `args` ([Vector3D](/v4.1.2/api/data-types/vector3d.mdx)): Starting coordinates."
    },
    {
      path: "api/data-types/vector3d.mdx",
      content: "---\ntitle: Vector3D Data Type\n---\n# Vector3D\nRepresents a point or direction in 3D space.\n\n**Fields:**\n- `x` (float): X coordinate.\n- `y` (float): Y coordinate.\n- `z` (float): Z coordinate."
    }
  ]);

  // 2. Branch off v5.2.0 from v4.1.2
  db.prepare(`INSERT OR IGNORE INTO branches (name, head_version) VALUES ('v5.2.0', ?)`).run(v4Head);

  await commitToDB("v5.2.0", v4Head, "system", "Upgrade to v5.2.0", [
    {
      path: "api/commands/psj-command.mdx",
      content: "---\ntitle: PSJ Commands\n---\n# `psj.execute()`\n*New in v5.2.0*\n\nExecutes an advanced simulation block directly from the scripting engine.\n\n```python\n# Python integration snippet\npsj.execute(\n  solver=\"NavierStokes\",\n  iterations=1000\n)\n```"
    },
    {
      path: "api/data-types/vector3d.mdx",
      content: "---\ntitle: Vector3D Data Type\n---\n# Vector3D\nRepresents a point or direction in 3D space.\n\n**Fields:**\n- `x` (float): X coordinate.\n- `y` (float): Y coordinate.\n- `z` (float): Z coordinate.\n- <mark><b>`w` (float)</b></mark>: <i>[Added in v5.2.0]</i> Mass weighting factor."
    }
  ]);

  console.log("✅ PSJ Documentation Seeded with Shiki!");
})();