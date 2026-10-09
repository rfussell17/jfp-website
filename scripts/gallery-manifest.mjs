// Records the pixel size of every Recent work photo so the gallery can reserve
// the right space before images load. Runs automatically before dev and build.
import { readdirSync, writeFileSync, statSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { imageSize } from "image-size";

const root = "src/assets/recent-work";
const manifest = {};
for (const batch of readdirSync(root).filter((d) => statSync(join(root, d)).isDirectory())) {
  for (const file of readdirSync(join(root, batch))) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const { width, height } = imageSize(readFileSync(join(root, batch, file)));
    manifest[`${batch}/${file}`] = [width, height];
  }
}
writeFileSync("src/data/gallery-sizes.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`gallery-manifest: ${Object.keys(manifest).length} photos`);
