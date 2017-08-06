function makeAjaxRequest(url, method) {
  // If  no method is passed through, make the method a get request
  if (!method) {
    method = 'GET'
  }
}

makeAjaxRequest('google.com')
makeAjaxRequest('google.com', 'POST')

function makeAjaxRequest(url, method='GET') {
  return method
}

console.log(makeAjaxRequest('google.com'))
console.log(makeAjaxRequest('google.com', 'POST'))

// Use case for default function arguments

function User(id) {
  this.id = id 
}

function generateId() {
  return Math.random() * 99999;
}

// Specifiying default function argument to create a new user on the fly
function createAdminUser(user = new User(generateId())) {
  user.admin = true
  return user
}
