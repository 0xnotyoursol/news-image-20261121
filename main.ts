// news-image-20261121: "21 November 2026 in one image" — a newspaper
// front page covering the day's biggest stories: Russian missiles
// falling in Poland after a massive overnight attack on Ukraine
// (400+ drones, 110 missiles, 8 killed in Kyiv), markets sliding
// into correction as the AI sell-off wipes out the Nasdaq's 2026
// gains, the ICJ ruling Myanmar guilty of Rohingya genocide, the
// Trump–Xi–Putin peace declaration from the Shenzhen summit, COP31
// deadlocked over fossil fuels in Antalya, the FBI crime database
// hack, Peru's 6.9 earthquake, and Iran downing a US drone over
// the Strait of Hormuz. The image is bundled in this repo as
// entry.png (a JPEG by bytes, 1024x1024, under 1 MiB). The program
// just copies it to the grader's output directory, so both runs
// write identical bytes. No network, no randomness, no timestamps:
// the output is a byte-for-byte copy of the bundled image.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"),
);
