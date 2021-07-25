// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "sche", 2037 - 1991, "teacher", friends];
// console.log(jonas);

//Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1997, 2002, 2010, 2018];
// calcAge(years);

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//METHODS
// const friends = ["Micheal", "Steven", "Peter"];

// //add element
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// //remove element
// friends.pop(); //last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //first
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// //es6
// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("you have a friend called steven");
// }

// const calcTip = function(bill){
//     return bill >= 50 && <= 300 ? bill * 0.15 : bill * 0.2;
// }

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
