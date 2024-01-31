"use strict";
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

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
//   console.log(output);
// }

// const flight = "LH340";
// const san = {
//   name: "Santhosh",
//   passport: 7788446657,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LV778";
//   passenger.name = "Mr." + passenger.name;
//   if (passenger.passport === san.passport) {
//     alert("CheckedIn");
//   } else {
//     alert("Wrong entry");
//   }
// };
// checkIn(flight, san);
// console.log(flight);
// console.log(san);

// Functions using Callback fun

const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
//Higher order fun
const transformer = function (str, fn) {
  console.log(`Origunal string :${str}`);
  console.log(`Transformed string :${fn(str)}`);
  console.log(`Transformed by :${fn.name}`);
};
transformer("javascript is best lang", upperFirstWord);
transformer("javascript is best lang", oneWord);

//function return functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetingHey = greet("Hey");
greetingHey("Jonas");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// Call & Apply method

const spiceJet = {
  airline: "spicejet",
  code: "SP998",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.code} ${flightNum}`, name });
  },
};

spiceJet.book(234, "Santhosh");
spiceJet.book(445, "janani");

const spiceWings = {
  airline: "Flywing",
  code: "hF998",
  bookings: [],
};
const book = spiceJet.book;
book.call(spiceJet, 345, "Deena");
book.call(spiceWings, 787, "Bai");

//apply method
const flightbox = [346, "Mandela"];
book.apply(spiceWings, flightbox);
//bind method

const bookSW = book.bind(spiceJet);
bookSW(45, "Father");

const bookFD = book.bind(spiceWings, 46);
bookFD("manoj");

const addVAT = function (rate) {
  return function (value) {
    console.log(`Result:`, value + value * rate);
  };
};
const addTax = addVAT(0.23);
addTax(100);

//Closure

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 555;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Reassigning f function

h();
f();
