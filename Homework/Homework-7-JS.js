// Homework 7 - Roberta Munive

/**-------------------------------------------------------------------------
 * Q1. Create a function to generate abbreviation for a sentence
 * 
 * Return the final result
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */
// Test cases:
  // let sentence1 = 'you live Only once';
  // let sentence1 = 'you Never waLK ALONe every day';
  // let sentence1 = 'hello dear, how are you doing?'
  // let sentence1 = 'good Morning';
  // let sentence1 = 'Learn'
  // let sentence1 = ' ';
  // let sentence1 = '';

  console.log('\n\n**********Q1**********\n\n');

  function sentenceAbbreviation (sentence){

        let tempStr = sentence.split(' ');
        let abbr = '';
  
        for (let i = 0; i < tempStr.length; i++){
    
            abbr += tempStr[i].charAt(0).toUpperCase();

        }

        return abbr;

  }

  let sentence1 = 'good Morning';
  let abbr = sentenceAbbreviation(sentence1);
  
  console.log(`sentence -> ${sentence1}`);
  console.log(`abbr -> ${abbr}`);

/**-----------------------------------------------------------------------------
 * Q2. Create a function to reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */
/**
 * 1. what is the purpose of the function?
 *      reverse string word by word (reverseWordString , reverseStringByWord)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? 1 (string)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> Yes
 *      If Yes,
 *          what is the datatype of returned value -> string (reversedString)
 */

// Test cases:
  // let sentence2 = 'have a great day';
  // let sentence2 = 'good morning';
  // let sentence2 = 'Learn';
  // let sentence2 = ' ';
  // let sentence2 = '';
 
console.log('\n\n**********Q2**********\n\n');

function reverseStringByWord (userInputString) {
    let resultString = '';

    let tempStr = userInputString.split(' ');
    for (let i = tempStr.length - 1; i >= 0; i--){

        resultString += tempStr[i] + ' ';
    
      }
    return resultString.trim();
}

let sentence2 = 'have a great day'; 
let reverseSentence = reverseStringByWord(sentence2);  

console.log(`sentence -> ${sentence2}`);
console.log(`reverseStringByWord -> ${reverseSentence}`);


/**--------------------------------------------------------------------------------------
 * Q3. Create a function to convert the string value in to Titlecase
 * 
 * Return the final result
 * 
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */

 console.log('\n\n**********Q3**********\n\n');

 function convertSentenceToTitleCase (sentence){
   
    let sentence_separateWords = sentence.toLowerCase().split(' ');
    let sentence_Titlecase = '';

    for(let i = 0; i < sentence_separateWords.length; i++){
        let word = sentence_separateWords[i];
        word = word.charAt(0).toUpperCase() + word.substring(1);
        sentence_Titlecase += word + ' ';
    }


    return sentence_Titlecase.trim();
 }

 let sentence3 = 'have a GrEAT daY';
 let sentence3_Titlecase = convertSentenceToTitleCase(sentence3);

 console.log(`sentence -> ${sentence3}`);
 console.log(`sentence in Titlecase -> ${sentence3_Titlecase}`);   
 console.log('\n');