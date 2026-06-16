import { type ActionFunctionArgs } from "react-router";
import { processContent } from "../cms.server";
import { requireUser, getSession } from "../session.server";
import { validateParams, EditFileSchema } from "../lib/validation.js";
import { logger } from "../lib/logger.js";

export async function action({ request }: ActionFunctionArgs) {
  await requireUser(request);

  if (request.method !== "POST") {
    throw new Response("Method Not Allowed", { status: 405 });
  }

  const formData = await request.formData();
  const raw = Object.fromEntries(formData);

  // CSRF check
  const session = await getSession(request.headers.get("Cookie"));
  const csrfToken = formData.get("csrf_token") as string;
  if (!csrfToken || csrfToken !== session.get("csrf_token")) {
    throw new Response("Invalid or missing CSRF token", { status: 403 });
  }

  let content: string;
  try {
    const validated = validateParams(EditFileSchema, raw);
    content = validated.content;
  } catch (e) {
    if (e instanceof Response) return e;
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const processed = await processContent(content, "text/markdown");
    return Response.json({ parsed_ast: processed.parsed_ast });
  } catch (err) {
    logger.error({ err }, "Preview processing failed");
    return Response.json({ error: "Failed to process preview" }, { status: 500 });
  }
}
