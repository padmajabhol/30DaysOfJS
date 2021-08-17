"use strict";

// //default parameters

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199; //es5 way of doing it
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123"); //{flightNum: "LH123", numPassengers: 1, price: 199}
// createBooking("123", 2, 800); // {"flightNum": "123","numPassengers": 2,"price": 800}
// createBooking("LH123", 2); //{"flightNum": "LH123","numPassengers": 2, "price": 398} //only works for parameters defined before  price
// createBooking("LH123", 5); //{flightNum: "LH123", numPassengers: 5, price: 995}
// createBooking("LH123", undefined, 100); //{flightNum: "LH123", numPassengers: 1, price: 100} //setting the parameter as undefined is same as not defining or just skipping it

//HOW PASSING ARGUEMENTS WORKS: VALUE VS. REFERENCES

const flight = "LH234";
const jonas = {
  name: "Jonas",
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 123456789) {
    alert("Checked In");
  } else {
    alert("Wrong Password");
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas);
checkIn(flight, jonas);

//passing by value, passing by reference
//js doesnot have passing by reference , only passing by value

//First Class function & higher-order functions
