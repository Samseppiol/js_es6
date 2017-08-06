// es5 functions 

const add = function(a, b) {
  return a + b 
}

console.log(add(2, 4))

// ES6 version using arrow function 
const subtract = (a, b) => {
  return a - b
}

console.log(subtract(4, 2))

// When using a single javascript expression you can remove the curly braces and the return keyword

const multiply = (a, b) => a * b;

console.log(multiply(2, 6))