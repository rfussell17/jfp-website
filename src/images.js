// Resized WebP copies made by scripts/optimize-images.mjs. srcSet("hero") gives
// "…-800.webp 800w, …-1280.webp 1280w, …"; it is undefined when the copies
// haven't been generated, and the plain <img src> is used instead.
const copies = import.meta.glob("./generated/**/*.webp", { eager: true, query: "?url", import: "default" });

const bySource = {};
for (const [path, url] of Object.entries(copies)) {
  const [, id, width] = path.match(/^\.\/generated\/(.+)-(\d+)\.webp$/);
  (bySource[id] ||= []).push({ width: Number(width), url });
}

export const srcSet = (id) =>
  bySource[id]
    ?.sort((a, b) => a.width - b.width)
    .map((c) => `${c.url} ${c.width}w`)
    .join(", ");
