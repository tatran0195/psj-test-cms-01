import { createCookieSessionStorage } from "react-router";
import crypto from "crypto";

let _sessionStorage: ReturnType<typeof createCookieSessionStorage> | null = null;

function getSessionStorage() {
  if (_sessionStorage) return _sessionStorage;

  const sessionSecret = process.env.SESSION_SECRET;
  if (!sessionSecret || sessionSecret.length < 32) {
    throw new Error(
      "SESSION_SECRET is required and must be at least 32 characters long. " +
        "Set a strong random string in your environment before starting the server.",
    );
  }

  _sessionStorage = createCookieSessionStorage({
    cookie: {
      name: "__session",
      sameSite: "lax",
      path: "/",
      httpOnly: true,
      secrets: [sessionSecret],
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  });

  return _sessionStorage;
}

export const sessionStorage = new Proxy(
  {} as ReturnType<typeof createCookieSessionStorage>,
  {
    get(_, prop: string | symbol) {
      const storage = getSessionStorage();
      return Reflect.get(storage, prop);
    },
  },
);

export const { getSession, commitSession, destroySession } = {
  get getSession() {
    return getSessionStorage().getSession;
  },
  get commitSession() {
    return getSessionStorage().commitSession;
  },
  get destroySession() {
    return getSessionStorage().destroySession;
  },
};

export interface UserSession {
  id: string;
  username: string;
  avatar: string;
  token?: string;
}

export async function getUser(request: Request): Promise<UserSession | null> {
  const session = await getSession(request.headers.get("Cookie"));
  return session.get("user") ?? null;
}

export async function requireUser(request: Request): Promise<UserSession> {
  const user = await getUser(request);
  if (!user) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams([
      ["redirectTo", url.pathname + url.search],
    ]);
    throw new Response(null, {
      status: 302,
      headers: { Location: `/auth/github?${searchParams}` },
    });
  }
  return user;
}

export async function requireAdmin(request: Request): Promise<UserSession> {
  const user = await requireUser(request);
  const admins = (process.env.ALLOWED_ADMINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (admins.length > 0 && !admins.includes(user.username)) {
    throw new Response("Forbidden: admin access required", { status: 403 });
  }
  return user;
}

/**
 * Generate a fresh CSRF token.
 * Call this ONLY from mutating action handlers — never from loaders.
 * Rotating from loaders causes race conditions when the user has
 * multiple tabs open (each loader invalidates the previous token).
 */
export function generateCsrfToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * Ensure the session already has a CSRF token, generating one lazily if not.
 * Use in loaders: reads the existing token from the session without rotating it.
 *
 * Returns { csrfToken, needsCommit } — only commit the session when needsCommit=true.
 */
export async function getOrInitCsrfToken(
  request: Request,
): Promise<{ csrfToken: string; session: ReturnType<Awaited<ReturnType<typeof getSession>>>; needsCommit: boolean }> {
  const session = await getSession(request.headers.get("Cookie"));
  const existing: string | undefined = session.get("csrf_token");
  if (existing) {
    return { csrfToken: existing, session, needsCommit: false };
  }
  const csrfToken = generateCsrfToken();
  session.set("csrf_token", csrfToken);
  return { csrfToken, session, needsCommit: true };
}

/**
 * Rotate the CSRF token after a successful mutating action.
 * Call this at the END of a successful action, before redirecting.
 */
export async function rotateCsrfToken(
  request: Request,
): Promise<{ newToken: string; setCookie: string }> {
  const session = await getSession(request.headers.get("Cookie"));
  const newToken = generateCsrfToken();
  session.set("csrf_token", newToken);
  return { newToken, setCookie: await commitSession(session) };
}
