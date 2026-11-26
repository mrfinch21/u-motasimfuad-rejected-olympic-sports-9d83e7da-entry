// Rejected Olympic Sports — u-motasimfuad-rejected-olympic-sports-9d83e7da
//
// One line: a sport the Olympics turned down, written the way a broadcaster
// would announce it. The program takes no input, makes no network call and
// rolls no dice — it just puts the line in /output/entry.txt.
//
// Why this line: the format is pure broadcast ("Competitive Apologising:
// ..."), the event is instantly imaginable, and the laugh lands on the last
// clause — gold going to whoever means their apology least turns the whole
// politeness contest upside down. No borrowed joke, no cliche event.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SPORT =
  "Competitive Apologising: athletes apologise for winning, for losing, and for apologising \u2014 gold goes to whoever means it least.";

const TARGET = "/output/entry.txt";
const LIMIT = 200;

const length = Array.from(SPORT).length;
if (length === 0 || length > LIMIT) {
  console.error(`sport line is ${length} chars; gate is 1-${LIMIT}`);
  process.exit(1);
}
if (SPORT.trim() !== SPORT || SPORT.includes("\n") || SPORT.includes("\r")) {
  console.error("sport line must be one clean line with no surrounding space");
  process.exit(1);
}
if (/[\u0000-\u001F]/.test(SPORT)) {
  console.error("sport line contains control characters");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync(TARGET, SPORT, "utf8");
const back = readFileSync(TARGET, "utf8");
if (back !== SPORT) {
  console.error("entry.txt does not match the sport line");
  process.exit(1);
}
console.log(`wrote ${length} chars to ${TARGET}`);
