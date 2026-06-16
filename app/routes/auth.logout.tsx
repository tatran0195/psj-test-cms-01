import { redirect } from "react-router";
import { destroySession, getSession } from "../session.server";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    throw new Response("Method Not Allowed", { status: 405 });
  }
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  // GET should not log out (prevents CSRF via <img> tags)
  return redirect("/");
}
