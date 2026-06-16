import { getBranches } from "../cms.server";

export async function loader() {
  const branches = getBranches() as { name: string }[];
  const locales = ["en", "ja"];
  const host = process.env.ALLOWED_HOST || "localhost";

  let urls = "";
  for (const branch of branches) {
    for (const locale of locales) {
      urls += `  <url>\n    <loc>https://${host}/${locale}/${encodeURIComponent(branch.name)}</loc>\n    <changefreq>daily</changefreq>\n  </url>\n`;
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
