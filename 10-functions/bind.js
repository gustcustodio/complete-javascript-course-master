"use strict";
// ! bind method ! //
// ? syntax ? //
// ? function.bind(thisArg[, arg1[, arg2[, ...]]]) ? //
/*
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
// console.log(unboundGetX()); 
// the function gets invoked at the global scope
// expected output: undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
*/
/*
this.x = 9;

const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

console.log(module.getX());

const retrieveX = module.getX;
// console.log(retrieveX()); // expected output: 9 
// use strict expected output: undefined

const boundGetX = retrieveX.bind(module);
console.log(boundGetX());
*/
/////////////////////////////////////////////////////////////////////////////
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

const greetFunction = person.greet.bind(person);
greetFunction();
/////////////////////////////////////////////////////////////////////////////
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

greet.call(null, "Hello", "Alice"); // executa imediatamente
greet.apply(null, ["Hello", "Alice"]); // executa imediatamente

const boundGreet = greet.bind(null, "Hello"); // cria uma função
boundGreet("Alice"); // executa depois
/////////////////////////////////////////////////////////////////////////////
const user = {
  firstName: "John",
  // sayHi() {
  //   alert(`Hello, ${this.firstName}!`);
  // },
};

function func(phrase) {
  alert(`${phrase}, ${this.firstName}.`);
}

// setTimeout(user.sayHi, 1000); // lost user context
// for this.firstName it tries to get window.firstName, which does not exist

// setTimeout(function () {
//   user.sayHi();
// }, 1000);

const funcUser = func.bind(user);
funcUser("Hello");
