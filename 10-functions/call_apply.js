// ! call method ! //
// ? syntax ? //
// ? func.call(thisArg, arg1, arg2, ...); ? //
/*
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError(
      "Cannot create product " + this.name + " with a negative price"
    );
  }

  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

Toy.prototype = Object.create(Product.prototype);

let cheese = new Food("feta", 5);
let fun = new Toy("robot", 40);

console.log(cheese);
console.log(fun);
*/
/////////////////////////////////////////////////////////////////////////////
/*
const person = { name: "Alice" };

function greet(greeting) {
  return `${greeting}, my name is ${this.name}`;
}

console.log(greet.call(person, "Hello"));

const person1 = { name: "Ana" };
const person2 = { name: "Bob" };

function sayHi() {
  return `Hi, I'm ${this.name}.`;
}

console.log(sayHi.call(person1));
console.log(sayHi.call(person2));

const car = {
  brand: "Tesla",
  getBrand() {
    return this.brand;
  },
};

const bike = {
  brand: "Yamaha",
};

console.log(car.getBrand.call(bike));

function introduce(name, age) {
  return `Hi, I'm ${this.tile} ${name} and I'm ${age} years old.`;
}

const person3 = { title: "Dr." };

console.log(introduce.call(person3, "John", 30));
*/
/////////////////////////////////////////////////////////////////////////////
/*
const person = {
  fullName(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1, "Boston", "EUA"));
console.log(person.fullName.call(person2, "Toronto", "Canadá"));
*/
/////////////////////////////////////////////////////////////////////////////
// ! apply method ! //
// ? syntax ? //
// ? functionName.apply(thisArg, [argsArray]); ? //

function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

greet.call(null, "Hello", "Alice"); // passa os argumentos individualmente
greet.apply(null, ["Hello", "Alice"]); // passa os argumentos como um array

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum.apply(null, numbers));

function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}

function Car(type, wheels, brand) {
  Vehicle.apply(this, [type, wheels]);
  this.brand = brand;
}

const myCar = new Car("Car", 4, "Tesla");
console.log(myCar);
