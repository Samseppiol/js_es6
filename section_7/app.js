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