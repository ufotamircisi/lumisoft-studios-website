// Generates optimized WebP web copies of large source assets.
// Originals are never modified; output goes to public/images/web/.
// Run with: npm run optimize:images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const OUT_DIR = "public/images/web";

const jobs = [
  { src: "public/images/icon.png", out: "jelly-chain-rush-icon.webp", size: 512 },
  { src: "public/images/neon-siege-app-icon.png", out: "neon-siege-icon.webp", size: 512 },
  { src: "public/images/roto-blocks-icon.png", out: "roto-blocks-icon.webp", size: 512 },
  { src: "public/images/lumibaby-icon.png", out: "lumibaby-icon.webp", size: 512 },
  // Full canvas kept as-is (transparent margins included); only scaled down.
  { src: "public/brand/lumisoft-logo.png", out: "lumisoft-logo.webp", height: 1024 },
];

await mkdir(OUT_DIR, { recursive: true });

for (const job of jobs) {
  const outPath = path.join(OUT_DIR, job.out);
  const pipeline = sharp(job.src).resize(
    job.size ? { width: job.size, height: job.size, fit: "inside" } : { height: job.height }
  );
  await pipeline.webp({ quality: 90, effort: 6 }).toFile(outPath);
  const { size } = await sharp(outPath).metadata().then(async (m) => {
    const { statSync } = await import("node:fs");
    return { size: statSync(outPath).size, ...m };
  });
  console.log(`${job.src} -> ${outPath} (${(size / 1024).toFixed(0)} KB)`);
}
