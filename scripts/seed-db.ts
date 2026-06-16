import { DatabaseSync } from "node:sqlite";
import path from "path";
import { runMigrations } from "../app/lib/migrations.js";

const dbPath = path.resolve(process.cwd(), process.env.DB_FILE || "cms.db");
const db = new DatabaseSync(dbPath);

db.exec("PRAGMA journal_mode = WAL");
db.exec("PRAGMA synchronous = NORMAL");
db.exec("PRAGMA foreign_keys = ON");

runMigrations(db);

// Seed a default 'main' branch if none exists
const existing = db.prepare("SELECT 1 FROM branches LIMIT 1").get();
if (!existing) {
  const version = crypto.randomUUID().replace(/-/g, "").slice(0, 20);
  db.prepare("INSERT INTO trees (version, parent, author, message) VALUES (?, ?, ?, ?)").run(
    version, null, "system", "Initial commit"
  );
  db.prepare("INSERT INTO branches (name, head_version) VALUES (?, ?)").run("main", version);
  console.log("✅ Seeded default 'main' branch.");
} else {
  console.log("ℹ️ Branches already exist. Skipping seed.");
}
