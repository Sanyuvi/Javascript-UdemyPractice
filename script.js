// let js = "amazing";
// if (js === "amazing") alert("JS is FUN");

// let results = 45 + 34 - 28;
// console.log(results);

// typeof

// const a = 234;
// console.log(typeof a);

// // operators

// const now = 2037;
// const mikeAge = now - 2008;
// console.log(mikeAge * 2, mikeAge / 3, 3 ** 2);
// // 3**2 means 3 to the power of 2 = 3 * 3

// //concatination

// const firstName = "Virat";
// const lastName = "Kohli";

// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// // x+=10 means X=X+10

// //Template literals

// const fullName = "Mike";
// const job = "dancer";
// const year = 2025;

// console.log(
//   "I'm " + fullName + " a " + job + " of " + (year - 2000) + " years old"
// );
// console.log(`I'm ${fullName} a ${job} of ${year - 2000} years old`);

// //If else:

// const age = 22;
// const isEligible = age >= 18;

// if (isEligible) {
//   console.log(`He can start driving 🚗;`);
// } else {
//   console.log(`Not eligible to drive `);
// }
// //Truthy falsy values
// // falsy value: 0, " ", undefined, null, Nan

// const money = 0;
// if (money) {
//   console.log(`spend it all!`);
// } else {
//   console.log(`Don't spend it!`);
// }

// let height;
// if (height) {
//   console.log(`Height is defined`);
// } else {
//   console.log(`Height is not defined`);
// }

// //Boolean logics(AND, OR & NOT)

// const hasDriversLicense = true; //A
// const hasGoodVision = false; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`He is able to drive`);
// } else {
//   console.log(`Someone else should drive...`);
// }

// const isTiried = true;
// if (hasDriversLicense && hasGoodVision && !isTiried) {
//   console.log(`He is able to drive`);
// } else {
//   console.log(`Someone else should drive...`);
// }

// // Function declaration

// function freshJuice(apple, orange) {
//   const juice = `juice with ${apple} apple and ${orange} orange`;
//   return juice;
// }
// const drinkJuice = freshJuice(4, 3);
// console.log(drinkJuice);

// function calAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calAge1(2012);
// console.log(age1);

// // function expression
// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calAge2(2008);
// console.log(age2);

// Arrow function

// const ageUntilRetierment = (birthYear, bestName) => {
//   const age = 2037 - birthYear;
//   const retiredAge = 60 - age;
//   return `${bestName} retires at the age of ${retiredAge}`;
// };
// console.log(ageUntilRetierment(2004, "Anil"));

// function calling another function
// function cutPeices(fruit) {
//   return fruit * 5;
// }

// function freshJuice(apple, orange) {
//   const appleJuice = cutPeices(apple);
//   const orangeJuice = cutPeices(orange);
//   const juice = `juice with ${appleJuice} apple and ${orangeJuice} orange`;
//   return juice;
// }
// const drinkJuices = freshJuice(4, 3);
// console.log(drinkJuice);
// Arrays exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [2008, 2015, 1998, 2000];

// console.log(calcAge(years[0]));
// console.log(calcAge(years[1]));
// console.log(calcAge(years[3]));
// console.log(calcAge(years[2]));

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3]),
// ];

// console.log(ages);

//for loop

// const timeline = [1991, 2000, 2003, 1997];
// const aged = [];

// for (i = 0; i < timeline.length; i++) {
//   aged.push(2040 - timeline[i]);
// }

// console.log(aged);

//continue & Break

// const bag = [2020, 455, 303, "name", "apple"];

// for (i = 0; i < bag.length; i++) {
//   if (typeof bag[i] !== "string") continue;
//   console.log("HI");
// }

// for (i = 0; i < bag.length; i++) {
//   if (typeof bag[i] !== "number") break;
//   console.log("HI");
// }

// for (let i = bag.length - 1; 1 >= 0; i--) {
//   console.log(bag[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----Starting Exercise-----`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}:Lifting weights reptition ${rep}`);
//   }
// }
