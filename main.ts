// One Emoji, One Smile — a make.fun entry.
// The whole entry is a single emoji, written on its own to entry.txt
// inside the directory the grader names through MAKEFUN_OUTPUT_DIR.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pick: a hugging face. It reads at a glance as a warm hello —
// open hands, a small smile, nothing flirty or ironic — so a stranger
// who sees it on a phone screen gets the kindness straight away.
const theEmoji = "🤗";

function writeEntry(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }

  // Guard the gate before writing: the file must hold exactly one
  // emoji — one grapheme cluster — and nothing else, no newline.
  const clusters = [...new Intl.Segmenter().segment(theEmoji)];
  if (clusters.length !== 1 || theEmoji.length > 8) {
    throw new Error("the entry must be exactly one emoji");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), theEmoji, "utf8");
}

writeEntry();
