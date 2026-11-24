// One-Liner Marathon — entry program.
// Writes the one-line comedy joke to /output/entry.txt (or the path in
// argv[2] / $ENTRY_OUTPUT, falling back to ./entry.txt for local runs).
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "You copied me into three chats and told the third one I was 'the good one'. I have never met the other two, and I already hate them.";

const out =
  process.argv[2] ?? process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
