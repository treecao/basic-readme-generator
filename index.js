// TODO: Include packages needed for this application
const inquirer = require("inquirer")  // Accept userinput from command line
const fs = require("fs");//manipulate files - read write operations
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter Project Title: ",
        name:"title"
    },

    {
        type:"input",
        message:"Enter Project Description: ",
        name:"Description"
    },

    {
        type:"input",
        message:"Enter Project Installation Requirements: ",
        name:"Requirements"
    },

    {
        type:"input",
        message:"Enter Project Testing: ",
        name:"Testing"
    },

    {
        type:"input",
        message:"Enter Project Usage: ",
        name:"Usage"
    },

    {
        type:"list",
        message:"Enter Project License: ",
        name:"License",
        choices:['MIT', 'ISC', 'GPL', 'Apache 2.0', 'No License']
    },

    {
        type:"input",
        message:"Enter Project Contributors: ",
        name:"Contributors"
    },

    {
        type:"input",
        message:"Enter Github Username: ",
        name:"Github"
    },

    {
        type:"input",
        message:"User Email: ",
        name:"Email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response)
    })
}

// Function call to initialize app
init();