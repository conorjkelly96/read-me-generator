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
      "MIT",
      "GNU General Public License 2.0",
      "Apache License 2.0",
      "GNU General Public License 3.0",
    ],
  },
];

// const installationQuestion = [
//   {
//     type: "input",
//     name: "installationProcess",
//     message: "Enter the installation process for your application:",
//   },
// ];

// const mainQuestions2 = [
//   {
//     type: "input",
//     name: "usage",
//     message: "How do people use your application?",
//   },
//   {
//     type: "confirm",
//     name: "tests",
//     message: "Does your application come with pre-defined tests?",
//   },
//   {
//     type: "input",
//     name: "contribute",
//     message: "How do people contribute to your application?",
//   },
//   {
//     type: "list",
//     name: "license",
//     message: "What license requirements apply to your application?",
//     choices: [
//       "MIT",
//       "GNU General Public License 2.0",
//       "Apache License 2.0",
//       "GNU General Public License 3.0",
//     ],
//   },
// ];

// const testsQuestion = [
//   {
//     type: "input",
//     name: "testProcess",
//     message: "Enter the testing process for your application:",
//   },
// ];

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

  // if installation = T, then prompt installation question set
  // if (answers1.installation) {
  //   const installationAnswer = await inquirer.prompt(installationQuestion);
  //   return installationAnswer;
  // }

  // prompt Main Questions - Set 2
  // const answers2 = await inquirer.prompt(mainQuestions2);

  // if tests = true, then prompt the tests question set
  // if (answers2.tests) {
  //   const testsAnswer = await inquirer.prompt(testsQuestion);
  //   return testsAnswer;
  // }

  // generate read me
  const readMe = generateReadme(answers);

  // write readme generated
  writeToFile("./README.md", readMe);
};

init();
