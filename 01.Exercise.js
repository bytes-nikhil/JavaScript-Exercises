// ES6 Refactoring

/*
1. var -> let
-------------------
var age = 25;
console.log(age);

*/

let age = 25;
console.log(age);

/*

2. var -> const
--------------------
var company = "Google";
console.log(company);

*/

const company = "Google";
console.log(company);

/*

3. Function -> Arrow Function
--------------------
function greet(name) {
    return "Hello " + name;
}

*/
const greet = (name) => {
  return `Hello ${name}`;
};
console.log(greet("Nikhil"));

/*

4. Function -> Arrow Function
--------------------
var square = function(num) {
    return num * num;
};

*/

const square = (num) => {
  return num * num;
};
console.log(square(5));

/*

5. String Concatenation → Template Literals
--------------------
var firstName = "John";
var lastName = "Doe";
console.log(firstName + " " + lastName);

*/

let firstName = `John`;
let lastName = `Doe`;
console.log(`${firstName} ${lastName}`);

/*

6. Object Property Access → Destructuring
--------------------
var user = {
    name: "Nikhil",
    age: 30
};
var name = user.name;
var age = user.age;

*/

let user = {
  name: "Nikhil",
  years: 28,
};
let { name, years } = user;
console.log(`user name is ${name}`);
console.log(`user years is ${age}`);

/*

7. Array Access → Destructuring
--------------------
var colors = ["red", "green", "blue"];

var first = colors[0];
var second = colors[1];

*/

let colors = ["red", "green", "blue"];
let first = colors[0];
let second = colors[1];
console.log(first);
console.log(second);

/*

8. Object Creation → Property Shorthand
-------------------------

var name = "Rahul";
var age = 28;

var person = {
    name: name,
    age: age
};

*/

const uname = "Rahul",
  uage = 28;

const newUser = { uname, uage };
console.log(newUser.uname);
console.log(newUser.uage);

/*

9. Anonymous Callback → Arrow Callback
-------------------------

var numbers = [1, 2, 3, 4];

var doubled = numbers.map(function(num) {
    return num * 2;
});

*/

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

/*

10. for Loop → for...of
-------------------------
var fruits = ["Apple", "Banana", "Orange"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

*/

let fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

/*

11. Function Default Value → Default Parameters
-------------------------
function createUser(name) {
    name = name || "Guest";
    return name;
}

*/

function createUser(name = "Guest") {
  return name;
}
console.log(createUser());
console.log(createUser("John"));

/*

12. Arguments Object → Rest Parameters
-------------------------
function sum() {
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

*/

const sum = (...args) => args.reduce((total, num) => total + num, 0);

/*

13. Array Merge → Spread Operator
-------------------------
var arr1 = [1, 2];
var arr2 = [3, 4];

var result = arr1.concat(arr2);

*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
const result = [...arr1, ...arr2];
console.log(result);

/*

14. Object Copy → Spread Operator
-------------------------
var employee = {
    name: "John",
    age: 25
};

var newUser = Object.assign({}, employee);

*/

const employee = {
    name: 'John',
    age: 25,
}
const newEmployee = {...employee};
console.log(newEmployee);
