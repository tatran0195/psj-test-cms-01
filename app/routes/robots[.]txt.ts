export async function loader() {
  const host = process.env.ALLOWED_HOST || "localhost";
  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /auth/
Disallow: /edit/

Sitemap: https://${host}/sitemap.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
