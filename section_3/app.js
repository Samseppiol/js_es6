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

// More complicated example of map 

let cars = [
  { model: 'Mercedes', price: 'EXPENSIVE'},
  { model: 'Holden', price: 'Cheap'},
];

// Mapping over cars with anonymous function to be called one time for each car.
let prices = cars.map(function(car) {
  // Plucking out the price value from car
  return car.price;
});
console.log(prices)


// A pluck function that should accept an array and a string representing a property name
// and return an array containing that property from each object

function pluck(array, property) {
  return array.map(function(item) {
    return item[property]
  })
}