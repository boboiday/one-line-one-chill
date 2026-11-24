import { mkdirSync, writeFileSync } from "node:fs";

// One horror sentence for "One Line, One Chill".
// Scene: me, home at night, the front door, the dark kitchen.
// One mechanism, escalated three times: I lock the door, I check it
// twice, then my own voice speaks from the kitchen — and the quote
// reverses the safety the locking was supposed to give.
const LINE =
  "I locked the front door, checked it twice, and from the dark kitchen my own voice called out, 'You forgot the back door — and I already opened it.'";

// Gate: one line, under 200 UTF-8 characters, not only whitespace.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if ([...LINE].length >= 200 || LINE.trim().length === 0) {
  throw new Error("entry must be 1-199 UTF-8 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
