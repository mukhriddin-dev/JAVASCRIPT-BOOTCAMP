"use strict";

// declaration function

// function funName1(arg) {
//     // to be executed code
//     console.log(arg + "11");
// }

// expression function

// const funName2 = function (arg) {
//     // to be executed code
//     // console.log((arg && false) ?? true ?? "hi");
// };

// arrow function

// const funName3 = (arg, arg2) => {
//     if (Number.isInteger(arg)) {
//         return arg;
//     }
//     // to be executed code
//     return arg * 10;
// };

// const funName4 = (arg, arg2) => arg + arg2;

// calll

// const result = funName3(10.4, 12);

// const result2 = funName4(30, 12);

// console.log(result, result2); //

// undefined / null ?? "open"

// IIFE

// (function (arg, arg2) {
//     console.log(arg + arg2); //
// })(11, 10);

// function checkNumber(a, b) {

//     function check(n) {
//         console.log("N", n);
//     }

//     for (let i = 0; i < b; i++) {
//         if (i % a == 0) {
//             check(i);
//         }
//     }
// }

// checkNumber(10, 135);

// -------------------- ARRAY -------------------

// let arr = [];
// let arr=new Array()

// console.log(arr);
// arr[0] = "Hello, world!";
// console.log(arr);
// arr[1] = "Hello!";
// arr[2] = "Hello";
// console.log(arr);
// arr[2] = "Mello";
// arr[3] = "War";
// arr[4] = "nima";
// arr[5] = "app";
// console.log(arr);

// const array = new Array(1, 2, 3, 4, null, undefined);

// console.log(array);
// array[0] = "Hello, world!";
// console.log(array);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = ["html", "css", "scss", "js", "react"];

// push -> ohiridan element qo'shadi
// arr.push(1, 2, 3)

// pop -> ohiridan element o'chiradi
// console.log(arr.length);
// arr.pop();

// unshift -> arrayni boshidan element qo'shadi
// arr.unshift(-2, -1, 0)

// shift - > arrayni boshidan o'chiradi
// arr.shift()

// slice(indexN , indexM) -> elementdan -> elemtngacha nuxalab beradi
// splice(index from  to index) ->

// console.log(arr.slice(0, 2));

// console.log(arr.splice(0, 2));

// console.log(arr);

// console.log(arr.reverse()) // teskari

// console.log(arr.includes("html")) // boolean -> || -> false

// console.log(arr.reverse().join("    ")); // to string

// console.log(arr.sort())

// ... spread operator

// let complex = arr.concat(numbers).concat(arr).concat("salom", "yana salom");
// let spreadArray = [ 1, 2 ,[ 3,4 , [ 5 , 6 , [ 7 , 8 , arr]]]];


// let spreadArray = [...arr , 2, ...arr , ...numbers];

// console.log(complex)

// console.log(spreadArray)
// console.log(spreadArray.flat(10));

// console.log(spreadArray.flat(7)[4])

//  [ a,b,c,d,e,f,g,h ] -> ...[ a,b,c,d,e,f,g,h] => a,b,c,d,e,f,g,h


// function arrayNumbers(n) {
//     let arr = [];
//     for (var i = 0; i <= n; i++) {
//         arr.push(2 ** i);
//     }

//     return arr;
// }

// const result = arrayNumbers(999930);

// console.log(result);

