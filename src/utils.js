// all functions are to be exported to index.js

const inquirer = require("inquirer");

// generate title
const generateTitle = (answers) => {
  // place pseudocode here
  return `# ${answers.title} ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
};

// generate table of contents
const generateToC = (answers) => {
  // place pseudocode here
  return `## Table of Contents
  
  - [Description](#description)
  ${answers.generateInstallation ? `- [Installation](#installation)` : ""}
  - [Usage](#usage)
  ${answers.generateTests ? `  - [Tests](#tests)` : ""}
  - [Contributing](#contributing)
  - [License](#license)`;
};

// generate description
const generateDescription = (answers) => {
  // place pseudocode here
  return `## Description
  
  ${answers.description}`;
};

// generate the installation
const generateInstallation = (answers) => {
  // place pseudocode here
  return `## Installation
  
  Run the following script to install the packages required for the application:
  
  \`\`\`
  ${answers.installation}
  \`\`\``;
};

// generate the Usage
const generateUsage = (answers) => {
  // place pseudocode here
  return `## Usage
  
  To use the application run the following script:
  
  \`\`\`
  ${answers.usage}
  \`\`\``;
};

// generate the Usage
const generateTests = (answers) => {
  // place pseudocode here
  return `## Tests
  
  To test the application run the following tests:
  
  \`\`\`
  ${answers.test}
  \`\`\``;
};

// generate the Contributing section
const generateContributing = (answers) => {
  return `## Contributing
  
  ${answers.contribute}`;
};

// generate the License
const generateLicense = (answers) => {
  // place pseudocode here
  return `## License
  
  ${answers.license}`;
};

// exporting modules for external use
module.exports = {
  generateTitle,
  generateToC,
  generateDescription,
  generateTests,
  generateContributing,
  generateLicense,
  generateInstallation,
  generateUsage,
};
