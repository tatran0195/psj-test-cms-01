import { redirect } from "react-router";
import { commitSession, getSession } from "../session.server";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  
  if (!clientId) {
    // FALLBACK FOR SANDBOX ENVIRONMENT WITHOUT SECRETS
    const session = await getSession(request.headers.get("Cookie"));
    session.set("user", {
      id: "12345",
      username: "mock-developer",
      avatar: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
      token: "mock-token"
    });
    return redirect("/", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }

  // REAL GITHUB OAUTH FLOW
  const redirectUri = `${new URL(request.url).origin}/auth/github/callback`;
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo`;
  
  return redirect(url);
}