// ES5 example

function getMessage() {
  const year = new Date().getFullYear();
  // String concatenation
  return "The year is " + year;
}

console.log(getMessage())

// es6 example
// Use backticks and dollar sign and curly braces as a form of string interpolation
function message() {
 const year = new Date().getFullYear();
 return `The year is ${year}` 
}

console.log(message())