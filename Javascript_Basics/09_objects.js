// There are 2 ways of declaring an object in JavaScript:

// 1. Using object literal syntax
// 2. Using the Object constructor

//Sigleton object - only one instance of the object can exist in the entire program. It is created using the object literal syntax and is often used to store configuration settings or to create a namespace for related functions and variables.

// Objects created using Literals ARE NOT SINGLETON. While those created using constructors are Singletons.

// 1. Using object literal syntax

const person = {}; // creates an empty object
person.name = 'John'; // adds a property 'name' with the value 'John' to the person object
person.age = 30; // adds a property 'age' with the value 30 to the person object
console.log(person); // { name: 'John', age: 30 }

//objects are key value pairs.
//keys are by default strings, but they can also be symbols. If the key is a valid identifier (i.e., it does not contain spaces or special characters), it can be accessed using dot notation. If the key is not a valid identifier, it must be accessed using bracket notation.

const mySym = Symbol('myKey'); // creates a symbol with the description 'myKey'
const mySym2 = Symbol('myKey'); // creates another symbol with the same description 'myKey'

const JSUser = {
    name: 'Ankana',
    age: 23,
    city : "Kolkata",
    mySym: "This is key",

    //only way of getting a symbol as a key is by using the symbol itself, not by using the string representation of the symbol. This is because symbols are unique and cannot be accessed using the string key.

    [mySym2] : "MyKey2"
}

console.log(typeof JSUser.mySym); //string as keys are by default converted to string.
console.log(typeof JSUser[mySym]); //undefined as symbols are unique and cannot be accessed using the string key.

console.log(typeof JSUser.mySym2); //undefined as symbols are unique and cannot be accessed using the string key.
console.log(typeof JSUser[mySym2]); //string as keys are by default converted to string.

console.log(JSUser['age']); // 23 - accessing the 'age' property using bracket notation
//Bracket method is the standard way of accessing properties in an object, as it allows for more flexibility in the keys used. Dot notation can only be used when the key is a valid identifier, while bracket notation can be used with any string as a key.

//Lets say you have a key as "full name", which contains a space, you cannot access it using dot notation, but you can access it using bracket notation.


JSUser.greeting = function() { // adds a method 'greeting' to the JSUser object
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // uses the 'this' keyword to access the properties of the JSUser object
}

console.log(JSUser.greeting); // [Function: greeting] - the greeting method is added to the JSUser object
console.log(JSUser.greeting()); // Hello, my name is Ankana and I am 23 years old. - calls the greeting method of the JSUser object

console.log(JSUser); 


Object.freeze(JSUser.name); // freezes the JSUser object's name property, preventing any modifications to its properties
JSUser.name = 'Jane'; // this will not change the name property of the JSUser object, as it is frozen
console.log(JSUser.name); // 'Ankana' - the name property remains unchanged4

console.log(JSUser);









// ----------------------------------2. Using the Object constructor----------------------------------------------------------------------------//

const tinderUser = new Object(); // creates a new object using the Object constructor
tinderUser.name = 'Ankana'; // adds a property 'name' with the value 'Ankana' to the tinderUser object
tinderUser.age = 23; // adds a property 'age' with the value 23 to the tinderUser object
console.log(tinderUser); // { name: 'Ankana', age: 23 }

const regularUser = Object.create(tinderUser); // creates a new object that inherits from the tinderUser object
console.log(regularUser); // {} - the regularUser object is empty, but it inherits the properties of the tinderUser object
console.log(regularUser.name); // 'Ankana' - the regularUser object can access the name property of the tinderUser object through prototypal inheritance
console.log(regularUser.age); // 23 - the regularUser object can access the age property of the tinderUser object through prototypal inheritance    



const adminUser = {
    email : 'admin@example.com',
    role : 'admin',
    fullname : {
        userFullName :{
            firstName : 'Admin',
            lastName : 'User'
        }
    }
}

console.log(adminUser.fullname.userFullName.firstName); // 'Admin' - accessing the firstName property of the userFullName object within the fullname object of the adminUser object




//----------------------------- OBJECT METHODS ----------------------------------------------------------------------------------//

const obj1 = {1 : 'one', 2 : 'two', 3 : 'three'};

