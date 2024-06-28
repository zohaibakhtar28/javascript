const num = 1;
const num2 = new Number(65);

//Some Properties.

console.log(num2.toString()) //Convert to string.
console.log(num2.toString().length) //Use string functions.




const balance = 100
console.log(balance.toFixed(2)); // 100.00


// INT_MAX = NUMBER.MIN_VALUE.
//console.log(Number.MIN_VALUE());
//console.log(Number.MAX_VALUE());

const num4 = 123.579843754
//console.log(num4.round());
console.log(num4.toPrecision(4)); // Use Significant 4 digits.

const num5 = 100000000;
console.log(num5.toLocaleString(num5)); //Commas . Return Strings
console.log(num5.toLocaleString('en-IN')); //Commas as per Indian System. Return Strings

// -------------------------------------------------------------------------MATHS

// console.log(Math) -> Object.

console.log(Math.abs(-4));
console.log(Math.sqrt(16));
console.log(Math.pow(16, 2));
console.log(Math.min(2,3,4,5));
console.log(Math.max(2,3,4,5));
console.log(Math.floor(44.5)); //44
console.log(Math.ceil(44.5)); //45

console.log(Math.random()); // 0 ->1
console.log(Math.random()*10); // 0->10
console.log(Math.random()*10 + 1); // 1->10
console.log(Math.floor(Math.random()*10) + 1); // 1->10 no decimals.

// IN OUR RANGE.

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min +1))  + min);