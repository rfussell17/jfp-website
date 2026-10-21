// Bakes the rendered page into build/index.html so search engines, link
// previews and no-JS visitors get real content instead of an empty <div>.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

// Netlify sets CONTEXT to "production" only for the live site. Previews and
// branch deploys must not be indexed, or they compete with the real pages.
const live = !process.env.CONTEXT || process.env.CONTEXT === "production";
const indexable = "index, follow, max-image-preview:large";
const robotsMeta = (html) => (live ? html : html.replace(indexable, "noindex, nofollow"));

const siteUrl = (process.env.URL || "").replace(/\/$/, "");
const { render, renderFaq, renderTestimonials, structuredData, llmsTxt, placeholderNames } = await import(
  pathToFileURL(resolve("dist-ssr/entry-server.js")).href
);

const template = readFileSync("build/index.html", "utf8");
const html = template
  .replace("<!--app-html-->", render())
  .replace("<!--structured-data-->", structuredData(siteUrl))
  .replaceAll("__SITE_URL__", siteUrl);

writeFileSync("build/index.html", robotsMeta(html));

const faqHtml = readFileSync("build/faq.html", "utf8")
  .replace("<!--app-html-->", renderFaq())
  .replace("<!--structured-data-->", structuredData(siteUrl, "faq"))
  .replaceAll("__SITE_URL__", siteUrl);
writeFileSync("build/faq.html", robotsMeta(faqHtml));

const testimonialsHtml = readFileSync("build/testimonials.html", "utf8")
  .replace("<!--app-html-->", renderTestimonials())
  .replace("<!--structured-data-->", structuredData(siteUrl))
  .replaceAll("__SITE_URL__", siteUrl);
writeFileSync("build/testimonials.html", robotsMeta(testimonialsHtml));

// AI crawlers and assistants. "User-agent: *" already allows them, but naming
// them makes the intent explicit and survives anyone adding a blanket rule later.
const aiBots = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", // OpenAI
  "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai", // Anthropic
  "PerplexityBot", "Perplexity-User", // Perplexity
  "Google-Extended", "Applebot-Extended", // Gemini and Apple Intelligence
  "Applebot", "Amazonbot", "Meta-ExternalAgent", "DuckAssistBot", "MistralAI-User",
  "CCBot", "cohere-ai",
];

// Crawler files. The sitemap needs absolute URLs, so it needs the site URL
// (Netlify sets URL automatically).
writeFileSync("build/llms.txt", llmsTxt(siteUrl));
writeFileSync(
  "build/robots.txt",
  live
    ? `User-agent: *\nAllow: /\n\n${aiBots.map((bot) => `User-agent: ${bot}\nAllow: /\n`).join("\n")}${siteUrl ? `\nSitemap: ${siteUrl}/sitemap.xml\n` : ""}`
    : "User-agent: *\nDisallow: /\n"
);
if (siteUrl && live) {
  const today = new Date().toISOString().slice(0, 10);
  writeFileSync(
    "build/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc><lastmod>${today}</lastmod></url>\n  <url><loc>${siteUrl}/faq</loc><lastmod>${today}</lastmod></url>\n  <url><loc>${siteUrl}/testimonials</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`
  );
}
rmSync("dist-ssr", { recursive: true, force: true });
console.log(`prerender: wrote build/index.html${siteUrl ? ` (site url ${siteUrl})` : " (no URL env set)"}`);

const standIns = placeholderNames();
if (standIns.length) {
  console.warn(`\n  WARNING: ${standIns.length} testimonials still use placeholder names: ${standIns.join(", ")}\n  Replace them in src/data/site.js before launch.\n`);
}
