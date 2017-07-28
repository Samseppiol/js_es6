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


function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Holden'),
  new Car('Ford'),
  new Car('Mercedes')
]

car = cars.find(function(car) {
  return car.model === 'Mercedes'
})  

console.log(car)

var posts = [
  {id: 1, title: 'New Post'},
  {id: 2, title: 'Old Posy'},
]

// Even though our posts array has a postid of 1 the content doesnt match
var comment = { postId: 1, content: 'Great Post'};
// But because of the postID being one, the find helper will still pull it out
// Even though the content does not match

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId
  })
}

console.log(postForComment(posts, comment))