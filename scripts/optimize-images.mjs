// Makes smaller WebP copies of the site's photos so phones and laptops download
// a size that fits their screen instead of the full 1800px JPEG. Output goes to
// src/generated/ (not committed) and only changes when a source photo does.
// Runs automatically before dev and build.
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join } from "node:path";
import sharp from "sharp";

const jobs = [];
const queue = (src, outBase, widths) => {
  const stale = (w) => {
    const out = `${outBase}-${w}.webp`;
    return !existsSync(out) || statSync(out).mtimeMs < statSync(src).mtimeMs;
  };
  jobs.push({ src, outBase, widths, stale });
};

const root = "src/assets/recent-work";
for (const batch of readdirSync(root).filter((d) => statSync(join(root, d)).isDirectory())) {
  mkdirSync(`src/generated/recent-work/${batch}`, { recursive: true });
  for (const file of readdirSync(join(root, batch))) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    queue(join(root, batch, file), `src/generated/recent-work/${batch}/${basename(file, extname(file))}`, [480, 960, 1800]);
  }
}
queue("src/assets/hero.webp", "src/generated/hero", [800, 1280, 1800]);
queue("src/assets/jonny.webp", "src/generated/jonny", [400, 720, 1080]);
mkdirSync("src/generated", { recursive: true });

let made = 0;
await Promise.all(
  jobs.flatMap(({ src, outBase, widths, stale }) =>
    widths
      .filter(stale)
      .map(async (w) => {
        await sharp(src)
          .rotate()
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: 78 })
          .toFile(`${outBase}-${w}.webp`);
        made++;
      })
  )
);
console.log(`optimize-images: ${made} files written, ${jobs.length} photos checked`);
