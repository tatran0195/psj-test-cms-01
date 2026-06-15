# Docs CMS - Git-like Versioning with SQLite & React Router v7

This project implements the theoretical flat-tree Git-like versioning system inside a fast React Router v7 (Framework mode) application.

## Core Architecture
- **Framework:** React Router v7 (Framework mode - SSR + Hydration)
- **Database:** SQLite3 (\`node:sqlite\`) with WAL mode for high performance.
- **Validation:** Zod schemas.
- **Markdown parsing:** Marked + Gray-Matter.

## How the Versioning Works
- **Immutability:** \`blobs\` table stores unique contents (deduplicated by SHA256 hash).
- **Flattened Tree:** \`tree_entries\` stores a flat mapping of every file path to its blob hash for every version. Querying a file is an \`O(1)\` operation (\`SELECT * FROM tree_entries WHERE version = ? AND path = ?\`).
- **AST / Frontmatter Cache:** To avoid parsing Markdown on every request, the AST and Frontmatter metadata are computed once at insert and saved inside the \`blobs\` table.
- **Transactions:** Version creation operates inside a bulk SQLite transaction to guarantee consistency.
- **FTS5 Integration:** Full Text Search is completely implemented using SQLite's FTS5 engine (`blobs_fts`), joined against the specific version's \`tree_entries\` tree to guarantee search boundaries by version.

## Usage

Start the app locally:
\`\`\`bash
cd rr7-cms
npm install
npm run build
npm run start
\`\`\`

The app will seed \`v1.0.0\` and \`v1.1.0\` upon the first run.
Open \`http://localhost:3000\` to see the multi-version documentation CMS in action!