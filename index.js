//packages needed for this application
const inquirer = require("inquirer")  //accepts userinput from command line
const fs = require("fs"); //manipulates files - read/write operations
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions
const questions = [
    {
        type:"input",
        message:"README Title: ",
        name:"title"
    },

    {
        type:"input",
        message:"Description of Project: ",
        name:"Description"
    },

    {
        type:"input",
        message:"Installation Instructions/Requirements: ",
        name:"Requirements"
    },

    {
        type:"input",
        message:"Project Testing: ",
        name:"Testing"
    },

    {
        type:"input",
        message:"Project Usage: ",
        name:"Usage"
    },

    {
        type:"list",
        message:"Select a License: ",
        name:"License",
        choices:['MIT', 'ISC', 'GPL', 'Apache 2.0', 'No License']
    },

    {
        type:"input",
        message:"Contributors: ",
        name:"Contributors"
    },

    {
        type:"input",
        message:"Github Username: ",
        name:"Github"
    },

    {
        type:"input",
        message:"User Email: ",
        name:"Email"
    },
];

//write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data),function(err){
        if(err) throw err;
    });
}

//initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response)
        writeToFile("README.md", response);
    })
}

//initialize app
init();