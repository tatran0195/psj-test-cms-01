import { redirect } from "react-router";
import { commitSession, getSession } from "../session.server";
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return redirect("/");
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response("GitHub OAuth secrets are not configured.", { status: 500 });
  }

  // 1. Exchange code for access token
  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = await tokenRes.json();
  const token = tokenData.access_token;

  if (!token) {
    return new Response("Authentication failed", { status: 401 });
  }

  // 2. Get User Profile
  const userRes = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const userData = await userRes.json();

  // 3. Save to Session
  const session = await getSession(request.headers.get("Cookie"));
  session.set("user", {
    id: userData.id.toString(),
    username: userData.login,
    avatar: userData.avatar_url,
    token: token // Used for committing!
  });

  const redirectTo = session.get("redirectTo") || "/";
  session.unset("redirectTo");

  return redirect(redirectTo, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}