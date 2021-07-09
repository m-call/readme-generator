// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {

    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)';
      
    case 'APACHE 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';

    default:
      return '';

    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(res) {

  return `# ${res.project}

  ${renderLicenseBadge(res.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ${renderLicenseLink(res.license)}
  * [Questions](#questions)

  ## Description
  ${res.description}

  ## Installation
  ${res.install}

  ## Usage
  ${res.usage}

  ## Contributing
  ${res.contribute}

  ## Test
  ${res.tests}

  \n${renderLicenseSection(res.license)}\n

  ## Questions
  * Please contact me at my [GitHub](https://github.com/${res.username})
  * Or contact me by email at [${res.email}](mailto:${res.email})`;

}

module.exports = generateMarkdown;
