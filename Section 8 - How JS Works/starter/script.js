const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);

//         const isMillenial = function(){
//             console.log(this.year >=1981 && this.year >= 1996);
//         };
//         isMillenial();
//     },


//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     },
// };

// jonas.greet()









// /// This keyword

// console.log(this);

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);    
// };

// calcAge(1991);

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);    
// };

// calcAge(1991);

// cosnt jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//     }
// }
// jonas.calcAge()





// // Hoisting and TDZ in practice!!!

// //Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas',
// let job = 'teacher';
// const year = 1991;


// // Functions





// 'use strict';

// function calcAge(birthYear){
//     const age = 2037 - birthYear;
    
//     function printAge(){
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output); 

//         if(birthYear >= 1981 && birthYear <= 1996){
//             const str = `Oh, and you're are a millenial, ${firstName}`;
//             console.log(str);
//         }
//     }

//     printAge();

//     return age;
// }

// const firstName = 'Naman';
// calcAge(1991);