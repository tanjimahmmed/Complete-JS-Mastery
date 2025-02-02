// strict mode is for browser safty secure code
"use strict";

/*
let hasDriversLicense = true;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

/*
// a function is reusable code which we can use again and again
function logger() {
  console.log("Tanjim");
}

// calling / running / invoking function
logger();
logger();
logger();

// parameter are like variable that are specific to this function
function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
// 5 and 0 are arguments
fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);
*/

/*
// function declaration can work even they call it on the top
// func declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1998);

// with func expression it won't work
// func expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1998);

console.log(age1, age2);
*/

/*
// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1998, 'Tanjim'));
console.log(yearsUntilRetirement(1992, 'Jahid'));
*/

/*
// function call other function
function cutFruitPices(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePices = cutFruitPices(apples);
  const orangePices = cutFruitPices(oranges);

  const juice = `Juice with ${applePices} pices of apple and ${orangePices} pices of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Sandwich maker with same function
function prepareIngradient(ingredient) {
  return `${ingredient} slices`;
}

function makeSandWich(bread, cheese, ham) {
  const breadSlices = prepareIngradient(bread);
  const cheeseSlices = prepareIngradient(cheese);
  const hamSlices = prepareIngradient(ham);

  const sandwich = `Sandwich with ${breadSlices} Bread, ${cheeseSlices} Cheese and ${hamSlices} Ham`;
  return sandwich;
}

console.log(makeSandWich(2, 1, 2));

// pizza slicer
function pizzaSlicer(pizza){
    return pizza * 8;
};

function servePizza(pizzas){
    const totalSlices = pizzaSlicer(pizzas);
    return `You have total ${totalSlices} slices of pizza`;
}
console.log(servePizza(2));

// coffe maker
function gridBeans(amount) {
    return `${amount} scoops of coffee grounds`;
}

function brewCoffee(beans, water){
    const groundBeans = gridBeans(beans);
    return `Coffe brewed with ${groundBeans} and ${water} cups of water.`
}
console.log(brewCoffee(2,4));

// smoothie blender
function prepareFruit(fruit, quantity){
    return `${quantity} pices of ${fruit}`;
}

function makeSmoothie(banana, strawberry) {
    const bananaPieces = prepareFruit("banana", banana);
    const strawberryPices = prepareFruit('strawBerry', strawberry);

    return `Smoothie made with ${bananaPieces} and ${strawberryPices}`
}

console.log(makeSmoothie(3, 5));

// Burger builder
function cookPatty(type){
  return `${type} patty cooked`;
}

function makeBurger(bun, pattyType, toppings){
  const cookedPatty = cookPatty(pattyType);
  return `Burger with ${bun}, ${cookedPatty}, and ${toppings.join(", ")} toppings.`;
}
console.log(makeBurger("sesame", "beef", ["lettuce", "tomato", "cheese"]));


// carpentry shop
function cutWood(pices){
  return `${pices * 2} wooden planks`;
}

function buildTable(woodPices){
  const planks = cutWood(woodPices);
  return `Table built with ${planks}`;
}

console.log(buildTable(5));
*/

/*
const calcAge = function (birthYear){
  return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement;
  }else {
    console.log(`${firstName} has already retired 🎉`)
    return -1;
  }
  
  // return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, "Tanjim"));
*/

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


*/

/*
const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
  (scoreOne + scoreTwo + scoreThree) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the trophy 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the trophy 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(500, 1000);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);


const calcBMI = (weight, height) => weight / (height * height);

const determineBMICategory = function (bmi) {
  if (bmi < 18.5) {
    console.log(`Underweight 🏋️‍♀️ (${bmi.toFixed(2)})`);
  } else if (bmi >= 18.5 && bmi < 24.9) {
    console.log(`Normal weight ✨ (${bmi.toFixed(2)})`);
  } else if (bmi >= 25 && bmi < 29.9) {
    console.log(`Overweight weight 🏋️‍♀️ (${bmi.toFixed(2)})`);
  } else {
    console.log(`Obese 🚨 (${bmi.toFixed(2)})`);
  }
};

let bmiTanjim = calcBMI(56, 1.75);
let bmiJane = calcBMI(70, 1.85);

determineBMICategory(bmiTanjim);
determineBMICategory(bmiJane);

bmiTanjim = calcBMI(76, 1.8);

determineBMICategory(bmiTanjim);


// voting eligibility
const checkEligibility = (age, citizenship) => age >= 18 && citizenship === "yes";

const displayEligibility = function (isEligible, name) {
  if(isEligible){
    console.log(`${name} is eligible to vote 🗳️`);
  }else {
    console.log(`${name} is not eligible to vote 🚫`);
  }
}

const eligibleTanjim = checkEligibility(26, "yes");
const eligibleWett = checkEligibility(16, "yes");
displayEligibility(eligibleTanjim, "Tanjim");
displayEligibility(eligibleWett, "Wett");
*/

