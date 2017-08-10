function addNumbers(numbers) {
  return numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0)
}


// Instead of passing an array, you can pass multiple items 
// Basically when unsure of how many arguments there will be
function addNumbers(...numbers) {
  return numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0)
}

const defaultColours = ['red', 'green'];
const userFavouriteColours = ['orange', 'yellow'];

// Show a list of colours to the user.
// Join the arrays, can use concat 

console.log(defaultColours.concat(userFavouriteColours))

// Or we can use spread operators 
// Easier to see what's going on with this line of code
const a = [...defaultColours, ...userFavouriteColours ];
console.log(a)

// What if we have anothe array?
const fallColours = ['fire red', 'fall orange'];
// We can even add one single element
const b = ['blue', ...defaultColours, ...userFavouriteColours, ...fallColours]
console.log(b)


// Shopping list example

function validateShoppingList(...items) {
  // If index of milk is less than zero, aka if there is no milk
  if (items.indexOf('milk') < 0) {
    // Add milk to the list
    return ['milk', ...items]
  }

  return items;
}

console.log(validateShoppingList('oranges', 'bread'))