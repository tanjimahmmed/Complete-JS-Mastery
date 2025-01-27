// strict mode is for browser safty secure code
"use strict";

/*
let hasDriversLicense = true;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

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

