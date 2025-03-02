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