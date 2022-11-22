import { readFile, writeFile } from "fs";

readFile("./src/content/first.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  const first = data;
  readFile("./src/content/second.txt", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    const second = data;
    writeFile(
      "./src/content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err) => {
        if (err) {
          throw err;
        }
        console.log("file has been saved");
      }
    );
  });
});
