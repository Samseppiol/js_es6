

let products = [
  { name: 'Orange', type: 'Fruit', quantity: 0, price: 1 },
  { name: 'banana', type: 'Fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'Vegetable', quantity: 30, price: 9 },
  { name: 'mushroom', type: 'Vegetable', quantity: 3, price: 15 },
];


var filteredProducts = [];

for (var i = 0; i < products.length; i ++) {
  if (products[i].type === 'Fruit' ) {
    filteredProducts.push(products[i]); 
  }
}

console.log(filteredProducts)

// Using a filter, far less code, once again don't forget return statement
var filter = products.filter(function(product) {
  return product.type === 'Fruit';
})
console.log(filter)

// Using filter over several different values of an object.
var filter_two = products.filter(function(product) {
  return product.type === 'Vegetable'
   && product.quantity > 0 
   && product.price < 10
})

console.log(filter_two)