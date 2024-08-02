const fs = require("fs");

const filePath = "./nonexistingFile.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error(`Error: The file at path "${filePath}" does not exist.`);
    } else {
      console.error("Error reading file:", err);
    }
  } else {
    console.log("File content:", data);
  }
});
