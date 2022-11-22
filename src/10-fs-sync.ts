import { readFileSync, writeFileSync } from "fs";
import path from "path";

const first = readFileSync("./src/content/first.txt", { encoding: "utf8" });
const second = readFileSync("./src/content/second.txt", { encoding: "utf8" });

console.log(first);
console.log(second);

writeFileSync(
  "./src/content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
