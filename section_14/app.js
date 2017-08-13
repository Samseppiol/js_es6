// ES5 example
var expense = {
  type: 'Business',
  amount: '45 AUD'
}

// var type = expense.type 
// var amount = expense.amount

// ES6 refactor
// Declare a new variable called type and reference the expense.type property
// Name of the variable name has to be the same as the property name
// E.g has to be type or amount not myVar etc
const { type, amount } = expense 

console.log(type)