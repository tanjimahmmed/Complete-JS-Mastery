'use strict';
/*
// -- function default parameters
const bookings = [];

const createBooking = function (flightNumber, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNumber,
        numPassengers,
        price
    }
    console.log(booking);

    bookings.push(booking);
}
createBooking('LH123')
createBooking('LH123', 2, 100)
createBooking('LH123', 2)
createBooking('LH123', 5)

createBooking('LH123', undefined, 1000)
*/

/*
// Passing arguments - value vs reference
const flight = 'LH324';
const tanjim = {
    name: 'Tanjim Emmeet',
    passport: 245689033123
}

const checkIn = function (flightNumber, passenger) {
    flightNumber = 'LH325';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 245689033123){
        alert('Checked in')
    }else {
        alert('Wrong passport')
    }
}

// checkIn(flight, tanjim);
// console.log(flight);
// console.log(tanjim);

// Is the same as doing
// const flightNumber = flight;
// const passenger = tanjim;
// console.log(flightNumber, passenger);

const newPassport = function (person){
    person.passport = Math.trunc(Math.random() * 10000000000000);
}

newPassport(tanjim);
checkIn(flight, tanjim);
*/

/*
// function accepting callback function
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
    
    
}
transformer('JavaScript is...', upperFirstWord)
transformer('JavaScript is...', oneWord)

// js uses callbacks all the time
const high5 = function() {
    console.log('👋');
}

document.body.addEventListener('click', high5); //callback function

['tanjim', 'jahid', 'megnum'].forEach(high5)
*/

// Function returning functions
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Tanjim')
// greeterHey('Steve')
// greet('Hello')('Tanjim')

// const greet = (greeting) => {
//     return (name) => {
//         console.log(`${greeting} ${name}`)
//     }
// }
const greet = greeting => name => console.log(`${greeting} ${name}`) // single line arrow func
const greeterHey = greet('Hey');
greeterHey('Tanjim')
greeterHey('Steve')
greet('Hello')('Tanjim')

// The call and apply methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} 
            flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    } 
}

lufthansa.book(239, 'Tanjim');
lufthansa.book(899, 'Stafinny');
console.log(lufthansa);


const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}
const book = lufthansa.book;

// const book = lufthansa.book;

// book(23, 'Sarah Williams');
// call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

const swiss = {
    name: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}
book.call(swiss, 583, 'Sarah Williams');
console.log(swiss);
const flightData = [530, 'George cooper']
book.call(swiss, ...flightData);

// Bind Method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Tanjim Emmett');

const bookEW23 = book.bind(lufthansa, 23);
bookEW23('Alen walker');
bookEW23('Kelly');

// object with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    
    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
// preset parameter
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));



const addTaxRate = function(rate){
    return function (value){
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
