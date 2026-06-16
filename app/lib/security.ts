import crypto from "crypto";
import { rateLimit } from "express-rate-limit";
import type { Request } from "express";

// CSRF: Double-submit cookie pattern (synchronized token)
const CSRF_SECRET = process.env.SESSION_SECRET || (() => { throw new Error("SESSION_SECRET required for CSRF"); })();

export function generateCsrfToken(): { token: string; cookie: string } {
  const token = crypto.randomBytes(32).toString("hex");
  const hmac = crypto.createHmac("sha256", CSRF_SECRET).update(token).digest("hex");
  const cookie = `${token}.${hmac}`;
  return { token, cookie };
}

export function verifyCsrfToken(cookieValue: string | undefined, headerValue: string | undefined): boolean {
  if (!cookieValue || !headerValue) return false;
  const [token, hmac] = cookieValue.split(".");
  if (!token || !hmac) return false;
  const expected = crypto.createHmac("sha256", CSRF_SECRET).update(token).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(expected)) && token === headerValue;
  } catch {
    return false;
  }
}

export function csrfErrorResponse() {
  return new Response("Invalid or missing CSRF token", { status: 403 });
}

// Rate Limiters (Express middleware for non-RR routes; loaders/actions use manual counting in future)
export const strictLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => req.ip || "global",
  handler: (_req, res) => {
    res.status(429).json({ error: "Too many requests. Please slow down." });
  },
});

export const standardLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 60,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => req.ip || "global",
});
