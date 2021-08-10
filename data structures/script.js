"use strict";

//array destructuring
const restaurant = {
  name: "Classico Italiano",
  location: "Blah blah",
  categories: ["Italian", "Pizzeria", "vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); //2,3,4
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // italian vegetarian

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0)); //garlic, pizza
