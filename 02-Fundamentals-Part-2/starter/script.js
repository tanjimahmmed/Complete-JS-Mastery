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