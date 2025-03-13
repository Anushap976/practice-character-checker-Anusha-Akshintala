
//Import readlinesync 
let readlineSync = require('readline-sync');

// to prompt a user for input

let userInput = readlineSync.question("Can you enter a string: ");

// prompt a user for an index number

let indexValue = readlineSync.questionInt("Can you enter number to get index value: ");

// to get character for given index value
let charAtIndex = userInput[indexValue];

//to get output

console.log("Character of index value in string is: " + charAtIndex );
