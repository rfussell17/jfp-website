// Bakes the rendered page into build/index.html so search engines, link
// previews and no-JS visitors get real content instead of an empty <div>.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const siteUrl = (process.env.URL || "").replace(/\/$/, "");
const { render, structuredData } = await import(
  pathToFileURL(resolve("dist-ssr/entry-server.js")).href
);

const template = readFileSync("build/index.html", "utf8");
const html = template
  .replace("<!--app-html-->", render())
  .replace("<!--structured-data-->", structuredData(siteUrl))
  .replaceAll("__SITE_URL__", siteUrl);

writeFileSync("build/index.html", html);
rmSync("dist-ssr", { recursive: true, force: true });
console.log(`prerender: wrote build/index.html${siteUrl ? ` (site url ${siteUrl})` : " (no URL env set)"}`);
