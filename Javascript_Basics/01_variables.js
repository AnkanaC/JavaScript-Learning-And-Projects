const accId = "1234567890";
let accName = "John Doe";
var accBalance = 1000.50;
accCurrency = "USD";

//accId = "0987654321"; // Reassigning accId creates an error because it's a constant variable
accName = "Jane Doe";
accBalance = 1500.75;
accCurrency = "EUR";

let accCity; // Declaring a variable without initializing it

console.log("Account ID:", accId);

console.table([accId, accName, accBalance, accCurrency, accCity]);