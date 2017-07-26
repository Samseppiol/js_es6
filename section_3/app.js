let numbers = [1,2,3];

let doubledNumbers = [];

// for looping over an array and doubling all the numbers then pushing in to a new array
for (var i = 0; i < numbers.length; i ++) {
  doubledNumbers.push(numbers[i] * 2);
}

// Using map to achieve the same thing
// Always remember to use return statement otherwise it will be undefined
let doubled = numbers.map(function(number) {
  return number* 2;
});
console.log(doubled)
console.log(doubledNumbers)