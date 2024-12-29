"use strict";
/*
function init() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

const myFunc = makeFunc();
// myFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
*/
/////////////////////////////////////////////////////////////////////////////
/*
function pai() {
  let x = 1;
  function filho() {
    console.log(x);
    x++;
  }
  return filho;
}

const contador = pai();
contador();
contador();
contador();

function ModuloMatematico() {
  let x = 0;

  function somaUm() {
    x++;
    console.log(x);
  }

  function subtraiUm() {
    x--;
    console.log(x);
  }

  return {
    somaUm: somaUm,
    subtraiUm: subtraiUm,
  };
}

const teste = ModuloMatematico();
teste.somaUm();
teste.somaUm();
teste.somaUm();
teste.subtraiUm();

console.dir(teste);
*/
/////////////////////////////////////////////////////////////////////////////
function createCounter() {
  let count = 0;

  function increment() {
    return ++count;
  }

  return increment;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter2());
console.log(counter1());