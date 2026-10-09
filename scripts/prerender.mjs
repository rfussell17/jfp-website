// Bakes the rendered page into build/index.html so search engines, link
// previews and no-JS visitors get real content instead of an empty <div>.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const siteUrl = (process.env.URL || "").replace(/\/$/, "");
const { render, structuredData, llmsTxt } = await import(
  pathToFileURL(resolve("dist-ssr/entry-server.js")).href
);

const template = readFileSync("build/index.html", "utf8");
const html = template
  .replace("<!--app-html-->", render())
  .replace("<!--structured-data-->", structuredData(siteUrl))
  .replaceAll("__SITE_URL__", siteUrl);

writeFileSync("build/index.html", html);

// Crawler files. The sitemap needs absolute URLs, so it needs the site URL
// (Netlify sets URL automatically).
writeFileSync("build/llms.txt", llmsTxt(siteUrl));
writeFileSync(
  "build/robots.txt",
  `User-agent: *\nAllow: /\n${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ""}`
);
if (siteUrl) {
  const today = new Date().toISOString().slice(0, 10);
  writeFileSync(
    "build/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`
  );
}
rmSync("dist-ssr", { recursive: true, force: true });
console.log(`prerender: wrote build/index.html${siteUrl ? ` (site url ${siteUrl})` : " (no URL env set)"}`);
