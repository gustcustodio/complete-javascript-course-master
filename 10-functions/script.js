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

* high-order function *
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

* JS uses callbacks all the time *
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

*  challenge *
const arrowGreet = (greeting) => (name) => {
  console.log(`${greeting}, ${name}!`);
};

arrowGreet("Hi")("Gustavo");
*/
/////////////////////////////////////////////////////////////////////////////
/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book : function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, "Gustavo Custódio");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

* first class function * 
const book = lufthansa.book;

* does NOT work. the this keyword points to undefined, because the book no longer belongs to the object, it is just a separate function * 
// book(23, "Sarah Williams");

* call method * 
* passa os argumentos individualmente * 
book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
// console.log(swiss);

* apply method * 
* passa os argumentos como um array * 
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
// console.log(swiss);

book.call(swiss, ...flightData);

* bind method * 
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Patrick Williams");

* with event listeners * 
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

* partial application * 
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
? no caso do código, você passa null porque addTax é uma arrow function que não usa this. Para funções sem this, o primeiro argumento do bind é irrelevante ? 

console.log(addVAT(100));
console.log(addVAT(23));

const tax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = tax(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
*/
/////////////////////////////////////////////////////////////////////////////
/*
! Coding Challenge #1 !
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const $answerPollButton = document.querySelector(".poll");
const displayResults = function (type) {
  if (type === "array") {
    console.log(poll.answers);
  }
  if (type === "string") {
    let str = `Poll results are `;
    for (const num of poll.answers) {
      str += `${num}, `;
    }
    let strFinal = str.slice(0, -2) + ".";
    console.log(strFinal);
  }
};
const registerNewAnswer = function () {
  // verificar se o input está correto //
  let answer = null;
  do {
    answer = Number(prompt(`${poll.question}\n${poll.options.join("\n")}`));

    if (isNaN(answer)) alert("Insira um valor válido!");
    if (answer < 0) alert("Insira um valor válido!");
    if (answer > 3) alert("Insira um valor válido!");
  } while (isNaN(answer) || answer < 0 || answer > 3);
  // aumentar o valor no array answers de acordo com o input //
  poll.answers[answer] = poll.answers[answer] + 1;
  poll.displayResults("array");
};

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer,
  displayResults,
};

$answerPollButton.addEventListener("click", registerNewAnswer);
