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
    type: "input",
    name: "installation",
    message: "Enter the installation process for your application:",
  },
  {
    type: "input",
    name: "usage",
    message: "How do people use your application?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How do people contribute to your application?",
  },
  {
    type: "input",
    name: "license",
    message: "What license requirements apply to your application?",
  },
];

// generating Read Me document
const generateReadme = (answers) => {
  return `${utils.generateTitle(answers)}

  // this is going to be generated for each section
  ${utils.generateToC(answers)}

  ${utils.generateDescription(answers)}

  ${utils.generateInstallation(answers)}

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
