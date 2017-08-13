
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

// ES6 classes

class Vehicle {
  // An initialize method/setup
  // Gets run whenever the keyword new is used with the class
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'vroom'
  }
}

const vehicle = new Vehicle({ title: 'Toyota'});
console.log(vehicle)
console.log(vehicle.drive)
// Class inheritance.
// However when we inherit from the Car class we want all of 
// the cars methods, including the constructor which is looking
// for a name
class Subaru extends Car{
  // Don't destructure when using class inheritance
  // Simply pull out the whole object with options
  constructor(options) {
    super(options) //car constructor
    this.color = options.color
  }

  honk() {
    return 'beep'
  }
}

const subaru = new Subaru({color: 'red'});
console.log(subaru)
console.log(subaru.honk)