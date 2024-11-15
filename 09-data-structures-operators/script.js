"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ! ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Pizza",
  owner: "Giovanni Rossi",
};

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// * fix capitalization in name
const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// * comparing emails
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io  \n";

// ? method chaining - cada método retorna um valor que pode ser usado imediatamente pelo próximo método na cadeia. A capacidade de encadear métodos reduz a necessidade de criar variáveis intermediárias e torna o código mais conciso. //
// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// * replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate")); // ! RegExp

// * booleans

/////////////////////////////////////////////////////////////////
/*
! working with strings - part1 
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r")); // * first occurrence
console.log(airline.lastIndexOf("r")); // * last occurrence
console.log(airline.indexOf("Portugal")); // * case sensitive
console.log(airline.indexOf("portugal")); // * case sensitive

? The returned array contains the element specified by the first argument and all subsequent elements up to, BUT NOT INCLUDING, the element specified by the second argument. //

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

?  If either argument is negative, it specifies an array element relative to the length of the array. An argument of –1, for example, specifies the last element in the array, and an argument of –2 specifies the element before that one. //

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 😳");
  } else {
    console.log("You got lucky 😁");
  }
}

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

? boxing é o processo de empacotar um tipo primitivo (como números, strings, ou valores booleanos) em seu objeto correspondente, permitindo que ele seja tratado como um objeto. O Boxing acontece quando um valor primitivo é temporariamente convertido em um objeto para que você possa acessar propriedades ou métodos nele.

console.log(new String("jonas"));
console.log(typeof new String("jonas"));
console.log(typeof new String("jonas").slice(1));
*/
/////////////////////////////////////////////////////////////////
// ! Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

* 1.
const events = [...new Set(gameEvents.values())];
// console.log(events);

* 2.
gameEvents.delete(64);
// console.log(gameEvents);

* 3.
const gameTime = 90;
const eventOccurrence = gameTime / gameEvents.size;

// console.log(`An event happened, on average, every ${eventOccurrence} minutes.`);

* 4.
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}
*/
/////////////////////////////////////////////////////////////////
/*
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question);

// * convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// * quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt("Your answer"));
// console.log(answer);

// if (answer === question.get("correct")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// console.log(question.get(question.get("correct") === answer));

// * convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/////////////////////////////////////////////////////////////////
/*
! maps - fundamentals

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

// console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

// console.log(rest);

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// console.log(rest);

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
/////////////////////////////////////////////////////////////////
/*
! sets

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);

console.log(new Set("Jonas"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size);

console.log(new Set("gustavocustodio").size);
*/
/////////////////////////////////////////////////////////////////
/*
! Coding Challenge #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

* 1.

// for (const score of game.scored.entries()) {
//   console.log(`Goal ${score[0] + 1}: ${score[1]}`);
// }

* 2.

// let odds = Object.values(game.odds)
// let sum = 0;

// for (let i = 0; i < odds.length; i++) {
//   sum += odds[i];
// }

// let average = sum / odds.length;

// console.log(average.toFixed(2));

// const odds = Object.values(game.odds);
// let sum = 0;

// for (const odd of odds) sum += odd;

// let average = sum / odds.length;

// console.log(average.toFixed(2));

* 3

// const odds = Object.entries(game.odds);

// for (const [key, value] of odds) {
//   const teamName = key === "x" ? "draw" : `victory ${game[key]}`;
//   console.log(`Odd of ${teamName}: ${value}`);
// }

* BONUS

const scored = game.scored;

// console.log(players);

const scorers = {};

scored.forEach(player => {
  // ? verifica se o jogador já está no objeto; se sim, incrementa o valor. //
  // ? caso contrário, inicia a contagem do jogador com 1. //
  scorers[player] = (scorers[player] || 0) + 1;
})

// console.log(scorers.Lewandowski || 0);
// console.log(scorers.Gnarby || 0);
// console.log(scorers.Hummels || 0);

console.log(scorers);
*/
/////////////////////////////////////////////////////////////////
/*
! property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr.slice(0, -2));

! property VALUES
const values = Object.values(openingHours);
console.log(values);

! entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
/*
/////////////////////////////////////////////////////////////////
/*
! optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

! example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}.`);
}

! methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

! arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
const users = [];

console.log(users[0]?.name ?? "User array empty");
*/
/////////////////////////////////////////////////////////////////
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(menu.entries());
console.log(...menu.entries());
console.log([...menu.entries()]);
*/
/////////////////////////////////////////////////////////////////
/*
! Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// * 1.
const {
  players: [players1, players2],
} = game;
// console.log(players1);
// console.log(players2);

// * 2.
const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// * 3.
const [...allPlayers] = [...players1, ...players2];
// console.log(allPlayers);

// * 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// * 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

// * 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals("Davies", "Muller", "Lewandowski", "Kimich");
// printGoals(...game.scored);

// * 7.
// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 1 is more likely to win");
*/
/////////////////////////////////////////////////////////////////
/*
! OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

! NULLISH assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

! AND assignment operator
rest1.owner = rest1.owner && "<ANONYMOUS>";
rest2.owner = rest2.owner && "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>"

console.log(rest1);
console.log(rest2);
*/
/////////////////////////////////////////////////////////////////
/*
! the nullish coalescing operator (??)
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

! nullish values = null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/////////////////////////////////////////////////////////////////
/*
! short circuiting
! use ANY data type, return ANY data type, short-circuiting

! OR
console.log("--- OR ---");

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

! AND
console.log("--- AND ---");

console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && "Jonas" && null && true);

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "cheese");
*/
/////////////////////////////////////////////////////////////////
/*
! rest pattern and parameters

* 1) DESTRUCTURING
! SPREAD, because on RIGHT side of = (assignment)
const arr = [1, 2, ...[3, 4]];
console.log(arr);
! REST, because on LEFT side of = (assignment)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
! objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

* 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
*/
/////////////////////////////////////////////////////////////////
/*
! the spread operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(1, 2, 7, 8, 9);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

! copy array !
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

! join 2 arrays !
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

! iterables: arrays, strings, maps, sets. NOT objects. !
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);

! real-world example !
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

! objects !
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "La Trattoriaa";
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/
/////////////////////////////////////////////////////////////////
/*
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

! calling with default values !
restaurant.orderDelivery({
  address: "Via del Sole, 21",
});

! destructuring objects !
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

! default values !
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

! mutating variables !
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

! nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/////////////////////////////////////////////////////////////////
/*
! destructuring arrays !
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

! destructuring does not change the original array ! 
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

! switching variables ! 
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

! receive 2 return values from a function ! 
let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

! nested destructuring ! 
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

! default values ! 
const [p, q = 1, r = 1, s] = [8];
console.log(p, q, r, s); // * s is undefined
*/
