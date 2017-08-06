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