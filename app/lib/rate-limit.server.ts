/**
 * Sliding-window rate limiter backed by a shared in-process store.
 *
 * Limitations (documented):
 *  - State is lost on process restart.
 *  - Not shared across horizontal worker processes.
 *
 * For multi-process deployments, swap `store` for a Redis adapter via
 * `express-rate-limit` + `rate-limit-redis`.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const stores = new Map<string, Map<string, RateLimitEntry>>();

function getStore(name: string): Map<string, RateLimitEntry> {
  let store = stores.get(name);
  if (!store) {
    store = new Map();
    stores.set(name, store);
  }
  return store;
}

export interface RateLimitOptions {
  /** Namespace so different limiters don't collide */
  name: string;
  /** Max requests per window */
  max: number;
  /** Window size in milliseconds */
  windowMs: number;
}

/**
 * Returns `true` if the request is allowed, `false` if the limit is exceeded.
 */
export function checkRateLimit(key: string, opts: RateLimitOptions): boolean {
  const now = Date.now();
  const store = getStore(opts.name);

  // Periodically purge stale entries to prevent unbounded memory growth.
  // Simple approach: purge ~1% of the time to amortise the cost.
  if (Math.random() < 0.01) {
    for (const [k, v] of store) {
      if (now > v.resetAt) store.delete(k);
    }
  }

  const entry = store.get(key);
  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + opts.windowMs });
    return true;
  }
  if (entry.count >= opts.max) return false;
  entry.count += 1;
  return true;
}

export const ACTION_RATE_LIMIT: RateLimitOptions = {
  name: "branch_actions",
  max: 10,
  windowMs: 60_000,
};

export const EDIT_RATE_LIMIT: RateLimitOptions = {
  name: "edit_actions",
  max: 20,
  windowMs: 60_000,
};
