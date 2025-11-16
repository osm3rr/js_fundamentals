// methods in objects and the this keyword
const person = {
  firstName: "Josefino",
  lastName: "Primero",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  celebrateBirthday: function () {
    this.age += 1;
    return this.age;
  },
};

console.log(person.fullName()); // Output: John Doe
console.log(person.celebrateBirthday()); // Output: 31
console.log(person.celebrateBirthday()); // Output: 32

const calculator = {
  number: 10,
  add: function (value) {
    this.number += value;
    return this.number;
  },
  subtract: function (value) {
    this.number -= value;
    return this.number;
  },
};

// console.log(calculator.add(5)); // Output: 15
// console.log(calculator.subtract(3)); // Output: 12
