// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function() {
//     //     console.log(this);
//     //     return 2037 - this.birthYear;

//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
    
//     },

// //     getSummary: function() {
// //         return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no '} driver's license.`;
// //     }
// // };

// // Challenge
// console.log(jonas.getSummary());





// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const interestedIn = prompt('What do you want to know about Naman? Choose between firstName, lastName, age, job, and friends');
// console.log(interestedIn);


// const friends = ['Michael', 'Steven', 'Peter'];

// friends.push('Naman');
// console.log(friends);

// friends.unshift('John');
// console.log(friends);



// // console.log(friends);
// // console.log(friends[0]);

// // // OR

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// // console.log(friends.length);
// // console.log(friends[friends.length - 1]); // last element of the array

// // friends[2] = 'Naman';
// // console.log(friends);


// // const calcAge = function (birthYear) {
// //     return 2037 - birthYear;
// // }

// // const years = [1990, 1967, 2002, 2010, 2018];

// // calcAge(years)




// // const calcAge = function (birthYear) {
// //     return 2037 - birthYear;
// // } // birthYear is a local parameter

// // const yearsUntilRetirement = function(birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if(retirement > 0) {
// //         console.log( `${firstName} retires in ${retirement} years`);
// //         return retirement;
// //     } else {
// //         console.log(`${firstName} is already retired`);        
// //         return -1;
// //     }
// // }

// // console.log(yearsUntilRetirement(1991, 'NAman')); // 19
// // console.log(yearsUntilRetirement(1930, 'Max')); // -1

// // NAman retires in 19 years
// // 19
// // Max is already retired
// //-1




















// // function cutFruitPieces(fruit) {
// //     return fruit * 4;
// // }

// // function fruitProcessor(apples, oranges){

// //     const applePieces = cutFruitPieces(apples);
// //     const orangePieces = cutFruitPieces(oranges);

// //     const juice = `Juice with ${applePieces} piece ofapples and ${orangePieces} pieces of oranges`;
// //     return juice;
// // }

// // console.log(fruitProcessor(2, 3)); //Juice with 8 piece ofapples and 12 pieces of oranges


// // const calcAge3 = birthYear => 2037 - birthYear;
// // const age3 = calcAge3(1991);
// // console.log(age3); //46

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;
// //     // return retirement;
// //     return `${firstName} retires in ${retirement} years`
// // console.log(yearsUntilRetirement(1991, 'Jonas')); 
// // console.log(yearsUntilRetirement(1998, 'Naman')); 



// // function calcAge1(birthYear) {
// //     // const age = 2037 - birthYear;
// //     // return age; OR
// //     return 2037 - birthYear;
// // }

// // const age1 = calcAge1(1991);
// // console.log(age1);

// // const calcAge2 =function (birthYear) {
// //     return 2037 - birthYear;
// // }
// // const age2 = calcAge2(1991);
// // console.log(age1 ,age2);






// // function logger() {
// //     console.log("My name is Naman");
// // }

// // logger(); //invoking the function

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges}`
// //     return juice;
// // }

// // const appleJuice = fruitProcessor(4, 3); // capture the return value in a variable
// // console.log(appleJuice);
// // console.log(fruitProcessor(5, 0)); // directly log the return value with no variable

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);


// // // 'use strict';

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriversLicense = true;
// // if (hasDriversLicense) console.log('I can drive :D');
