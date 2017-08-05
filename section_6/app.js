var computers = [
  {name: 'Apple', ram: 16},
  {name: 'Asus', ram: 8},
  {name: 'Acer', ram: 4},
]


var allComputersCanRunProgram = true;

var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i]

  if (computer.ram < 4) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram)
"---"
console.log(onlySomeComputersCanRunProgram)

var comps = computers.every(function(computer) {
  return computer.ram > 8;
})

console.log(comps)

var comps_two = computers.some(function(computer) {
  return computer.ram > 8
})

console.log(comps_two)



var names = [
  "Jack",
  "John",
  "James",
  "Joe",
  "Jen"
]

// Are all the names greater than 4 in length?
// This will return false
var a = names.every(function(name) {
  return name.length > 4;
})
console.log(a)

// Are there at least some names with length greater than 4?
// Returns true
names.some(function(name) {
  return name.length > 4;
})
