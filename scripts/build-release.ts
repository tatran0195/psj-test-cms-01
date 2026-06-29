import fs from "fs";
import path from "path";
import { DatabaseSync } from "node:sqlite";

let branchToRelease = process.argv[2];
const sourceDbPath = path.resolve(process.cwd(), "cms.db");
const targetDbPath = path.resolve(process.cwd(), "release.db");

// 1. Copy DB
if (fs.existsSync(targetDbPath)) {
  fs.unlinkSync(targetDbPath);
}
fs.copyFileSync(sourceDbPath, targetDbPath);
console.log(`- Cloned cms.db to release.db`);

const db = new DatabaseSync(targetDbPath);

if (!branchToRelease) {
  const branches = db.prepare("SELECT name FROM branches").all() as {name: string}[];
  if (branches.length === 0) {
    console.error("❌ No branches found in DB");
    process.exit(1);
  }
  const hasMain = branches.find(b => b.name === "main");
  branchToRelease = hasMain ? "main" : branches[0].name;
}

console.log(`Starting Client Release Build for branch: ${branchToRelease}`);

try {
  db.exec("BEGIN TRANSACTION");

  // 2. Remove other branches
  db.prepare("DELETE FROM branches WHERE name != ?").run(branchToRelease);
  console.log(`- Removed non-release branches`);

  // 3. Keep only the head version and its ancestors
  const headVersion = db.prepare("SELECT head_version FROM branches WHERE name = ?").get(branchToRelease) as any;
  if (!headVersion) throw new Error(`Branch ${branchToRelease} not found in DB`);
  
  const keepVersions = new Set<string>();
  let currentVer = headVersion.head_version;
  while (currentVer) {
    keepVersions.add(currentVer);
    const row = db.prepare("SELECT parent FROM trees WHERE version = ?").get(currentVer) as any;
    currentVer = row ? row.parent : null;
  }
  
  // 4. Delete tree entries not in keepVersions
  db.prepare(`DELETE FROM tree_entries WHERE version NOT IN (${Array.from(keepVersions).map(() => '?').join(',')})`).run(...Array.from(keepVersions));
  
  // 5. Delete trees not in keepVersions
  db.prepare(`DELETE FROM trees WHERE version NOT IN (${Array.from(keepVersions).map(() => '?').join(',')})`).run(...Array.from(keepVersions));
  console.log(`- Pruned historical tree nodes not related to release`);

  // 6. Garbage Collect Blobs (Very important for IP protection)
  const orphanBlobs = db.prepare(`
    SELECT hash FROM blobs WHERE hash NOT IN (
      SELECT DISTINCT hash FROM tree_entries
    )
  `).all() as {hash: string}[];

  if (orphanBlobs.length > 0) {
    const orphanHashes = orphanBlobs.map(b => b.hash);
    
    // Note: FTS5 requires deleting using MATCH or from the virtual table directly is not supported like this sometimes,
    // actually we can just delete from blobs_fts where hash IN (...) if it has a rowid.
    // The safest FTS5 delete by column is: `DELETE FROM blobs_fts WHERE hash = ?`
    const deleteFts = db.prepare("DELETE FROM blob_sections_fts WHERE hash = ?");
    const deleteBlob = db.prepare("DELETE FROM blobs WHERE hash = ?");
    
    let deletedCount = 0;
    for (const orphan of orphanHashes) {
      deleteFts.run(orphan);
      deleteBlob.run(orphan);
      deletedCount++;
    }
    console.log(`- Garbage Collected ${deletedCount} orphan blobs and FTS indexes to protect IP`);
  } else {
    console.log(`- No orphan blobs to collect`);
  }

  db.exec("COMMIT");
  
  // 7. Vacuum to shrink file size
  db.exec("VACUUM");
  console.log(`- Vacuumed release.db`);
  
  console.log("✅ Release DB built successfully!");

} catch (error) {
  db.exec("ROLLBACK");
  console.error("❌ Failed to build release DB:", error);
  process.exit(1);
}
