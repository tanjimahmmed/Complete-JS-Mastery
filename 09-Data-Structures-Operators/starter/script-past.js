'use strict';

/*
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
  // openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

let openingHours = {
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
};

// property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties) {
  openStr += `${day} `
}

console.log(openStr);

const values = Object.values(openingHours);
console.log((values));

// entries obj
const entries = Object.entries(openingHours);
console.log(entries);

for(const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`);
  
}
*/
/*
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const item of menu ) console.log(item);

// for(const item of menu.entries()){
//   console.log(item);
// }

// for(const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// if(restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// if(restaurant.openingHours.fri)
// console.log(restaurant.openingHours.fri.open);
if(restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "not open";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

const users = [{name: 'Tanjim', email: 'tanjim@gmail.com'}];
console.log(users[0]?.name ?? 'User array empty')

if(users.length > 0) console.log(users[0].name);
else console.log('user array empty')

*/
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

/*
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
*/

/*
// Nullish coalescing operator(??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi"
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest1.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
*/



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

const [players1, players2] = game.players;
console.log(players1, players2);


const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);


const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
  
}

// printGoals('Davies', 'Muller');
// printGoals(game.scored);
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win")
team1 > team2 && console.log("Team 2 is more likely to win")
*/



///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

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
for (const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
  
}
