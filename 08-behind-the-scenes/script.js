"use strict";

/**
function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milenial = true;

      // * creating a NEW variable with same name as outer scope's variable
      const firstName = "Steven"; // ! variable lookup

      // * reassigning outer scope's variable
      output = "NEW OUTPUT!";

      const str = `Oh, and you're milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // ! ReferenceError
    // console.log(milenial); // ! function scope (strict mode)
    // add(2, 3); // ! ReferenceError (strict mode)
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = "Jonas";
calAge(1991); // ! set after your call
// console.log(age); // ! ReferenceError
// printAge(); // ! ReferenceError
*/

/**
 * ! hoisting and TDZ
 */

/**
// ! variables
console.log(me);
// console.log(job); // ! ReferenceError
// console.log(year); // ! ReferenceError

var me = "Jonas";
let job = "teacher";
const year = 1991;

// ! functions
console.log(addDecl(2, 3));
console.log(addArrow);
// console.log(addExpr(2, 3)); // ! ReferenceError

function addDecl(a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

const addExpr = function (a, b) {
  return a + b;
};

// Example
console.log(numProducts); // ! return undefined - falsy value
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

// ! variables

var x = 1; // ! create a property on the global window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/**
// ! this keyword

// console.log(this);

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
//   console.log(this);
};

calAge(1991);

const calAgeArr = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // ! globalThis
};

calAgeArr(1991);

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calAge();

const matilda = {
    year: 2017,
};

matilda.calAge = jonas.calAge;
matilda.calAge()

const f = jonas.calAge;
// f(); // ! TypeError
*/

/**
// var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // ! access window
  },
};

jonas.greet();
jonas.calAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

/**
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: "Jonas",
    age: 30,
};

const friend = me;
friend.age = 27;
console.log("Friend:", friend);
console.log("Me:", me);
*/

// ! primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// ! reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

// marriedJessica = {};

// ! copying object
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

// ! first level clone
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);
