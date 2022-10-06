/**
 * Homework-1
 * Roberta Munive
 * 
 * Convert temperature values into different units
 */

// F -> C
let fTemp = 60;
let fToCTemp = (fTemp - 32) * 5/9;
console.log(`\n\n${fTemp}°F is equal to ${fToCTemp.toFixed(2)}°C`);


// F -> K
let fToKTemp = (fTemp + 459.67)*5/9;
console.log(`\n\n${fTemp}°F is equal to ${fToKTemp.toFixed(2)}°K`);


// C -> F
let cTemp = 18;
let cToFTemp = cTemp * 9/5 + 32;
console.log(`\n\n${cTemp}°C is equal to ${cToFTemp.toFixed(2)}°F`);

// C -> K
let cToKTemp = cTemp + 273.15;
console.log(`\n\n${cTemp}°C is equal to ${cToKTemp.toFixed(2)}°K`);

// K -> F
let kTemp = 295;
let kToFTemp = kTemp * 9/5 - 459.67;
console.log(`\n\n${kTemp}°K is equal to ${kToFTemp.toFixed(2)}°F`);

// K => C
let kToCTemp = kTemp - 273.15;
console.log(`\n\n${kTemp}°K is equal to ${kToCTemp.toFixed(2)}°C`);

console.log(`\n\n\n\n`);


