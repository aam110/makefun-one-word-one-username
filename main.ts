import { mkdirSync, writeFileSync } from "node:fs";

// One Word, One Username, One Reward — the entrant's own handle, one word, no gloss.
const word = "silowek";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
