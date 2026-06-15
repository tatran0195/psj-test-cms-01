/**
 * Utilities to push changes directly to GitHub via the Git Database API.
 * This completely fulfills the "Docs-as-Code" vision!
 */

export async function pushToGitHub(
  token: string,
  repo: string, // e.g., "tatran0195/psjnext"
  branch: string, // e.g., "release/5.2.0"
  message: string,
  files: { path: string; content: string; mime_type: string }[]
) {
  const branchPath = branch === "main" ? "heads/main" : `heads/${branch}`;

  // 1. Get the current commit SHA of the branch
  const refRes = await fetch(`https://api.github.com/repos/${repo}/git/refs/${branchPath}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!refRes.ok) throw new Error("Failed to fetch branch reference from GitHub.");
  const refData = await refRes.json();
  const latestCommitSha = refData.object.sha;

  // 2. Get the base tree SHA
  const commitRes = await fetch(`https://api.github.com/repos/${repo}/git/commits/${latestCommitSha}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const commitData = await commitRes.json();
  const baseTreeSha = commitData.tree.sha;

  // 3. Create Blobs for each file
  const treeNodes = [];
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

    treeNodes.push({
      path: file.path,
      mode: "100644",
      type: "blob",
      sha: blobData.sha
    });
  }

  // 4. Create new Tree
  const treeRes = await fetch(`https://api.github.com/repos/${repo}/git/trees`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: treeNodes
    })
  });
  const newTreeData = await treeRes.json();

  // 5. Create new Commit
  const newCommitRes = await fetch(`https://api.github.com/repos/${repo}/git/commits`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: message,
      tree: newTreeData.sha,
      parents: [latestCommitSha]
    })
  });
  const newCommitData = await newCommitRes.json();

  // 6. Update Branch Reference
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

  return newCommitData.sha;
}