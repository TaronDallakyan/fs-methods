const fs = require("fs");

const watchDir = "./watchDir";

if (!fs.existsSync(watchDir)) {
  fs.mkdirSync(watchDir);
}

const watcher = fs.watch(watchDir, (eventType, filename) => {
  if (filename) {
    console.log(`Event Type: ${eventType}`);
    console.log(`File: ${filename}`);

    fs.stat(`${watchDir}/${filename}`, (err, stats) => {
      if (err && err.code === "ENOENT") {
        console.log(`File Deleted: ${filename}`);
      }
      if (err) {
        console.error("An error occurred:", err);
      }
      if (eventType === "rename") {
        console.log(`File Added/Modified: ${filename}`);
      }
      if (eventType === "change") {
        console.log(`File Modified: ${filename}`);
      }
    });
  } else {
    console.log("Filename not provided");
  }
});

setTimeout(() => {
  watcher.close();
}, 10000);
