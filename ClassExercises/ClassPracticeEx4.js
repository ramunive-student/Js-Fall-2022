let numbers = [98, 23, 12, 54, 67];
// remove all values below 50 from the numbers-array

let removeNumsBelow50 = numbers.filter(num => num >= 50);
numbers = removeNumsBelow50;
console.log(numbers);

