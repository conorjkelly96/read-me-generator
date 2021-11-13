// install dependencies
const inquirer = require("inquirer");
const utils = require("./utils");
const { writeToFile } = require("./file-gen");

// questions that will be prompted to the user
const mainQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is your project called?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your application:",
  },
  {
    type: "confirm",
    name: "installation",
    message: "Does your application have an installation process?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do people use your application?",
  },
  {
    type: "confirm",
    name: "tests",
    message: "Does your application come with pre-defined tests?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How do people contribute to your application?",
  },
  {
    type: "list",
    name: "license",
    message: "What license requirements apply to your application?",
    choices: [
      { name: "MIT", value: "mit" },
      { name: "none", value: "" },
    ],
  },
];

const installationAnswer = [
  {
    type: "input",
    name: "installationProcess",
    message: "Enter the installation process for your application:",
  },
];

const testAnswer = [
  {
    type: "input",
    name: "testProcess",
    message: "Enter the testing process for your application:",
  },
];

// generating Read Me document
const generateReadme = (answers) => {
  return `${utils.generateTitle(answers)}

  ${utils.generateToC(answers)}

  ${utils.generateDescription(answers)}

  ${answers.generateInstallation ? utils.generateInstallation(answers) : ""}

  ${answers.generateTests ? utils.generateTests(answers) : ""}

  ${utils.generateUsage(answers)}

  ${utils.generateContributing(answers)}

  ${utils.generateLicense(answers)}
  `;
};

// initialize user interaction
const init = async () => {
  // prompt questions
  const answers = await inquirer.prompt(mainQuestions);
  console.log(answers);

  // generate read me
  const readMe = generateReadme(answers);

  // write readme generated
  writeToFile("./README.md", readMe);
};

init();
