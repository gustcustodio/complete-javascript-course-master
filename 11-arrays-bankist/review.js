// * ARRAY METHODS * //
// ! SLICE ! //
// const str = "JavaScript";
// console.log(str.slice(4)); // "Script"
// console.log(str.slice(2, 8)); // "vaScri"
// console.log(str.slice(-5)); // "cript"
// console.log(str.slice(1, -6)); // "ava"
// console.log(str.slice(11)); // " "
// const a = [1, 2, 3, 4, 5];
// console.log(a.slice(0, 3)); // [1, 2, 3]
// console.log(a.slice(3)); // [4, 5]
// console.log(a.slice(1, -1)); // [2, 3, 4]
// console.log(a.slice(-3, -2)); // [3]
//  ! SPLICE ! //
// const arr = [1, 2, "a", "b", "2", "c", 1, "a", 45];
// const x = arr.splice(5);
// console.log(arr); // [1, 2, "a", "b", "2"]
// console.log(x); // ["c", 1, "a", 45]
// const x1 = arr.splice(5, 2);
// console.log(arr); // [1, 2, "a", "b", "2", "a", 45]
// console.log(x1); // ["c", 1]
// const x2 = arr.splice(5, 2, "x", "y");
// console.log(arr); // [1, 2, "a", "b", "2", "x", "y", "a", 45]
// console.log(x2); // ["c", 1]
// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// const x = a.splice(4);
// console.log(a); // [1, 2, 3, 4]
// console.log(x); // [5, 6, 7, 8]
// const x2 = a.splice(1, 2);
// console.log(a); // [1, 4, 5, 6, 7, 8]
// console.log(x2); // [2, 3]
// const x3 = a.splice(1, 1);
// console.log(a); // [1, 3, 4, 5, 6, 7, 8]
// console.log(x3); // [2]
// const x4 = a.splice(2, 0, "a", "b");
// console.log(a); // [1, 2, "a", "b", 3, 4, 5, 6, 7, 8]
// console.log(x4); // []
// const x5 = a.splice(2, 2, [1, 2], 3);
// console.log(a); // [1, 2, [1, 2], 3, 5, 6, 7, 8]
// console.log(x5); // [3, 4]
// ! REVERSE ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse()); // ["Mango", "Apple", "Orange", "Banana"]
// console.log(fruits); // ["Mango", "Apple", "Orange", "Banana"]
// const numbers = [3, 2, 4, 1, 5];
// * the reverse() method returns the reference to the same array * //
// const reversed = numbers.reverse(); // [5, 1, 4, 2, 3]
// reversed[0] = 5;
// console.log(numbers[0]); // 5
// numbers[2] = 3;
// console.log(numbers); // [5, 1, 3, 2, 3]
// console.log(reversed); // [5, 1, 3, 2, 3]
// const reverted = [...numbers].reverse();
// reverted[0] = 8;
// console.log(reverted); // [8, 2, 3, 1, 5]
// console.log(numbers[0]); // 5
// ! CONCAT ! //
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const childrens = arr1.concat(arr2); // ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
// console.log(childrens);
// const letters = ["a", "b", "c"];
// const alphaNumeric = letters.concat(1, [2, 3]);
// console.log(alphaNumeric); // ["a", "b", "c", 1, 2, 3]
// const num1 = [[1]];
// const num2 = [2, [3]];
// const numbers = num1.concat(num2);
// console.log(numbers); // [[1], 2, [3]]
// num1[0].push(4);
// console.log(numbers); // [[1, 4], 2, [3]]
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
// console.log(array3); // ["a", "b", "c", "d", "e", "f"]
// ! JOIN ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(); // Banana,Orange,Apple,Mango
// let text = fruits.join(" and "); // Banana and Orange and Apple and Mango
// console.log(text);
// const arr1 = [1, , 3];
// const arr2 = [1, undefined, 3];
// console.log(arr1.join()); // 1,,3
// console.log(arr2.join()); // 1,undefined,3
// const arr3 = [6, 11, "x", "y"];
// const arr4 = arr3.join();
// console.log(arr4); // 6,11,x,y
// console.log(typeof arr4); // string
// ! AT ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit); // Apple
// const arr1 = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(`An index of ${index} returns ${arr1.at(index)}`); // 8
// index = -2;
// console.log(`An index of ${index} returns ${arr1.at(index)}`); // 130
// console.log(arr1[-1]); // undefined
// arr1["-1"] = "Propriedade de string";
// console.log(arr1[-1]); // Propriedade de string
// console.log(arr1["0"]); // 5
// console.log(arr1.length); // 5
// console.log(arr1[arr1.length - 1]); // 44
// console.log(arr1.at(-1)); // 44
// * MÉTODOS DE ARRAY DE ECMASCRIPT 5 * //
// ?  A maioria dos métodos aceita uma função como primeiro argumento e chama essa função uma vez para cada elemento (ou para alguns elementos) do array. Se o array é esparso, a função passada não é chamada para os elementos inexistentes. Na maioria dos casos, a função fornecida é chamada com três argumentos: o valor do elemento do array, o índice do elemento e o array em si. Frequentemente, apenas o primeiro desses valores de argumento é necessário e o segundo e terceiro valores podem ser ignorados. ? //
// ! FOREACH ! //
// const data = [1, 2, 3, 4, 5];
// let sum = 0;
// data.forEach(function (value) {
//   sum += value;
// });
// data.forEach((value) => (sum += value));
// console.log(sum); // 15
// data.forEach((v, i, a) => {
//   a[i] = v + 1;
// });
// console.log(data); // [2, 3, 4, 5, 6]
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// ! MAP ! //
// const a = [1, 2, 3];
// const b = a.map((x) => x * x);
// console.log(b); // [1, 4, 9]
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map((x) => Math.sqrt(x));
// console.log(numbers);
// console.log(newArr); // [2, 3, 4, 5]
// function getFullName(item) {
//   return [item.firstName, item.lastName].join(" ");
// }
// const persons = [
//   { firstName: "Malcom", lastName: "Reynolds" },
//   { firstName: "Kaylee", lastName: "Frye" },
//   { firstName: "Jayne", lastName: "Cobb" },
// ];
// console.log(persons.map(getFullName));
// ! FILTER ! //
// const words = ["spray", "elite", "exuberant", "destruction", "present"];
// const result = words.filter((word) => word.length > 6);
// console.log(result); // ["exuberant", "destruction", "present"]
// const numbers = [12, 5, 6, 130, 44];
// const filtered = numbers.filter((number) => number >= 10);
// console.log(filtered); // [12, 130, 44]
// const a = [5, 4, 3, 2, 1];
// const smallValues = a.filter((x) => x < 3);
// console.log(smallValues); // [2, 1]
// const everyOther = a.filter((x, i) => i % 2 === 0);
// console.log(everyOther); // [5, 3, 1]
// ! REDUCE ! //
// const arr = [1, 2, 3, 4, 5];
// const resultado = arr.reduce((acc, valorAtual) => 2 * acc + valorAtual);
// console.log(resultado); // 57
// const a = [1, 2, 3, 4, 5];
// const sum = a.reduce((x, y) => x + y, 0);
// console.log(sum); // 15
// const product = a.reduce((x, y) => x * y, 1);
// console.log(product); // 120
// const max = a.reduce((x, y) => (x > y ? x : y));
// console.log(max); // 5
// * how reduce() works without an initial value * //
// const array = [15, 16, 17, 18, 19];
// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
//   );
//   return returns;
// }
// array.reduce(reducer);
// * how reduce() works with an initial value * //
// console.log(
//   [15, 16, 17, 18, 19].reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     10
//   )
// );
// * reduce() skips missing elements in sparse arrays, but it does not skip undefined values * //
// console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
// console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
// ! ! CHAINING METHODS ! //
// let username = window.prompt("Enter your username: ");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username);
// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();
// console.log(username);
// const firstName = "   Rajat   ";
// console.log(firstName);
// const modifiedName = firstName.toUpperCase().trim();
// console.log(modifiedName);
// ! FIND METHOD ! //
// const array = [5, 12, 8, 130, 44];
// const found = array.find((element) => element > 10);
// console.log(found); // 12
// const a = [1, 2, 3, 4, 5];
// console.log(a.find((x) => x % 5 === 0)); // 5
// console.log(a.find((x) => x % 7 === 0)); // undefined
// const arr = [12, 17, 60, 319];
// console.log(arr.find((el) => el > 21)); // 60
// ! FINDINDEX ! //
// const a = [1, 2, 3, 4, 5];
// console.log(a.findIndex((x) => x === 3)); // 2
// console.log(a.findIndex((x) => x < 0)); // -1
// const arr = [12, 17, 60, 319];
// console.log(arr.findIndex((x) => x > 81)); // 3
// const array = [5, 12, 8, 130, 44];
// console.log(array.findIndex((x) => x > 13)); // 3
// ! FINDLAST ! //
// const ages = [3, 10, 18, 20, 12, 30, 11, 22, 37, 5, 19, 55, 17, 8];
// console.log(ages.findLast((age) => age > 20)); // 55
// console.log(ages.findLast((age) => age > 60)); // undefined
// const array = [5, 12, 50, 130, 44];
// console.log(array.findLast((element) => element > 45)); // 130
// ! FINDLASTINDEX ! //
// const ages = [3, 10, 18, 20, 5, 7, 22, 33, 44, 13, 9];
// console.log(ages.findLastIndex(age => age > 18)); // 8
// console.log(ages.findLastIndex(age => age > 50)); // -1
// const array = [5, 12, 50, 130, 44];
// console.log(array.findLastIndex((element) => element > 45)); // 3
// ! EVERY ! //
// const a = [1, 2, 3, 4, 5];
// console.log(a.every((x) => x < 10)); // true
// console.log(a.every((x) => x % 2 === 0)); // false
// const ages = [32, 33, 16, 40];
// console.log(ages.every((x) => x >= 18)); // false
// const survey = [
//   { name: "Steve", answer: "Yes" },
//   { name: "Jessica", answer: "Yes" },
//   { name: "Peter", answer: "Yes" },
//   { name: "Elaine", answer: "No" },
// ];
// function isSameAnswer(el, index, arr) {
//   if (index === 0) {
//     return true;
//   } else {
//     return el.answer === arr[index - 1].answer;
//   }
// }
// console.log(survey.every(isSameAnswer)); // false
// ! SOME ! //
// const a = [1, 2, 3, 4, 5];
// console.log(a.some((x) => x % 2 === 0)); // true
// console.log(a.some(isNaN)); // false
// const ages = [3, 10, 18, 20];
// console.log(ages.some((x) => x >= 18)); // true
// ! FLAT ! //
// const myArr = [[1, 2], [3, 4], [5, 6]];
// console.log(myArr.flat());
// const myArr2 = [1, 2, [3, [4, 5, 6], 7], 8];
// console.log(myArr2.flat());
// console.log(myArr.flat(2));
// ! FLATMAP ! //
// const arr1 = [1, 2, 3, 4];
// console.log(arr1.map((x) => [x * 2]));
// console.log(arr1.flatMap((x) => [x * 2]));
// console.log(arr1.flatMap((x) => [[x * 2]]));
// ! SORT ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a, b) => a - b));
// console.log(points.sort((a, b) => b - a));
// const stringArray = ["Blue", "Humpback", "Beluga"];
// const numberArray = [40, 1, 5, 200];
// const numericStringArray = ["80", "9", "700"];
// const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

