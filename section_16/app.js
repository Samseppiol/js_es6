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


function* shopping() {
  // Stuff on the sidewalk

  // Walking down the sidewalk

  // go in to the store with cash
  const stuffFromStore = yield 'cash';

  // walking back home now
  return stuffFromStore
}


// Stuff happening in the store
const gen = shopping();
console.log(gen.next()) // leaving our house
// walked into the store
// walking up and down the aisles
// purchase our stuff
console.log(gen.next('groceries')) // leaving the store with groceries
