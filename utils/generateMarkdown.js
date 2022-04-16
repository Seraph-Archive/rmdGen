// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'no license') {
    return '';
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'no license') {
    return '';
    } else {
      `[${license}](https://choosealicense.com/licenses/${license})`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return '';
  } else {
    return `## [License](#table-of-contents)

    The project is covered under the following license: ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  * [Installation](#installation)
  * [Contribution](#contribution)
  * [Description](#description)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)


  ## [Installation]
  ${data.installInstructions}

  ## [Contribution]
  ${data.contribution}

  ## [Description]
  ${data.description}

  ## [Usage]
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## [Tests]
  ${data.test}

  ## [Questions]
  Contact or ask questions at:
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
