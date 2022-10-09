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





console.log(`\n\nresult1 -> ${result1}`);

const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';