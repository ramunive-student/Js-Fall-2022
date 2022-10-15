/**
 * Homework 4 - Roberta Munive
 */


/**-----------------------------------------------------------------------------------------------------------------------
 * Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */

 const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 //const sports = ['Football', 'Soccer', 'Basketball','Baseball', 'Rugby'];
 //const sports = ['Football', 'Soccer'];
 //const sports = ['Football'];
 //const sports = [];
 
let lookFor = "BASKETBALL";

console.log('\n\nQ1-----------------')

//convert word you want to find into TitleCase to match the format of the words in the sports array (assuming that case is not important here)
lookFor_TC = lookFor.charAt(0).toUpperCase() + lookFor.substring(1).toLowerCase();


//determine if the word you are looking for appears in the sports array by finding the its index in the sports array

let indexOfLookFor_TC = sports.indexOf(lookFor_TC);

console.log(`Original array: ${sports}`);

if(indexOfLookFor_TC === 2){
    console.log(`${lookFor_TC} is present at index-2`);
} else if (indexOfLookFor_TC >= 0){
    console.log(`${lookFor_TC} is mentioned in the sports array`);
}else if (sports.length > 2){  //index must be -1 here
    let originalValueAtIndex2 = sports[2];
    sports[2] = lookFor_TC;
    console.log(`Original value at index-2: ${originalValueAtIndex2}`);
}else { 
    // index must be -1 here but there is no value at index 2 to be replaced
    // the requirements say to place the value at index-2, but would need to clarify how this case is to be handled
    // depending on the length of sports array, sports[0] and/or sports[1] may be undefined
    // an alternative solution would be sports.push(lookFor) which would place the value at the end of the array
    sports[2] = lookFor_TC;
    console.log('Originally, there was no value at index-2');
    
}

console.log(`Current array: ${sports}\n\n`);




/**------------------------------------------------------------------------------------------------------------------------
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

 let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 //let planets = ['Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 //let planets = [];

 console.log('Q2-------------');
 console.log(`Original array: ${planets}`);

 lookFor = 'Earth';

 if (planets.length === 0){
    planets[0] = lookFor;
 } else if(planets[0].localeCompare(lookFor) === 0){
    console.log('Earth is mentioned in expected index');
 }else{
    planets.unshift(lookFor);
 }

 console.log(`Current array: ${planets}`);
 console.log('\n\n');


/**------------------------------------------------------------------------------------------------------------------------
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */

 console.log('Q3-------------');

 /**
  * Testcases:
  * 
  *     studentScore = 150  maxScore = 100
  *     studentScore = -20  maxScore = 100
  *     studentScore = 50   maxScore = 0
  *
  * 
  *     maxScore = 100
  *         studentScore = 100
  *         studentScore = 95
  *         studentScore = 91
  *         studentScore = 90.99
  *         studentScore = 85
  *         studentScore = 81
  *         studentScore = 80.99
  *         studentScore = 75
  *         studentScore = 71
  *         studentScore = 70.99
  *         studentScore = 65
  *         studentScore = 61
  *         studentScore = 60.99
  *         studentScore = 55
  *         studentScore = 51
  *         studentScore = 50.99
  *         studentScore = 45
  *         studentScore = 0
  *     
  */
 let studentScore = 0;  
 let maxScore = 100;
 let studentPercentage = -1;
 let studentGrade = '';
 let isValidScore = false;

 if (maxScore > 0 && studentScore >= 0){
    studentPercentage = (studentScore / maxScore)*100;
 }


 if (studentPercentage === -1 || studentScore > maxScore){
    console.log('Invalid student score');
 }else if (studentPercentage >= 91){
    studentGrade = 'A';
    isValidScore = true;
 } else if (studentPercentage >= 81){
    studentGrade = 'B';
    isValidScore = true;
 }else if (studentPercentage >= 71){
    studentGrade = 'C';
    isValidScore = true;
 }else if (studentPercentage >= 61){
    studentGrade = 'D';
    isValidScore = true;
 }else if (studentPercentage >= 51){
    studentGrade = 'E';
    isValidScore = true;
 }else{
    studentGrade = 'F';
    isValidScore = true;
 }

 if(isValidScore){
    console.log(`Your percentage is ${studentPercentage.toFixed(2)}% and your Grade is '${studentGrade}'`);
 }

 console.log('\n\n');


/**----------------------------------------------------------------------------------------------------------------------------
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */

/**
 * Testcases:
 * 
 *  myNumber = 10
 *  myNumber = 12
 *  myNumber = 15
 *  myNumber = 19
 */

 console.log('Q3-------------');

 let myNumber = 19;
 

 if(myNumber % 5 === 0 && myNumber % 3 === 0 ){
    console.log('Divisible by 5 and 3');

 } else if (myNumber % 5 === 0){
    console.log('divisible by 5');

 } else if (myNumber % 3 === 0){
    console.log('divisible by 3');

 } else{
    console.log(`My number is ${myNumber}`);
 }

 console.log('\n\n');