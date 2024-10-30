// ! functions ! //

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return description;
}

const BRASIL = describeCountry("Brasil", 216, "Brasília");
console.log(BRASIL);
const EUA = describeCountry("EUA", 334, "Washington");
console.log(EUA);
const FINLAND = describeCountry("Finland", 6, "Helsinki");
console.log(FINLAND);

// ! function declarations vs. expressions ! //