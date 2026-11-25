// The Moon Finally Answers Back — one line in the Moon's own voice, wry
// and old and a little tired of being wished upon. The comeback has to
// land in a single read: four billion years on the job, and nobody ever
// asked how the Moon was doing. Writes /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const LIMIT = 240;

// The Moon, answering at last: the setup is the age, the punch is the
// one wish nobody ever made. No howling required; the complaint is
// filed in the same tired voice as the tides.
const PARTS = [
  "Four billion years of wishes,",
  "and not one of you has ever wished me a day off.",
];

const line = PARTS.join(" ");
const length = [...line].length;

if (length < 1 || length > LIMIT) {
  throw new Error(`entry must be 1-${LIMIT} chars, got ${length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!/Moon|moon|billion/.test(line)) {
  throw new Error("entry must sound like the Moon answering");
}
if (!line.endsWith(".")) {
  throw new Error("entry must end on its comeback, with a period");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), `${line}\n`, "utf8");
console.log(`${length} chars -> ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(line);
