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
