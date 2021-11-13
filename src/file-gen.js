const fs = require("fs");

// read from file
const readFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    // handle error
    console.log(error.message);
  }
};

// write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

// append to file
const appendToFile = (filePath, data) => {
  try {
    fs.appendFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

// exporting modules for external use
module.exports = {
  readFromFile,
  writeToFile,
  appendToFile,
};
