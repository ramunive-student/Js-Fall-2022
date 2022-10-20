let weatherByDay = ['sunny', 'rainy', 'cloudy', 'rainy', 'cloudy'];
console.log(`Daily weather -> ${weatherByDay}`);
let condition = '';
let dayNum = 0;

for (let i = 0; i < weatherByDay.length; i++){
    dayNum = i + 1;

    switch(weatherByDay[i]){
        case 'sunny':
            console.log(`Day ${dayNum} -> Show sun icon`);
            break;
        case 'rainy':
            console.log(`Day ${dayNum} -> Show rain icon`);
            break;
        case 'cloudy':
            console.log(`Day ${dayNum} -> Show cloud icon`);
            break;
        case 'windy':
            console.log(`Day ${dayNum} -> Show wind icon`);
            break;
        default: 
            console.log('Not a valid weather event');              
    }
}  

//------------------------------------------------------------
console.log('\n--------------------------------------------');

let sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];

// Print all value but last-index one (using for-of)
console.log('\n\nPrint all value but last-index one (using for-of)\n\n');
let index = 0;
for (let sName of sports) {
    if (index != sports.length-1) {
        console.log(sName);
    }
    index++;
}

console.log('\n--------------------------------------------');

// Print all value but NOT 'Ping pong'

let str1 = 'ping pong';
for (let sName of sports){
    if(sName.toLowerCase().localeCompare(str1) !== 0){
        console.log(sName);
    }

}

console.log('\n--------------------------------------------');

let favSports = ['Baseball', 'Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

// find the index of First occurrence of 'BaseBall' (ignoring cases)

let lookFor = 'BaseBall';
let lookFor_LC = lookFor.toLowerCase();
index = -1;

for (let i = 0; i < favSports.length; i++){

    if (favSports[i].toLowerCase().localeCompare(lookFor_LC) === 0){
        index = i;
        break;
    }


}

if (index >= 0){
    console.log(`The first occurrence of '${lookFor} is at index ${index} of the array`);

}else{
    console.log(`'${lookFor}' does not appear in the array`);
}
console.log('\n--------------------------------------------');


