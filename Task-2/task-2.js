const fs = require("fs");

const directoryPath = "./testDir";
const fileName = "testFile.txt";
const renamedFileName = "renamedFile.txt";
const fileContent = "Hello, World!";

try {
  fs.mkdirSync(directoryPath);
  fs.writeFileSync(`${directoryPath}/${fileName}`, fileContent);
  fs.renameSync(
    `${directoryPath}/${fileName}`,
    `${directoryPath}/${renamedFileName}`
  );
  fs.rmSync(`${directoryPath}/${renamedFileName}`);
  fs.rmdirSync(directoryPath);
} catch (err) {
  console.error("An error occurred:", err);
}
