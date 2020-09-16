// This is the beginning code
// Process is like window or document in js, everything
// argv is where it captures the data
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// Slice takes away the old array to change it out with this new one
/* In the console, we put in -> node app.js 'Michael' 'Web Developer'
This returns an array with Michael and Web Developer
Process is like window or document, argv is getting that data, .length is getting the whole thing */
// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

/*
const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    /* profileDataArr.forEach(function(profileItem) {
        console.log(profileItem); */
/*
    profileDataArr.forEach(profileItem => console.log(profileItem));

};
printProfileData(profileDataArgs);
*/


// const generatePage = () => 'Name: Michael, Github: mdreesen';

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
//const fs = require('fs');
//const generatePage = require('./src/page-template.js');


//const profileDataArgs = process.argv.slice(2, process.argv.length);

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
// Below is the same as the above
//const [name, github] = profileDataArgs;

// first argument: the name that will be created
// second argument: data that is being written, html string template
// third argument: callback function that will handle errors and success message
//fs.writeFile('index.html', generatePage(name, github), err => {
// if (err) throw err;

// console.log('Portfolio Complete! Check out index.html to see the output!');
//});

const inquirer = require('inquirer');

// console.log(inquirer);

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Enter Your Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Enter Your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the name of your project?',
                validate: projectNameInput => {
                    if (projectNameInput) {
                        return true;
                    } else {
                        console.log('Please Enter Your Project Name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please Enter Your Description Of The Project!');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What language did you use this project with? (Check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'link',
                message: 'Enter the Github link to your project. (Required)',
                validate: linkInput => {
                    if (linkInput) {
                        return true;
                    } else {
                        console.log('Please Enter Your Project Link!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this project?'
            },
            {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'Would you like to enter another project?',
                default: false
            }
        ])
        .then(projectData => {
            // we are pushing a new project
            portfolioData.projects.push(projectData);
            // we're evaluating the user response to whether they wish to add more projects
            // If the user wishes to add more projects, then this condition will evaluate to true
            // This will then call promptProject(portfolioData) function
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                // If the user decides not to add more projects, it will evaluate to false
                return portfolioData;
            }
        });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => console.log(portfolioData));