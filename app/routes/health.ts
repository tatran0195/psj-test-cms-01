export async function loader() {
  return Response.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || "1.0.0",
  }, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
