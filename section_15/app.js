
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vrooooooooom'
}

const car = new Car({ title: 'Focus'});
console.log(car)

console.log(car.drive)

// Creating a new function that inherits other functions properties
// ES5 example
function Toyota(options) {
  Car.call(this, options)
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'})
console.log(toyota)
console.log("------")
console.log(toyota.drive)
console.log(toyota.honk)

