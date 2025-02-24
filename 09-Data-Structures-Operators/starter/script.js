'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,
  

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, address, time = '20:00'}){
    console.log(`Order revived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// ----------------------------------------------------------



/*
// ----------------------------------------------------------
// For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
for(const item of menu) console.log(item);

// for (const item of menu.entries()){
//   console.log(item);
// }
for (const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/




// ----------------------------------------------------------
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20
  numGuests: 0, // 0 is falsy value
}

const rest2 = {
  name: 'La Piazza',
  owner: 'xyz'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest1.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest1.numGuests ??= 10;

// rest1.owner = rest1.owner && 'Anonymous';
// rest2.owner = rest2.owner && 'Anonymous';

rest1.owner &&= '<Anonymous>'; // falsy so undefined
rest2.owner &&= '<Anonymous>'; // already the value is there so it's work

// logical  - && - opt does is to assign value if it's currently truthy value

console.log(rest1);
console.log(rest2);
*/

/*
// ----------------------------------------------------------
// Short Circuiting (&& and ||)
// use any data type, return Any data type, short circuiting
console.log(3 || 'Tanjim');
console.log('' || 'Tanjim');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('------AND------');
console.log(0 && 'Tanjim');
console.log(1 && 'Tanjim');

console.log('Hello' && 23 && null && 'Tanjim');

if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach')
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/



/*
// ----------------------------------------------------------
// Rest pattern and array

// 1) Destructuring
// Spread, because on right side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

// This  will give you flexibility to pick array by your own
// and the rest element should be the last element
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3);
add(2, 3, 6);
add(2, 5, 9, 8);

// shortcut
const x = [23, 5, 7]
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');
*/


// ----------------------------------------------------------
/*
// The Spread operator
const arr = [7, 9, 8];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);


// Iterables: arrays, strings, maps, sets. Not objects
const str = "Tanjim";
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} not work`); // multiple values separated by comma

const ingredients = [
  // prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')
]
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Josep'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Boronoy';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/



// ----------------------------------------------------------
/*
// Destructuring Object
restaurant.orderDelivery({
  time: '22.30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 20',
  starterIndex: 1,
})

// Destructuring Object
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurant, hours, tags);

// default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 33;
let b = 100;
const obj = {a: 2, b: 5, c: 8};
({a, b} = obj);
console.log(a, b);

// Nested Objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

*/


// ----------------------------------------------------------
/*
// console.log(restaurant.order(2, 1));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


const arr = [2,3,4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuring
console.log(x,y,z);

// const [first, ,second] = restaurant.categories;
// console.log(first, second);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

const nested = [2, 4, [5,6]]
// const [i, , j] = nested;
// console.log(i,j);

// inside nested destructuring
const [i, , [j, k]] = nested;
console.log(i,j,k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p,q,r);
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1,players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'PlayerNew1', 'PlayerNew2', 'PlayerNew3'];
console.log(players1Final);

// 5 
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function(...players) {
  console.log(players);
  
  console.log(`${players.length} goals were scored`);
}

// printGoals('Player1', 'Player2', 'Player3', 'Player4');
// printGoals('PlayerOpposite1', 'PlayerOpposite2');
printGoals(...game.scored)

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/