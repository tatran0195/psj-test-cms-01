const { DatabaseSync } = require('node:sqlite');
const db = new DatabaseSync('cms.db');

const sumSizes = db.prepare("SELECT SUM(length(raw_content)) as raw_sum, SUM(length(parsed_ast)) as ast_sum FROM blobs").get();
console.log("Total bytes in raw_content:", sumSizes.raw_sum);
console.log("Total bytes in parsed_ast:", sumSizes.ast_sum);
