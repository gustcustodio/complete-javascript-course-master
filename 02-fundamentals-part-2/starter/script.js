"use strict";

/** 
 * ! strict mode lecture
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//* x = 3.14; // this will cause an error because x is not declared
//! keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode. Examples:
//* const interface = "Audio";
//* const private = 534;
*/
/**
 * ! functions
function logger() {
  console.log("My name is Gustavo");
}

//* calling / running / invoking function
logger();
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oragens.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(typeof num);
*/
/**
//* function declaration:
//! hoisting effect
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  return 2037 - birthYear;
}
// const age1 = calcAge1(1991);

//* function expression: 
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/**
//* arrow function: 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, "Gustavo"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/**
 *! functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
  return juice;
}

console.log(fruitProcessor(2, 3));
 */
/** 
 * ! reviewing functions
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
    // ! return statement immediately exits the function
    // ? console.log(`${firstName} retires in ${retirement} years.`);
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
    // ! return statement immediately exits the function
    // ? console.log(`${firstName} has already retired!`)
  }
};

console.log(yearsUntilRetirement(1991, "Gustavo"));
console.log(yearsUntilRetirement(1970, "Mike"));
*/
/** 
 * ! introduction to arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// * literal syntax
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// ! only primitive values are immutable. an array is not a primitive value.
friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// exercise
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(years2[0]);
const age2 = calAge(years2[1]);
const age3 = calAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calAge(years2[0]),
  calAge(years2[1]),
  calAge(years2[years2.length - 1]),
];
console.log(ages);
*/
/**
 * ! basic array operations
// * add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); // ! last
console.log(friends);
console.log(newLength);

friends.unshift("John"); // ! first
console.log(friends);

// * remove elements
friends.pop(); // ! last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // ! first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/
/**
 * ! introduction to objects
// ! array
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teachar",
  ["Michael", "Peter", "Steven"],
];
// ! object
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
// ! accessing object properties
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request!")
// }
// ! add properties
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

// todo Challenge: "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/
/**
 * ! object methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function() {
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear; // ! add properties
    return this.age;
  },

  checkerLicense: function () {
    if (this.hasDriversLicense) {
      const checked = "a driver's license.";
      return checked;
    } else {
      const checked = "no driver's license.";
      return checked;
    }
  },

  // getSummary: function () {
  //   return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
  // }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// todo Challenge: "Jonas is a 46-year old teacher, and he as a/no driver's license"

jonas.summary = `${jonas.firstName} is a ${jonas.calcAge()}-year old ${
  jonas.job
}, and he has ${jonas.checkerLicense()}`;

console.log(jonas.summary);
// console.log(jonas.getSummary());
 */
/**
 * ! iteration: the for loop
// console.log("Lifting weights repetiton 1 🏋️‍♀️");
// console.log("Lifting weights repetiton 2 🏋️‍♀️");
// console.log("Lifting weights repetiton 3 🏋️‍♀️");
// console.log("Lifting weights repetiton 4 🏋️‍♀️");
// console.log("Lifting weights repetiton 5 🏋️‍♀️");
// console.log("Lifting weights repetiton 6 🏋️‍♀️");
// console.log("Lifting weights repetiton 7 🏋️‍♀️");
// console.log("Lifting weights repetiton 8 🏋️‍♀️");
// console.log("Lifting weights repetiton 9 🏋️‍♀️");
// console.log("Lifting weights repetiton 10 🏋️‍♀️");

// * for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetiton ${rep} 🏋️‍♀️`);
}
*/
/** 
 * ! looping arrays
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // * reading from jonasArray
  console.log(jonasArray[i], typeof jonasArray[i]);

  // * filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// ! continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/
/**
 * ! looping backwards
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

* ! loops in loops
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----- Exercise ${exercise} -----`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
*/

// console.log("----- FOR LOOP -----")

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetiton ${rep} 🏋️‍♀️`);
// }
/**
 * ! the while loop

console.log("----- WHILE LOOP -----");

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetiton ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is about to end...");
}
*/