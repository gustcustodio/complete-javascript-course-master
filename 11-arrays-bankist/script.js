"use strict";

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
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

const displayMovements = function (movements) {
  // containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

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
console.log(accounts);

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////////////////////////////////
/*
let arr = ["a", "b", "c", "d", "e"];
! SLICE !
* the slice() method returns selected elements in an array, as a new array
* the slice() method selects from a given start, up to a (not inclusive) given end
* the slice() method does not change the original array
console.log("---------------------- SLICE ----------------------");
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);
const myBest = fruits.slice(-3, -1);
console.log(myBest);

! SPLICE !
* the splice() method adds and/or removes array elements
* the splice() method overwrites the original array
console.log("---------------------- SPLICE ----------------------");
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(2, 2);
console.log(fruits);
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

! REVERSE ! 
* the reverse() method reverses the order of the elements in an array
* the reverse() method overwrites the original array
console.log("---------------------- REVERSE ----------------------");
const arr2 = ["j", "i", "h", "g", "f"];
arr2.reverse();
console.log(arr2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);
! CONCAT !
* the concat() method concatenates (joins) two or more arrays
* the concat() method returns a new array, containing the joined arrays
* the concat() method does not change the existing arrays
console.log("---------------------- CONCAT ----------------------");
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
! JOIN !
* the join() method returns an array as a string
* the join() method does not change the original array
console.log("---------------------- JOIN ----------------------");
console.log(letters.join(" - "));
! AT !
* the at() method returns an indexed element from an array
* the at() method returns the same as []
console.log("---------------------- AT ----------------------");
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));
* getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log("jonas".at(0));
console.log("jonas".at(-1));
! FOREACH ! 
* the forEach() method calls a function for each element in an array
* the forEach() method is not executed for empty elements
? syntax: array.forEach(function(currentValue, index, arr), thisValue)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log("---------------------- FOREACH ----------------------");

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
  }
});

0: function(200)
1: function(450)
2: function(-400)
...
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum);

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item, index, array) {
  array[index] = item * 10;
}

console.log(numbers);

const numbers = [10, 20, 30];

numbers.forEach(function (num) {
  console.log(num);
});

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}.`);
});

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

people.forEach((person) => {
  console.log(`${person.name} is ${person.age} years old.`);
});

! FOREACH WITH MAPS !
console.log("---------------------- MAPS ----------------------");
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value} // ${map}`);
});

! FOREACH WITH SETS !
console.log("---------------------- SETS ----------------------");
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${value}: ${key} // ${set}`);
});
*/
/////////////////////////////////////////////////////////////////////////////
// ! Coding Challenge #1 ! //
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  // console.log(dogsJuliaCorrected);
  const dogs = [...dogsJuliaCorrected, ...dogsKate];
  // console.log(dogs);
  dogs.forEach(function (value, index) {
    if (value >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${value} years old.`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsJulia, dogsKate);
*/
/*
! MAP !
* map() creates a new array from calling a function for every array element
* map() does not execute the function for empty elements
* map() does not change the original array
? syntax: array.map(function(currentValue, index, arr), thisValue)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdraw"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

// more examples //

const array = [1, 4, 9, 16];
const map = array.map((x) => x * 2);
console.log(map);

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);

function myFunction(num) {
  return num * 10;
}

const numbers1 = [65, 44, 12, 4];
const newArr1 = numbers1.map(myFunction);
console.log(newArr1);

const map1 = Array.prototype.map;
const a = map1.call("Hello World", function (x) {
  return x.charCodeAt(0);
});
console.log(a);
*/
/*
! FILTER !
? the filter() method creates a new array filled with elements that pass a test provided by a function
? the filter() method does not execute the function for empty elements
? the filter() method does not change the original array
? syntax: array.filter(function(currentValue, index, arr), thisValue)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// more examples //
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

const a = [10, , 8, 7, , 5, 4, 3, 2, 1];
console.log(a.filter((x) => x < 3));
console.log(a.filter((x, i) => i % 2 === 0));
console.log(a);
console.log(a.filter((x) => x !== undefined && x !== null));
*/
/*
! REDUCE ! 
? the reduce() method executes a reducer function for array element
? the reduce() method returns a single value: the function's accumulated result
? the reduce() method does not execute the function for empty array elements
? the reduce() method does not change the original array
? syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(`Reduce: ${balance}`);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(`For: ${balance2}`);

// maximum value //
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(`Maximum value: ${max}`);

// more examples //
const a = [1, 2, 3, 4, 5];
console.log(a.reduce((x, y) => x + y, 0));
console.log(a.reduce((x, y) => x * y, 1));
*/
/////////////////////////////////////////////////////////////////////////////
// ! Coding Challenge #2 ! //

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const moreThan18 = humanAge.filter((age) => age >= 18);
  const average =
    moreThan18.reduce((acc, age) => acc + age, 0) / moreThan18.length;

  // console.log(humanAge);
  // console.log(moreThan18);
  console.log(average.toFixed(1));
};

calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
