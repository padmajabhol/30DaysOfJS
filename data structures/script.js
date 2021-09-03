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
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
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

// //OPTIONAL CHAINING

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //with optional chain
// console.log(restaurant.openingHours?.mon?.open);
// //if the property before ? doesnot exist it will give undefined, if it does then it will move to .open

// //example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   console.log(day); //will give each day separately
//   const open = restaurant.openingHours[day]?.open || "closed"; //use brackett notaion or else it wont work
//   console.log(`On ${day} , we open at ${open}`);
// }

// //methods

// console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); //order is a method that already exists, order risotto doesnt
// console.log(restaurant.orderRisotto?.address(0, 1) ?? "Method does not exist");

// // console.log(restaurant.openingHours.mon.open); //doing this without the optional chain will give an error but with optional chain it will give undefined

// //in arrays
// const users = [{ name: "jonas", email: "jonas.io" }];
// console.log(users[0]?.name ?? "User array empty");

//looping objects

// //propert names
// const properties = Object.keys(openingHours);
// console.log(properties); //(3) ["thu", "wed", "day-6"]
// //console.log(`we are open on ${properties.length} days`);

// let openStr = `we are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// // for (const day of properties) {
// //   console.log(day);
// // }

// //property values
// const values = Object.values(openingHours);
// console.log(values); //get all detail value opening hours, closing hours, etc

//entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

//coding challenge 2
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [i, player] of game.scored.entries())
//   console.log(`goal ${i + 1}: ${player}`);

// //2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length; //(average = average/object...)
// console.log(average);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// //sets

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

// console.log(orderSet);
// console.log(new Set("Jonas"));
// console.log(orderSet.size); //3
// console.log(orderSet.has("Pizza")); //to check if pizza is there, true
// console.log(orderSet.has("Bread")); //false
// orderSet.add("Garlic Bread");
// orderSet.add("Garlic Bread");
// orderSet.delete("Risotto");
// // orderSet.clear(); //to delete all the elements
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// ); //3
// console.log(new Set("PadmajaBhol").size); //9

// //Maps

// const rest = new Map();
// rest.set("name", "Classico Italiano"); //name is a key here
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal")); //Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}
// rest
//   .set("categories", ["Italian", "Pizzeria", "vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "wr are open :D")
//   .set(false, "we are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true)); //these are the keys

// const time = 21;
// rest.get(time > rest.get("open") && time < rest.get("close"));

// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest); //lisbon will be gone
// console.log(rest.size); //7
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest); //Map(0) {}
// console.log(rest.size); //0
// console.log(rest.get(arr)); //test

// const question = new Map([
//   ["question", "what is the best programming lang in the world"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "Javascript"],
//   ["correct", 3],
//   [true, "Correct 👍"],
//   [false, "try again 🤔"],
// ]);
// console.log(question);

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get("question"));
// for (const [key, values] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${values}`);
// }

// // const answer = Number(prompt("Your answer"));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));
// //map back to an array
// console.log([...question]);
// console.log(...question.entries());
// console.log(...question.entries());
// console.log(...question.values());

//DATA STRUCTURES OVERVIEW

//simple list --> arrays or sets (when you dont need to describe the values)
//key/valye pairs --> objects or maps

//arrays vs sets
// tasks = ["Code", "Eat", "Code"];
// task = new Set(["Code", "Eat", "Code"]);

//arrays --> when u need ordered list of values (might contain duplicates)
//use when u need to manipulate data

//sets --> use when u need to work with unique values
//use when high performance is really important (operations like searing for an element or deleting an element from a set is x10 times faster than in arrays)
//use to remove duplicates from arrays

//object vs keys

// task1 = {
//   task: "Code",
//   date: "today",
//   repeat: true,
// };

// task2 = new Map([
//   ["task", "Code"],
//   ["date", "today"],
//   [false, "Start coding"],
// ]);

//objects --> more traditional key/value store
// easier to write and access values with . and  []
//use when u need to include functions (methods)
//use when working with JSON (can convert to map)

