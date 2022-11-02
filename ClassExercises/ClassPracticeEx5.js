/**
 * Create a login system
 * Login system should check valid username and password
 * If both are valid then only system displays "Welcome to homepage"
 * If username or password isn't correct, system should display "Try again"
 * User can only try up to 3 times with invalid credentials
 * If it reaches 3 times then system should display "locked for 30 min"
 */


let actualUserName = 'abcd';
let actualPassword = '1234';
let numTries = 0;



function loginSystem (actualUserName, actualPassword){

    let expectedUserName = 'abcd';
    let expectedPassword = '1234';
    

        if (actualUserName.localeCompare(expectedUserName) === 0 && actualPassword.localeCompare(expectedPassword) === 0){
            //both username and password are valid
            console.log('Welcome to homepage');
        } else {
            
                
                if (numTries < 3){ 
                    console.log('Try again');
                    numTries++;
                } else {
                    console.log('Locked for 30 minutes');
                }
                
                        
        }
}

//loginSystem ("abcd", "1234");
loginSystem ("Techno", "abcde");
loginSystem ("Techno", "abcde");
loginSystem ("Techno", "abcde");
loginSystem ("Techno", "abcde");


/**----------------------------------------------------------------------------------------------------------------------------------------
 * Lab Instructor's Solution: 
 * 
 * let count = 0;

function loginSystem(userName, passWord){
    let expectedUN = 'Techno';
    let expectedPW = 'abcd';

    if(userName === expectedUN && passWord === expectedPW){
        console.log("Welcome to homepage");
    } else {
        if(count === 2){
            console.log("locked for 30 min");
        } else {
        console.log("Try again");
        }
        count++;
    }
}

loginSystem("Techno", "abcde");
loginSystem("Techno", "abcde");
loginSystem("Techno", "abcde");
 * 
 -----------------------------------------------------------------------------------------------------------------------------------------------*/




