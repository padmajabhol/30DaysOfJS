"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //   console.log(firstName);
//   function printAge() {
//     let output = `You are ${firstName} and ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millineal = true;
//       const firstName = "Bhol"; //js always looks for the variable in the current scope
//       const str = `Oh, you're a millineal, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = "New Output";
//     }
//     // console.log(str); //error as block scope
//     console.log(millineal); // works as function scope because of var
//     // console.log(add(2, 3)); //error but if we remove strict mode, it will work
//   }
//   printAge();
//   return age;
// }

// const firstName = "Padmaja"; //global
// calcAge(1991);
// // console.log(age); //referenceError
// // printAge(); //refrenceError

//Hoisting

// console.log(me);
// console.log(dev);
// console.log(year);

// var me = "padmaja";
// let job = "dev";
// const year = 2001;

//functions
// console.log(addDecl(2, 3)); //accessible since funct declarations are hoisted
// console.log(addExpr(2, 3)); // not accessible since its an expression declared with a const work that will result in value uninitialised.Its in a temporal dead zone.
// console.log(addArrow(2, 3)); //same with arrow

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); //true
// console.log(y === window.y); //false
// console.log(z === window.z); //false

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991); //undefined

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991); //window object

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year); //46
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; //method borrowing, borrow method from one object to the other

// matilda.calcAge(); //this keyword will point to matilda here.

// const f = jonas.calcAge;
// f(); //undefined since f  is just a regular function call, not attached to any object.

// var firstName = "mATILDA";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year); //46

    // sol 1
    // const self = this; //
    // const isMil = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //sol 2 arrow functions uses the this keyword from its parent scope. in this case its jonas. it inherits the this keyword from its parents and doesnt give an error.
    const isMil = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMil();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); // hey undefined // hey matilda (since window object)
jonas.calcAge();
