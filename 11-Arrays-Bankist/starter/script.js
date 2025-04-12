'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
  
}

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};


const createUsernames = function (accs){
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
}
createUsernames(accounts)

const updateUI = function(acc){
  displayMovements(acc.movements);

  calcDisplayBalance(currentAccount);

  calcDisplaySummary(currentAccount)
}

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentAccount)

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if(
    amount > 0 && 
    receiverAcc &&
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username){
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount)

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // add movement
    currentAccount.movements.push(amount);

    // update ui
    updateUI(currentAccount)
  }
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // console.log(index)
    // Delete acc
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // mutate the array
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2])

// join
console.log(letters.join(' - '));
*/

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last array
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('tanjim'.at(0));
console.log('tanjim'.at(-1));
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// for(const movement of movements){
for(const [i, movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1}: You deposited ${movement}`)
  }else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`)
  }
}
console.log('------------')
// Foreach
// movements.forEach((movement) => {
//   if(movement > 0){
//     console.log(`You deposited ${movement}`)
//   }else {
//     console.log(`You withdraw ${Math.abs(movement)}`)
//   }
// })
movements.forEach(function(mov, i, arr) {
  if(mov > 0){
    console.log(`Movement ${i + 1}: You deposited ${mov}`)
  }else {
    console.log(`Movement ${i + 1}: You deposited ${Math.abs(mov)}`)
  }
})

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`)
})
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  
  const dogs = dogsJuliaCorrected.concat(dogsKate)
  console.log(dogs);

  dogs.forEach(function(dog, i){
    if(dog >= 3){
      console.log(`Dof number ${i + 1} is an adult, and is ${dog} years old`)
    }else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`)
    }
  })
  
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

*/

const euroToUSD = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return mov * euroToUSD;
//   // return 23;
// });

const movementsUSD = movements.map(mov => mov * euroToUSD);

// console.log(movements);
// console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * euroToUSD);
// console.log(movementsUSDfor);

// const movementDescriptions = movements.map((mov, i, arr) => {
//   if(mov > 0){
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   }
//   else {
//     return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`
//   }
// })

const movementDescriptions = movements.map((mov, i, arr) => 
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
)

// console.log(movementDescriptions);

const deposits = movements.filter(function(mov){
  return mov > 0;
});
// console.log(movements)
// console.log(deposits)
const depositsFor = [];
for(const mov of movements) if(mov > 0) depositsFor.push(mov)

const withdrawals = movements.filter(function(mov){
  return mov < 0;
})
// console.log(withdrawals);

// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
  
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

let balance2 = 0;
for(const mov of movements) balance2 += mov;
// console.log(balance2);

const max = movements.reduce((acc, mov) => {
  if(acc > mov) return acc;
  else return mov;
}, movements[0]);

// console.log(max);


/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18)
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2)
*/

// pipeline
const euroToUsd = 1.1;
// console.log(movements);

// const totalDepositsUSD = movements
// .filter(mov => mov > 0)
// .map(mov => mov * euroToUSD)
// .reduce((acc, mov) => acc + mov, 0)

const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map((mov, i, arr) => {
  // console.log(arr)
  return mov * euroToUSD;
}).reduce((acc, mov) => acc + mov, 0)

// console.log(totalDepositsUSD)

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// // adults.length

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams');
// console.log(account);

/*
// findlast and findLastIndex Methods
console.log(movements);

const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// your latest large movement was X movements ago
const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov > 1000)
)

console.log(latestLargeMovementIndex);

console.log(`Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`);

*/

// console.log(movements);
// console.log(movements.includes(-130))

// Condition
// console.log(movements.some(mov => mov === -130))

const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// Every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// separate callback
const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// flat and flat Map
const arr = [[1,2,3], [4,5,6], 7, 8];
// console.log(arr.flat());

const arrDeep = [[[1,2],3], [4,[5,6]], 7, 8];
// console.log(arrDeep.flat(2))

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// flat
const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flatMap
const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

////////////////////////////////////////
// Array method practice
// 1
const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2
const numDesposits1000 = accounts
.flatMap(acc => acc.movements)
// .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
.reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDesposits1000);

// prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3
const {deposits1, withdrawals2} = accounts
.flatMap(acc => acc.movements)
.reduce((sums, cur) => {
  // cur > 0 ? (sums.deposits1 += cur) : (sums.withdrawals2 += cur);
  sums[cur > 0 ? 'deposits1' : 'withdrawals2'] += cur;
  return sums;
}, {deposits1: 0, withdrawals2: 0})

console.log(deposits1, withdrawals2);

// 4
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => (exceptions.includes(word) ? word : capitalize(word)))
  .join(' ');

  return capitalize(titleCase);
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:



const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2
const dogBothActivities = breeds.find(breed => breed.activities.includes('fetch') && breed.activities.includes('running')).breed;
console.log(dogBothActivities);

// 3
// const allActivities = breeds.map(breed => breed.activities).flat();
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5
const swimmingAdjacent = [...new Set(
  breeds.filter(breed => breed.activities.includes
    ('swimming'))
    .flatMap(breed => breed.activities)
    .filter(activity => activity !== 'swimming')
  )]
console.log(swimmingAdjacent);


//6
console.log(breeds.every(breed => breed.averageWeight > 10));

// 7
console.log(breeds.some(breed => breed.activities.length >= 3));

// Bonus
const fetchWeights = breeds.filter(breed => breed.activities.includes('fetch')).map(breed => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights)

console.log(fetchWeights);
console.log(heaviestFetchBreed);
*/

/*
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort());
// Ascending
// movements.sort((a, b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
// Descending
// movements.sort((a, b) => {
//   if(a > b) return -1;
//   if(a < b) return 1;
// })
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
// Array grouping
console.log(movements);

const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits' : 'withdrawals');
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if(movementCount >= 8) return 'very active';
  if(movementCount >= 4) return 'active';
  if(movementCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
const groupedAccounts = Object.groupBy(accounts, ({type}) => type);
console.log(groupedAccounts);


// creating and filling arrays
const arr2 = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7));

// empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr2.fill(23, 4, 6);
console.log(arr2);

// best way Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y)

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from
  (document.querySelectorAll('.movements__value'),
  el => Number(el.textContent.replace('€', '')));
  
  console.log(movementUI);

  const movementUI2 = [...document.querySelectorAll('.movements__value')]
})

console.log(movements);
// const reversedMov = movements.slice().reverse();
// improvement version
const reversedMov = movements.toReversed();
console.log(reversedMov);

// movements[1] = 2000;
const newMovements = movements.with(1, 2000)

console.log(newMovements);

console.log(movements);

*/