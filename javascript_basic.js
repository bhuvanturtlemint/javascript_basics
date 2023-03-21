// typeof operator
let x = 10;
console.log(typeof x); // Output: n// typeof operator
let x = 10;
console.log(typeof x); // Output: number

// Type coercion and === operator
console.log(1 == '1'); // Output: true
console.log(1 === '1'); // Output: false

// Objects
let person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};
console.log(person.name); // Output: John
console.log(person.address.city); // Output: Anytown

// Dot and bracket notations
let propertyName = 'age';
console.log(person[propertyName]); // Output: 30

// Arrays
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1]); // Output: banana
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Functions
function addNumbers(x, y) {
  return x + y;
}
console.log(addNumbers(2, 3)); // Output: 5

// Anonymous functions
let multiplyNumbers = function(x, y) {
  return x * y;
};
console.log(multiplyNumbers(2, 3)); // Output: 6

// 'this' keyword
let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2020,
  getInfo: function() {
    return `This is a ${this.year} ${this.make} ${this.model}.`;
  }
};
console.log(car.getInfo()); // Output: This is a 2020 Honda Civic.

// Type coercion and === operator
console.log(1 == '1'); // Output: true
console.log(1 === '1'); // Output: false

// Objects
let person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};
console.log(person.name); // Output: John
console.log(person.address.city); // Output: Anytown

// Dot and bracket notations
let propertyName = 'age';
console.log(person[propertyName]); // Output: 30

// Arrays
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1]); // Output: banana
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Functions
function addNumbers(x, y) {
  return x + y;
}
console.log(addNumbers(2, 3)); // Output: 5

// Anonymous functions
let multiplyNumbers = function(x, y) {
  return x * y;
};
console.log(multiplyNumbers(2, 3)); // Output: 6

// 'this' keyword
let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2020,
  getInfo: function() {
    return `This is a ${this.year} ${this.make} ${this.model}.`;
  }
};
console.log(car.getInfo()); // Output: This is a 2020 Honda Civic.