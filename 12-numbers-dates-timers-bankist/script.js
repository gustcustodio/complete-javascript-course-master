"use strict";

/////////////////////////////////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2025-02-08T17:01:17.194Z",
    "2025-02-13T13:36:17.929Z",
    "2025-02-14T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////////////////////////////////
// ! ELEMENTS ! //
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////////////////////////////////
// ! FUNCTIONS ! //

const formatedMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = date.getDate().toString().padStart(2, "0");
  // const month = (date.getMonth() + 1).toString().padStart(2, "0");
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));

  // console.log(combinedMovsDates);

  if (sort) {
    combinedMovsDates.sort((a, b) => a.movement - b.movement);
  }

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? "deposit" : "withdrawal";

    const date = new Date(movementDate);
    const displayDate = formatedMovementDate(date, acc.locale);

    const formattedMov = formatCurrency(movement, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // display movements //
  displayMovements(acc);

  // display balance //
  calcDisplayBalance(acc);

  // display summary //
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = Math.trunc(time / 60)
      .toString()
      .padStart(2, 0);
    const sec = (time % 60).toString().padStart(2, 0);
    // in each call, print the remaining time to UI //
    labelTimer.textContent = `${min}:${sec}`;
    // when 0 seconds, stop timer and log out user //
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
    // decrease 1s //
    time--;
  };
  // set time to 5 minutes //
  let time = 300;
  // call the timer every second //
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

/////////////////////////////////////////////////////////////////////////////
// ! EVENT HANDLERS ! //
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN //
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// EXPERIMENTING API //
// const now = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
//   weekday: "long",
// };
// const locale = navigator.language;

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener("click", function (e) {
  // prevent form from submitting //
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message //
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time //
    // const now = new Date();
    // const day = now.getDate().toString().padStart(2, "0");
    // const month = (now.getMonth() + 1).toString().padStart(2, "0");
    // const year = now.getFullYear();
    // const hour = now.getHours().toString().padStart(2, "0");
    // const min = now.getMinutes().toString().padStart(2, "0");

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };
    // const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // clear input fields //
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // timer //
    if (timer) {
      clearInterval(timer);
    }

    timer = startLogOutTimer();

    // update UI //
    updateUI(currentAccount);

    // reset timer //
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer //
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add transfer date //
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // update UI //
    updateUI(currentAccount);

    // reset timer //
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // add movement //
    currentAccount.movements.push(amount);

    // add loan date //
    currentAccount.movementsDates.push(new Date().toISOString());

    // update UI //
    updateUI(currentAccount);
  }

  // reset timer //
  clearInterval(timer);
  timer = startLogOutTimer();

  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // console.log(index);
    // .indexOf(23)

    // delete account //
    accounts.splice(index, 1);

    // hide UI //
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////////////////////////////////
// ! LECTURES ! //
/*
console.log(23 === 23.0);

* base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333 *
* base 2 - 0 1 *
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

* conversion *
console.log(Number("23"));
console.log(+"23");

* parsing *
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

* check if value is NaN *
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

* check if value is number *
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/
/*
! MATH AND ROUNDING !
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI);

* will generate a number between 1 and 6 *
console.log(Math.trunc(Math.random() * 6) + 1);

* will generate a number between MIN and MAX *
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

! ROUNDING INTEGERS !
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

! ROUNDING DECIMALS !
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
*/
/*
! REMAINDER OPERATOR !
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener("click", () => {
  [...document.querySelectorAll(".movements__row")].forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = "orangered";
    }
  });
});
*/
/*
! NUMERIC SEPARATORS !
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(Number("230_000"));
console.log(parseInt("230_000"));
*/
/*
! BIGINT !
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(45687546879546875126548n);
console.log(BigInt("45687546879546875126548"));

! OPERATIONS !
console.log(1000n + 1000n);
console.log(45687546879546875126548n * 10000n);
// console.log(Math.sqrt(16n));

const huge = 45623687954236871269n;
const num = 23;
console.log(huge * BigInt(num));

! EXCEPTIONS !
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);
console.log(20n == "20");
console.log(typeof 20n);

console.log(huge + " is REALLY big!!");

! DIVISIONS !
console.log(10n / 3n);
console.log(10 / 3);
*/
/*
! CREATING DATES !
? new Date(year,month,day,hours,minutes,seconds,ms) ?
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

! WORKING WITH DATES !
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/
/*
! OPERATIONS WITH DATES !
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/
/*
! INTERNATIONALIZING NUMBERS !
const num = 3884764.23;
const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
};

console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
console.log("BR: ", new Intl.NumberFormat("pt-BR", options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/
/*
! setTimeout !
const ingredients = ["olives", "bacon"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);

console.log("Waiting...");

if (ingredients.includes("spinach")) {
  clearTimeout(pizzaTimer);
}
! setInterval !
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000)
*/
/*
! SIMPLE CLOCK !
setInterval(() => {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  console.log(`${hour}:${minutes}:${seconds}`);
}, 1000);
*/
