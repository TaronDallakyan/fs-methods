const fs = require("fs");

const filePath = "./example.txt";

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(`Error reading file metadata: ${err.message}`);
    return;
  }

  console.log(`File Size: ${stats.size} bytes`);
  console.log(`Creation Date: ${stats.birthtime}`);
  console.log(`Last Modified Date: ${stats.mtime}`);
  console.log(`Is Directory: ${stats.isDirectory()}`);
  console.log(`Is File: ${stats.isFile()}`);
  console.log(`Current Permissions: ${stats.mode}`);
});

fs.chmod(filePath, 0o444, (err) => {
  if (err) {
    console.error(`Error changing file permissions: ${err.message}`);
    return;
  }

  console.log(`File permissions changed to read-only for ${filePath}`);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error(`Error reading file metadata: ${err.message}`);
      return;
    }

    console.log(`Current Permissions: ${stats.mode}`);
  });
});
