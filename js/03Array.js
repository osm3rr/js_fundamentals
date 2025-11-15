// Arrays in javaScript

// Creating an array
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
alert(fruits[1]); // Output: Banana

// Adding elements
fruits.push("Date");
alert(fruits.join(", ")); // Output: Apple, Banana, Cherry, Date

// Removing elements
const lastFruit = fruits.pop();
alert("Removed fruit: " + lastFruit); // Output: Removed fruit: Date

// Array length
alert("Number of fruits: " + fruits.length); // Output: Number of fruits: 3
alert("Fruits: " + fruits.join(", ")); // Output: Fruits: Apple, Banana, Cherry