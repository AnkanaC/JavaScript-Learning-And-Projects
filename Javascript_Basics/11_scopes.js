var c = 100;
let e = 500;

if(true)
{
    let a = 10;
    const b = 20;
    var c = 30; // var is function-scoped, so it will be accessible outside the block and will overwrite the previous value of c
    d = 40; // This will create a global variable d, which is not recommended
    let e = 50; // e is already declared in the outer scope, so this will update its value to 50

    console.log(e); // Output: 50 // e is function-scoped, so it is accessible within the block and has the value 50
}

//console.log(a); // Output: ReferenceError: a is not defined // a is block-scoped, so it is not accessible outside the block

//console.log(b); // Output: ReferenceError: b is not defined // b is block-scoped, so it is not accessible outside the block

console.log(c); // Output: 30 // c is function-scoped, so it is accessible outside the block and has been overwritten to 30

console.log(d); // Output: 40 // d is a global variable, so it is accessible anywhere in the code, but it is not recommended to create global variables like this

console.log(e); // Output: 500 // e is function-scoped, so it is accessible outside the block and has been updated to 500


//You can have nested functions, and each function will have its own scope. Variables declared in an outer function are accessible in inner functions, but variables declared in an inner function are not accessible in outer functions.

function outerFunction() {
    let outerVariable = "I am from the outer function";

    function innerFunction() {
        let innerVariable = "I am from the inner function";
        console.log(outerVariable); // Output: I am from the outer function // innerFunction can access outerVariable because it is declared in the outer scope
    }

    innerFunction(); // This will execute the inner function and print the outerVariable

    //console.log(innerVariable); // Output: ReferenceError: innerVariable is not defined // outerFunction cannot access innerVariable because it is declared in the inner scope
}

outerFunction(); // This will execute the outer function, which in turn executes the inner function and demonstrates scope rules