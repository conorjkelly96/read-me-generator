// install dependencies
const inquirer = require("inquirer");
const utils = require("./utils");
const { writeToFile } = require("./file-gen");

// questions that will be prompted to the user
// think about splitting this into part 1 and 2
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
    name: "installationProcess",
    message: "Enter the installation process for your application",
    when: (answers) => answers.installation === true,
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
    name: "testProcess",
    message: "Enter the test process for your application",
    when: (answers) => answers.tests === true,
  },
  {
    type: "input",
    name: "contribute",
    message: "How do people contribute to your application?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username:",
  },
  {
    type: "list",
    name: "license",
    message: "What license requirements apply to your application?",
    choices: [
      "MIT",
      "GNU General Public License 2.0",
      "Apache License 2.0",
      "GNU General Public License 3.0",
    ],
  },
];

// generating Read Me document
const generateReadme = (answers) => {
  return `${utils.generateLicenseBadge(answers)}

  ${utils.generateTitle(answers)}

  ${utils.generateToC(answers)}

  ${utils.generateDescription(answers)}

  ${utils.generateInstallation(answers)}

  ${utils.generateTests(answers)}

  ${utils.generateUsage(answers)}

  ${utils.generateContributing(answers)}
  
  ${utils.generateLicense(answers)}

  `;
};

// initialize user interaction
const init = async () => {
  // prompt Main Questions - Set 1
  const answers = await inquirer.prompt(mainQuestions);

  // generate read me
  const readMe = generateReadme(answers);

  // write readme generated
  writeToFile("./README.md", readMe);
};

init();
