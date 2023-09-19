// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },

  {
    type: "input",
    message: "Provide a short description explaining the what, why, and how of your project.",
    name: "description"
  },


  {
    type: "input",
    message: "If your README is long, add a table of contents to make it easy for users to find what they need.",
    name: "contents"
  },
  {
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "install"
  },

  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage"
  },

  {
    type: "checkbox",
    message: "Please choose a license type.",
    choices: ["MIT", "Apache 2.0", "GNU"],
    name: "license"
  },

  {
    type: "input",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
    name: "credits"
  },

  {
    type: "input",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    name: "tests"
  },

  {
    type: "input",
    message: "Please enter your Github profile URL.",
    name: "username"
  },

  {
    type: "input",
    message: "Please enter your email.",
    name: "email"
  }

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const myMarkdown = generateMarkdown(data)
  fs.writeFile(fileName, myMarkdown, (err) => {

    err ? console.error(err) : console.log("README.md file has been successfully created!")
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      writeToFile("./output/README.md", data)
    })
};

// Function call to initialize app
init()
