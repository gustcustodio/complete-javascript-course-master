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
