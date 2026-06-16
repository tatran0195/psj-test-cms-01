import crypto from "crypto";
import { type ActionFunctionArgs } from "react-router";
import { commitChanges, getBranchHead } from "../cms.server";
import { validateParams, GitHubWebhookPayloadSchema } from "../lib/validation.js";
import { logger } from "../lib/logger.js";

function verifySignature(payload: string, signature: string, secret: string): boolean {
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

  if (!secret) {
    logger.error("GITHUB_WEBHOOK_SECRET is not configured. Webhook processing is disabled.");
    return Response.json({ error: "Webhook processing is not configured." }, { status: 503 });
  }

  if (!signature) {
    logger.warn("Missing x-hub-signature-256 header");
    return Response.json({ error: "Unauthorized: Missing signature" }, { status: 401 });
  }

  const rawBody = await request.clone().text();

  if (!verifySignature(rawBody, signature, secret)) {
    logger.warn("Invalid webhook signature");
    return Response.json({ error: "Unauthorized: Invalid Signature" }, { status: 401 });
  }

  if (event === "ping") {
    return Response.json({ message: "Pong" });
  }

  if (event !== "push") {
    return Response.json({ message: "Event ignored" }, { status: 202 });
  }

  const rawPayload = await request.json();
  let payload;
  try {
    payload = validateParams(GitHubWebhookPayloadSchema, rawPayload);
  } catch (e) {
    if (e instanceof Response) return e;
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  const ref = payload.ref;
  const branchMatch = ref.match(/^refs\/heads\/(.+)$/);

  if (!branchMatch) {
    return Response.json({ error: "Invalid ref" }, { status: 400 });
  }

  const branchName = branchMatch[1];

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

  for (const filePath of filesToFetch) {
    if (!filePath.startsWith("en/") && !filePath.startsWith("ja/") && !filePath.startsWith("_assets/")) {
      continue;
    }

    try {
      const rawUrl = `https://raw.githubusercontent.com/${payload.repository.full_name}/${payload.after}/${filePath}`;

      const res = await fetch(rawUrl, { signal: AbortSignal.timeout(30000) });
      if (!res.ok) {
        logger.warn({ filePath, status: res.status }, "Failed to fetch file from GitHub");
        continue;
      }

      let mimeType = "text/markdown";
      if (filePath.endsWith(".png")) mimeType = "image/png";
      else if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) mimeType = "image/jpeg";
      else if (filePath.endsWith(".svg")) mimeType = "image/svg+xml";

      let content: string | Buffer;
      if (mimeType === "text/markdown") {
        content = await res.text();
      } else {
        const arrayBuffer = await res.arrayBuffer();
        content = Buffer.from(arrayBuffer).toString("base64");
      }

      changedFilesArray.push({
        path: filePath,
        content,
        mime_type: mimeType,
      });
    } catch (e) {
      logger.error({ filePath, err: e }, "Error fetching file from GitHub");
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
      deletedFiles: deletedFilesArray,
    });

    logger.info({ branch: branchName, commitId: newCommitId, processed: changedFilesArray.length, deleted: deletedFilesArray.length }, "Webhook sync completed");

    return Response.json({ success: true, commitId: newCommitId, processed: changedFilesArray.length, deleted: deletedFilesArray.length }, { status: 200 });
  } catch (error: any) {
    logger.error({ error, branch: branchName }, "Webhook commit error");
    return Response.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
