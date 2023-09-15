// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "Provide instructions and examples for use. Include screenshots as needed.",
    name: "usage"
  },

  {
    type: "input",
    message: "This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).---",
    name: "license"
  },

  {
    type: "input",
    message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    name: "credits"
  },

  {
    type: "input",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    name: "tests"
  },

  {
    type: "input",
    message: "",
    name: "questions"
  },

]

  .then((data) => {
    console.log(data);

    const myHTML = createHTML(data);
    fs.writeFile("index.html", myHTML, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file was created successfully!");
      }
    }
    )
  })

// TODO: Create a function to write README file
function writeToFile(title, description, contents, install, usage, license, credits, tests, questions) {
  return `markdownfile`;
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
