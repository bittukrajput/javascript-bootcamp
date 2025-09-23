// comparison operator
//const userAge1=24;
//const userAge2=18;
// JavaScript Comparison Operators
// ================================

// 1️⃣ Equality and Inequality Operators

console.log("==== Equality and Inequality Operators ====");

// Loose equality (==) → compares value after type coercion
console.log("5 == '5':", 5 == "5"); // true
console.log("0 == false:", 0 == false); // true

// Loose inequality (!=) → compares value after type coercion
console.log("5 != '6':", 5 != "6"); // true
console.log("0 != false:", 0 != false); // false

// Strict equality (===) → compares value and type
console.log("5 === '5':", 5 === "5"); // false
console.log("5 === 5:", 5 === 5);     // true

// Strict inequality (!==) → compares value or type not equal
console.log("5 !== '5':", 5 !== "5"); // true
console.log("5 !== 5:", 5 !== 5);     // false

// Special case: null and undefined
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

console.log("\n");