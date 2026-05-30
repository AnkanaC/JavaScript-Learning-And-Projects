//"use strict"; //Enabling strict mode so that all the js codes are treated as newer version

let name = "Alice";
let age = 30;
let isStudent = false;
let score = "85"; // String representation of a number
let height = null;
let weight = undefined;
let world = "Earth01"; // String with numbers

// Converting string to number
let numericScore = Number(score);
console.log("Numeric Score:", numericScore); // Output: Numeric Score: 85   

// Converting number to string
let scoreString = String(numericScore);
console.log("Score as String:", scoreString); // Output: Score as String: 85

// Converting boolean to number
let isStudentNumeric = Number(isStudent);
console.log("Is Student (Numeric):", isStudentNumeric); // Output: Is Student (Numeric): 0

// Converting null to number
let heightNumeric = Number(height);
console.log("Height (Numeric):", heightNumeric); // Output: Height (Numeric): 0

// Converting undefined to number
let weightNumeric = Number(weight);
console.log("Weight (Numeric):", weightNumeric); // Output: Weight (Numeric): NaN

// Converting string with numbers to number
let worldNumeric = Number(world);
console.log("World (Numeric):", worldNumeric); // Output: World (Numeric): NaN

let isLoggedIn = 0; // Number representation of a boolean
let isLoggedInBoolean = Boolean(isLoggedIn);
console.log("Is Logged In (Boolean):", isLoggedInBoolean); // Output: Is Logged In (Boolean): false

let emptyString = "";
let emptyStringBoolean = Boolean(emptyString);
console.log("Empty String (Boolean):", emptyStringBoolean); // Output: Empty String (Boolean): false 
// while if something is present then it is always true
