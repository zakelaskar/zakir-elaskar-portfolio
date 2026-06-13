/**
 * Enhance uploaded depression prototype screenshots and write to public gallery paths.
 * Mapping: homepage, text traits, audio (smaller PNG), video, composite dashboard.
 *
 * Run: node scripts/import-depression-screenshots.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "projects");

/** Source files under Cursor assets (adjust if you re-upload elsewhere). */
const ASSETS_DIR =
  process.env.DEPRESSION_SCREENSHOT_DIR ||
  path.join(
    process.env.HOME,
    ".cursor/projects/Users-zakirelaskar-Documents/assets",
  );

/**
 * [sourceFilename, depression-figure-N.png]
 * Figure 3 = audio, 5 = video (swap rows here if your captures differ).
 */
const MAPPING = [
  [
    "Screenshot_2026-06-11_at_11.29.32_PM-397b053b-7ebc-47b1-8bef-be8afa1915ee.png",
    "depression-figure-2.png",
  ],
  [
    "Screenshot_2026-06-11_at_11.32.39_PM-4d1fed59-6ffd-4818-93bc-8f0bcbb07c25.png",
    "depression-figure-4.png",
  ],
  [
    "Screenshot_2026-06-11_at_11.32.14_PM-0fd75bea-9eba-4cbe-81a4-052bb4f16651.png",
    "depression-figure-3.png",
  ],
  [
    "Screenshot_2026-06-11_at_11.33.00_PM-b68c76ca-b6e0-4d71-baa4-bfea86e7711b.png",
    "depression-figure-5.png",
  ],
  [
    "Screenshot_2026-06-11_at_11.33.29_PM-c98a58a6-a7d9-4d53-bab1-d55c9752e683.png",
    "depression-figure-6.png",
  ],
];

async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error("Assets dir missing:", ASSETS_DIR);
    process.exit(1);
  }
  for (const [srcName, destName] of MAPPING) {
    const src = path.join(ASSETS_DIR, srcName);
    const dest = path.join(outDir, destName);
    if (!fs.existsSync(src)) {
      console.error("Missing source:", src);
      process.exit(1);
    }
    const before = fs.statSync(src).size;
    await sharp(src)
      .modulate({ brightness: 1.04, saturation: 1.06 })
      .sharpen({ sigma: 0.6, m1: 1, m2: 2, x1: 2, y2: 10, y3: 20 })
      .png({ compressionLevel: 8, effort: 9 })
      .toFile(dest + ".tmp");
    fs.renameSync(dest + ".tmp", dest);
    const after = fs.statSync(dest).size;
    console.log(`${srcName} → ${destName} (${before} → ${after} bytes)`);
  }
  console.log("Wrote", MAPPING.length, "figures to", outDir);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
