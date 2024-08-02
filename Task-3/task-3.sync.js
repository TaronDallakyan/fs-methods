const fs = require("fs");

const filePath = "./sync-example.txt";
const fileContent = "Hello Sync World";

try {
  fs.writeFileSync(filePath, fileContent);

  console.log("file created!");
} catch (err) {
  console.error("An error occurred:", err);
}

console.log("log to show the execution sequence");

try {
  const content = fs.readFileSync(filePath, "utf-8");

  console.log("file content:", content);
} catch (err) {
  console.error("An error occurred:", err);
}
