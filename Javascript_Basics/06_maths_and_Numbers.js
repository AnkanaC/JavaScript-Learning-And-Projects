const score = 100;
console.log(score);

const bonus = new Number(50);
console.log(bonus); // [Number: 50]
//It provides properties and methods that can be used to manipulate the number, but it is generally recommended to use number literals (e.g., 50) for creating numbers in JavaScript, as they are more concise and easier to read.

console.log(bonus.valueOf()); // 50
console.log(bonus.toString());
console.log(bonus.toFixed(2)); // '50.00'
console.log(bonus.toExponential(2)); // '5.00e+1'
console.log(bonus.toPrecision(3)); // '50.0'
console.log(bonus.toString().length); // 2

const amount = 123.56789;
console.log(amount.toFixed(2)); // '123.57' - rounds to 2 decimal places
console.log(amount.toExponential(2)); // '1.24e+2' - converts to exponential notation with 2 digits after the decimal point
console.log(amount.toPrecision(3)); // '124' - formats the number to 4 significant digits

//The Number constructor creates a wrapper object for a number value. It is not recommended to use the Number constructor to create number objects, as it can lead to unexpected behavior and performance issues. Instead, it is recommended to use number literals (e.g., 50) for creating numbers in JavaScript, as they are more concise and easier to read.

const hundreds = 100000000;
console.log(hundreds.toLocaleString()); // '100,000,000' - formats the number with commas as thousands separators based on the locale settings of the environment. (default : Americas)

//to have it in indian format
console.log(hundreds.toLocaleString('en-IN')); // '10,00,00,000' - formats the number in Indian numbering system with commas as thousands separators.




//---------------------------------MATHS-----------------------------------//

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518

console.log(Math.abs(-5)); // 5
console.log(Math.ceil(4.2)); // 5 - rounds up to the nearest integer  (since thorusa bhi 4 sey bara hai na 4.2 to nearby larger limit pey convert kar deta hai)

console.log(Math.floor(4.7)); // 4 - rounds down to the nearest integer (since 4.7 is greater than 4, it converts it to the nearby smaller limit)

console.log(Math.round(4.5)); // 5 - rounds to the nearest integer (if the fractional part is 0.5 or greater, it rounds up; otherwise, it rounds down)
console.log(Math.round(4.4)); // 4 - rounds to the nearest integer (if the fractional part is less than 0.5, it rounds down)
console.log(Math.max(1, 5, 3)); // 5 - returns the largest of the given numbers
console.log(Math.min(1, 5, 3)); // 1 - returns the smallest of the given numbers
console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10); // returns a random number between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random() * 10)); // returns a random integer between 0 (inclusive) and 10 (exclusive)

console.log(Math.random() * 10 + 1); // returns a random number between 1 (inclusive) and 11 (exclusive)
console.log(Math.floor(Math.random() * 10 + 1)); // returns a random integer between 1 (inclusive) and 10 (inclusive)

const min = 10;
const max = 20;
console.log(Math.random() * (max - min) + min); // returns a random number between 10 (inclusive) and 20 (exclusive)
console.log(Math.floor(Math.random() * (max - min) + min)); // returns a random integer between 10 (inclusive) and 19 (inclusive)