// Tip calculator
/*
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const displayTotal = function (bill, tip) {
  console.log(
    `Bill: ${bill}, Tip: $${tip.toFixed(2)}, Total: $${(bill + tip).toFixed(2)}`
  );
};
let bill1 = 275;
let tip = calcTip(bill1);

displayTotal(bill1, tip);

// extra
bill1 = 500;
tip = calcTip(bill1);
displayTotal(bill1, tip);

// example test
const eligibiltyPerson = (income, score) => income >= 40000 && score >= 700;

const displayResult = function (result, name) {
  if (result) {
    console.log(`${name} is eligible for loan 🏦`);
  } else {
    console.log(`${name} is not eligible for loan 🚫`);
  }
};

let eligableTanjim = eligibiltyPerson(56000, 800);
displayResult(eligableTanjim, "Tanjim");

// update test
const eligibiltyPerson = (income, score) => {
  if (income < 40000) return `Income is too low $${income}.`;
  if (score < 700) return `Credit is score is too low ${score}.`;
  return "Eligible";
};

const displayResult = function (result, name) {
  if (result === "Eligible") {
    console.log(`${name} is eligible for loan 🏦`);
  } else {
    console.log(`${name} is not eligible for loan: ${result}`);
  }
};

let eligibilityTanjim = eligibiltyPerson(60000, 700);
displayResult(eligibilityTanjim, "Tanjim");


const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

const displayTemperature = function (celsius, fahrenheit) {
  console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
};

let tempC1 = 14;
let tempF1 = celsiusToFahrenheit(tempC1);
displayTemperature(tempC1, tempF1);

// additional
tempC1 = -20;
tempF1 = celsiusToFahrenheit(tempC1);
displayTemperature(tempC1, tempF1);
*/

/*
const calcGrade = (marks) => {
  if(marks >= 90) return "A";
  if(marks >= 80) return "B";
  if(marks >= 70) return "C";
  if(marks >= 60) return "D";
  return "F";
}

const displayGrade = function (name, marks, grade) {
  console.log(`${name} scored ${marks} marks and recived a grade ${grade}`);
}

let marksJohn = 92;
let gradeJohn = calcGrade(marksJohn);
displayGrade("John", marksJohn, gradeJohn);


const carMilage = (milage) => {
  if (milage < 10000) return "Excellent";
  if (milage >= 10000 && milage <= 50000) return "Good";
  if (milage > 50000 && milage <= 100000) return "Fair";
  if (milage > 100000) return "Poor";
};

const displayCarMilage = function (milage, condition) {
  console.log(`The car has ${condition} condition with ${milage} milage.`);
};

let milageToyota = 1000000;
let conditionToyota = carMilage(milageToyota);
displayCarMilage(milageToyota, conditionToyota);
*/

/*
// Arrays
// expression is something that produces value
// an array is not premitive value so it is mutable

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends[friends.length - 1]);
friends[2] = "Tanjim";
console.log(friends);

const firstName = "Tanjim";
const tanjims = [firstName, "Kelly", 2047 - 1998, "programmer", friends];
console.log(tanjims);

// Not a way to oparation
const calcAge = function (birthYear) {
  return 2047 - birthYear;
};

const y = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(y));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(y[0]), calcAge(y[1]), calcAge(y[y.length - 1])];
console.log(ages);
*/

/*
// Array oparation

const friends = ["Michael", "Steven", "Peter"];

// add element
const newLength = friends.push("Joye");
console.log(friends);
console.log(newLength);

friends.unshift("Tanjim"); // unshift will add at the first of the array
console.log(friends);

// remove element
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // shift will delete first element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// includes method return true or false
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("Tanjim"));
console.log(friends.includes("23"));
if (friends.includes["peter"]) {
  console.log("You have a friend called peter");
}
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

/*
// Objects
const tanjim = {
  firstName: "Tanjim",
  lastName: "Miller",
  age: 2047 - 1998,
  job: "programmer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(tanjim);
*/