import express from "express";
import { createRequestHandler } from "@react-router/express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import hpp from "hpp";
import pino from "pino";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logger = pino({
  level: process.env.LOG_LEVEL || (process.env.NODE_ENV === "production" ? "info" : "debug"),
  base: { pid: process.pid, env: process.env.NODE_ENV, version: process.env.npm_package_version || "1.0.0" },
  timestamp: pino.stdTimeFunctions.isoTime,
});

const app = express();

// Security hardening
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
      imgSrc: ["'self'", "data:", "https://avatars.githubusercontent.com"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
}));

app.use(compression());
app.use(cors({ origin: false }));
app.use(hpp());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Rate limiting for Express endpoints (webhooks, health)
const expressLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip || "global",
  handler: (_req, res) => {
    res.status(429).json({ error: "Too many requests" });
  },
});
app.use(expressLimiter);

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || "1.0.0",
  });
});

// Static assets
app.use(express.static(path.join(__dirname, "build/client"), {
  maxAge: "1h",
  immutable: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith(".js") || filePath.endsWith(".css")) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
  },
}));

export async function startServer(port = 0) {
  const build = await import("./build/server/index.js");

  app.all("*", createRequestHandler({ build }));

  const server = createServer(app);

  const shutdown = (signal) => {
    logger.info({ signal }, "Shutting down server gracefully...");
    server.close(() => {
      logger.info("Server closed. Exiting process.");
      process.exit(0);
    });
    setTimeout(() => {
      logger.error("Forced shutdown after timeout.");
      process.exit(1);
    }, 10000);
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));

  process.on("uncaughtException", (err) => {
    logger.error({ err }, "Uncaught Exception");
    shutdown("uncaughtException");
  });

  process.on("unhandledRejection", (reason) => {
    logger.error({ reason }, "Unhandled Rejection");
  });

  return new Promise((resolve, reject) => {
    server.on("error", (err) => {
      logger.error({ err }, "Server error");
      reject(err);
    });
    server.listen(port, () => {
      const address = server.address();
      const actualPort = typeof address === "object" && address ? address.port : port;
      logger.info(`🚀 CAE Docs Server started on http://localhost:${actualPort}`);
      resolve(actualPort);
    });
  });
}

// Auto-start if run directly
const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const port = process.env.PORT || 3001;
  startServer(port).then((actualPort) => {
    logger.info({ port: actualPort }, "Server ready");
  }).catch((err) => {
    logger.error({ err }, "Failed to start server");
    process.exit(1);
  });
}
