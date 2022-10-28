/**-----------------------------------------------------------------------------------------------
Question-1:
    Create a function to return the account object in given accountData-array and given account-id
​
    example-1:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 8765
​
​
        If input is accountData and accountId, return:
            {
                name: "Saving Account - 2",
                id: 8765
            }
​
    example-2:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 1234
​
​
        If input is accountData and accountId, return:
            {}
*/


console.log('\n**********Q1**********\n');
let accountData = [
    {
        name: "Saving Account - 1",
        id: 9876
    },
    {
        name: "Saving Account - 2",
        id: 8765
    },
    {
        name: "Saving Account - 3",
        id: 7654
    },
    {
        name: "Saving Account - 4",
        id: 6543
    },
    {
        name: "Saving Account - 5",
        id: 5432
    }
];
let accountId = 8765;

console.log(accountData);

function accountLookUpById (accountId, accountData){

    for (account of accountData){
        if (account.id === accountId){
            return account;
        } 
    }    
    return [];
}


let accountSearchResult = accountLookUpById(accountId, accountData);
console.log(accountSearchResult);



/**-------------------------------------------------------------------------------------------------------
Question-2:
    Create a function to return the string(s) which contain 'A' (ignoring cases) from a given string array.
        example:
            input -> [hello, laugh, live, peaceful, hopeful]
            ans -> laugh, peaceful
​
            input -> [hello, laugh, live, king, queen]
            ans -> laugh
​
            input -> [live, king, queen]
            ans -> 

    Test cases:
        let inputArray2 = ['hello', 'laugh', 'live', 'peaceful', 'hopeful']; 
        let inputArray2 = ['hello', 'laugh', 'live', 'king', 'queen'];
        let inputArray2 = ['live', 'king', 'queen'];
        let inputArray2 = [];      
*/
console.log('\n**********Q2**********\n');

let inputArray2 = ['hello', 'laugh', 'live', 'peaceful', 'hopeful'];
let lookFor = 'A';

function stringsContainingAParticularChar (lookFor, inputArray){

    let stringsWithLookFor = [];
    lookFor = lookFor.toLowerCase();

    for(word of inputArray2){

        let word_LC = word.toLowerCase();
        if(word.includes(lookFor)){
            stringsWithLookFor.push(word);
        }

    }

    return stringsWithLookFor;

}

let stringsWithLookFor = stringsContainingAParticularChar(lookFor, inputArray2);
console.log(`original array -> ${inputArray2}`);
console.log(`strings containing '${lookFor}' -> ${stringsWithLookFor}`);


/**--------------------------------------------------------------------------------------------------------
Question-3:
    Note: Palindrome is when String is same when written backwards.
    eg: level <-> level
    eg: eye <-> eye
​
    Create a function to find if given string is palindrome (ignore cases).

    Testcases:
      let word3 = 'racecar';
      let word3 = 'hello';
      let word3 = ' ';
      let word3 = '';
*/
console.log('\n**********Q3**********\n');

let word3 = 'racecar';

//if (word3.trim().length === 0) to determine if string is empty or contains only spaces

function isPalindrome (word){

    let word_LC = word.toLowerCase();
    let wordReversed = word.split('').reverse().join('');

    if(word.localeCompare(wordReversed) === 0){
        return true;
    }

    return false;

}

let isWordPalindrome = isPalindrome(word3);

isWordPalindrome ? console.log(`${word3} is a palindrome\n`) : console.log(`${word3} is not a palindrome\n`);

