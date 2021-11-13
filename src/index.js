// install inquirer
const inquirer = require("inquirer");
const utils = require("./utils");
const fileGen = require("./file-gen");

// questions that will be prompted to the user
const mainQuestions = [
  {
    type: "input",
    name: "firstName",
    message: "What is your first name?",
  },
];

// generating Read Me document
const generateReadme = (answers) => {
  return `${generateTitle(answers)}

  ${generateTableOfContents(answers)}
  
  ${generateDescription(answers)}
  
  ${generateInstallation(answers)}
  
  ${generateUsage(answers)}
  
  ${generateTests(answers)}
  
  ${generateContributing(answers)}
  
  ${generateLicense(answers)}
  `;
};

// initialize user interaction
const init = async () => {
  // prompt questions
  const answers = await inquirer.prompt(mainQuestions);

  // generate read me
  const readMe = generateReadme(answers);

  // write readme generated
  fileGen.writeToFile("README.md", readMe);
};

init();
