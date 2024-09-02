const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins * 2 > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
  } else if (avgKoalas * 2 > avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
  } else {
    console.log("No team wins...");
  }
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
let result = checkWinner(scoreDolphins, scoreKoalas);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
result = checkWinner(scoreDolphins, scoreKoalas);
