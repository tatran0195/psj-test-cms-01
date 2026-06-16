import { DatabaseSync } from "node:sqlite";
import path from "path";
import { runMigrations } from "./lib/migrations.js";
import { logger } from "./lib/logger.js";

const dbPath = path.resolve(process.cwd(), process.env.DB_FILE || "cms.db");
const db = new DatabaseSync(dbPath);

db.exec("PRAGMA journal_mode = WAL");
db.exec("PRAGMA synchronous = NORMAL");
db.exec("PRAGMA foreign_keys = ON");
db.exec("PRAGMA busy_timeout = 5000"); // Wait up to 5s for locks

// Run idempotent migrations
try {
  runMigrations(db);
  logger.info("Database migrations applied successfully.");
} catch (err) {
  logger.error({ err }, "Database migration failed");
  throw err;
}

export { db };
