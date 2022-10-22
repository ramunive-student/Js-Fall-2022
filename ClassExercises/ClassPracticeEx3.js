
function stringReverse (userInputString) {
    let reversedString = userInputString.split('').reverse().join('');
    return reversedString;  // OLLeH
}

/**
 * Create a function to add 2-numbers
 * 
 * 1. what is the purpose of the function?
 *      add 2 numbers (addNumbers)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? (2)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> yes
 *      If Yes,
 *          what is the datatype of returned value -> number
 */

function addNumbers (num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(addNumbers(1, 3));