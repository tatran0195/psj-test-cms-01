import { getFile } from "../cms.server";
import { validateParams, LocaleSchema, BranchNameSchema, FilePathSchema } from "../lib/validation.js";

export async function loader({ params }: any) {
  const branchName = validateParams(BranchNameSchema, decodeURIComponent(params.branch as string));
  const locale = validateParams(LocaleSchema, params.locale);
  const pathSuffix = validateParams(FilePathSchema, params["*"]);
  const path = `${locale}/assets/${pathSuffix}`;

  const file = getFile(branchName, path);
  if (!file) {
    throw new Response("Not Found", { status: 404 });
  }

  return new Response(file.raw_content, {
    headers: {
      "Content-Type": file.mime_type,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
