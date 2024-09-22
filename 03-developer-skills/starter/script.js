// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);

// const calAge = (birthYear) => 2037 - birthYear;

/**
 * todo PROBLEM 1: We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error".

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// ! 1) Understanding the problem
// ? What is temp amplitude? Answer: difference between highest and lowest temp
// ? How to compute max and min temperatures?
// ? What's a sensor error? And what do?

// ! 2) Breaking up into sub-problems
// ? How to ignore errors?
// ? Find max value in temp array
// ? Find min value in temp array
// ? Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);
 */

/**
 * todo PROBLEM 2: Function now receive 2 arrays of temps

// ! 1) Understanding the problem
// ? With 2 arrays, should we implement functionality twice? NO, Just merge two arrays

// ! 2) Breaking up into sub-problems
// ? How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);
 */
/**
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",

    // ! c) fix
    // value: Number(prompt("Degrees celsius: ")),
    value: 10,
  };

  // ! b) find
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// ! a) identify
console.log(measureKelvin());

// using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  // ! b) find
  // let max = 0;
  // let min = 0;
  // ! c) fix
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    //   debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// ! a) identify
console.log(amplitudeBug);
 */

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// ! 1) Understanding the problem
// ? forecasted maximum temperatures - temperaturas máximas previstas

// ! 2) Breaking up into sub-problems
// ? array [17, 21, 23] - 17º posição 0, 21º posição 1, 23º posição 2
// ? i + 1 = day 1, day 2, day 3

const printForecast = (temperatures) => {
  let forecastedTemperatures = ``;
  for (let i = 0; i < temperatures.length; i++) {
    forecastedTemperatures += ` ... ${temperatures[i]}ºC in ${i + 1} days`;
  }
  forecastedTemperatures += ` ...`;
  return forecastedTemperatures;
};

const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

console.log(printForecast(temperatures));
console.log(printForecast(temperatures2));
