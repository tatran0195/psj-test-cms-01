/**
 * Utilities to push changes directly to GitHub via the Git Database API.
 * Includes retry logic with exponential backoff for transient failures.
 */
import { logger } from "./lib/logger.js";

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 3,
  backoffMs = 1000
): Promise<Response> {
  let lastErr: any;
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.status >= 500 && res.status < 600) {
        // Retry on 5xx
        const msg = await res.text().catch(() => "unknown");
        lastErr = new Error(`GitHub API ${res.status}: ${msg}`);
      } else {
        return res;
      }
    } catch (err) {
      lastErr = err;
    }
    const delay = backoffMs * Math.pow(2, attempt);
    logger.warn({ url, attempt, delay }, "GitHub API retry");
    await new Promise(r => setTimeout(r, delay));
  }
  throw lastErr;
}

export async function pushToGitHub(
  token: string,
  repo: string,
  branch: string,
  message: string,
  files: { path: string; content: string; mime_type: string }[],
  deletedPaths: string[] = []
) {
  const branchPath = branch === "main" ? "heads/main" : `heads/${branch}`;

  let latestCommitSha: string | undefined;
  let baseTreeSha: string | undefined;

  // 1. Get the current commit SHA of the branch
  let refRes = await fetchWithRetry(`https://api.github.com/repos/${repo}/git/refs/${branchPath}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.v3+json" },
  });

  if (refRes.ok) {
    const refData = await refRes.json() as any;
    latestCommitSha = refData.object.sha;

    const commitRes = await fetchWithRetry(`https://api.github.com/repos/${repo}/git/commits/${latestCommitSha}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.v3+json" },
    });
    const commitData = await commitRes.json() as any;
    baseTreeSha = commitData.tree.sha;
  } else if (refRes.status !== 404) {
    const errorData = await refRes.json().catch(() => ({}));
    throw new Error(`Failed to fetch branch reference from GitHub (${branchPath}): ${JSON.stringify(errorData)}`);
  }

  // 3. Create Blobs for each file
  const treeNodes: any[] = [];
  for (const file of files) {
    const isMarkdown = file.mime_type === "text/markdown";
    const blobRes = await fetchWithRetry(`https://api.github.com/repos/${repo}/git/blobs`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        content: file.content,
        encoding: isMarkdown ? "utf-8" : "base64",
      }),
    });
    const blobData = await blobRes.json() as any;
    if (!blobRes.ok) throw new Error(`Failed to create blob: ${JSON.stringify(blobData)}`);

    treeNodes.push({
      path: file.path,
      mode: "100644",
      type: "blob",
      sha: blobData.sha,
    });
  }

  for (const deletedPath of deletedPaths) {
    treeNodes.push({
      path: deletedPath,
      mode: "100644",
      type: "blob",
      sha: null,
    });
  }

  // 4. Create new Tree
  const treePayload: any = { tree: treeNodes };
  if (baseTreeSha) {
    treePayload.base_tree = baseTreeSha;
  }

  const treeRes = await fetchWithRetry(`https://api.github.com/repos/${repo}/git/trees`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(treePayload),
  });
  const newTreeData = await treeRes.json() as any;
  if (!treeRes.ok) throw new Error(`Failed to create tree: ${JSON.stringify(newTreeData)}`);

  // 5. Create new Commit
  const commitPayload: any = {
    message: message,
    tree: newTreeData.sha,
    parents: latestCommitSha ? [latestCommitSha] : [],
  };

  const newCommitRes = await fetchWithRetry(`https://api.github.com/repos/${repo}/git/commits`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(commitPayload),
  });
  const newCommitData = await newCommitRes.json() as any;
  if (!newCommitRes.ok) throw new Error(`Failed to create commit: ${JSON.stringify(newCommitData)}`);

  // 6. Update or Create Branch Reference
  if (latestCommitSha) {
    const updateRefRes = await fetchWithRetry(`https://api.github.com/repos/${repo}/git/refs/${branchPath}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        sha: newCommitData.sha,
        force: false,
      }),
    });

    if (!updateRefRes.ok) {
      throw new Error("Failed to push commit to GitHub repository.");
    }
  } else {
    const createRefRes = await fetchWithRetry(`https://api.github.com/repos/${repo}/git/refs`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        ref: `refs/${branchPath}`,
        sha: newCommitData.sha,
      }),
    });

    if (!createRefRes.ok) {
      const errorData = await createRefRes.json().catch(() => ({}));
      throw new Error(`Failed to create new branch on GitHub: ${JSON.stringify(errorData)}`);
    }
  }

  logger.info({ repo, branch, commitSha: newCommitData.sha }, "Pushed to GitHub");
  return newCommitData.sha;
}
