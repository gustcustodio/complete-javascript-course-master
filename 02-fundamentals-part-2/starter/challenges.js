/**
 * ! challenge 1 
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
  } else {
    console.log("No team wins...");
  }
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/

const totalsOfBills = function calcBills(bills, tips) {
  const newBills = bills + tips;
  return newBills;
};

const calcOfTip = function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    const tip = bills * 0.15;
    return tip;
  } else {
    const tip = bills * 0.2;
    return tip;
  }
};

const bills = [125, 555, 44];
const tips = [calcOfTip(bills[0]), calcOfTip(bills[1]), calcOfTip(bills[2])];
const totals = [
  totalsOfBills(bills[0], tips[0]),
  totalsOfBills(bills[1], tips[1]),
  totalsOfBills(bills[2], tips[2]),
];

console.log(bills);
console.log(tips);
console.log(totals);
