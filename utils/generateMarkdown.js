// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'Apache 2.0') {
    return ' ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT Link](https://opensource.org/license/mit/)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0 link](https://opensource.org/license/apache-2-0/)';
  } else if (license === 'GNU') {
    return '[GNU Link](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string {
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'Click [here](./utils/licenses/MIT.txt) to view the MIT license document!';
  } else if (license === 'Apache 2.0') {
    return 'Click [here](./utils/licenses/APACHE.txt) to view the Apache 2.0 license!';
  } else if (license === 'GNU') {
    return 'Click [here](./utils/licenses/GNU.txt) to view the GNU license!';
  } else {
    return '';
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  
  ${renderLicenseBadge(data.licenseBadge)}
  # ${data.title}

  ## Description
- ${data.description}

## Table of Contents


- [Installation](#install)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

- ${data.install}

## Usage


-${data.usage}

## License


- ${renderLicenseSection(data.licenseSection)}
- ${renderLicenseLink(data.licenseLink)}



## Credits

- ${data.contributing}
-  GitHub: [${data.github}](https://github.com/${data.github})



## Tests

- ${data.tests}

## Questions
- If you have any questions please dont hesitate to contact me!
- Github: ${data.github}
- Email: ${data.email}

`;
}


module.exports = generateMarkdown;
