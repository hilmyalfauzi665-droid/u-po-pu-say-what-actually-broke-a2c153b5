import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Say What Actually Broke — make.fun program/v1 entry (Node 22, stdlib only, no network).
// Writes one deterministic line to /output/entry.txt.
const ENTRY = "The database didn't crash. We deleted it. It's in the backup, which we also deleted. Please hold while we panic professionally.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
