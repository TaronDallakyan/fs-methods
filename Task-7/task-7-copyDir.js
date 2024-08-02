const fs = require("fs");

const sourceDir = "./sourceDir";
const destinationDir = "./destinationDir";

function copyDirectoryRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = `${src}/${entry.name}`;
    const destPath = `${dest}/${entry.name}`;

    if (entry.isDirectory()) {
      copyDirectoryRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDirectoryRecursive(sourceDir, destinationDir);
console.log(`Contents of ${sourceDir} have been copied to ${destinationDir}`);
