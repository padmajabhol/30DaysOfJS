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

// const flight = "LH234";
// const jonas = {
//   name: "Jonas",
//   passport: 123456789,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 123456789) {
//     alert("Checked In");
//   } else {
//     alert("Wrong Password");
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//passing by value, passing by reference
//js doesnot have passing by reference , only passing by value

//First Class function & higher-order functions

//-js trats functions as first-class citizens
//-functions are simply values
//-functions are just another "type" of object

//-higher order function that receives another function as an arguement, that returns a new function or both.
//this is only possible because of first-class functions

//-first-class means all functions are values, its just an concept, not a practice.
//-HO functions are in practice but because of first class functions

//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// //higher-order fn
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`); //name of the function
// };

// transformer("JS is the best", upperFirstWord);
// transformer("JS is the best", oneWord);

// //JS uses callbacks all the time
// const high5 = function () {
//   console.log("🙋🏻‍♀️");
// };

// document.body.addEventListener("click", high5); //high5 is the callback function, addeventlistener is the higher order function

// ["Jonas", "Martha", "Adam"].forEach(high5); //for each of them the callback function will be called (3)🙋🏻‍♀️

//FUNCTIONS RETURNING FUNCTIONS

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hey");
greeterHey("Jonas"); //Hey Jonas
greeterHey("Steven"); //Hey Steven

greet("Hello")("Padmaja"); //Hello Padmaja
