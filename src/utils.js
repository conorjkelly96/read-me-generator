// all functions are to be exported to index.js

// generate title
const generateTitle = (answers) => {
  // place pseudocode here
  return `# ${answers.title}`;
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

// dynamically render license badge depending on user choice
const generateLicenseBadge = (answers) => {
  const licenseType = answers.license[0];
  let licenseString = " ";
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }
  if (licenseType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  if (licenseType === "GNU General Public License 3.0") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  return licenseString;
};

// generate the Contributing section
const generateContributing = (answers) => {
  return `## Contributing
  
  ${answers.contribute}`;
};

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
};
