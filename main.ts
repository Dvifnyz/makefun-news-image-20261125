// Entry program for the make.fun competition news-image-20261125:
// a 1024x1024 newspaper poster summing up Wednesday 25 November 2026
// world news. It validates entry.png and copies it to the output
// directory so the poster can be reproduced deterministically.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The output directory can be changed with MAKEFUN_OUTPUT_DIR
// (it defaults to "/output" when the variable is not set).

import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");

if (!existsSync(sourcePath)) {
  throw new Error(`entry.png not found next to main.ts: ${sourcePath}`);
}

const sourceBytes = readFileSync(sourcePath);

if (sourceBytes.length < PNG_MAGIC.length || !sourceBytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a valid PNG file (bad magic bytes)");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const targetPath = join(outputDir, "entry.png");
copyFileSync(sourcePath, targetPath);

const copiedSize = statSync(targetPath).size;
if (copiedSize !== sourceBytes.length) {
  throw new Error(
    `copied file size mismatch: expected ${sourceBytes.length} bytes, got ${copiedSize} bytes`,
  );
}

const sourceHash = createHash("sha256").update(sourceBytes).digest("hex");
const copiedHash = createHash("sha256").update(readFileSync(targetPath)).digest("hex");
if (copiedHash !== sourceHash) {
  throw new Error(
    `copied file hash mismatch: expected sha256 ${sourceHash}, got ${copiedHash}`,
  );
}

console.log(`Wrote ${targetPath} (${copiedSize} bytes, sha256 ${sourceHash.slice(0, 12)}…)`);
