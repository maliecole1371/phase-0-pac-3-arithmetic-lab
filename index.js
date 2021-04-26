const { parseFloat } = require("core-js/core/number");


function add(a, b) {
    return add();
  }
  
  function subtract(a, b) {
    return subtract();
  }
  
  function multiple(a, b) {
    return multiple();
  }
  
  function divide(a, b) {
    return divide();
  }

  function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}

function increment(n) {
    return n += 1;
}

function decrement(n) {
    return n -= 1;
}