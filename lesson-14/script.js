"use strict";
// built-in method
// Array methods
/*

push
pop
shift 
unshift
slice
splice
concat
join
sort
reverse
includes

length (aggregation method) or property

// forEach 
// map
// filter
// reduce
// some
// every
// find
// findIndex


*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (let el of numbers) {
//     console.log(el);
// }
// const numbers = [1, "a", 2, 3, 4, "hi", 5, 6, 7, 8, 9, 10, "hello"];
/// 1. ForEach array iteration

// const data = numbers.forEach((e, ind, arr) => {
//     // if (e % 2 == 0) {
//     //     console.log(e);
//     // }
// });

// console.log(data);

/// 2. map iteration method , return array

/// return -> array
/// mutation value
// condition (not implemented)

// const state = numbers.map((el, ind, arr) => {
//     return el * 2;
// });

// // state.push("Good");

// console.log(state);

// 3. Filter array
// return filtered array/value
// no implemented muatation value
// implemented condition

// const filteredValue = numbers.filter((el, ind, arr) => {
//     return el;
// });

// console.log(filteredValue);

// [1, 5, 3, 4, 5, 6, 7, 8, 9, "hello"];

// const numbersCount = numbers.reduce((a, b) => {
//     return a + b;
// }, 10);

// console.log(numbersCount);

// let students = [
//     {name: "Murodjon", age: 30},
//     {name: "Yulduz", age: 25},
//     {name: "Husan", age: 15},
//     {name: "Ismoil", age: 10},
//     {name: "Husan", age: 40},
// ];
