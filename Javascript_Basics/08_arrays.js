// arrays can be of mixed types elements
const mixedArray = [1, 'two', true, null, undefined, { name: 'John' }, [3, 4, 5]];
console.log(mixedArray);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.length);

//arrays are resizable and can hold any type of data, including other arrays (nested arrays) and objects. They are also ordered, meaning that the elements in an array are stored in a specific order and can be accessed using their index (starting from 0).

//arrays are mutable, which means that you can change the elements of an array after it has been created. You can add, remove, or modify elements in an array using various methods and properties provided by JavaScript.

//copy is acheived via shallow copy (ie reference)

const myArray = [1, 2, 3];

myArray.push(4); // adds 4 to the end of the array
console.log(myArray); // [1, 2, 3, 4]

myArray.pop(); // removes the last element of the array
console.log(myArray); // [1, 2, 3]

myArray.unshift(0); // adds 0 to the beginning of the array
console.log(myArray); // [0, 1, 2, 3]

myArray.shift(); // removes the first element of the array
console.log(myArray); // [1, 2, 3]

myArray.splice(1, 1); // removes 1 element at index 1
console.log(myArray); // [1, 3]

const newArr = myArray.join(','); // converts the array to a string with elements separated by a comma
console.log(newArr); // '1,3'

//slice method is used to create a new array by extracting a portion of an existing array. It does not modify the original array and returns a new array containing the extracted elements. The slice method takes two arguments: the starting index (inclusive) and the ending index (exclusive). If the ending index is not provided, it will extract all elements from the starting index to the end of the array.

const slicedArr = myArray.slice(0, 1); // creates a new array containing the elements from index 0 to index 1 (exclusive)
console.log(slicedArr); // [1]
console.log(myArray); // [1, 3] - original array remains unchanged

//splice method is used to modify an array by adding, removing, or replacing elements. It changes the original array and returns an array containing the removed elements (if any). The splice method takes three arguments: the starting index, the number of elements to remove, and the elements to add (if any).

const splicedArr = myArray.splice(1, 1, 4); // removes 1 element at index 1 and adds 4 at index 1
console.log(splicedArr); // [3] - the removed element
console.log(myArray); // [1, 4] - original array is modified

//in slice, the original array remains unchanged and a new array is returned, while in splice, the original array is modified and an array containing the removed elements is returned.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concatenatedArr = arr1.concat(arr2); // creates a new array by concatenating arr1 and arr2
console.log(concatenatedArr); // [1, 2, 3, 4, 5, 6]

arr1.concat(arr2); // creates a new array by concatenating arr1 and arr2, but does not modify arr1
console.log(arr1); // [1, 2, 3] - original array remains unchanged

const mergedArr = [...arr1, ...arr2]; // creates a new array by merging arr1 and arr2 using the spread operator
//... makes each element of arr1 and arr2 as individual elements in the new array
//real life eg - drop a glass glass, it breaks and each piece is an individual element, but they all together make the original glass. Similarly, the spread operator takes each element of the array and spreads it out as individual elements in the new array.
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

const nestedArr = [[1, 2], [3, 4], [5, 6, [7, 8]], 9, 10];
console.log(nestedArr); // [[1, 2], [3, 4], [5, 6, [7, 8]], 9, 10]

const flatArr = nestedArr.flat(); // flattens the nested array by one level
console.log(flatArr); // [1, 2, 3, 4, 5, 6, [7, 8], 9, 10]

const completelyFlatArr = nestedArr.flat(Infinity); // flattens the nested array completely
console.log(completelyFlatArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(Array.isArray(arr1)); // true - checks if arr1 is an array
console.log(Array.isArray("Ankana")); // false - checks if a string is an array

console.log(Array.from("Ankana")); // ['A', 'n', 'k', 'a', 'n', 'a'] - creates an array from a string, where each character of the string becomes an element in the array

console.log(Array.from({name : 'John', age: 30})); // [] - creates an array from an object, but since the object does not have a length property, it returns an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

const scores = Array.of(score1, score2, score3); // creates a new array from the given arguments, where each argument becomes an element in the array
console.log(scores); // [100, 200, 300]