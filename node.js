const inquirer = require('inquirer');

const fs = require('fs');

getUserInput(); 

function getUserInput() {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Project Name",
            name:"projectName"
        },
        {
            type:"input",
            message:"Contributor's Name",
            name:"contributorName"
        },
        {
            type:"input",
            message:"Enter Email Address",
            name:"email"
        },
        {
            type:"input",
            message:"Enter GitHub Username",
            name:"githubUser"
        },
        {
            type: "input",
            message: "Project Description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "Testing Requirements",
            name: "testing"
        },{
            type: "input",
            message: "Installation Requirements",
            name: "install"
        },{
            type: "input",
            message: "Usage",
            name: "usage"
        },{
            type: "list",
            message: "License",
            choices: ['MIT', 'ISC', 'Apache', 'GPL', 'BST', 'None'],
            name: "license"
        },
    ]).then(answers => {
        console.log(answers)
        let readMeText = `
# ${answers.projectName}
## Contributed by: ${answers.contributorName}
### Table of Contents
* [Description](#description)
* [GitHub User](#githubUser)
* [Installation](#installation)
* [Testing](#testing)
* [Usage](#usage)
* [License](#license)
* [Contact Us](#email)

##### Description: 
${answers.projectDescription}

##### GitHub Profile:
https://github.com/${answers.githubUser}

##### Installation: 
${answers.install}

##### Testing:
${answers.testing}

##### Usage:
${answers.usage}

##### License:
${answers.license}

##### Contact Us:
${answers.email}
`
console.log(readMeText)

    })
}