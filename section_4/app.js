

let products = [
  { name: 'Orange', type: 'Fruit' },
  { name: 'banana', type: 'Fruit' },
  { name: 'celery', type: 'Vegetable' },
  { name: 'mushroom', type: 'Vegetable' },
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