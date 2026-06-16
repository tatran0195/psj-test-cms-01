/**
 * Utilities to push changes directly to GitHub via the Git Database API.
 * This completely fulfills the "Docs-as-Code" vision!
 */

export async function pushToGitHub(
  token: string,
  repo: string, // e.g., "tatran0195/psjnext"
  branch: string, // e.g., "release/5.2.0"
  message: string,
  files: { path: string; content: string; mime_type: string }[],
  deletedPaths: string[] = []
) {
  const branchPath = branch === "main" ? "heads/main" : `heads/${branch}`;

  let latestCommitSha: string | undefined;
  let baseTreeSha: string | undefined;

  // 1. Get the current commit SHA of the branch
  let refRes = await fetch(`https://api.github.com/repos/${repo}/git/refs/${branchPath}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  
  if (refRes.ok) {
    const refData = await refRes.json();
    latestCommitSha = refData.object.sha;

    // 2. Get the base tree SHA
    const commitRes = await fetch(`https://api.github.com/repos/${repo}/git/commits/${latestCommitSha}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const commitData = await commitRes.json();
    baseTreeSha = commitData.tree.sha;
  } else if (refRes.status !== 404) {
    const errorData = await refRes.json().catch(() => ({}));
    throw new Error(`Failed to fetch branch reference from GitHub (${branchPath}): ${JSON.stringify(errorData)}`);
  }

  // 3. Create Blobs for each file
  const treeNodes: any[] = [];
  for (const file of files) {
    const isMarkdown = file.mime_type === "text/markdown";
    
    // For large/binary files or base64 data, we must POST a blob first
    const blobRes = await fetch(`https://api.github.com/repos/${repo}/git/blobs`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ 
        content: file.content, 
        encoding: isMarkdown ? "utf-8" : "base64" 
      })
    });
    const blobData = await blobRes.json();
    if (!blobRes.ok) throw new Error(`Failed to create blob: ${JSON.stringify(blobData)}`);

    treeNodes.push({
      path: file.path,
      mode: "100644",
      type: "blob",
      sha: blobData.sha
    });
  }

  // 3b. Handle deletions
  for (const deletedPath of deletedPaths) {
    treeNodes.push({
      path: deletedPath,
      mode: "100644",
      type: "blob",
      sha: null // Passing null sha removes the file from the base tree
    });
  }

  // 4. Create new Tree
  const treePayload: any = { tree: treeNodes };
  if (baseTreeSha) {
    treePayload.base_tree = baseTreeSha;
  }

  const treeRes = await fetch(`https://api.github.com/repos/${repo}/git/trees`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(treePayload)
  });
  const newTreeData = await treeRes.json();
  if (!treeRes.ok) throw new Error(`Failed to create tree: ${JSON.stringify(newTreeData)}`);

  // 5. Create new Commit
  const commitPayload: any = {
    message: message,
    tree: newTreeData.sha,
    parents: latestCommitSha ? [latestCommitSha] : []
  };

  const newCommitRes = await fetch(`https://api.github.com/repos/${repo}/git/commits`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(commitPayload)
  });
  const newCommitData = await newCommitRes.json();
  if (!newCommitRes.ok) throw new Error(`Failed to create commit: ${JSON.stringify(newCommitData)}`);

  // 6. Update or Create Branch Reference
  if (latestCommitSha) {
    const updateRefRes = await fetch(`https://api.github.com/repos/${repo}/git/refs/${branchPath}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        sha: newCommitData.sha,
        force: false
      })
    });

    if (!updateRefRes.ok) {
      throw new Error("Failed to push commit to GitHub repository.");
    }
  } else {
    // Create new branch reference pointing to the orphan commit
    const createRefRes = await fetch(`https://api.github.com/repos/${repo}/git/refs`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        ref: `refs/${branchPath}`,
        sha: newCommitData.sha
      })
    });

    if (!createRefRes.ok) {
      const errorData = await createRefRes.json().catch(() => ({}));
      throw new Error(`Failed to create new branch on GitHub: ${JSON.stringify(errorData)}`);
    }
  }

  return newCommitData.sha;
}