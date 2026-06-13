/**
 * Import uploaded B-Line chart screenshots into public gallery paths with mild enhancement.
 * Run: node scripts/import-b-line-figures.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "projects");
const ASSETS_DIR =
  process.env.BLINE_SCREENSHOT_DIR ||
  path.join(process.env.HOME, ".cursor/projects/Users-zakirelaskar-Documents/assets");

/** Chronological capture order → figure 1–5 */
const MAPPING = [
  [
    "Screenshot_2026-06-11_at_11.51.03_PM-ac8e4944-1947-43a4-926b-dc9cf1c52d5f.png",
    "b-line-figure-1.png",
  ],
  [
    "Screenshot_2026-06-11_at_11.54.40_PM-a86fa401-cd16-4bbb-a565-848774e3c5ad.png",
    "b-line-figure-2.png",
  ],
  [
    "Screenshot_2026-06-11_at_11.55.23_PM-a01b022b-70a1-41a3-ac9f-5fc5ad1807f2.png",
    "b-line-figure-3.png",
  ],
  [
    "Screenshot_2026-06-11_at_11.56.44_PM-97838541-fc9c-4328-b2dc-1c7466fba5a3.png",
    "b-line-figure-4.png",
  ],
  [
    "Screenshot_2026-06-11_at_11.57.08_PM-d27b622d-e852-437c-9139-ecd05947f190.png",
    "b-line-figure-5.png",
  ],
];

async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error("Missing assets dir:", ASSETS_DIR);
    process.exit(1);
  }
  for (const [srcName, destName] of MAPPING) {
    const src = path.join(ASSETS_DIR, srcName);
    const dest = path.join(outDir, destName);
    if (!fs.existsSync(src)) {
      console.error("Missing:", src);
      process.exit(1);
    }
    const before = fs.statSync(src).size;
    await sharp(src)
      .modulate({ brightness: 1.02, saturation: 1.04 })
      .sharpen({ sigma: 0.45, m1: 1, m2: 2, x1: 2, y2: 10, y3: 20 })
      .png({ compressionLevel: 8, effort: 9 })
      .toFile(dest + ".tmp");
    fs.renameSync(dest + ".tmp", dest);
    console.log(`${destName}: ${before} → ${fs.statSync(dest).size} bytes`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
