// const jonasArray = [
//   "Jonas",
//   "Sche",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sche",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Steven"],
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("what");
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("wrong");
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@oogabooga";
// console.log(jonas);

// //challenge
// // console.log(
// //   jonas.firstName +
// //     " has " +
// //     jonas.friends.length +
// //     " friends, and his best friend is " +
// //     jonas.friends[0]
// // );

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is
//   ${jonas.friends[0]}`
// );

//methods
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sche",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Steven"],
//   hasDriverLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },
//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     // console.log(this);
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} old ${
//       this.job
//     } and he has ${this.hasDriverLicense ? "a" : "no"} driver's license `;
//   },
// };

//this keyword refers to the object that is jonas here

// console.log(jonas.calcAge());
// console.log(jonas.age);

// //chsllenge
// console.log(jonas.getSummary());

//challenge

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

john.calcBMI();
console.log(john.bmi);
mark.calcBMI();
console.log(mark.bmi);

// console.log(john.calcBMI());
// console.log(mark.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`
  );
}
