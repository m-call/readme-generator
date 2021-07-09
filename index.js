// Importing the necessary files and packages from Inquirer
// and File System as well as the Generate Markdown file
const markdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: `What is your project's name?`,
            name: 'project'
        },
        {
            type: 'input',
            message: 'Please write a short description of your project.',
            name: 'description'
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'install',
            default: 'npm i'
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
            default: 'npm test'
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribute'
        },
    ])
    .then((res) => {
        fs.writeFile('SampleREADME.md', generateMarkdown(res), (err) =>
            err ? console.log(err) : console.log("Generating README...")
    );
});