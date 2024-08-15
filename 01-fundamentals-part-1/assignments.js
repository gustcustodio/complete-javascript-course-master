const country = "Brasil";
const continent = "América do Sul";
let populationBrasil = 215;

/*
console.log(country);
console.log(continent);
console.log(population);
*/

const isIsland = false;
let language;

/*
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

language = "portuguese";

let countryHalf = populationBrasil / 2;
populationBrasil++;
console.log(populationBrasil);

console.log(populationBrasil > 6);

console.log(populationBrasil < 33);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  populationBrasil +
  " milion people speak " +
  language +
  ".";

console.log(description);
