//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION

(
    function connect() {   //This is also a named IIFE, where the function has a name (connect) 
        console.log("DB connected"); 
    }
)(); // Output: DB connected // This is an IIFE, which is a function that is defined and immediately executed. The function expression is wrapped in parentheses to make it an expression, and then it is followed by another set of parentheses to invoke it immediately.

//IIFEs are often used to create a new scope and avoid polluting the global namespace. They can also be used to execute code that needs to run immediately, such as initialization code or code that sets up event listeners.

//Sometimes if we want our function to execute as soon as the program runs, say cpnnecting to a database or setting up some configuration, we can use an IIFE to achieve that. This way, we can ensure that the code runs immediately without having to call the function separately.

//Another example of an IIFE is when we want to create a private scope for our variables and functions, so that they are not accessible from the outside. For example:

//IIFE is used to remove the issue of global property pollution

//Always end an IIFE with a semicolon to prevent issues when concatenating scripts, as the previous script might not end with a semicolon, which can lead to syntax errors. For example:

(
    () => {
        console.log("This is an IIFE with an arrow function");
    }
)();

(
    (name)  => {
        console.log(`Hello, ${name}! This is an IIFE with an arrow function and a parameter.`);
    }
)("Alice");