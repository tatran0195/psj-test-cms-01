import { getFile, getBranchHead } from "../cms.server";

export async function loader({ params }: any) {
  const branchName = decodeURIComponent(params.branch as string);
  const locale = params.locale as string;
  const path = `${locale}/assets/${params["*"]}`;
  const headVersion = getBranchHead(branchName);
  
  const file = getFile(headVersion, path);
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