import type { DatabaseSync } from "node:sqlite";

interface Migration {
  id: number;
  name: string;
  up: (db: DatabaseSync) => void;
}

export const migrations: Migration[] = [
  {
    id: 1,
    name: "init_schema",
    up(db) {
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
    },
  },
  {
    id: 2,
    name: "add_audit_logs",
    up(db) {
      db.exec(`
        CREATE TABLE IF NOT EXISTS audit_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            action TEXT NOT NULL,
            actor TEXT NOT NULL,
            target TEXT,
            detail TEXT,
            ip TEXT,
            user_agent TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON audit_logs(action);
        CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON audit_logs(actor);
        CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);
      `);
    },
  },
  {
    id: 3,
    name: "add_section_fts",
    up(db) {
      db.exec(`
        CREATE VIRTUAL TABLE IF NOT EXISTS blob_sections_fts USING fts5(
          hash UNINDEXED,
          heading_id UNINDEXED,
          breadcrumb,
          content,
          tokenize="trigram"
        );
        CREATE INDEX IF NOT EXISTS idx_tree_entries_version ON tree_entries(version);
        CREATE INDEX IF NOT EXISTS idx_trees_parent ON trees(parent);
      `);
    },
  },
  {
    id: 4,
    name: "add_migrations_meta",
    up(db) {
      db.exec(`
        CREATE TABLE IF NOT EXISTS migrations_meta (
            id INTEGER PRIMARY KEY,
            applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
      `);
    },
  },
  {
    id: 5,
    name: "drop_orphaned_blobs_fts",
    up(db) {
      // blobs_fts (document-level FTS5 from migration 1) is superseded by
      // blob_sections_fts (section-level, added in migration 3).
      // No code writes to blobs_fts after migration 1, so it is safe to drop.
      db.exec(`DROP TABLE IF EXISTS blobs_fts;`);
    },
  },
];

export function runMigrations(db: DatabaseSync) {
  // Ensure migrations_meta exists before we query it
  db.exec(`
    CREATE TABLE IF NOT EXISTS migrations_meta (
      id INTEGER PRIMARY KEY,
      applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const applied = new Set<number>();
  try {
    const rows = db
      .prepare("SELECT id FROM migrations_meta")
      .all() as { id: number }[];
    rows.forEach((r) => applied.add(r.id));
  } catch {
    // Very old db without the table — will be created above next run
  }

  for (const migration of migrations) {
    if (!applied.has(migration.id)) {
      migration.up(db);
      db.prepare("INSERT INTO migrations_meta (id) VALUES (?)").run(migration.id);
    }
  }
}
