"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    let output = `You are ${firstName} and ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millineal = true;
      const firstName = "Bhol"; //js always looks for the variable in the current scope
      const str = `Oh, you're a millineal, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "New Output";
    }
    // console.log(str); //error as block scope
    console.log(millineal); // works as function scope because of var
    // console.log(add(2, 3)); //error but if we remove strict mode, it will work
  }
  printAge();
  return age;
}

const firstName = "Padmaja"; //global
calcAge(1991);
// console.log(age); //referenceError
// printAge(); //refrenceError
