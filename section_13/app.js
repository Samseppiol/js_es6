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

