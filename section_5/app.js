var users = [
  {name: 'Jack'},
  {name: 'John'},
  {name: 'Jaime'},
];

var user; 
// Looping over and looking for any of the users with the name Jack
// Even when that user is found, the loop continues until it has gone over all records
// of the loop
for (var i = 0; i < users.length; i ++) {
  if (users[i].name === 'Jack') {
    user = users[i];
  }
}

console.log(user)

// Using find, far less code.
// One drawback though, if there are multiple users with the name John,
// it will only pick the first one it finds.
var user_two = users.find(function(user) {
  return user.name === 'John'
})

console.log(user_two)