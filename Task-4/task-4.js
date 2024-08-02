const fs = require("fs");

const filePath = "./data.json";

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    return console.error("Error reading file:", err);
  }

  let users;
  try {
    users = JSON.parse(data);
  } catch (err) {
    return console.error("Error parsing JSON:", err);
  }

  const newUser = { name: "Hamo", age: 28 };
  users.push(newUser);

  const updatedData = JSON.stringify(users, null, 2);

  fs.writeFile(filePath, updatedData, "utf-8", (err) => {
    if (err) {
      return console.error("Error writing file:", err);
    }
    console.log("File updated successfully");
  });
});
