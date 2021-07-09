// This function displays the image of the license that is chosen by the user on their README file
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

// This function displays the link of the license that is chosen by the user on their README file
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

// This function creates the License section of the README, if there is no license there will be no license section
function renderLicenseSection(license) {

  if (license == 'none') {
    return `## License \nThis project has no license.`;
  } else {
    return `## License \nThis project is licensed under the ${renderLicenseLink(license)}.`;
  }

}

// This function returns content that will be displayed on the README file by using a single template literal
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
  * [Questions](#questions)

  ## Description
  ${res.description}


  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${res.install}
  \`\`\`

  ## Usage
  ${res.usage}

  \n${renderLicenseSection(res.license)}\n

  ## Contributing
  ${res.contribute}

  ## Test
  To run the tests, run the following command:
  \`\`\`
  ${res.tests}
  \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly:
  * Please contact me directly at my [GitHub](https://github.com/${res.username})
  * Or contact me by email at [${res.email}](mailto:${res.email})`;

}

module.exports = generateMarkdown;
