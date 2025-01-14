// * ARRAY METHODS * //
// ! SLICE ! //
// const str = "JavaScript";
// console.log(str.slice(4));
// console.log(str.slice(2, 8));
// console.log(str.slice(-5));
// console.log(str.slice(1, -6));
// console.log(str.slice(11));
// const a = [1, 2, 3, 4, 5];
// console.log(a.slice(0,3));
// console.log(a.slice(3));
// console.log(a.slice(1, -1));
// console.log(a.slice(-3, -2));
//  ! SPLICE ! //
// const arr = [1, 2, "a", "b", "2", "c", 1, "a", 45];
// const x = arr.splice(5);
// console.log(arr);
// console.log(x);
// const x1 = arr.splice(5, 2);
// console.log(arr);
// console.log(x1);
// const x2 = arr.splice(5, 2, "x", "y");
// console.log(arr);
// console.log(x2);
// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// const x = a.splice(4);
// console.log(a);
// console.log(x);
// const x2 = a.splice(1, 2);
// console.log(a);
// console.log(x2);
// const x3 = a.splice(1, 1);
// console.log(a);
// console.log(x3);
// const x4 = a.splice(2, 0, "a", "b");
// console.log(a);
// console.log(x4);
// const x5 = a.splice(2, 2, [1, 2], 3);
// console.log(a);
// console.log(x5);
// ! REVERSE ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());
// console.log(fruits);
// const numbers = [3, 2, 4, 1, 5];
// * the reverse() method returns the reference to the same array * //
// const reversed = numbers.reverse();
// reversed[0] = 5;
// console.log(numbers[0]);
// numbers[2] = 3;
// console.log(numbers);
// console.log(reversed);
// const reverted = [...numbers].reverse();
// reverted[0] = 5;
// console.log(numbers[0]);
// ! CONCAT ! //
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const childrens = arr1.concat(arr2);
// console.log(childrens);
// const letters = ["a", "b", "c"];
// const alphaNumeric = letters.concat(1, [2, 3]);
// console.log(alphaNumeric);
// const num1 = [[1]];
// const num2 = [2, [3]];
// const numbers = num1.concat(num2);
// console.log(numbers);
// num1[0].push(4);
// console.log(numbers);
// ! JOIN ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();
// let text = fruits.join(" and ");
// console.log(text);
// const arr1 = [1, , 3];
// const arr2 = [1, undefined, 3];
// console.log(arr1.join());
// console.log(arr2.join());
// const arr3 = [6, 11, "x", "y"];
// const arr4 = arr3.join();
// console.log(arr4);
// console.log(typeof arr4);
// ! AT ! //
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);
// const arr1 = [5, 12, 8, 130, 44];
// let index = 2;
// console.log(`An index of ${index} returns ${arr1.at(index)}`);
// index = -2;
// console.log(`An index of ${index} returns ${arr1.at(index)}`);
// console.log(arr1[-1]);
// arr1["-1"] = "Propriedade de string";
// console.log(arr1[-1]);
// console.log(arr1["0"]);
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.at(-1));
// * MÉTODOS DE ARRAY DE ECMASCRIPT 5 * //
// ! FOREACH ! //
// const data = [1, 2, 3, 4, 5];
// let sum = 0;
// data.forEach(function (value) {
//   sum += value;
// });
// data.forEach((value) => (sum += value));
// console.log(sum);
// data.forEach((v, i, a) => {
//   a[i] = v + 1;
// });
// console.log(data);
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
// console.log(b);
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map((x) => Math.sqrt(x));
// console.log(numbers);
// console.log(newArr);
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
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);
const numbers = [12, 5, 6, 130, 44];
const filtered = numbers.filter((number) => number >= 10);
console.log(filtered);
