const user = {
    name: "Alice",
    age: 30,
    greet: function() { // This is a method defined within the user object
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // The this keyword refers to the user object, allowing us to access its properties

        console.log(this); // Output: { name: 'Alice', age: 30, greet: [Function: greet] } // The this keyword refers to the user object, so it logs the entire user object
    }
    
}

user.greet(); // This will execute the greet method of the user object, which will log the greeting message and the user object itself

user.name = "Bob"; // Update the name property of the user object to "Bob"

user.greet(); // This will execute the greet method again, and it will reflect the updated name property, logging "Hello, my name is Bob and I am 30 years old." and the user object with the updated name

function userDetails() {
    const name = "Charlie";
    console.log(this); // Output: Window { ... } // In a regular function, the this keyword refers to the global object (Window in browsers), so it logs the global object

    console.log(`User name is ${this.name}`); // Output: User name is undefined // Since this refers to the global object, and there is no name property on the global object, it logs "User name is undefined"

}

//we cannot use this keyword in function properties.

//we cannot use the this keyword in an arrow function, because arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing scope at the time they are defined. So, if we were to define userDetails as an arrow function, it would not have its own this and would instead refer to the global object, which is not what we want in this case.

const getUser = () => {
    const name = "David";
    console.log(this); // Output: {} // In an arrow function, the this keyword refers to the global object
    console.log(`User name is ${this.name}`); // Output: User name is undefined // Since this refers to the global object, and there is no name property on the global object, it logs "User name is undefined"
}

getUser(); // This will execute the getUser arrow function, which will log the global object and "User name is undefined" due to the behavior of this in arrow functions

const addSum = (num1, num2) => {
    return num1 + num2; // This is a simple arrow function that takes two parameters and returns their sum
}
console.log(addSum(5, 10)); // Output: 15 // This will execute the addSum arrow function with 5 and 10 as arguments, and it will return their sum, which is 15


//using return keyword = EXPLICIT RETURN

//IMPLICIT RETURN = when we do not use the return keyword, and the function body consists of a single expression, the value of that expression is automatically returned. For example:

const multiply = (num1, num2) => num1 * num2; // This is an arrow function with an implicit return, where the product of num1 and num2 is returned without using the return keyword

console.log(multiply(5, 10)); // Output: 50 // This will execute the multiply arrow function with 5 and 10 as arguments, and it will return their product, which is 50

//In summary, arrow functions provide a more concise syntax for writing functions in JavaScript, and they also have different behavior for the this keyword compared to regular functions. Arrow functions do not have their own this context and instead inherit it from the enclosing scope, which can be useful in certain situations, such as when working with callbacks or methods within objects.

//to return an object literal from an arrow function, we need to wrap the object in parentheses to avoid syntax errors, because the curly braces are interpreted as the start of the function body. For example:

const createUser = (name, age) => ({ name: name, age: age }); // This arrow function takes name and age as parameters and returns an object literal with those properties
console.log(createUser("Eve", 25)); // Output: { name: 'Eve', age: 25 } // This will execute the createUser arrow function with "Eve" and 25 as arguments, and it will return an object with those properties

