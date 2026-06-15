import { DatabaseSync } from "node:sqlite";
import path from "path";

const dbPath = path.resolve(process.cwd(), process.env.DB_FILE || "cms.db");
const db = new DatabaseSync(dbPath);

db.exec("PRAGMA journal_mode = WAL");
db.exec("PRAGMA synchronous = NORMAL");
db.exec("PRAGMA foreign_keys = ON");

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

  CREATE INDEX IF NOT EXISTS idx_tree_entries_path ON tree_entries(path);

  CREATE VIRTUAL TABLE IF NOT EXISTS blobs_fts USING fts5(
    hash UNINDEXED, content, title, tokenize="unicode61"
  );
`);

// Patches for existing tables
try { db.exec("ALTER TABLE trees ADD COLUMN author TEXT DEFAULT 'system'"); } catch(e) {}
try { db.exec("ALTER TABLE trees ADD COLUMN message TEXT DEFAULT 'Commit'"); } catch(e) {}
try { db.exec("ALTER TABLE blobs ADD COLUMN mime_type TEXT DEFAULT 'text/markdown'"); } catch(e) {}

export { db };