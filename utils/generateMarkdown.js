// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {

    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)';
      
    case 'APACHE 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';

    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';

    case 'BSD 3':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';

    case 'None':
      return 'No license';

    default:
      return '';

    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {

    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';

    case 'APACHE 2.0':
      return '[APACHE 2.0 License](https://opensource.org/licenses/Apache-2.0)';

    case 'GPL 3.0':
      return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';

    case 'BSD 3':
      return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';

    case 'None':
      return 'No license link';

    default:
      return '';

  }

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
  To install necessary dependencies, run the following command:
  ${res.install}

  ## Usage
  ${res.usage}

  ## License
  \n${renderLicenseSection(res.license)}\n

  ## Contributing
  ${res.contribute}

  ## Test
  ${res.tests}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly:
  * Please contact me at my [GitHub](https://github.com/${res.username})
  * Or contact me by email at [${res.email}](mailto:${res.email})`;

}

module.exports = generateMarkdown;
