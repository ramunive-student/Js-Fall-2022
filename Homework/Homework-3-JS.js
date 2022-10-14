// Homework 3 - Roberta Munive

/**-------------------------------------------------------------
 * Q1: Print the length of the country name (without using string.length or length property from string-library)
 * 
 */
 let countryName = 'Japan';
 // countryName.length;  <-- not allowed

 let countryName_separateChars = countryName.split('');
 console.log(`'${countryName}' has a length of ${countryName_separateChars.length}`);
 console.log('\n');

 
 /**----------------------------------------------------------
  * Q2: find the number of words in the given sentence2
  */
 const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";

 let sentence2_separateWords = sentence2.split(" ");
 console.log(`Sentence -> ${sentence2}`);
 console.log(`The sentence has ${sentence2_separateWords.length} words`);
 console.log('\n');

 /**-----------------------------------------------------------
  * Q3: Create abbreviation for a 4-word sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe' -> YNWA
  */
 const sentence3 = 'you Never waLK ALONe';
 let abbr = '';
 // code

 let sentence3_separateWords = sentence3.split(" ");
 abbr += sentence3_separateWords[0].charAt(0);
 abbr += sentence3_separateWords[1].charAt(0);
 abbr += sentence3_separateWords[2].charAt(0);
 abbr += sentence3_separateWords[3].charAt(0);
 abbr = abbr.toUpperCase();
 console.log(`Sentence -> ${sentence3}`);
 console.log(`abbr -> ${abbr}`);     // abbr -> YNWA
 console.log('\n');
 
 /**-------------------------------------------------------
  * Q4: Convert the string value in to Titlecase
  * 
  * 'you live Only once' -> You Live Only Once
  * 'you Never waLK ALONe' -> You Never Walk Alone
  * 'have a GrEAT daY' -> 'Have A Great Day'
  */
 const sentence4 = 'have a GrEAT daY';
 let sentence4_Titlecase = '';

 // code

 let sentence4_separateWords = sentence4.toLowerCase().split(" ");
 let word = '';
 //first word - this will be more efficient with a loop :)
 word = sentence4_separateWords[0];
 word = word.charAt(0).toUpperCase() + word.substring(1);
 sentence4_Titlecase += word + " ";
 //second word
 word = sentence4_separateWords[1];
 word = word.charAt(0).toUpperCase() + word.substring(1);
 sentence4_Titlecase += word + " ";
 //third word
 word = sentence4_separateWords[2];
 word = word.charAt(0).toUpperCase() + word.substring(1);
 sentence4_Titlecase += word + " ";
 //fourth word
 word = sentence4_separateWords[3];
 word = word.charAt(0).toUpperCase() + word.substring(1);
 sentence4_Titlecase += word + " ";  
 
 sentence4_Titlecase.trim();

 console.log(`sentence4_Titlecase -> ${sentence4_Titlecase}`);   // sentence4_Titlecase -> Have A Great Day
 console.log('\n');