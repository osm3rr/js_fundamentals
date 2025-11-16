// functions in JavaScript

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));
console.log(greet("Bob"));

// // Function expression
const add = function(a, b) {
    return a + b;
};

// console.log(add(5, 3));
// console.log(add(10, 20));

// // Arrow function
const multiply = (x, y) => x * y;
// 
// console.log(multiply(4, 5));
// console.log(multiply(7, 8));

// // Function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// console.log(power(3)); // 3^2
// console.log(power(2, 3)); // 2^3


