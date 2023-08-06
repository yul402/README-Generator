// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user to generate README.md
const questions = [

    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe about your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: [ "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3","MIT", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please add additional contributing information here.",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be used to run tests?",
        default: "npm test"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data,(err) => {
        err ? console.log(err) : console.log("Generated README file");
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log("Generating.... Please wait....");
            console.log(answers);
            writeToFile("./README.md", generateMarkdown(answers));
        })
};

// function call to initialize program
init();