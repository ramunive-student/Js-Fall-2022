/**
 * Assign value to the variable
 *      if the full-name has more than 10 characters and contans 'els'
 *      assign 23 in a variable
 *      otherwise
 *          assign 32 in a variable
 * 
 * Ignore case
 */


let fullName = '';
let fullNameLowerCase = fullName.toLowerCase();
let varNum = fullNameLowerCase.length > 14 && fullNameLowerCase.includes('els') ? 23 : 32;
console.log(varNum);

let sentence = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
let sentence_lc = sentence.toLowerCase();
let indexOf_w = sentence_lc.indexOf('w');
console.log(`\n\nIndex of 'w' (ignoring case) -> ${indexOf_w}`);







const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';

let lastCharSentence2 = sentence2.substring(sentence2.length-1); 
// OR sentence2.substring(sentence2.length-1, sentence2.length)
console.log(`last character -> ${lastCharSentence2}`);
console.log('\n\n')


//-------------------------------------------------------------------

let roomTemp = 63;

//let heatStatus = roomTemp < 60 ? "turn heat on" : "turn heat off";
// roomTemp > 70 ? "Turn AC on" : "Keep AC off" 
// can use multiple ternary (combine them)

let heatStatus = roomTemp <= 60 ? "Turn Heat On" : roomTemp > 70 ? "Turn AC on" : "Keep AC and Heat off"
console.log(heatStatus);
console.log('\n\n')

//-----------------------------------------------------------------------


