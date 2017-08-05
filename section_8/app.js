// Old syntax
var name = 'Jack';
var title = 'Software Engineer';
var hourlyWage = 40;

// ES6
// Ask yourself will this variable ever change?
// For example someones name is never going to change, so we use const
// An employees title might change. We use let.
const firstName = 'Jack';
let jobTitle = 'Software Engineer'
let hourlyRate = 40
console.log(jobTitle)

jobTitle = "Senior Software Engineer"
hourlyRate = 45
console.log(jobTitle)