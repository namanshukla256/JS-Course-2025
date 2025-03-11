'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199){

    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    console.log(booking);

    bookings.push(booking)
};

createBooking('AIN1234');
createBooking('AIN4567, 35, 2499')

//-----------------------------------------------

const flight = 'LH234';
const naman = {
    name: 'Naman Shukla',
    passport: 22442124904
}

const checkIn = function(flightNum, passenger){
    flightNum = 'AIN999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 22442124904){
        alert('Checked in')
    } else {
        alert('Wrong Passport')
    }
}

checkIn(flight, naman);
console.log(flight);
console.log(naman);

// Is the same as doing
const flightNum = flight;
const passenger = naman;


const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*10000000)

}

newPassport(naman);
checkIn(flight, naman);














