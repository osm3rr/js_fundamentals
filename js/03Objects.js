// objects in js
const person = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "traveling", "gaming"]
};

// Show object properties
alert("Name: " + person.name);
alert("Age: " + person.age);
alert("Is Student: " + person.isStudent);
alert("Street: " + person.address.street);
alert("City: " + person.address.city);
alert("Hobbies: " + person.hobbies.join(", "));