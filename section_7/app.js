var numbers = [10, 20, 30, 40];
var sum = 0;

// for loop to sum the numbers
for (var i = 0; i < numbers.length; i ++) {
  sum += numbers[i];
}

// Using reduce, passing an initial value as the second argument
var summed = numbers.reduce(function(sum, number) {
  return sum + number
}, 0);

console.log(summed)


var primaryColours = [
  {colour: 'red'},
  {colour: 'yellow'},
  {colour: 'blue'}
]
// We want to pull out all the values
// We could obviously use map but demonstrating another use case for reduce


// Because the end value will be an array, we put in an empty array as the
// initial value
// Previous is the previous value that went through the loop
var a = primaryColours.reduce(function(previous, primaryColour) {
  previous.push(primaryColour.colour);
  return previous;
}, [])

console.log(a)


// Real life example for the parentheses challenge 
// These are array helpers, first thing we have to do is convert the string 
// into an array
// We are going to make the initial value a counter which will be an integer 
// Every time we see an open parenthese, increase the counter by one 
// Every time there is a closing parenthese decrease the counter by one
// If the end number is not 0, the parentheses are unbalanced
function balancedParens(string) {
  // Use the bang symbol to make the output a true or false
  // True meaning they are balanced, false meaning not balanced
  return !string.split('').reduce(function(previous, char) {
    // If parenthese are in the wrong order but still balanced
    if (previous < 0) { return previous;}
    // Add a number if there is a (
    if (char === "(") {return ++previous; }
    // Subtract a number if there is a )
    if (char === ")") { return --previous;}
    return previous
  }, 0)
}

console.log(balancedParens("((()))"))