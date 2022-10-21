// Homework 6 - Roberta Munive

/**----------------------------------------------------------------------------------------------------------------
 * Q1. Print the object data as mentioned above.
 */

 console.log('\n**********Q1**********\n');

 let student1_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

/*
    name : John Doe
    state : NJ
    age : 20
    gender : M
    paymentMethod : finance
    anyExperience : true
    pastJobs : Yes (3)
        companyName : ABC
        numOfYears : 2
        title : 'DEF'

        companyName : EFG
        numOfYears : 3
        title : 'HIJ'
        
        companyName : KLM
        numOfYears : 4
        title : 'NOP'
    knownSkills : 5 (Java, Manual testing, Js basics, Programming, CS basics)
*/

let student1_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}
/*
    name : Eli hen
    state : NY
    age : 22
    gender : F
    paymentMethod : Paid
    anyExperience : false
    pastJobs : No
    knownSkills : 3 (Java, Manual testing, CS basics)
*/

let studentObj = student1_2;
let totalJobs = 0;
let numSkills = 0;

for (let varName in studentObj){

    if(varName.localeCompare('pastJobs') === 0){
        if(studentObj.anyExperience){
            totalJobs = studentObj.pastJobs.length;
            console.log(`${varName} : Yes (${totalJobs})`);

            for(let i = 0; i < totalJobs; i++){
                console.log(`\tcompanyName : ${studentObj.pastJobs[i].companyName}`);
                console.log(`\tnumOfYears : ${studentObj.pastJobs[i].numOfYears}`);
                console.log(`\ttitle : '${studentObj.pastJobs[i].title}'`);
                if(i< totalJobs-1){
                    console.log('\n');
                }
            }
            
        }else{
            console.log(`${varName} : No`);
        }

    }else if(varName.localeCompare('knownSkills') === 0){
            numSkills = studentObj.knownSkills.length;
            let skillString = '';
            for (let i = 0; i < numSkills; i++){
                if(i === numSkills - 1){
                    skillString += studentObj.knownSkills[i];
                }else{
                    skillString += studentObj.knownSkills[i] + ", ";
                }
                

            }
            skillString = skillString.trim();
            console.log(`knownSkills : ${numSkills} (${skillString})`);

    }else{
        console.log(`${varName} : ${studentObj[varName]}`);
    }
}

/**----------------------------------------------------------------------------------------------------------------------------------------------
 * Q2: Print the index for SECOND occurrence of 'baseBalL' (Ignoring cases)
 * 
 * if BaseBall is NOT present in Array: print, Baseball is not present in the given array
 * 
 * if BaseBall is present Only once in Array: print, Baseball is present only once in the given array
 * 
 * if BaseBall is present two or more times in Array: print, Baseball has second occurrence at index-X
 *  
 */
let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

console.log('\n**********Q2**********\n');

let favSportsArr = favSports_1;
let sportsArrLength = favSportsArr.length;
let lookFor = 'baseBalL';
let lookFor_LC = lookFor.toLowerCase();
let occurrenceCounter = 0;
let index_secondOccurence = -1;


for (let i = 0; i < sportsArrLength; i++){

    if(favSportsArr[i].toLowerCase().localeCompare(lookFor_LC) === 0){
        occurrenceCounter++;
        if (occurrenceCounter === 2){
            index_secondOccurence = i;  
        }
    }
    
}

console.log(`Array -> ${favSportsArr}`);
if(occurrenceCounter === 0){
    console.log(`${lookFor} is not present in the given array`);
}else if (occurrenceCounter === 1){
    console.log(`${lookFor} is  present only once in the given array`);
}else if (occurrenceCounter >= 2){
    console.log(`${lookFor} has second occurrence at index-${index_secondOccurence}`);
}

/**---------------------------------------------------------------------------------------------------------------------------------------------------
 * Q3. Print the total number of past experience for a student
 * 
 * Assumption:
 * In studentObject, anyExperience-attribute will be true, if has any past-experience, 
 * otherwise anyExperience-attribute will be false
 * 
 * If student has any past experience, print :
 *      studentName has total X-years of experience
 * 
  * If student has NO past experience, print :
 *      studentName has no past experience
 */
let student3_1 = {
    name : 'John Doe',
    state : 'NJ',
    age : 20,
    gender : 'M',
    paymentMethod : 'finance',
    anyExperience : true,
    pastJobs : [
        {
            companyName : 'ABC',
            numOfYears : 2,
            title : 'DEF'
        },
        {
            companyName : 'EFG',
            numOfYears : 3,
            title : 'HIJ'
        },
        {
            companyName : 'KLM',
            numOfYears : 4,
            title : 'NOP'
        }
    ],
    knownSkills: ['Java', 'Manual testing', 'Js basics', 'Programming', 'CS basics']
}

let student3_2 = {
    name : 'Eli hen',
    state : 'NY',
    age : 22,
    gender : 'F',
    paymentMethod : 'Paid',
    anyExperience : false,
    pastJobs : [],
    knownSkills: ['Java', 'Manual testing', 'CS basics']
}

console.log('\n**********Q3**********\n');

studentObj = student3_1;
let totalYearsExp = 0;

if(studentObj.anyExperience){
    for(let i = 0; i < studentObj.pastJobs.length; i++){

        totalYearsExp += studentObj.pastJobs[i].numOfYears;
    }
    console.log(`${studentObj.name} has total ${totalYearsExp}-years of experience`);    

}else{
    console.log(`${studentObj.name} has no past experience`);
}
console.log('\n');
