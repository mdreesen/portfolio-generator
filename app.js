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


const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    /* profileDataArr.forEach(function(profileItem) {
        console.log(profileItem); */

    profileDataArr.forEach(profileItem => console.log(profileItem));

};
printProfileData(profileDataArgs);