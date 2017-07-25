let colours = ['red', 'black', 'green', 'red', 'black', 'green'];

// For each array helper, another way instead of using buggy for loop.
// Far less code than the standard for loop
colours.forEach(function(colour) {
  console.log(colour)
})

// Loop over the array and sum over the numbers
let sum = 0
let numbers = [1, 5, 7, 8, 12, 16]

function adder(number) {
  sum += number
}

numbers.forEach(adder)



