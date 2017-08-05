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