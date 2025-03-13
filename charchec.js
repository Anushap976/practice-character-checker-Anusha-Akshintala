
//Import readlinesync 
let readlineSync = require('readline-sync');

// to prompt a user for input
let userInput = readlineSync.question("Can you enter a string: ");

// prompt a user for an index number
let indexValue = readlineSync.questionInt("Can you enter number for index value: ");

// fetch character for given index value from the input
let charAtIndex = userInput[indexValue];

//Print console output
console.log("Character of index value in string is: " + charAtIndex );
