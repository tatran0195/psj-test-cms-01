import { type ActionFunctionArgs } from "react-router";
import { processContent } from "../cms.server";
import { requireUser } from "../session.server";

export async function action({ request }: ActionFunctionArgs) {
  await requireUser(request);
  
  const formData = await request.formData();
  const content = formData.get("content") as string;
  
  if (!content) {
    return Response.json({ parsed_ast: null });
  }

  // Chạy qua chính xác Pipeline của Server
  const processed = await processContent(content, "text/markdown");
  return Response.json({ parsed_ast: processed.parsed_ast });
}