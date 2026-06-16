import pino from "pino";

export const logger = pino({
  level: process.env.LOG_LEVEL || (process.env.NODE_ENV === "production" ? "info" : "debug"),
  base: {
    pid: process.pid,
    env: process.env.NODE_ENV,
    version: process.env.npm_package_version || "1.0.0",
  },
  formatters: {
    level(label) {
      return { level: label };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export function logRequest(request: Request, response: Response, startTime: number) {
  const duration = Date.now() - startTime;
  logger.info(
    {
      method: request.method,
      url: request.url,
      status: response.status,
      durationMs: duration,
    },
    "request completed"
  );
}
