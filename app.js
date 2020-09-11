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
const fs = require('fs');
const generatePage = require('./src/page-template.js');


const profileDataArgs = process.argv.slice(2, process.argv.length);

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
// Below is the same as the above
const [name, github] = profileDataArgs;

// first argument: the name that will be created
// second argument: data that is being written, html string template
// third argument: callback function that will handle errors and success message
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio Complete! Check out index.html to see the output!');
});