// Camel Case:
// The most common convention in JavaScript is camelCase.
// The first letter of the first word is lowercase,
// and the first letter of subsequent words is uppercase
// (e.g., userName, shoppingCart, firstName).

// Valid and good practice
let userName = "Petra";
const MAX_ATTEMPTS = 3;
let isLoggedIn = true;
let productPrice = 19.99;

// show that variables to user
// console.log("User Name:", userName);
// console.log("Max Attempts:", MAX_ATTEMPTS);
// console.log("Is Logged In:", isLoggedIn);
// console.log("Product Price:", productPrice);

alert("User Name: " + userName);
alert("Max Attempts: " + MAX_ATTEMPTS);
alert("Is Logged In: " + isLoggedIn);
alert("Product Price: " + productPrice);


// Valid but less descriptive
let x = 10;
let _temp = "data";

// Invalid (starts with a digit)
// let 1stName = "Bob";

// Invalid (contains a space)
// let my Name = "Charlie";

// Invalid (reserved keyword)
// let function = "calculate";