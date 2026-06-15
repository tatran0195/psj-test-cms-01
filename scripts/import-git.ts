import crypto from "crypto";
import fs from "fs";
import { DatabaseSync } from "node:sqlite";
import path from "path";
import { commitChanges } from "../app/cms.server";

const dbPath = path.resolve(process.cwd(), process.env.DB_FILE || "cms.db");
const db = new DatabaseSync(dbPath);

function walkDir(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== ".git" && file !== "node_modules") {
        walkDir(path.join(dir, file), fileList);
      }
    } else {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

function getMimeType(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.md' || ext === '.mdx') return 'text/markdown';
  if (ext === '.png') return 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.svg') return 'image/svg+xml';
  if (ext === '.gif') return 'image/gif';
  return 'application/octet-stream';
}

async function runImport() {
  const branchName = "release/5.2.0";
  const sourceDir = "/tmp/psjnext"; // We will import BOTH English and Japanese
  
  console.log(`Importing from ${sourceDir} to branch ${branchName}...`);

  // Ensure branch exists or create from scratch
  let headVersion = null;
  const b = db.prepare("SELECT head_version FROM branches WHERE name = ?").get(branchName) as any;
  if (!b) {
    console.log(`Creating new branch ${branchName}...`);
    
    // We cannot call generateCommitId directly as it is not exported, but we can just use crypto or a dummy hash.
    // It's safer to just let commitChanges handle parent = null if we drop the branch check, 
    // but commitChanges requires the branch to exist. 
    // Let's create it manually:
    const initCommit = crypto.randomBytes(20).toString("hex");
    db.prepare(`INSERT OR IGNORE INTO trees (version, parent, author, message) VALUES (?, null, 'system', 'Init')`).run(initCommit);
    db.prepare(`INSERT OR IGNORE INTO branches (name, head_version) VALUES (?, ?)`).run(branchName, initCommit);
    headVersion = initCommit;
  } else {
    headVersion = b.head_version;
  }

  const allFiles = [...walkDir(path.join(sourceDir, "en")), ...walkDir(path.join(sourceDir, "ja"))];
  const changedFiles = [];

  for (const filePath of allFiles) {
    // Determine if en or ja
    const isEn = filePath.startsWith(path.join(sourceDir, "en"));
    const localeDir = isEn ? path.join(sourceDir, "en") : path.join(sourceDir, "ja");
    const localePrefix = isEn ? "en" : "ja";
    
    const relativePath = path.relative(localeDir, filePath).replace(/\\/g, '/');
    const finalPath = `${localePrefix}/${relativePath}`;
    
    const mimeType = getMimeType(filePath);
    
    // Skip large zip files for DB performance
    if (filePath.endsWith(".zip")) continue;
    
    let content: string | Buffer;
    if (mimeType === 'text/markdown') {
      content = fs.readFileSync(filePath, 'utf-8');
    } else {
      content = fs.readFileSync(filePath);
      // For commitChanges, binary needs to be base64 string
      content = content.toString("base64");
    }

    changedFiles.push({
      path: finalPath,
      content,
      mime_type: mimeType
    });
  }

  console.log(`Found ${changedFiles.length} files. Processing and hashing using core Unified Engine...`);

  // We use the core commitChanges which will run processContent, extract sections, and populate FTS5 properly!
  const newCommitId = await commitChanges({
    branch: branchName,
    author: "system",
    message: "Import from GitHub repo with Section-based Search",
    changedFiles,
    deletedFiles: []
  });

  console.log(`✅ Successfully imported ${changedFiles.length} files to ${branchName}. New commit: ${newCommitId}`);
}

runImport().catch(console.error);