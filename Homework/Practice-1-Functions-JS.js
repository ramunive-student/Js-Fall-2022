/**PracticeQ1-------------------------------------------------------------------------------------
 * Create a function to return reverse a given array (without using reverse-function from array-class)
    example:
        input -> [hello, laugh, live, peaceful, hopeful]
        ans -> [hopeful, peaceful, live, laugh, hello]
        input -> [hello, laugh, live, king, queen]
        ans -> [queen, king, live, laugh, hello]

    Test cases:
        let originalArr = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];
        let originalArr = ['hello'];
        let originalArr = [];


 */

console.log('\n**********PracticeQ1**********\n');   

let originalArr1 = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];

function reverseElementsOfArray(originalArr){

    let reverseArr = [];
    let counter = 0;

    for(let i = originalArr.length-1; i >=0; i--){
        reverseArr[counter] = originalArr[i];
        counter++;
    }

    return reverseArr;

}

let reverseArr = reverseElementsOfArray(originalArr1);

console.log(`Original array -> ${originalArr1}`);
console.log(`Reversed array -> ${reverseArr}`);

/**PracticeQ2---------------------------------------------------------------------------------------
 * Create a function to return the largest string(s) from a given string array.
    example:
        input -> [hello, laugh, live, peaceful, hopeful]
        ans -> peaceful
        input -> [hello, laugh, live, king, queen]
        ans -> hello, laugh, queen

   Test cases:
    let originalArr2 = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];
    let originalArr2 = ['hello', 'laugh', 'live', 'king', 'queen'];
    let originalArr2 = ['hello'];     
    let originalArr2 = [];

*/

console.log('\n**********PracticeQ2**********\n');

let originalArr2 = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];


function longestStringsInArray (originalArr){

    let longestStrings = [];
    let longest = 0;

    //find longest length
    for(let str of originalArr){
        if (str.length > longest)
            longest = str.length;
    }

    //make a list of the strings with the longest length
    for(let str of originalArr){
        if (str.length === longest){
            longestStrings.push(str);
        }
    }

    return longestStrings;

}

let longestStrings = longestStringsInArray(originalArr2);

console.log(`Original array -> ${originalArr2}`);
console.log(`Longest string(s) -> ${longestStrings}`);

/**PracticeQ3-------------------------------------------------------------------------------------------
 * Create a function to return color name(s) appearing maximum number of times in given string array
    example:
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red]
        ans -> red
        input -> [green, blue, red, green, orange, blue, red, yellow, red, red, blue, orange, blue]
        ans -> blue, red
        input -> []
        ans -> 

    Test cases:
        let inputArr1 = ['green', 'blue', 'red', 'green', 'orange', 'blue', 'red', 'yellow', 'red', 'red'];
        let inputArr1 = ['green', 'blue', 'red', 'green', 'orange', 'blue', 'red', 'yellow', 'red', 'red', 'blue', 'orange', 'blue'];
        let inputArr1 = ['green'];
        let inputArr1 = [];


 */
console.log('\n**********PracticeQ3**********\n');

let inputArr1 = ['green', 'blue', 'red', 'green', 'orange', 'blue', 'red', 'yellow', 'red', 'red'];

let maxAppearance = 0;
let alreadyLookedAt = [];
let colorCounts = [];
let maxColors = [];
let counter = 0;

// make an array of objects containing the color name, and the number of times that color appears
// keep track of the largest number of appearances while going through the original array
// keep track of colors that have already been examined and ignore them if they appear again

/**TODO:  ***************START HERE. May need to change the loop type*/
for (let i = 0; i < inputArr1.length; i++){
    if(alreadyLookedAt.includes(inputArr1[i])){
        continue;
    }
    alreadyLookedAt.push(inputArr1[i]);
    counter = 0;
    for(let j = i; j < inputArr1.length; j++){
        if(inputArr1[j].localeCompare(inputArr1[i]) === 0){
            counter++;
        }
    }
    
    if(counter > maxAppearance){
        maxAppearance = counter;
    }
    
    let colorObj = {
        color : inputArr1[i],
        numTimes : counter

     }
    
    colorCounts.push(colorObj);
    
}
// go through the array of objects and if the color appears the maximum number of times add it to an array containing the colors which appear the maximum number of times 

for (let i = 0; i < colorCounts.length; i++){

    if (colorCounts[i].numTimes === maxAppearance){

        maxColors.push(colorCounts[i].color);

    }

}

console.log(`Original array -> ${inputArr1}`);
console.log(`Color(s) appearing max times -> ${maxColors}`);
console.log(`Maximum number of occurences in array -> ${maxAppearance}`);


/**PracticeQ4------------------------------------------------------------------------------------------
 *  Create a function to return minimum value in the given numbers-array
    example:
        input -> [12, 34, 25, 7, 4, 67, 19]
        ans -> 4
        input -> [34, 54, 12, -8, 0, 45]
        ans -> -8
        input -> [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49]
        ans -> 10

    Test cases:
        let inputArray2 = [12, 34, 25, 7, 4, 67, 19];
        let inputArray2 = [34, 54, 12, -8, 0, 45];
        let inputArray2 = [109, 65, 24, 65, 10, 11, 89, 35, 90, 10, 23, 49];
        let inputArray2 = [12];
        let inputArray2 = []; 
*/   

console.log('\n**********PracticeQ4**********\n');

//let inputArray2 = [12, 34, 25, 7, 4, 67, 19];
let inputArray2 = [];

let min = inputArray2[0];

for(let num of inputArray2){

    if (num < min){
        min = num;
    }

}

console.log(`Original array -> ${inputArray2}`);
console.log(`Minimum number -> ${min}\n`);
