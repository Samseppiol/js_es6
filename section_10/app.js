// es5 functions 

const add = function(a, b) {
  return a + b 
}

console.log(add(2, 4))

// ES6 version using arrow function 
const subtract = (a, b) => {
  return a - b
}

console.log(subtract(4, 2))

// When using a single javascript expression you can remove the curly braces and the return keyword

const multiply = (a, b) => a * b;

console.log(multiply(2, 6))

// If we have a single argument we can get rid of the parentheses around it
const double = number =>  2 * number;

console.log(double(4))


const numbers = [1,2,3];

numbers.map(function(number) {
  return number * 2
})
numbers.map(number => 2 * number)


const team = {
  members: [
    'Ghost',
    'Tommy'
  ],
  teamName: 'Power',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team: ${this.teamName}`;
    })
  }
}
console.log(team)

const squad = {
  members: [
    'Kanan',
    'Dre'
  ],
  squadName: 'Power',
  squadSummary: function() {
    return this.members.map((member) => {
      return `${member} is on squad: ${this.squadName}`;
    })
  }
}


