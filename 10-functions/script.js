"use strict";
/*
! default parameters !
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000);
*/
/////////////////////////////////////////////////////////////////////////////
/*
! value vs. reference !
const flight = "LH234";
const gustavo = {
  name: "Gustavo Custódio",
  passport: 456789123,
};

const chekIn = function (flightNum, passenger) {
  (flightNum = "LH999"), (passenger.name = "Mr. " + passenger.name);

  // if (passenger.passport === 456789123) {
  //   alert("Checked in!");
  // } else {
  //   alert("Wrong passport!");
  // }
};

chekIn(flight, gustavo);
console.log(flight);
console.log(gustavo);

// Is the same as doing...
const flightNum = flight;
const passenger = gustavo;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(gustavo);
chekIn(flight, gustavo);

console.log(gustavo);
*/
/////////////////////////////////////////////////////////////////////////////
/*
! callback functions !
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// high-order function //
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time //
const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);
*/
/////////////////////////////////////////////////////////////////////////////
/*
! functions returning functions !
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

// challenge //
const arrowGreet = (greeting) => (name) => {
  console.log(`${greeting}, ${name}!`);
};

arrowGreet("Hi")("Gustavo");
*/ 