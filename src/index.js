// install inquirer
const inquirer = require("inquirer");
const utils = require("./utils");
const fileGen = require("./generate-file");

// questions that will be prompted to the user
const mainQuestions = [];

// initialize user interaction
const init = async () => {
  // prompt questions
  const answers = await inquirer.prompt(mainQuestions);
  // generate read me

  // write readme generated
};

init();
