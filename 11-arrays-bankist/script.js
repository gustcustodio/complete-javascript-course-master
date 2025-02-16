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
  type: "premmium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "premmium",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "standard",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  // creates the balance property on the referenced object
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements // calcula a soma total dos depósitos
    .filter((mov) => mov > 0) // filtra apenas valores positivos
    .reduce((acc, mov) => acc + mov, 0); // soma os depósitos
  labelSumIn.textContent = `${incomes}€`; // atualiza o texto com o total

  const out = acc.movements // calcula a soma total dos saques
    .filter((mov) => mov < 0) // filtra apenas valores negativos
    .reduce((acc, mov) => acc + mov, 0); // soma os saques
  labelSumOut.textContent = `${Math.abs(out)}€`; // exibe o valor absoluto

  const interest = acc.movements // calcula os juros baseados nos depósitos
    .filter((mov) => mov > 0) // filtra apenas os depósitos
    .map((deposit) => (deposit * acc.interestRate) / 100) // calcula os juros
    .filter((int, i, arr) => {
      // filtra os juros que são >= a 1
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0); // soma os juros válidos
  labelSumInterest.textContent = `${interest}€`; // atualiza o texto com o total de juros
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
// console.log(accounts);

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

//////////////////////////// * event handlers * ////////////////////////////
let currentAccount;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  // checks the user //
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // checks the pin //
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // clear input fields
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// ! LECTURES ! //

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
////////////////////////////////////////////////////////////////////////////
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
* the filter() method creates a new array filled with elements that pass a test provided by a function
* the filter() method does not execute the function for empty elements
* the filter() method does not change the original array
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
* the reduce() method executes a reducer function for array element
* the reduce() method returns a single value: the function's accumulated result
* the reduce() method does not execute the function for empty array elements
* the reduce() method does not change the original array
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
////////////////////////////////////////////////////////////////////////////
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
/*
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
*/
/*
! CHAINING METHODS !
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
console.log(movements);

// PIPELINE //
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/
////////////////////////////////////////////////////////////////////////////
// ! Coding Challenge #3 ! //

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  return ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
*/
/*
! FIND METHOD !
* the find() method returns the value of the first element that passes a test
* the find() method executes a function for each array element
* the find() method returns undefined if no elements are found
* the find() method does not execute the function for empty elements
* the find() method does not change the original array
? syntax: array.find(function(currentValue, index, arr),thisValue)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const firstWithdraw = movements.find((mov) => mov < 0);
console.log(firstWithdraw);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

const ages = [3, 10, 18, 20];
console.log(ages);
const checkAge = ages.find((age) => age > 18);
console.log(checkAge);
const checkAge2 = ages.find((age) => age > 30);
console.log(checkAge2);

const inventory = [
  { name: "maças", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(fruit => fruit.name === "cherries");
console.log(result);
*/
/*
! FINDINDEX !
* the findIndex() method executes a function for each array element
* the findIndex() method returns the index (position) of the first element that passes a test
* the findIndex() method returns -1 if no match is found
* the findIndex() method does not execute the function for empty array elements
* the findIndex() method does not change the original array
? syntax: array.findIndex(function(currentValue, index, arr), thisValue)

const ages = [3, 10, 18, 20];
console.log(ages.findIndex((age) => age > 18));
console.log(ages.findIndex((age) => age > 30));
*/
/*
! FINDLAST AND FINDLASTINDEX !
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
* the findLast() method returns the value of the last element that passes a test
* the findLast() method executes a function for each array element
* the findLast() method returns undefined if no elements are found
* the findLast() method does not execute the function for empty elements
* the findLast() method does not change the original array
? syntax: array.findLast(function(currentValue, index, arr),thisValue)

const lastWithdrawal = movements.findLast((mov) => mov < 0);
console.log(lastWithdrawal);

* the findLastIndex() method executes a function for each array element
* the findLastIndex() method returns the index (position) of the last element that passes a test
* the findLastIndex() method returns -1 if no match is found
* the findLastIndex() method does not execute the function for empty array elements
* the findLastIndex() method does not change the original array
? array.findLastIndex(function(currentValue, index, arr), thisValue)

// "Your latest large movement was X movements ago"

const latestLargeMov = movements.findLastIndex((mov) => Math.abs(mov) > 1000);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMov
  } movement(s) ago.`
);
*/
/*
! SOME !
* the some() method checks if any array elements pass a test (provided as a callback function)
* the some() method executes the callback function once for each array element
* the some() method returns true (and stops) if the function returns true for one of the array elements
* the some() method returns false if the function returns false for all of the array elements
* the some() method does not execute the function for empty array elements
* the some() method does not change the original array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
* EQUALITY * 
console.log(movements.includes(-130)); // true
* CONDITION *
console.log(movements.some((mov) => mov === -130)); // true
const anyDeposits = movements.some((mov) => mov > 0); 
console.log(anyDeposits); // true
! EVERY !
* the every() method executes a function for each array element
* the every() method returns true if the function returns true for all elements
* the every() method returns false if the function returns false for one element
* the every() method does not execute the function for empty elements
* the every() method does not change the original array
console.log(movements.every((mov) => mov > 0)); // false
console.log(account4.movements.every((mov) => mov > 0)); // true
! SEPARATE CALLBACK !
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [200, 450, 3000, 70, 1300]
*/
/*
! FLAT !
* the flat() method concatenates sub-array elements
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
* without chaining *
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
* with chaining *
const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
! FLATMAP !
* the flatMap() method maps all array elements and creates a new flat array
* flatMap() creates a new array from calling a function for every array element
* flatMap() does not execute the function for empty elements
* flatMap() does not change the original array
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/
////////////////////////////////////////////////////////////////////////////
// ! Coding Challenge #4 ! //
/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

* 1.
const huskyWeight = breeds.find(
  (breed) => breed.breed === "Husky"
).averageWeight;
 console.log(huskyWeight);
* 2.
const dogBothActivities = breeds.find(
  (breed) =>
    breed.activities.includes("fetch") && breed.activities.includes("running")
).breed;
console.log(dogBothActivities);
* 3.
// const allActivities = breeds.map(breed => breed.activities).flat();
const allActivities = breeds.flatMap((breed) => breed.activities);
console.log(allActivities);
* 4.
// const uniqueActivities = [
//   ...new Set(breeds.flatMap((breed) => breed.activities)),
// ];
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);
* 5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter((breed) => breed.activities.includes("swimming"))
      .flatMap((breed) => breed.activities)
      .filter((activity) => activity !== "swimming")
  ),
];
console.log(swimmingAdjacent);
* 6.
console.log(breeds.every(breed => breed.averageWeight > 10));
* 7.
console.log(breeds.some(breed => breed.activities.length >= 3));
* BONUS
const heaviestBreedFetch = breeds
  .filter((breed) => breed.activities.includes("fetch"))
  .map((breed) => breed.averageWeight);
console.log(Math.max(...heaviestBreedFetch));
*/
/*
! SORTING ARRAYS !
* STRINGS *
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);
* NUMBERS *
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
? return < 0 - A, B (keep order) ? 
* if a negative number or 0 is returned, no re-arranging happens *
? return > 0 - B, A (switch order) ?
* if a positive number is returned, the two items switch place *
? return = 0 ?
* if the two values are equivalent (i.e., if their order is irrelevant), the comparison function should return 0 *
* ASCENDING ORDER *
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
// * DESCENDING ORDER * //
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/
/*
! ARRAY GROUPING !
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "deposits" : "withdrawals"
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, (account) => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return "very active";
  if (movementCount >= 4) return "active";
  if (movementCount >= 1) return "moderate";
  return "inactive";
});
console.log(groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, (account) => account.type);
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts);
*/
/*
! MORE WAYS OF CREATING AND FILLING ARRAYS !
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
* EMPTY ARRAYS + FILL METHOD *
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
console.log(x);
x.fill(1);
console.log(x);
arr.fill(23, 2, 6);
console.log(arr);
* ARRAY.FROM *
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener("click", () => {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(".movements__value")].map(
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI2);
  // console.log(
  //   movementsUI2.map((el) => Number(el.textContent.replace("€", "")))
  // );
});
*/
/*
! NON-DESTRUCTIVE ALTERNATIVES !
! TOREVERSED !
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements);
! TOSORTED !
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = fruits.toSorted();
console.log(fruits);
console.log(fruits2);
! TOSPLICED !
const months = ["Jan", "Mar", "Apr", "May"];
* inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2);
* deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3);
* replacing one element at index 1 with two elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4);
* original array is not modified
console.log(months);
! WITH !
// movements[1] = 2000;
console.log(movements);
const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements);
*/
/*
! ARRAY METHODS PRACTICE !
* 1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);

console.log(bankDepositSum);

* 2.
// const numDeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

? PREFIXED OPERATOR ?
let a = 10;
console.log(a++);
console.log(a);
console.log(++a);

* 3.
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

* 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
*/
////////////////////////////////////////////////////////////////////////////
// ! Coding Challenge #5 ! //
/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/

// TEST DATA //
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// * 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

dogs.forEach((dog) => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// console.log(dogs);

// * 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
/*
dogs.forEach((dog) => {
  if (dog.owners.includes("Sarah")) {
    // console.log("CURRENT: ", dog.curFood);
    // console.log("RECOMMENDED: ", dog.recFood);
    // console.log("RANGE BELOW: ", dog.recFood * 0.9);
    // console.log("RANGE ABOVE: ", dog.recFood * 1.1);

    const tooLittle = dog.curFood > dog.recFood * 0.9 ? true : false;
    const tooMuch = dog.curFood < dog.recFood * 1.1 ? true : false;

    if (!tooLittle) {
      console.log("Less than recommended");
    } else if (!tooMuch) {
      console.log("More than recommended");
    } else {
      console.log("Eating the recommended amount of food");
    }
  }
});

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog eats too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);
*/
// * 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
/*
const ownersTooMuch = [];
const ownersTooLittle = [];

dogs.filter((dog) =>
  dog.curFood > dog.recFood
    ? ownersTooMuch.push(...dog.owners)
    : ownersTooLittle.push(...dog.owners)
);

console.log(ownersTooMuch);
console.log(ownersTooLittle);
console.log(dogs[3]);
*/

const ownersTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
const ownersTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

// console.log(ownersTooMuch);
// console.log(ownersTooLittle);

// * 4. Log a string to the console for each array created in 3, like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// console.log(`${ownersTooMuch.join(" and ")}'s dogs eat too much!`);
// console.log(`${ownersTooLittle.join(" and ")}'s dogs eat too little!`);

// * 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// * 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

const checkEatingOkay = (dog) =>
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

// console.log(dogs.every(checkEatingOkay));

// * 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

const eatingOkay = dogs.filter(checkEatingOkay);

// console.log(eatingOkay);

// * 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

const dogsGroupedByPortion = Object.groupBy(dogs, (dog) => {
  if (dog.curFood === dog.recFood) return "exact";
  if (dog.curFood > dog.recFood * 1.1) return "too-much";
  if (dog.curFood < dog.recFood * 0.9) return "too-litle";
  return "in-the-range";
});

// console.log(dogsGroupedByPortion);

// * 9. Group the dogs by the number of owners they have

const dogsGroupedByOwners = Object.groupBy(dogs, (dog) => {
  const ownersLength = dog.owners.length;

  if (ownersLength >= 3) return "3";
  if (ownersLength >= 2) return "2";
  if (ownersLength >= 1) return "1";
});

// console.log(dogsGroupedByOwners);

// * 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

const dogsPortionAscending = dogs
  .map((dog) => dog.recFood)
  .sort((a, b) => a - b);

// console.log(dogsPortionAscending);

const checkMutate = dogs.map(dog => dog.recFood);
// console.log(checkMutate);