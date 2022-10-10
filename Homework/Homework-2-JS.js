const sentence1 = 'Hello Dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in the result1
 * otherwise
 *      assign 10 in the result1
 */

result1 = sentence1.length >= 10 ? 15 : 10;
console.log(`\nsentence: ${sentence1}`);
console.log(`sentence length -> ${sentence1.length}`);
console.log(`result1 -> ${result1}`);

//---------------------------------------------------------------
const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
/**
 * replace all instances of a or A with 'Alpha', print the result in console.
 */

//let sentence2_LowerCase = sentence2.toLowerCase();
console.log('\n');
let sentence2_afterReplace = sentence2.replace(/a/gi, 'Alpha');
console.log(`Original sentence: ${sentence2}`);
console.log(`After replacement: ${sentence2_afterReplace}`);
console.log('\n');

//---------------------------------------------------------------

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";


// 1. The length of sentence-3
console.log(`\nsentence: ${sentence3}`);
console.log(`sentence length: ${sentence3.length}`);

// 2. Does sentence-3 start with 'HeaLTh' (ignore cases)
console.log(`\nsentence: ${sentence3}`);
let pattern = 'HeaLTh';
let sentence3_lowerCase = sentence3.toLowerCase();
let pattern_lowerCase = pattern.toLowerCase();
let doesSentenceStartWithPatter_ignoreCase = sentence3_lowerCase.startsWith(pattern_lowerCase);
console.log(`Does the sentence start with '${pattern}' (ignore cases): ${doesSentenceStartWithPatter_ignoreCase}`);


// Does sentence-3 start with 'HeaLTh' (consider cases)
let doesSentenceStartWithPattern = sentence3.startsWith(pattern) ? `When considering cases, the sentence starts with ${pattern}` : `When considering cases, the sentence does NOT start with ${pattern}`;
console.log(doesSentenceStartWithPattern);

// 3. Does sentence-3 contain 'Body' (ignore cases)
pattern = 'Body';
pattern_lowerCase = pattern.toLowerCase();
let doesSentenceContainPattern_ignoreCase = sentence3_lowerCase.includes(pattern_lowerCase);
console.log(`Does the sentence contain '${pattern}' (ignore cases): ${doesSentenceContainPattern_ignoreCase}`);

// 4. index of 'BoDy' in sentence3  (ignore cases)

pattern = 'BoDy';
pattern_lowerCase = pattern.toLowerCase();

let pattern_firstIndex = sentence3_lowerCase.indexOf(pattern_lowerCase);
console.log(`Index of first occurrence of ${pattern} -> ${pattern_firstIndex}`);

// 5. The last-character in sentence-3
let lastCharacter = sentence3.charAt(sentence3.length-1);
console.log(`The last character in the sentence -> ${lastCharacter}`);

// 6. word 'BoDy' is present only once. (true or false)
let pattern_lastIndex = sentence3_lowerCase.lastIndexOf(pattern_lowerCase);
console.log(`last index: ${pattern_lastIndex}, first index: ${pattern_firstIndex}`);
let isPatternPresentMoreThanOnce = pattern_firstIndex === pattern_lastIndex;
console.log(`The word '${pattern}' is present only once (ignore cases) -> ${isPatternPresentMoreThanOnce}`);


console.log('\n');