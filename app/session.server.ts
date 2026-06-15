import { createCookieSessionStorage } from "react-router";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET || "super-secret-key-for-dev"],
    secure: process.env.NODE_ENV === "production",
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;

export interface UserSession {
  id: string;
  username: string;
  avatar: string;
  token?: string; // GitHub Access Token for real commits!
}

export async function getUser(request: Request): Promise<UserSession | null> {
  const session = await getSession(request.headers.get("Cookie"));
  return session.get("user") || null;
}

export async function requireUser(request: Request): Promise<UserSession> {
  const user = await getUser(request);
  if (!user) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return user;
}