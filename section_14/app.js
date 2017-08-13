// ES5 example
var expense = {
  type: 'Business',
  amount: '45 AUD'
}

// var type = expense.type 
// var amount = expense.amount

// ES6 refactor
// Declare a new variable called type and reference the expense.type property
// Name of the variable name has to be the same as the property name
// E.g has to be type or amount not myVar etc
const { type, amount } = expense 

console.log(type)


// Another example 

var savedFile = {
  extension: '.jpg',
  name: 'repost',
  size: 14040
}

function fileSummary(file) {
  return `The file ${file.name}${file.extension} is of size ${file.size}`
}

console.log(fileSummary(savedFile))

// Or using destructuring
function fileSummaryTwo({ name, extension, size}) {
  return `The file ${name}${extension} is of size ${size}`
}

console.log(fileSummaryTwo(savedFile))

// Destructuring arrays 

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, name2, name3 ] = companies;
// Instead of doing this
const firstCompany = companies[0];

console.log(name, name2, name3)
console.log(firstCompany)


// Another example with arrays or objects

const companiesTwo = [
  { name: 'Google', place: 'Mountain View'},
  { name: 'Facebook', place: 'Menlo Park'},
  { name: 'Uber', place: 'San Fransisco'}
]

const [{ place }] = companiesTwo 
console.log(place)

const Google = {
  offices: ['Mountain View', 'New York', 'London']
}

// How do we get the first element within the locations property
// Find the offices property, and pull out the first element
const { offices: [ office ] } = Google
console.log(office)

// When to use destructuring
function signup(username, password, email, dateOfBirth, city){
  // create a new user
}

// Have to remember the order and data kind of all the arguments
signup('Jack', 'password', 'test@test.com', '03/01/1995', 'Melbourne')


// Because of destructuring the order of arguments does not matter
function signupTwo({ password, email, dateOfBirth, city, username }) {

}

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'test@email.com',
  dateOfBirth: '21/12/2016',
  city: 'Melbourne'
}

console.log(signupTwo(user))