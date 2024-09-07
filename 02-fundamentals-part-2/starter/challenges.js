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
/**
 * ! challenge 2 
const totalsOfBills = function (bill, tips) {
  const newBills = bill + tips;
  return newBills;
};

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    return tip;
  } else {
    const tip = bill * 0.2;
    return tip;
  }
};

const bill = [125, 555, 44];
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
  tips[i] = calcTip(bill[i]);
  totals[i] = totalsOfBills(bill[i], tips[i]);
}

console.log(bill);
console.log(tips);
console.log(totals);

// const tips = [calcOfTip(bills[0]), calcOfTip(bills[1]), calcOfTip(bills[2])];
// const totals = [
//   totalsOfBills(bills[0], tips[0]),
//   totalsOfBills(bills[1], tips[1]),
//   totalsOfBills(bills[2], tips[2]),
// ];
*/
/** 
 * ! challenge 3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
      john.fullName
    }'s (${john.bmi.toFixed(1)})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
      mark.fullName
    }'s (${mark.bmi.toFixed(1)})`
  );
}

// console.log(mark.calcBMI());
// console.log(mark.bmi);

// console.log(john.calcBMI());
// console.log(john.bmi);
*/
/**
 * ! challenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}

// console.log(tips);
// console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage(totals));
*/