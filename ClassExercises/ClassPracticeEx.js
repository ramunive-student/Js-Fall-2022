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

/**
 * Add 'Mars' at index-0 (unshift)
 * 
 * Add 'Venus' at index-4
 */
 let planets = ['plUtO', 'URANUS', 'A', 'B', 'Saturn', 'JupiTEr', 'LOL', 'Mercury', 'EaRtH']

 planets.unshift('Mars');
 planets.splice(4, 0, 'Venus');

 console.log(planets);  // or console.log(planets.toString())

 //---------------------------------------------------------------------------

 let dayName = '';

 if (dayName.localeCompare('mon') === 0 || dayName.localeCompare('wed') === 0 || dayName.localeCompare('fri')===0){
    console.log('attend the class');
 } else if (dayName.localeCompare('tue')===0 || dayName.localeCompare('sat')===0){
    console.log('attend lab session');
 } else if (dayName.localeCompare('thu')===0){
    console.log('self study');
 } else if (dayName.localeCompare('sun')===0){  //can use else without the localeCompare if no possible error entry
    console.log('Enjoy');
 } else{
    console.log('Enter valid day-name');
 }

 //-------------------------------------------------------------------------------------------------
 let sports = ['football', 'Soccer', 'Baseball' , 'Rugby', 'Tennis'];
 let lookFor = 'swimming';
 if(sports.includes(lookFor)){
    console.log(`Index of ${lookFor} is ${sports.indexOf(lookFor)}`);
 } else{
    sports.push(lookFor);
 }

 console.log(sports);

 //-------------------------------------------------------------------------------------


const sports1 = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];

for (let i=1 ; i < sports1.length ; i+=2) {
    console.log(sports1[i]);
}

//________________________________________________________________________________

/**
 * sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];
/**
 * print the value if either (value has an 'o') OR (value has length > 5 and less than 10)
 * 
 * Football
 * Soccer
 * Baseball
 * Ping pong
 * 
 */


 sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];
 let word = '';
 console.log('\n\n*****************************');

for (i = 0; i < sports.length; i++){

   word = sports[i].toLowerCase();
   

   if (word.indexOf('o') != -1 || (word.length > 5 && word.length < 10)){
      console.log(sports[i]);
   }


}
console.log('\n\n*****************************');

//______________________________________________________________________________________

let reverse_sports = [];
let temp = '';
let counter = 0;
for (i = sports.length - 1; i >= 0; i--){

   temp = sports[i].toLowerCase();
   reverse_sports[counter] = temp.charAt(0).toUpperCase() + temp.substring(1);
   counter++;

}
console.log(`sports -> ${sports}`);
console.log(`reverse_sports -> ${reverse_sports}`);
console.log('\n\n*****************************');

//-------------------------------------------------------------------------------------------
