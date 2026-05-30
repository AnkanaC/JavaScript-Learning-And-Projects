//strings can be sritten either with single or double quotes
let string1 = 'this is a string';
let string2 = "this is also a string";

let name = 'John';
let age = 30;

//ways of printing variables in a string
console.log('My name is ' + name + ' and I am ' + age + ' years old.'); // Concatenation using the + operator

//below backticks is the better way of representation
console.log(`My name is ${name} and I am ${age} years old.`); // Template literals allow us to embed expressions inside string literals, using backticks (`) and ${} syntax.

//Another way of declaring strings is using the String constructor, but it is not recommended as it creates a string object instead of a primitive string.
let string3 = new String('this is a string');
console.log(string3);
//it stores each character of the string as an element in an array-like structure (key value pair - index: character), and it has properties and methods that can be used to manipulate the string. However, it is generally recommended to use string literals (single or double quotes) for creating strings in JavaScript, as they are more concise and easier to read.
//it uses call by refernce so the any function performed is performed on the original string only

console.log(string1[0]); // 't'
console.log(string1.length); // 16
console.log(string1.toUpperCase()); // 'THIS IS A STRING'
console.log(string1.toLowerCase()); // 'this is a string'
console.log(string1.includes('string')); // true
console.log(string1.indexOf('is')); // 2
console.log(string1.slice(0, 4)); // 'this' //it also works with negative indices, where -1 refers to the last character, -2 to the second last character, and so on.
console.log(string1.split(' ')); // ['this', 'is', 'a', 'string']
console.log(string1.replace('string', 'text')); // 'this is a text'

const url = 'https://www.example%20world.com';
const decodedUrl = decodeURIComponent(url);
console.log(decodedUrl); // 'https://www.example world.com'

const encodedUrl = encodeURIComponent(decodedUrl);
console.log(encodedUrl); // 'https%3A%2F%2Fwww.example%20world.com'

const replaceUrl = url.replace(/%20/g, '-');
console.log(replaceUrl); // 'https://www.example-world.com'

console.log(url.includes('example')); // true
console.log(url.startsWith('https')); // true
console.log(url.endsWith('.com')); // true 


const str = 'Hello-Hi-Bye-Bye';
const parts = str.split('-');
console.log(parts); // ['Hello', 'Hi', 'Bye', 'Bye']