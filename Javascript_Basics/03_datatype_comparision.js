console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log("-----------------------------");

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// the reason is that comparators like >, <, <=, >= works differently than ==.
// when we compare null with 0 using >, <, <=, >=, JavaScript converts null to 0. So null > 0 becomes 0 > 0 which is false, and null >= 0 becomes 0 >= 0 which is true.
// for undefined, it is converted to NaN when compared with 0 using >, <, <=, >=. Since NaN is not equal to anything, including itself, all these comparisons result in false.




// === is the strict equality operator, which checks for both value and type. It does not perform type coercion. So null === 0 is false because they are of different types (null is an object and 0 is a number). Similarly, undefined === 0 is also false for the same reason (undefined is a primitive type and 0 is a number).

