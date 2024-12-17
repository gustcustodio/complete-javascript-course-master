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