// function compareNumbers (a, b) {
//   return a - b;
// }

// console.log(stringArray.sort()); // ["Beluga", "Blue", "Humpback"]
// console.log(numberArray.sort()); // [1, 200, 40, 5]
// console.log(numberArray.sort(compareNumbers)); // [1, 5, 40, 200]
// console.log(numericStringArray.sort()); // ["700", "80", "9"]
// console.log(numericStringArray.sort(compareNumbers)); // ["9", "80", "700"]
// console.log(mixedNumericArray.sort()); // [1, 200, 40, 5, "700", "80", "9"]
// console.log(mixedNumericArray.sort(compareNumbers)); // [1, 5, "9", 40, "80", 200, "700"]
// ! ARRAY GROUPING ! //
// const fruits = [
//   { name: "apples", quantity: 300 },
//   { name: "bananas", quantity: 500 },
//   { name: "oranges", quantity: 200 },
//   { name: "kiwi", quantity: 150 },
// ];

// const result = Object.groupBy(fruits, ({ quantity }) => {
//   return quantity > 200 ? "ok" : "low";
// });

// console.log(result);

// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];

// const result = Object.groupBy(inventory, ({ type }) => type);
// console.log(result);
// ! NON-DESTRUCTIVE ALTERNATIVES ! //
// ! TOREVERSED ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits2 = fruits.toReversed();
// console.log(fruits);
// console.log(fruits2);
// const items = [1, , 3];
// console.log(items.toReversed());
// const arrayLike = {
//   length: 5,
//   unrelated: "foo",
//   2: 4,
//   3: 5,
//   4: 6,
// };
// console.log(Array.prototype.toReversed.call(arrayLike));
// the '0' and '1' indices are not present so they become undefined
// ! TOSORTED ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits2 = fruits.toSorted();
// console.log(fruits);
// console.log(fruits2);
// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(values);
// console.log(sortedValues);
// const letters = ["a", "c", , "f", "h"];
// console.log(letters.toSorted());
// console.log(letters);
// ! TOSPLICED ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits2 = fruits.toSpliced(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
// console.log(fruits2);
// const months = ["Jan", "Mar", "Apr", "May"];
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2);
// const months3 = months2.toSpliced(2, 2);
// console.log(months3);
// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4);
// ! WITH ! //
// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(months);
// console.log(myMonths);
// const values = [1, 2, 3, 4, 5];
// const values2 = values.with(2, 6);
// console.log(values);
// console.log(values2);
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 8).map((x) => x ** 2));
