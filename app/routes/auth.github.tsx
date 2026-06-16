import { redirect } from "react-router";
import { commitSession, getSession } from "../session.server";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    throw new Response("GitHub OAuth is not configured. Set GITHUB_CLIENT_ID in environment.", { status: 503 });
  }

  const urlParams = new URL(request.url).searchParams;
  const redirectTo = urlParams.get("redirectTo") || "/";
  const session = await getSession(request.headers.get("Cookie"));
  session.set("redirectTo", redirectTo);

  // Include redirect_uri to prevent open redirect attacks (use registered origin)
  const origin = new URL(request.url).origin;
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("scope", "repo");
  url.searchParams.set("redirect_uri", `${origin}/auth/github/callback`);
  url.searchParams.set("state", crypto.randomUUID());

  return redirect(url.toString(), {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}
