"use strict";

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Person.proptype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

const Student = function (firstName, birthName, course) {
  Person.call(this, firstName, birthName);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.dir(Student.prototype.constructor);

console.log(mike);

const jonas = new Person("Jonas", 1991);

console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log("Hey there");
};

Person.hey();

//prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.prototype.species = "Home Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there");
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthName, course) {
    // Always needs to happen first!
    super(fullName, birthName);
    this.course = course;
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
// jessica.age();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

const walter = new PersonCl("Walter White", 1965);

//setters and getters

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2020;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/hr`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/hr`);
// };

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init("Jay", 2010, "Cse");
// jay.introduce();

// Public field
// Private field
// Public method
// Private method

class Account {
  // Public fields (instance)
  locale = navigator.language;
  // _movements = [];

  // Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Methods
  // Public interface

  getMovements() {
    return this.#movements;
  }

  deposits(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposits(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposits(val);
      console.log(`Loan approved`);
    }
  }

  static helper(){
    console.log('Helper');
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

//data privacy

acc1.deposits(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin);

// console.log(acc1.#movements);

Account.helper();

//chaining
acc1.deposits(300).deposits(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements);
