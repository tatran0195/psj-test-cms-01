  // The Ultimate Section-based FTS5 Engine (Trigram + Unicode61 for multi-language)
  CREATE VIRTUAL TABLE IF NOT EXISTS blob_sections_fts USING fts5(
    hash UNINDEXED, 
    heading_id UNINDEXED, 
    breadcrumb, 
    content, 
    tokenize="trigram"
  );