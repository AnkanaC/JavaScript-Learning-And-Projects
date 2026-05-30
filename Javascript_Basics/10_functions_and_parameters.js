function greet(name) {  //name is the parameter of the function (variable used in method definition)
    console.log("Hello, " + name + "!");         // This is the function definition
}

greet; // Output: // This is the function reference

greet("Alice"); // Output: Hello, Alice! //This is function execution  //"Alice" is argument passed to the function

function add(a, b) {  //a and b are parameters
    console.log(a + b);     // This is the function definition
}

const result = add(5, 3); // Output: 8 // This is function execution // 5 and 3 are arguments passed to the function

console.log(result); // Output: undefined // The add function does not return a value, so result is undefined

function addWithReturn(a, b) {
    return a + b; // This function returns the sum of a and b
}

const sum = addWithReturn(5, 3); // Output: 8 // This is function execution // 5 and 3 are arguments passed to the function

console.log(sum); // Output: 8 // The addWithReturn function returns the sum, so sum is 8

function userLoggedMessage(username) {
    return `User ${username} has logged in.`; // This function returns a message with the username
}

const message = userLoggedMessage("JohnDoe"); // Output: User JohnDoe has logged in. // This is function execution // "JohnDoe" is the argument passed to the function
console.log(message); // Output: User JohnDoe has logged in. // The userLoggedMessage function returns a message, so message is the returned string

console.log(userLoggedMessage()); // Output: User undefined has logged in. // This is function execution without passing an argument, so username is undefined

function LoggedInMessage(username = "Guest") { // Default parameter value is "Guest" //since we are setting a default value for username, it will be "Guest" if no argument is passed when the function is executed

    if(!username) { // Check if username is falsy (undefined, null, empty string, etc.) //similar to username === undefined || username === null || username === ""
        return; 
    }
    return `User ${username} has logged in.`; // This function returns a message with the username
}

console.log(LoggedInMessage()); // Output: User Guest has logged in. // This is function execution without passing an argument, so username defaults to "Guest"

console.log(LoggedInMessage("JohnDoe")); // Output: User JohnDoe has logged in. // This is function execution with "JohnDoe" as the argument, so username is "JohnDoe"

function calculateCartPrice(...prices) { // Rest parameter syntax to accept an arbitrary number of arguments as an array
    return prices;
}

console.log(calculateCartPrice(10, 20, 30)); // Output: [10, 20, 30] // This is function execution with multiple arguments, so prices is an array containing the arguments

//If we had npt used the rest parameter syntax, we would have to define a fixed number of parameters, which would limit the flexibility of the function. For example:
         //on doing console.log(calculateCartPrice(10, 20, 30)); without rest parameter syntax, we would only get 10 as the output, because only the first argument would be assigned to the first parameter, and the rest would be ignored.

//Based on usage, the ... operator can be used as a spread operator to expand an array into individual elements, or as a rest parameter to collect multiple arguments into an array. In the context of function parameters, it is used as a rest parameter to allow for an arbitrary number of arguments to be passed to the function.

function shoppingCart(var1, var2, ...prices) { // var1 and var2 are regular parameters, while ...prices is a rest parameter that collects the remaining arguments into an array
    return prices;
}

console.log(shoppingCart("item1", "item2", 10, 20, 30)); // Output: [10, 20, 30] // This is function execution with multiple arguments, so prices is an array containing the arguments passed after var1 and var2

function displayUserInfo(UserObject){
    console.log(`Name: ${UserObject.name}, Age: ${UserObject.age}`); // This function takes an object as a parameter and logs the name and age properties of the object
}

const user = { name: "Alice", age: 30 }; // Create an object with name and age properties

displayUserInfo(user); // Output: Name: Alice, Age: 30 // This is function execution with an object as an argument, so UserObject is the user object and the function logs the name and age properties of the object

const myArray = [1, 2, 3, 4, 5];

function sumArray(arr) { // This function takes an array as a parameter and returns the sum of its elements
    return arr.reduce((acc, curr) => acc + curr, 0); // Use the reduce method to sum the elements of the array
}

const total = sumArray(myArray); // Output: 15 // This is function execution with an array as an argument, so arr is the myArray and the function returns the sum of its elements
console.log(total); // Output: 15 // The sumArray function returns the total, so total is 15

one(5); // Output: 6 // This is function execution with 5 as the argument, so num1 is 5 and the function returns 6 but it will not print anything on the screen
function one(num1)
{
    return num1 + 1;
}

one(5); // Output: 5 // This is function execution with 5 as the argument, so num1 is 5 and the function returns 5 but it will not print anything on the screen

//addTwo(5); //this causes an error because addTwo is defined as a function expression, and it is not hoisted like function declarations. So, when we try to execute addTwo before its definition, it results in a ReferenceError: Cannot access 'addTwo' before initialization.
const addTwo = function(num1)
{
    return num1 + 2;
}

addTwo(5); // Output: 7 // This is function execution with 5 as the argument, so num1 is 5 and the function returns 7 but it will not print anything on the screen

