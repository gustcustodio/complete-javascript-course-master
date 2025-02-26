"use strict";

const Person = function (firstName, birthYear) {
  // instance properties //
  this.firstName = firstName;
  this.firstName = birthYear;
  // bad practice //
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
