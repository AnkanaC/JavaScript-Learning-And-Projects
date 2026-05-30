const id = Symbol('123');
const id2 = Symbol('123');

console.log(id === id2);

//Symbol is such that even if we pass the same value to it, it will create a new symbol. So id and id2 are different symbols, even though they have the same description '123'.

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
// The 'n' at the end of the number indicates that it is a BigInt, which can represent integers larger than the maximum safe integer in JavaScript (2^53 - 1).


//Array
const arr = [1, 2, 3, 4, 5];
console.log(arr);

//Object
const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(obj);

//Function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice'));

const myFunction = function(name) {
    return `Hi, ${name}!`;
}

console.log(myFunction('Bob'));

const arrowFunction = (name) => {
    return `Hey, ${name}!`;
}   
console.log(arrowFunction('Charlie'));

//In JavaScript, functions are first-class citizens, which means they can be treated like any other data type. They can be assigned to variables, passed as arguments to other functions, and returned from functions.


// typeof all the non primitve data types will return 'object' except for functions which will return 'function'. This is a quirk of JavaScript and is something to be aware of when working with different data types.

//typeof null will return 'object' which is a bug in JavaScript but it has been kept for backward compatibility. So when you check the type of null, it will return 'object' instead of 'null'.
console.log(typeof null); // 'object'

let floating = 2.67;
console.log(typeof floating); // 'number'

let integer = 42;
console.log(typeof integer); // 'number'


//---------------------------------------------------------------------------//

//Stack - Primitive data types are stored in the stack. They are stored directly in the memory location that is allocated for them. When you assign a primitive value to a variable, it creates a copy of that value in the stack. So when you change the value of one variable, it does not affect the other variable.
let a = 10;
let b = a;  
b = 20;
console.log(a); // 10
console.log(b); // 20

//Heap - Non-primitive data types are stored in the heap. They are stored as references to the memory location where the actual data is stored. When you assign a non-primitive value to a variable, it creates a reference to that value in the heap. So when you change the value of one variable, it affects the other variable because they both reference the same data in the heap.
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]