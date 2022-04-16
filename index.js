// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Does your project have any specific installation instructions?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your project',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter testing instructions',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['no license', 'mit', 'mozilla', 'apache']
    },
]

// TODO: Create a function to write README file
function writeToFile (filename, data) {
    fs.writeFile(filename, data, err => { err ? console.log(err) : console.log('Readme written')})
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readMe => {
        return readMe;
    })
}

// Function call to initialize app
init()
.then(readMe => {
    return generateMarkdown(readMe)
})
.then(readMe => {
    return writeToFile('README.md', readMe);
})
