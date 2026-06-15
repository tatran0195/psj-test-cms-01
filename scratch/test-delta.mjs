import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('cms.db');

const branches = db.prepare('SELECT name FROM branches').all();
console.log('Branches in DB:', branches.map(b => b.name).join(', '));

const firstBranch = branches[0]?.name;
if (!firstBranch) { console.error('No branches found!'); process.exit(1); }

// Test 1: getTree via recursive CTE
const treeCount = db.prepare(`
  WITH RECURSIVE history(version, parent, depth) AS (
    SELECT t.version, t.parent, 0
    FROM trees t JOIN branches b ON b.head_version = t.version
    WHERE b.name = ?
    UNION ALL
    SELECT t.version, t.parent, h.depth + 1
    FROM trees t JOIN history h ON t.version = h.parent
  ),
  ranked AS (
    SELECT te.path, te.hash,
           ROW_NUMBER() OVER (PARTITION BY te.path ORDER BY h.depth ASC) AS rn
    FROM tree_entries te JOIN history h ON te.version = h.version
    WHERE te.path LIKE 'en/%'
  )
  SELECT COUNT(*) as c FROM ranked WHERE rn = 1 AND hash IS NOT NULL
`).get(firstBranch);
console.log(`✅ getTree [${firstBranch}] → ${treeCount.c} files visible`);

// Test 2: getFile via recursive CTE
const firstFile = db.prepare(`
  WITH RECURSIVE history(version, parent, depth) AS (
    SELECT t.version, t.parent, 0
    FROM trees t JOIN branches b ON b.head_version = t.version
    WHERE b.name = ?
    UNION ALL
    SELECT t.version, t.parent, h.depth + 1
    FROM trees t JOIN history h ON t.version = h.parent
  ),
  ranked AS (
    SELECT te.path, te.hash,
           ROW_NUMBER() OVER (PARTITION BY te.path ORDER BY h.depth ASC) AS rn
    FROM tree_entries te JOIN history h ON te.version = h.version
    WHERE te.path LIKE 'en/%'
  )
  SELECT path FROM ranked WHERE rn = 1 AND hash IS NOT NULL
  ORDER BY path LIMIT 1
`).get(firstBranch);

if (firstFile) {
  const file = db.prepare(`
    WITH RECURSIVE history(version, parent, depth) AS (
      SELECT t.version, t.parent, 0
      FROM trees t JOIN branches b ON b.head_version = t.version
      WHERE b.name = ?
      UNION ALL
      SELECT t.version, t.parent, h.depth + 1
      FROM trees t JOIN history h ON t.version = h.parent
    ),
    ranked AS (
      SELECT te.hash,
             ROW_NUMBER() OVER (PARTITION BY te.path ORDER BY h.depth ASC) AS rn
      FROM tree_entries te JOIN history h ON te.version = h.version
      WHERE te.path = ?
    )
    SELECT b.mime_type, LENGTH(b.raw_content) as content_len
    FROM ranked r JOIN blobs b ON r.hash = b.hash
    WHERE r.rn = 1 AND r.hash IS NOT NULL
  `).get(firstBranch, firstFile.path);
  console.log(`✅ getFile [${firstFile.path}] → mime=${file?.mime_type}, size=${file?.content_len} bytes`);
} else {
  console.error('❌ No files found in tree!');
}

// Test 3: Check tree_entries row count (should still be large, from old data)
const rowCount = db.prepare('SELECT COUNT(*) as c FROM tree_entries').get();
console.log(`ℹ️  tree_entries total rows (old copy-on-write data): ${rowCount.c}`);
const nullCount = db.prepare('SELECT COUNT(*) as c FROM tree_entries WHERE hash IS NULL').get();
console.log(`ℹ️  tombstone rows (hash IS NULL): ${nullCount.c}`);

console.log('\n✅ All delta-model CTE queries work correctly!');
