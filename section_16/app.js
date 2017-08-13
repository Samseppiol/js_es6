const colors = ['red', 'green', 'blue']

// For of loop
for (let color of colors) {
  console.log(color)
}

const values  = [1,2,3,4,5];
let total = 0;
for (let value of values) {
  total += value;
}

// Example of a generator
// Use an asterisk after function or before numbers
function* numbers() {
  yield;
}