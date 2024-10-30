// ! values and variables ! //

const country = "Brasil";
const continent = "América do Sul";
let populationBrasil = 215;

// console.log(country);
// console.log(continent);
// console.log(population);

// ! data types ! //

const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// ! let, const and var ! //

language = "portuguese";

// !  basic operators ! //

let countryHalf = populationBrasil / 2;
populationBrasil++;
// console.log(populationBrasil);

// console.log(populationBrasil > 6);

// console.log(populationBrasil < 33);

// let description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   populationBrasil +
//   " milion people speak " +
//   language +
//   ".";

// console.log(description);

// ! string and template strings ! //

const description = `${country} is in ${continent}, and its ${populationBrasil} milion people speak ${language}.`;

// console.log(description);

// ! taking decisions: if / else statements ! //

// const country2 = 33;

// if (populationBrasil > country2) {
//   console.log(`${country}'s population is above average.`);
// } else {
//   console.log(
//     `${country}'s population is ${
//       populationBrasil - country2
//     } million below average.`
//   );
// }

// ! type conversion and coercion ! //

// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // 617
// console.log("19" - "13" + 17); // 23
// console.log("123" < 57); // false;
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// ! equality operators: == vs. === ! //

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your contry have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// ! logical operators ! //

// if (language && populationBrasil < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// ! the switch statement ! //

// language = "portuguese";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers!");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too 😁");
//     break;
// }

// ! the conditional (ternary) operator ! //

populationBrasil > 33
  ? console.log(`${country}'s population is above average.`)
  : console.log(`${country}'s population is below average.`);