console.log(Object.keys(obj1)); // [ '1', '2', '3' ] - returns an array of the keys of the obj1 object //we can use all the array methods for this
console.log(Object.values(obj1)); // [ 'one', 'two', 'three' ] - returns an array of the values of the obj1 object
console.log(Object.entries(obj1)); // [ [ '1', 'one' ], [ '2', 'two' ], [ '3', 'three' ] ] - returns an array of the key-value pairs of the obj1 object

const obj2 = {4 : 'four', 5 : 'five', 6 : 'six'};

//const mergeObj = {obj1, obj2}; // this will not merge the obj1 and obj2 objects, but instead creates a new object with two properties, obj1 and obj2, which contain the original objects as their values. The resulting object will look like this: { obj1: { '1': 'one', '2': 'two', '3': 'three' }, obj2: { '4': 'four', '5': 'five', '6': 'six' }  }


const mergedObj = Object.assign(obj1, obj2); // merges the obj1 and obj2 objects into a new object
console.log(mergedObj); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' } - the mergedObj object contains all the properties of both obj1 and obj2 objects

const mergedObj2 = {...obj1, ...obj2}; // merges the obj1 and obj2 objects into a new object using the spread operator
console.log(mergedObj2); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' } - the mergedObj2 object contains all the properties of both obj1 and obj2 objects

const mergedObj3 = Object.assign({}, obj1, obj2); // merges the obj1 and obj2 objects into a new object, creating a new object as the target of the merge
console.log(mergedObj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' } - the mergedObj3 object contains all the properties of both obj1 and obj2 objects, and is a new object that is not the same as either obj1 or obj2

//syntax of assign is Object.assign(target, ...sources) where target is the object to which the properties of the source objects will be copied, and sources are the objects whose properties will be copied to the target object. The Object.assign() method copies all enumerable own properties from one or more source objects to a target object, and returns the target object. If there are properties with the same name in multiple source objects, the property from the last source object will overwrite the previous ones in the target object. If the target object already has a property with the same name as a property in a source object, the property in the target object will be overwritten by the property in the source object.

//This is better option as {} ensures that we get a new object and not pbject of objects. It acts as the empty object (target) to which the properties of obj1 and obj2 are copied, creating a new object that contains all the properties of both obj1 and obj2. This way, we can avoid modifying the original object (obj1) and create a new object that is independent of the original object.

// Note: The Object.assign() method does not create a deep copy of the objects being merged, so if the objects contain nested objects, those nested objects will still be shared between the original objects and the merged object. If you need to create a deep copy of the objects, you can use a library like Lodash or write your own function to recursively copy the properties of the objects.

//From DB when objects come, they come as an array of objects, so we can use the map method to iterate over the array and create a new array of objects with the desired properties. For example, if we have an array of user objects and we want to create a new array of user names, we can use the map method like this:

const users = [
    { 
        id: 1, 
        name: 'Alice' 
    },
    { 
        id: 2, 
        name: 'Bob' 
    },
    { 
        id: 3, 
        name: 'Charlie' 
    }
];

const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

//Otherwise we can also use

console.log(users[1].name); // 'Bob' - accessing the name property of the second user object in the users array

console.log(tinderUser.hasOwnProperty('name')); // true - checks if the tinderUser object has the 'name' property
console.log(tinderUser.hasOwnProperty('email')); // false - checks if the tinderUser object has the 'email' property






//------------------------------------ OBJECT DESTRUCTURING AND JSON API ------------------------------------------------------//

const course = {
    title: 'JavaScript Basics',
    duration: '3 hours',
    Courseinstructor: 'John Doe'
};

// Object destructuring allows us to extract properties from an object and assign them to variables in a more concise way. We can use the following syntax to destructure the course object:

const { title, duration, Courseinstructor : instructor } = course; 

//Since courseInstructor is a bit difficult ans error prone to write, we can use the syntax Courseinstructor : instructor to assign the value of the Courseinstructor property to a new variable called instructor. This way, we can access the properties of the course object using the variables title, duration, and instructor instead of course.title, course.duration, and course.Courseinstructor.

//now anytime we want to access the properties of the course object, we can simply use the variables title, duration, and instructor instead of course.title, course.duration, and course.instructor.

console.log(title); // 'JavaScript Basics' - accessing the title variable that was destructured from the course object
console.log(duration); // '3 hours' - accessing the duration variable that was destructured from the course object
console.log(instructor); // 'John Doe' - accessing the instructor variable that was destructured from the course object 


