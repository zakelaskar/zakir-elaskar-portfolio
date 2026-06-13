/**
 * Import supplementary B-Line visuals (day-of-week, season, Poisson output, utilization table).
 * Run: node scripts/import-b-line-supplementary.mjs
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

const MAPPING = [
  [
    "Screenshot_2026-06-12_at_12.40.43_AM-68c72be5-f049-49cf-ac83-29e0871c5797.png",
    "b-line-ridership-day-of-week.png",
  ],
  ["image-b2619dc2-3437-470f-903b-73b38db6c54e.png", "b-line-ridership-by-season.png"],
  ["image-98cb87bc-2138-432b-a4ea-fb0c4359cc50.png", "b-line-poisson-regression-results.png"],
  ["image-65cb4d36-554d-4adb-ba80-a85372258b17.png", "b-line-route-utilization-ratios.png"],
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
    await sharp(src)
      .modulate({ brightness: 1.02, saturation: 1.04 })
      .sharpen({ sigma: 0.45, m1: 1, m2: 2, x1: 2, y2: 10, y3: 20 })
      .png({ compressionLevel: 8, effort: 9 })
      .toFile(dest + ".tmp");
    fs.renameSync(dest + ".tmp", dest);
    console.log(destName, fs.statSync(dest).size, "bytes");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