//maps --> better performance
//keys can have any data type
//easy to iterate
// easy to compute size
//use when you simply need to map key to values
//use when you need keys that are not strings

//coding challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// //1.
// const events = [...new Set(gameEvents.values())]; //use set to create unique values
// console.log(events);

// //2.
// gameEvents.delete(64);

// //3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop(); //pop() will take the last element out of an array and give it to us
// console.log(time); //convert keys to an array

// //4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${events}`);
// }

// //WORKING WITH STRINGS PART-1

// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]); //A
// console.log(plane[1]); //3
// console.log(plane[2]); //2

// console.log("B737"[0]); //B
// console.log(airline.length);
// console.log("B737".length); //4

// console.log(airline.indexOf("r")); //6
// console.log(airline.lastIndexOf("r")); //10
// console.log(airline.indexOf("Portugal")); //8 //case sensitive, if u search with lower case , u ll get -1
// console.log(airline.slice(4)); // Air Portugal (A is in the 4th position)
// console.log(airline.slice(4, 7)); //Air (Portugal is not included)

// // console.log(airline.slice(0, airline.indexOf("")));
// // console.log(airline.slice(airline.lastIndexOf("")));

// console.log(airline.slice(-2)); //negative end parameter
// console.log(airline.slice(1, -2)); // AP AIR PORTUG // -2 cuts off the last parameter

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1); //to take the last character of the string
//   if (s === "B" || s === "E") console.log("You got the middle seat 🤣");
//   else console.log("You got lucky 😎");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("jonas"));
// console.log(typeof new String("Jonas")); //whenever u call a method with a string, javascript converts it to an object
// console.log(typeof new String("Jonas").slice(1)); //string

// //Part2

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log("padmaja".toUpperCase());

// //fix capitalization in name

// const passenger = "jOnAs"; //Jonas
// const passengerLower = passenger.toLowerCase();
// console.log(passenger.slice(1)); //Onas
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); //Jonas

// //comparing email
// const email = "hello@jonas.io";
// const loginEmail = " Hello@Jonas.Io \n";
// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail); //hello@jonas.io (with white space)
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); //hello@jonas.io

// //all in one step
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail); //hello@jonas.io
// console.log(email === normalizedEmail);

// //replacing
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const annoucement =
//   "All passengers come to barding  door 23. Boarding door 23!";

// console.log(annoucement.replace("door", "gate")); //All passengers come to barding  gate 23. Boarding door 23!

// //to replace globally
// console.log(annoucement.replace(/door/g, "gate"));

// //Booleans
// const plane1 = "Airbus A320neo";
// console.log(plane1.includes("A320")); //true
// console.log(plane1.includes("Boeing")); //false
// console.log(plane1.startsWith("Air")); //true

// if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
//   console.log("Part of the NEW ARirbus family");
// }

// //Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     console.log("welcome aboard");
//   }
// };
// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// //part-3

// //split and join
// console.log("a+very+nice+string".split("+")); //["a", "very", "nice", "string"]
// console.log("Padmaja Bhol".split(" ")); //["Padmaja", "Bhol"]

// const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("jesicca annsmith davis");
// capitalizeName("padmaja bhol");

// //Padding

// const message1 = "Go to gate 23";
// console.log(message1.padStart(25, "+").padEnd(30, "+")); //++++++++++++Go to gate 23+++++
// console.log("Jonas".padStart(25, "+")); //++++++++++++++++++++Jonas

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(4334235436547)); //*********6547

// //Repeat

// const message2 = "Bad weather... All Depatures Delayed...";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
// };

// planesInLine(5); //There are 5 planes in line ✈✈✈✈✈

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
 
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    // console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase(),
    )}`;
    console.log(`${output.padEnd(20)}${"😚".repeat(i + 1)}`);
  }
});

//2
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

console.log(flights.split("+"));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  // console.log(type);
  const output = `${type.startsWith("_Delayed") ? "🔴 " : ""} ${type.replaceAll(
    "_",
    " ",
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h",
  )})`.padStart(56);
  console.log(output);
}

//slice(0,3) //from position 0 to all the way to 3 where 3 is not included
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
