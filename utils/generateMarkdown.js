// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents

* [Installation](#Installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributors](#contributors)

* [Tests](#tests)

* [Questions](#questions)


## Installation

To install dependencies, run these commands:

\`\`\`
${data.dependencies}
\`\`\`


## Usage

${data.usage}

${renderLicenseSection(data.license)}


## Contributing
To make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

* Fork the Project
* Create your Feature Branch (git checkout -b feature/AmazingFeature)
* Commit your Changes (git commit -m 'Add some AmazingFeature')
* Push to the Branch (git push origin feature/AmazingFeature)
* Open a Pull Request

${data.contributing}


## Tests

To run tests, run these commands:

\`\`\`
${data.test}
\`\`\`

## Questions
This project is contributed by [${data.github}](https://github.com/${data.github}/)
Contact infotmation: ${data.email}
`;
}

// Function to render badge
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// Function to render link
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}


// Function to render section
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

module.exports = generateMarkdown;
