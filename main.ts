// One Emoji, One Dream Vacation — write our dream-vacation emoji to /output/entry.txt.
//
// The emoji: 🏝️ Desert Island — a palm-topped island in open sea. The single
// most iconic dream-vacation postcard: no words needed, a stranger sees the
// place at a glance — white sand, one palm, nowhere to be. It names a place,
// not just a feeling: the trip itself, the island you escape to. Specific and
// personal rather than any generic holiday, instantly readable at small size
// in every culture, with a spark of wit in its excess — the whole dream is
// one tiny island. One emoji, no text, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🏝️";

const chars = [...EMOJI];
if (chars.length < 1 || chars.length > 8) {
  throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf-8");
console.log(`Wrote ${EMOJI.length} chars to /output/entry.txt: ${EMOJI}`);
