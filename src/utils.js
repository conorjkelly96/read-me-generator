// all functions are to be exported to index.js

// generate title
const generateTitle = (answers) => {
  // place pseudocode here
  return `# TITLE ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
};

// generate table of contents
const generateToC = (answers) => {
  // place pseudocode here
  return `## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)`;
};

// generate description
const generateDescription = (answers) => {
  // place pseudocode here
  return `## Description
  
  ADD TEXT HERE`;
};

// generate the installation
const generateInstallation = (answers) => {
  // place pseudocode here
  return `## Installation
  
  Run the following script to install the packages required for the application:
  
  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

// generate the Usage
const generateUsage = (answers) => {
  // place pseudocode here
  return `## Usage
  
  To use the application run the following script:
  
  \`\`\`
  ADD TEXT HERE
  \`\`\``;
};

// generate the Contributing section
const generateContributing = (answers) => {
  return `## Contributing
  
  ADD TEXT HERE`;
};

// generate the License
const generateLicense = (answers) => {
  // place pseudocode here
  return `## License
  
  ADD TEXT HERE`;
};

// exporting modules for external use
module.exports = {
  generateTitle,
  generateToC,
  generateDescription,
  generateContributing,
  generateLicense,
  generateInstallation,
  generateUsage,
};
