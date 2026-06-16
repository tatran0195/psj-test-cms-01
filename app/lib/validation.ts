import { z } from "zod";

export const LocaleSchema = z.enum(["en", "ja"]);
export const BranchNameSchema = z.string().min(1).max(100).regex(/^[a-zA-Z0-9_.\-\/]+$/);
export const FilePathSchema = z.string().min(1).max(500).regex(/^[a-zA-Z0-9_.\-~\/]+$/);
export const CommitMessageSchema = z.string().min(1).max(500);

export const CreateBranchSchema = z.object({
  _action: z.literal("createBranch"),
  newBranch: BranchNameSchema,
});

export const DeleteBranchSchema = z.object({
  _action: z.literal("deleteBranch"),
  branchToDelete: BranchNameSchema,
});

export const PublishBranchSchema = z.object({
  _action: z.literal("publishBranch"),
  branchToPublish: BranchNameSchema,
  releaseMessage: z.string().max(500).optional(),
});

export const CreateFileSchema = z.object({
  _action: z.literal("createFile"),
  path: FilePathSchema,
});

export const DeleteFileSchema = z.object({
  _action: z.literal("deleteFile"),
  path: FilePathSchema,
});

export const EditFileSchema = z.object({
  content: z.string().max(5_000_000, "File too large"),
  message: z.string().max(500).optional(),
  pendingAssets: z.string().optional(),
});

export const SearchQuerySchema = z.object({
  q: z.string().min(1).max(200),
});

export const GitHubWebhookPayloadSchema = z.object({
  ref: z.string(),
  after: z.string(),
  repository: z.object({
    full_name: z.string(),
  }),
  commits: z.array(
    z.object({
      added: z.array(z.string()).optional(),
      modified: z.array(z.string()).optional(),
      removed: z.array(z.string()).optional(),
    })
  ).optional(),
  pusher: z.object({
    name: z.string().optional(),
  }).optional(),
});

export function validateParams<T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T> {
  const result = schema.safeParse(data);
  if (!result.success) {
    const firstError = result.error.issues[0];
    throw new Response(`Validation Error: ${firstError.path.join(".")} — ${firstError.message}`, { status: 400 });
  }
  return result.data;
}
