/**-------------------------------------------------------------------------------------
 * Q1. Find the average of the given numbers-array
 * 
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 */

// Test cases:
// let numbers = [23, 12, 43, 10, 5, -10];
// let numbers = [1, -1, 2, -3, 1];
// let numbers = [1, 2, 1, 1, 3, 1, 2];
// let numbers = [];

 console.log('\n\n**********Q1**********\n\n');
 let numbers = [23, 12, 43, 10, 5, -10];
 let sum = 0;
 
 if (numbers.length > 0){
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    let average = sum / numbers.length; 
    console.log(`numbers -> ${numbers}`);
    console.log(`average -> ${average.toFixed(2)}`);

 } else{
    console.log(`numbers -> ${numbers}`);
    console.log('Invalid entry. Average cannot be calculated');

 }
 

 /**---------------------------------------------------------------------------------------
  * Q2. Reverse a given string (word by word)
  * 
  * 'have a great day' -> day great a have
  * 'good morning' -> morning good
  * 'Learn' -> Learn
  * ' '
  * ''
  * 
  */

  // Test cases:
  // let str2 = 'have a great day';
  // let str2 = 'good morning';
  // let str2 = 'Learn';
  // let str2 = ' ';
  // let str2 = '';
  console.log('\n\n**********Q2**********\n\n');
  let str2 = 'have a great day';   
  let reverseStr2 = '';

  let tempStr = str2.split(" ");
  
  for (let i = tempStr.length - 1; i >= 0; i--){

    reverseStr2 += tempStr[i] + ' ';

  }
  reverseStr2 = reverseStr2.trim();
  console.log(`str2 -> ${str2}`);
  console.log(`reverseStr2 -> ${reverseStr2}`);   
 
 
 /**--------------------------------------------------------------------------------------------
  * Q3. Create abbreviation for a sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe every day' -> YNWAED
  * 'good Morning' -> 'GM'
  * 'hello dear, how are you doing?' -> HDHAYD
  */

  // Test cases:
  // let str3 = 'you live Only once';
  // let str3 = 'you Never waLK ALONe every day';
  // let str3 = 'hello dear, how are you doing?'
  // let str3 = 'good Morning';
  // let str3 = 'Learn'
  // let str3 = ' ';
  // let str3 = '';
  console.log('\n\n**********Q3**********\n\n');
  let str3 = 'good Morning';
  let abbr = '';
  tempStr = str3.split(' ');
  
  for (let i = 0; i < tempStr.length; i++){
    
    abbr += tempStr[i].charAt(0).toUpperCase();

  }

  console.log(`sentence -> ${str3}`);
  console.log(`abbr -> ${abbr}`);