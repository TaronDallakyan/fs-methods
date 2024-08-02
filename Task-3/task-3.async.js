const fs = require("fs");

const filePath = "./async-example.txt";
const fileContent = "Hello Async World";

fs.writeFile(filePath, fileContent, (err, data) => {
  if (err) {
    console.error("An error occurred:", err);
  } else {
    console.log("file created!");
  }
});

console.log("log to show the execution sequence");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("An error occurred:", err);
  } else {
    console.log("file content:", data);
  }
});
