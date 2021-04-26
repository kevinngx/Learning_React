"use strict";

// // Normal
// function square (x) {
//     return x * x;
// };

// // console.log(square(8))

// // Using arrow functions
// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


// Challenge - Use arrow functions
var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};
console.log(getFirstName("Kevin Nguyen"));
