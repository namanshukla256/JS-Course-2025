
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); //46

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1998, 'Naman')); 



// function calcAge1(birthYear) {
//     // const age = 2037 - birthYear;
//     // return age; OR
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 =function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1 ,age2);






// function logger() {
//     console.log("My name is Naman");
// }

// logger(); //invoking the function

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges}`
//     return juice;
// }

// const appleJuice = fruitProcessor(4, 3); // capture the return value in a variable
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0)); // directly log the return value with no variable

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// // 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');
