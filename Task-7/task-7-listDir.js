const fs = require("fs");

const directoryPath = "./sourceDir";

function listFilesRecursive(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = `${dir}/${file}`;
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fileList = listFilesRecursive(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const files = listFilesRecursive(directoryPath);
console.log(files);
