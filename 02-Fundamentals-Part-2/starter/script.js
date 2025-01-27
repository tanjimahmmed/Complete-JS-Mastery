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
