"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

//FUNCTIONS
function logger() {
  console.log("my name is padu");
}

//calling/running/invoking function
logger();
logger();
logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJ = fruitProcessor(5, 0); //capture the value in a variable
// console.log(appleJ);
// console.log(fruitProcessor(5, 0));

// fruitProcessor(2, 4);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

//DECLARATIONS VS EXPRESSIONS

//function dec
// function calcAge1(birthYear) {
//   //   const age = 2037 - birthYear;
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

//func expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1991, "Padmaja"));

//CALLING FUNCTIONS INSIDE FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

//RECAP

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName) {
//   // const age = 2037 - birthYear;
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }

//   return retirement;

//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1990, "padmaja"));

//challenge
//test1
const calcAverage = (x, y, z) => (x + y + z) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas}) `);
  } else if (avgKoalas >= avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("no teams wins");
  }
};

// checkWinner(scoreDolphins, scoreKoalas);

//test2
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
