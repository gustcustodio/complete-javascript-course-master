// ! call method ! //
// syntax //
// func.call(thisArg, arg1, arg2, ...); //

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

/////////////////////////////////////////////////////////////////////////////

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
