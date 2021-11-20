# README File Generator

## About the project

This application solves the problem of having to create a `README.md` file again for each individual project a developer completes. Often developers find themselves searching the web for good README templates or copy and pasting from previous projects. Through leveraging `node.js` and associated packages such as `inquirer.js` allowed me to create an app to help solve this issue, by automatically generating README files given specific user inputs.

## Technologies Used

- JavaScript
  - node.js
  - inquirer

## Link to Walkthrough

[Click here!](https://conorjkelly96.github.io/personal-day-planner/)

## Solution Overview

### Application Structure

This application contains many different functions, therefore they were split between three files:

- index.js (main application)
- file-gen.js (file generation functions)
- utils.js (utility functions)

And directly exported and imported to index.js:

```javascript
// exporting modules for external use
module.exports = {
  generateTitle,
  generateToC,
  generateDescription,
  generateTests,
  generateContributing,
  generateInstallation,
  generateUsage,
  generateLicenseBadge,
  generateLicense,
};

// install dependencies
const inquirer = require("inquirer");
const utils = require("./utils");
const { writeToFile } = require("./file-gen");
```

### Using Inquirer to structure questions

Leveraging the inquirer.js methods such as `inquirer.prompt(questions, answers)` allowed for the user to respond to a set of questions used to generate their `README.md` file. One questions array was used to store the questions. Where conditional responses were required, the inquirer's `when` keyword was used to invoke further questions given a truthy response:

```javascript
{
    type: "confirm",
    name: "tests",
    message: "Does your application come with pre-defined tests?",
  },
  {
    type: "input",
    name: "testProcess",
    message: "Enter the test process for your application",
    when: (answers) => answers.tests === true,
  },
```

The responses were stored in the variable `const answers`. As the function `const init = async ()` is a promised based function, the `await` keyword was used to handle the fulfilled promise.

```javascript
const answers = await inquirer.prompt(mainQuestions);
```

### Object Deconstructing

Object deconstruction was used to only leverage object keys required to perform tasks within the util functions. Please see an example of using object deconstruction as arguments to generate elements of the `README.md`, where only the `installation`, `usage` & `tests` keywords are required:

```javascript
const getOtherContents = ({ installation, usage, tests }) => {
  const contents = [];

  if (installation) contents.push("- [Installation](#installation)");

  if (usage) contents.push("- [Usage](#usage)");

  if (tests) contents.push("- [Tests](#tests)");

  return contents;
};
```

### Generating the README file

The `file-gen.js` module was used to create functions required to generate the `README.md` file. These too were exported to `index.js`.

The `try/catch` keywords were used alongside the file system `writeFileSync()` methods to create the `README.md` document, with a `catch` block used for error handling.

```javascript
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
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

// initialize user interaction
const init = async () => {
  // prompt Main Questions - Set 1
  const answers = await inquirer.prompt(mainQuestions);

  // generate read me
  const readMe = generateReadme(answers);

  // write readme generated
  writeToFile("./user_read_me.md", readMe);
};
```

### Additions to the MVP

I plan to handle multiple inputs to questions such as `installationSteps` by looping over the question until the user has finished entering the multiple inputs. This will be useful for applications that contain multiple installation or testing steps.
