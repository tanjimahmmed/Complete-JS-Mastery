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
  [weekdays[5]]: {
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
// map iteration
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for(const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()])
console.log([...question.values()])
*/


// ----------------------------------------------------------
/*
const rest = new Map();
rest.set('name', 'Classico italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Veg', 'Org'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 12;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);
console.log(rest.size);
console.log(rest.get([1, 2]));
console.log(rest.get(arr));
*/



// ----------------------------------------------------------
/*
// useful set methods

// find two same array from this two foods
// find two common dish here
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

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("Union:", italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);
console.log(italianFoods.isDisjointFrom(mexicanFoods));
*/

// ----------------------------------------------------------
/*
// Set

const ordersSet = new Set([
  'Pasta',
  'pizza',
  'pizza',
  'Risotto',
  'Pasta',
  'pizza',
])
console.log(ordersSet);

console.log(new Set('Tanjim'));
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);
// ordersSet.clear();
// ** in set there are no indexes
console.log(ordersSet[2]);

// ** sets are iterable
for(const order of ordersSet) console.log(order);

// example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // ** set to array
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
*/


/*
// ----------------------------------------------------------
// looping objects
// property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties){
  openStr += `${day}, `
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key ,value]
for(const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
  
}
*/


// for(const day of properties) {
//   console.log(day);
// }

/*
// ----------------------------------------------------------
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if(restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// with optional chaining
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exists');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exists');

// arrays
const users = [{name: 'Tanjim', email: 'tanjim@gmail.com'}];
console.log(users[0]?.name ?? 'User array empty');


if(users.length > 0) console.log(users[0].name);
else console.log('user array is empty');
*/



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

/*
// ----------------------------------------------------------
// challenge 2
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
for(const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3
for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/


///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);
for(const [min, event] of gameEvents){
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} Half] ${min} : ${event}`);
  
}



// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);

// // 3
// console.log(`An event happened, on average, every ${90/ gameEvents.size} minutes`);


// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time/ gameEvents.size} minutes`);

// // 4
// for (const [min, event] of gameEvents){
//   const half = min <= 45 ? 'First' : 'Second';
//   console.log(`[${half} HALF] ${min}: ${event}`); 
// }