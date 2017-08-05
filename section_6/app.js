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

comps = computers.every(function(computer) {
  return computer.ram > 8;
})

console.log(comps)

comps_two = computers.some(function(computer) {
  return computer.ram > 8
})

console.log(comps_two)