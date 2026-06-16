import { redirect } from "react-router";
import { commitSession, getSession } from "../session.server";
import type { LoaderFunctionArgs } from "react-router";
import { logger } from "../lib/logger.js";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");
  const errorDescription = url.searchParams.get("error_description");

  if (error) {
    logger.warn({ error, errorDescription }, "GitHub OAuth error callback");
    throw new Response(`OAuth Error: ${errorDescription || error}`, { status: 400 });
  }

  if (!code) {
    return redirect("/");
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Response("GitHub OAuth secrets are not configured.", { status: 500 });
  }

  try {
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
      logger.warn({ tokenData }, "GitHub token exchange returned no access_token");
      throw new Response("Authentication failed: unable to retrieve access token.", { status: 401 });
    }

    // 2. Get User Profile
    const userRes = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!userRes.ok) {
      throw new Response("Failed to fetch GitHub user profile.", { status: 502 });
    }

    const userData = await userRes.json();

    // 3. Save to Session
    const session = await getSession(request.headers.get("Cookie"));
    session.set("user", {
      id: userData.id.toString(),
      username: userData.login,
      avatar: userData.avatar_url,
      token: token,
    });

    const redirectTo = session.get("redirectTo") || "/";
    session.unset("redirectTo");

    return redirect(redirectTo, {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  } catch (err) {
    logger.error({ err }, "GitHub OAuth callback error");
    throw err;
  }
}
