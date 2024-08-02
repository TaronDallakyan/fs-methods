const fs = require("fs");

const filePath = "./example.txt";
const fileContent = "Hello, World!";
const appendedContent = " This is Node.js FS module.";

try {
  fs.writeFileSync(filePath, fileContent);
  fs.appendFileSync(filePath, appendedContent);

  const finalFileContent = fs.readFileSync(filePath, "utf-8");

  console.log(finalFileContent);
} catch (err) {
  console.error("An error occurred:", err);
}
