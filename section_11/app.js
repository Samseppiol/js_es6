// ES5 example

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'Javascript lol', price: 15}
]

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue())
console.log(bookShop.priceForTitle('Harry Potter'))

// ES6 
function createBookShop(inventory) {
  return {
    // When the key and the value are the same, you only have to declare it once.
    inventory,
    // You also don't have to explicitly write function
    // You can just write ()
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  }
}