// all functions are to be exported to index.js

// generate title
const generateTitle = ({ title }) => {
  // place pseudocode here
  return `# ${title}`;
};

const getOtherContents = ({ installation, usage, tests }) => {
  const contents = [];

  if (installation) contents.push("- [Installation](#installation)");

  if (usage) contents.push("- [Usage](#usage)");

  if (tests) contents.push("- [Tests](#tests)");

  return contents;
};

const generateToC = (answers) => {
  const contents = [
    "- [Description](#description)",
    ...getOtherContents(answers),
    "- [Contributing](#contributing)",
    "- [License](#license)",
  ];

  return `## Table of Contents\n
${contents.join("\n")}
`;
};

// generate description
const generateDescription = ({ description }) => {
  // place pseudocode here
  return `## Description
  
  ${description}`;
};

// generate the installation
const generateInstallation = ({ installation, installationProcess }) => {
  if (installation) {
    return `## Installation
  
  Run the following script to install the packages required for the application:
  
  \`\`\`
  ${installationProcess}
  \`\`\``;
  } else {
    return "";
  }
};

// generate the Usage
const generateUsage = ({ usage }) => {
  // place pseudocode here
  return `## Usage
  
  To use the application run the following script:
  
  \`\`\`
  ${usage}
  \`\`\``;
};

// generate the Usage
const generateTests = ({ tests, testProcess }) => {
  if (tests) {
    // place pseudocode here
    return `## Tests
  
  To test the application run the following tests:
  
  \`\`\`
  ${testProcess}
  \`\`\``;
  } else {
    return "";
  }
};

const generateLicenseBadge = ({ license }) => {
  let licenseString;
  if (license === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  } else if (license === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GNU General Public License 3.0") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  return licenseString;
};

// generate the Contributing section
const generateContributing = ({ contribute, github }) => {
  return `## Contributing
  If you'd like to contact me regarding application improvements, please email me at: ${contribute}
  
  My GitHub profile: [${github}](https://github.com/${github})`;
};

const generateLicense = ({ license }) => {
  return `## License
  This project is licensed under ${license}`;
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
  generateLicense,
};
