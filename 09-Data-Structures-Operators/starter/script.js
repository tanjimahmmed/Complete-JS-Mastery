'use strict';


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  // },
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};
/*
// Spread operator

// spread, because on right side of = 
const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// spread, because on left side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, Focaccia, , ...otherFood] = [ //in destructuring element always spread operator at the last
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
]

console.log(pizza, risotto,Focaccia, otherFood);

// objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) function
// const add = function(...numbers) {
//   console.log(numbers)
// }

const add = function(...number){
  let sum = 0;
  for(let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
  
}

add(2, 3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23, 5, 7];
add(...x)

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach") //first index is main ingredient and lefts 3 are in one obj
restaurant.orderPizza("mushrooms")
*/

// Use any data type, return any data type, short-circuiting
console.log(3 || "Tanjim");
console.log('' || "Tanjim");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----- AND ----');

console.log(0 && 'Tanjim');
console.log(7 && 'Tanjim');

console.log('hello' && 23 && null && 'Tanjim');

if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

/*
restaurant.orderDelivery({
  time: "22:30",
  address: "Gulshan 2, Dhaka",
  mainIndex: 1,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: "Gulshan 1, Dhaka",
  starterIndex: 1
});



const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const {menu = [], starterMenu: starters = []} = restaurant;

console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;

const obj = {a: 2, b : 5, c: 9};
({a, b} = obj);
console.log(a, b);

// nested objects
const {fri: {open: o, close: c}} = openingHours;
// console.log(open, close);
console.log(o, c);
*/


/*
// destructure array
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x,y,z);
console.log(arr);


// console.log(a);
// console.log(c);

// const [first, second] = restaurant.categories;
// const [first, ,second] = restaurant.categories;

// console.log(first, second);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i, j] = nested; //this gives the first two index
// const [i, , j] = nested; // this will return nested index

// console.log(i, j);

const [i, , [j, k]] = nested;

console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9] // 1 will be added as default value
console.log(p, q, r);
*/



