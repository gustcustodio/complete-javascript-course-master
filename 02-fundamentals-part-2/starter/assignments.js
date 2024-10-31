// ! functions ! //

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return description;
}

const BRASIL = describeCountry("Brasil", 216, "Brasília");
// console.log(BRASIL);
const EUA = describeCountry("EUA", 334, "Washington");
// console.log(EUA);
const FINLAND = describeCountry("Finland", 6, "Helsinki");
// console.log(FINLAND);

// ! function declarations vs. expressions ! //

function percentageOfWorld1(country, population) {
  const worldPopulation = 7900;
  const percentage = (population / worldPopulation) * 100;
  const description = `${country} has ${population} million people, so it's about ${percentage.toFixed(
    1
  )}% of the world population.`;
  return description;
}
const CHINA = percentageOfWorld1("China", 1441);
console.log(CHINA);
const JAPAN = percentageOfWorld1("Japan", 121);
console.log(JAPAN);
const MONGOLIA = percentageOfWorld1("Mongolia", 3);
console.log(MONGOLIA);

const percentageOfWorld2 = function (country, population) {
  const worldPopulation = 7900;
  const percentage = (population / worldPopulation) * 100;
  const description = `${country} has ${population} million people, so it's about ${percentage.toFixed(
    1
  )}% of the world population.`;
  return description;
};

console.log(percentageOfWorld2("Brasil", 216));

// ! arrow functions ! //

const percentageOfWorld3 = (country, population) => {
  const worldPopulation = 7900;
  const percentage = (population / worldPopulation) * 100;
  // const description = `${country} has ${population} million people, so it's about ${percentage.toFixed(
  //   1
  // )}% of the world population.`;
  return percentage;
};

// console.log(percentageOfWorld3("EUA", 334));

// ! introduciton to arrays ! //

const populations = [1441, 121, 216, 334];
console.log(populations.length === 4);

const percentages = [CHINA, JAPAN, MONGOLIA];
console.log(percentages);

// ! basic array operations (methods) ! //

const neighbouring = ["Paraguai", "Uruguai", "Bolívia"];
neighbouring.push("Utopia");
console.log(neighbouring);
neighbouring.pop();
console.log(neighbouring);

// for (neighbors of neighbouring) {
//   if (neighbors !== "Germany") {
//     console.log("Probaly not a central european country");
//   }
// }

console.log(
  neighbouring.includes("Germany")
    ? "Central european country"
    : "Probaly not a central european country"
);

const index = neighbouring.indexOf("Uruguai");
console.log(index);
neighbouring[index] = "República Oriental do Uruguai";
console.log(neighbouring[index]);
console.log(neighbouring);

// ! introduction to objects ! //

const myCountry = {
  country: "Island",
  capital: "Reykjavik",
  language: "icelandic",
  population: 393.6,
  neighbours: [],
  describe: function () {
    return `${this.country} has ${this.population} thousand ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    return this.neighbours.length > 0
      ? (this.isIsland = true)
      : (this.isIsland = false);
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} thousand ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 100;
console.log(myCountry.population);
myCountry["population"] -= 200;
console.log(myCountry.population);

console.log(myCountry.describe());

console.log(myCountry.checkIsland());

console.log(myCountry);

// ! iteration: the for loop ! //

// const peoplesVoting = 10;

// for (let i = 0; i <= peoplesVoting; i++) {
//   console.log(`Vote number ${i} is currently voting.`);
// }

// ! looping arrays, breaking and continuing ! //

const percentages2 = [
  percentageOfWorld3(100),
  percentageOfWorld3(200),
  percentageOfWorld3(300),
];

// todo verificar o motivo de estar retornando NaN //
console.log(percentages2);