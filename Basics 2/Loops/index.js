// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log(`${rep}`);
// // }

// const jonasArray = [
//   "Jonas",
//   "Sche",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);
//   types[i] = typeof jonasArray[i];
// }

// console.log(types);
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // for (let i = 0; i < jonasArray.length; i++) {
// //   if (typeof jonasArray[i] !== "string") continue;

// //   console.log(jonasArray[i], typeof jonasArray[i]);
// // }

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonasArray = [
//   "Jonas",
//   "Sche",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];

// //0,1,....4
// //4,3....0

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// //loop inside loop

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`========= starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(` exercise ${exercise} lifting weight repe ${rep}`);
//   }
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`while: lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//   console.log(`${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("loop is about to end");
// }

//when you dont know how many times a loop will run, you use a while loop.

//challenge
