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

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Blah blah",
//   categories: ["Italian", "Pizzeria", "vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       //fri is an object inside an obj which is inside restaurant obj
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is ur pasta ${ing1} ${ing2} ${ing3}`);
//   },

//   orderpizza: function (mainIngrediant, ...otherIngrediant) {
//     console.log(mainIngrediant);
//     console.log(otherIngrediant);
//   },
// };

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

// //REST PAttern //pack elements into an array
// //destructuring
// const arr = [1, 2, ...[3, 4]]; //spread because on right side

// const [a, b, ...others] = [1, 2, 3, 4, 5]; //rest pattern because on the left side
// console.log(a, b, others); //1 2 (3) [3, 4, 5]

// //rest patterns basically collects the elements that are unsused in an array

// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; ////otherfood will collect the rest of the elements ao always placed at the end
// console.log(pizza, risotto, otherfood); //Pizza Risotto (5) ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"]

// //rest pattern in objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); //thu: {…}, fri: {…}}

// //functions rest syntax
// const add = function (...numbers) {
//   // console.log(numbers); //[2, 3] ,204 (4) [5, 3, 7, 2], 204 (7) [8, 2, 5, 3, 2, 1, 4]
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderpizza("mushrooms", "onion", "olives", "spinach"); //first arguement was stored into main ingrediant, rest was stored into other ingrediants
// restaurant.orderpizza("mushroom"); //mushroom and an empty array

// console.log("---- OR ----");
// //short circuiting (&& and ||)
// console.log(3 || "jonas"); //3
// //use any data type , return any data type, do something called short circuiting
// //short circuiting means, if the first value is a truthy value then it will immediatedly return the first value , js will not even take a look at the second elemnt
// console.log("" || "jonas"); //jonas
// console.log(true || 0); //true
// console.log(undefined || null); //null , undefined is falsy value
// console.log(undefined || 0 || "" || "Hello" || 23 || null); //Hello

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); //10

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---- AND ----"); //the and sees if the first value is falsy and immediatedly returns that value without evaluating the second value
// console.log(0 && "jonas"); //0
// console.log(7 && "Jonas"); //'jonas' //when the first value is truthy, the second value is evaluated and returned if its true too
// console.log("Hello" && 23 && null && "jonas"); //null as its falsy and evaluation stops

// //practical example
// if (restaurant.orderpizza) {
//   restaurant.orderpizza("mushrooms", "spinach");
// }

// restaurant.orderpizza && restaurant.orderpizza("mushrooms", "spinach"); //if restaurant.orderpizza exists, its a truthy value so the opeartor moves to the next and prints it as its truthy value too. same as the above method

// //nulish coalescing operator(??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); //10

// //nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); //0

// //coding challenge 1

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, "Thiago", "Coutinho", "Peristic"];
// console.log(players1Final);

// //5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 }, //draw is the new name for x
// } = game; //or game.odd
// console.log(team1, draw, team2);

// //6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");

// //7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// team1 < team2 && console.log("team 2");
// team1 > team2 && console.log("team 1");

//looping arrays: the for-of loop

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Blah blah",
//   categories: ["Italian", "Pizzeria", "vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       //fri is an object inside an obj which is inside restaurant obj
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is ur pasta ${ing1} ${ing2} ${ing3}`);
//   },

//   orderpizza: function (mainIngrediant, ...otherIngrediant) {
//     console.log(mainIngrediant);
//     console.log(otherIngrediant);
//   },
// };

// //FOR OF MENU
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item); //print each item separately

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// console.log([...menu.entries()]);

//Enhanced object literals

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[2]]: {
    //fri is an object inside an obj which is inside restaurant obj
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Blah blah",
  categories: ["Italian", "Pizzeria", "vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushhetta", "Gralic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enchanced object literals
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, //green coloured (order) are methods

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is ur pasta ${ing1} ${ing2} ${ing3}`);
  },

  orderpizza(mainIngrediant, ...otherIngrediant) {
    console.log(mainIngrediant);
    console.log(otherIngrediant);
  },
};

//OPTIONAL CHAINING

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with optional chain
console.log(restaurant.openingHours?.mon?.open);
//if the property before ? doesnot exist it will give undefined, if it does then it will move to .open

//example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day); //will give each day separately
  const open = restaurant.openingHours[day]?.open || "closed"; //use brackett notaion or else it wont work
  console.log(`On ${day} , we open at ${open}`);
}

//methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); //order is a method that already exists, order risotto doesnt
console.log(restaurant.orderRisotto?.address(0, 1) ?? "Method does not exist");

// console.log(restaurant.openingHours.mon.open); //doing this without the optional chain will give an error but with optional chain it will give undefined

//in arrays
const users = [{ name: "jonas", email: "jonas.io" }];
console.log(users[0]?.name ?? "User array empty");
