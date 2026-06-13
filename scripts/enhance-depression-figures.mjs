/**
 * Batch-enhance depression case study PNGs: mild clarity boost for screenshots/diagrams.
 * Run from repo root: node scripts/enhance-depression-figures.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imgDir = path.join(root, "public", "images", "projects");

const files = fs
  .readdirSync(imgDir)
  .filter((f) => f.startsWith("depression-figure-") && f.endsWith(".png"))
  .sort();

if (files.length === 0) {
  console.error("No depression-figure-*.png found in", imgDir);
  process.exit(1);
}

for (const name of files) {
  const inputPath = path.join(imgDir, name);
  const before = fs.statSync(inputPath).size;
  await sharp(inputPath)
    .modulate({ brightness: 1.04, saturation: 1.06 })
    .sharpen({ sigma: 0.65, m1: 1, m2: 2, x1: 2, y2: 10, y3: 20 })
    .png({ compressionLevel: 8, effort: 9 })
    .toFile(inputPath + ".tmp");
  fs.renameSync(inputPath + ".tmp", inputPath);
  const after = fs.statSync(inputPath).size;
  console.log(`${name}: ${before} → ${after} bytes`);
}

console.log("Done:", files.length, "files");
