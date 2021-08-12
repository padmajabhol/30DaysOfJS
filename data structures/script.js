"use strict";

// //array destructuring
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Blah blah",
//   categories: ["Italian", "Pizzeria", "vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z); //2,3,4
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); // italian vegetarian

// //switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // console.log(restaurant.order(2, 0)); //garlic, pizza

// //receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); //garlic, pizza

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r); // 8,9 undefined

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8,9,1

// //destructuring objects

const restaurant = {
  name: "Classico Italiano",
  location: "Blah blah",
  categories: ["Italian", "Pizzeria", "vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      //fri is an object inside an obj which is inside restaurant obj
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is ur pasta ${ing1} ${ing2} ${ing3}`);
  },

  orderpizza: function (mainIngrediant, ...otherIngrediant) {
    console.log(mainIngrediant);
    console.log(otherIngrediant);
  },
};

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "bbsr odisha",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "via del sole,21",
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName, // when want to call the variables a new name
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags); //exact same name as name, openingHours, categories

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters); //[] (5) ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"]
// // = [] in case it didnt exist, other wise it will give undefined

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); // wrap in parenthesis to mutate variables
// console.log(a, b); //23,7

// //nested objects
// // const { fri } = openingHours;
// // console.log(fri); {open: 11, close: 23}

// const {
//   fri: { open: o, close: c }, //name open and close as o and c
// } = openingHours;
// console.log(o, c); //11,23

// //spead operator...
// //use to unpack an array elements at one

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, ...arr];
// console.log(badNewArr); // 1,2,7,8,9

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu); //["Pizza", "Pasta", "Risotto", "Gnocci"]

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu]; //["Pizza", "Pasta", "Risotto", "Gnocci"]

// //join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu); //"Pizza", "Pasta", "Risotto", "Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"

// //iterables are arrays, strings, maps, sets. NOT objects

// const str = "Padmaja";
// const letters = [...str, "", "S."];
// console.log(letters); //["P", "a", "d", "m", "a", "j", "a", "", "S."]
// console.log(...str); //P a d m a j a
// // console.log(`${...str} sch`) //unexpected token, multiple values separated by a coma are usually only expected when we pass arguements into a function or build a new array

// // const ingrediants = [
// //   prompt("Let's make pasta "),
// //   prompt("Ingrediant 2?"),
// //   prompt("ingrediant 3"),
// // ];

// // console.log(ingrediants);

// // restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
// // restaurant.orderPasta(...ingrediants); //same result as above very fun

// const newRest = { foundingIn: 1998, ...restaurant, founder: "monke" };
// console.log(newRest); //{foundingIn: 1998, name: "Classico Italiano", location: "Blah blah", categories: Array(4), starterMenu: Array(5), …}

// const restCopy = { ...restaurant };
// restCopy.name = "Rest nu";
// console.log(restCopy.name); //Rest nu
// console.log(restaurant.name); //Classico Italiano

//REST PAttern //pack elements into an array
//destructuring
const arr = [1, 2, ...[3, 4]]; //spread because on right side

const [a, b, ...others] = [1, 2, 3, 4, 5]; //rest pattern because on the left side
console.log(a, b, others); //1 2 (3) [3, 4, 5]

//rest patterns basically collects the elements that are unsused in an array

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; ////otherfood will collect the rest of the elements ao always placed at the end
console.log(pizza, risotto, otherfood); //Pizza Risotto (5) ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"]

//rest pattern in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //thu: {…}, fri: {…}}

//functions rest syntax
const add = function (...numbers) {
  // console.log(numbers); //[2, 3] ,204 (4) [5, 3, 7, 2], 204 (7) [8, 2, 5, 3, 2, 1, 4]
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderpizza("mushrooms", "onion", "olives", "spinach"); //first arguement was stored into main ingrediant, rest was stored into other ingrediants
restaurant.orderpizza("mushroom"); //mushroom and an empty array
