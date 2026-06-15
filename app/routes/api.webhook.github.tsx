import crypto from "crypto";
import { type ActionFunctionArgs } from "react-router";
import { commitChanges, getBranchHead } from "../cms.server";

// Verify GitHub Webhook Signature
function verifySignature(payload: string, signature: string, secret: string) {
  if (!signature || !secret) return false;
  const hmac = crypto.createHmac("sha256", secret);
  const expectedSignature = `sha256=${hmac.update(payload).digest("hex")}`;
  try {
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
  } catch {
    return false;
  }
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  const signature = request.headers.get("x-hub-signature-256");
  const event = request.headers.get("x-github-event");
  const secret = process.env.GITHUB_WEBHOOK_SECRET;

  // We need the raw body for signature verification
  const rawBody = await request.clone().text();

  if (secret && !verifySignature(rawBody, signature || "", secret)) {
    return Response.json({ error: "Unauthorized: Invalid Signature" }, { status: 401 });
  }

  if (event === "ping") {
    return Response.json({ message: "Pong" });
  }

  if (event !== "push") {
    return Response.json({ message: "Event ignored" }, { status: 202 });
  }

  const payload = await request.json();
  const ref = payload.ref; // e.g., "refs/heads/main"
  const branchMatch = ref.match(/^refs\/heads\/(.+)$/);
  
  if (!branchMatch) {
    return Response.json({ error: "Invalid ref" }, { status: 400 });
  }

  const branchName = branchMatch[1];
  
  // Edge Case: If the branch doesn't exist in our DB, we might want to ignore it or create it.
  // For safety in production, we only process commits for branches we already track or explicit release branches.
  const headVersion = getBranchHead(branchName);
  if (!headVersion && !branchName.startsWith("release/") && branchName !== "main") {
    return Response.json({ message: `Branch ${branchName} ignored.` }, { status: 202 });
  }

  const commits = payload.commits || [];
  if (commits.length === 0) {
    return Response.json({ message: "No commits to process." }, { status: 200 });
  }

  const author = payload.pusher?.name || "github-actions";
  const commitMessage = `GitHub Sync: ${commits.length} commit(s) pushed by ${author}`;

  // Aggregate all changed, added, and removed files across all commits in the push
  const addedFiles = new Set<string>();
  const modifiedFiles = new Set<string>();
  const removedFiles = new Set<string>();

  for (const commit of commits) {
    commit.added?.forEach((f: string) => { addedFiles.add(f); removedFiles.delete(f); });
    commit.modified?.forEach((f: string) => { modifiedFiles.add(f); removedFiles.delete(f); });
    commit.removed?.forEach((f: string) => { removedFiles.add(f); addedFiles.delete(f); modifiedFiles.delete(f); });
  }

  const filesToFetch = new Set([...addedFiles, ...modifiedFiles]);
  const deletedFilesArray = Array.from(removedFiles);
  const changedFilesArray: any[] = [];

  // Fetch actual file contents from GitHub Raw API
  // Edge Case: Handling GitHub rate limits and large files
  for (const filePath of filesToFetch) {
    // Only process localized docs and assets (skip root config files like package.json)
    if (!filePath.startsWith("en/") && !filePath.startsWith("ja/") && !filePath.startsWith("_assets/")) {
      continue;
    }

    try {
      // Using GitHub Raw URL. In production, use GitHub API with a token if repo is private
      const rawUrl = `https://raw.githubusercontent.com/${payload.repository.full_name}/${payload.after}/${filePath}`;
      
      const res = await fetch(rawUrl);
      if (!res.ok) {
        console.error(`Failed to fetch ${filePath} from GitHub: ${res.statusText}`);
        continue;
      }
      
      // Determine Mime Type
      let mimeType = "text/markdown";
      if (filePath.endsWith(".png")) mimeType = "image/png";
      else if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) mimeType = "image/jpeg";
      else if (filePath.endsWith(".svg")) mimeType = "image/svg+xml";

      let content: string | Buffer;
      if (mimeType === "text/markdown") {
        content = await res.text();
      } else {
        const arrayBuffer = await res.arrayBuffer();
        // Convert to base64 buffer representation for our DB schema
        content = Buffer.from(arrayBuffer).toString("base64");
      }

      changedFilesArray.push({
        path: filePath,
        content,
        mime_type: mimeType
      });
    } catch (e) {
      console.error(`Error fetching ${filePath}:`, e);
    }
  }

  if (changedFilesArray.length === 0 && deletedFilesArray.length === 0) {
    return Response.json({ message: "No relevant documentation files changed." }, { status: 200 });
  }

  try {
    const newCommitId = await commitChanges({
      branch: branchName,
      author: author,
      message: commitMessage,
      changedFiles: changedFilesArray,
      deletedFiles: deletedFilesArray
    });

    return Response.json({ success: true, commitId: newCommitId, processed: changedFilesArray.length, deleted: deletedFilesArray.length }, { status: 200 });
  } catch (error: any) {
    console.error("Webhook Commit Error:", error);
    return Response.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}