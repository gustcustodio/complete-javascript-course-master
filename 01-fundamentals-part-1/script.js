/**
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Gustavo";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

//! variable name conventions
let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//* console.log(typeof true);
console.log(typeof javascriptIsFun);
//* console.log(typeof 23);
//* console.log(typeof 'Gustavo');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //! bug
*/

/*
let age = 30; //! mutável
age = 31;

const birthYear = 1991; //! imutável
/ birthYear = 1990;

/ const job;

var job = 'programmer';
job = 'teacher';
*/

/**
//! math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//* 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Gustavo";
const lastName = "Felipe";
console.log(firstName + " " + lastName);

//! assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

//! comparison operators
console.log(ageJonas > ageSarah); //! >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/**
//! operator precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log (25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10  //! right-to-left
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/**
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
line");

console.log(`String
multiple
lines`);
*/

/** 
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`);
}

const birthYear = 1997;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

/**
//! type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //* NaN - Not a Number - Invalid Number
console.log(typeof NaN);

console.log(String(23), 23);

//! type coercion
console.log("I am " + 23 + " years old");
// console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5"); // 95
console.log("10" - "4" - "3" - 2 + "5"); // 15
 */

/**
//! 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)")
} else {
  console.log("You should get a job!");
}

let height;
//? console.log(typeof height);
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/**
const age = "18";
//! Strict equality (===) - RECOMENDED
if (age === 18) console.log("You just became an adult :D");
//! Equality (==)
if (age == 18) console.log("You just became an adult :D");

const favourite = Number(prompt("What's your favourite number? "));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  //* "23" == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
*/

/**
//! logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); //* AND
console.log(hasDriversLicense || hasGoodVision); //* OR
console.log(!hasDriversLicense); //* NOT

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/