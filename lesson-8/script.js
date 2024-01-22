"use strict";

// let n = 10;
// let m = 12;

// let operator = "-";

// switch (operator) {
//     case "+":
//         console.log(n + m);
//         break;
//     case "-":
//         console.log(n - m);
//         break;
//     case "*":
//         console.log(n * m);
//         break;
//     case "/":
//         console.log(n / m);
//         break;
//     default:
//         console.log("Invalid operator");
// }

// if (operator == "+") {

//     console.log(n + m);

// } else if (operator == "-") {

//     console.log(n - m);

// } else if (operator == "*") {

//     console.log(n * m);

// } else if (operator == "/") {

//     console.log(n / m);

// } else {
//     console.log("Invalid operator");
// }

// let n = 0;

// while (n < 100) {
//     n++;

//     if (n % 2 == 0) {
//         console.log(n);
//     }
// }

// do {
//     n++;

//     if (n % 7 == 0) {
//         console.log(n);
//     } else {
//         console.log("Invalid condtion" + n);
//     }
// } while (n < 20);

// let m = 2;

// for (let n = 0; n < m; n++) {
//     if (n % m == 0) {
//         console.log(n + m);
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("MINUTE: " + i);
//     for (let j = 1; j <= i; j++) {
//         console.log("SECUND: " + j);
//     }
// }

// function types: declections , expressions , arrow
// function parameters / arguments
// default parameters

// SOLID
// DRY

// GLOBAL SCOPE

// function call top level

// sayHello("ok", "hello", "good");
// // function declarations
// function sayHello(a, b = 0, c = 0) {
//     console.log(a + b + c);
// }
// // function call
// sayHello(1);

// console.log(undefined + "hello");

// function expression

// addNumber();

// const addNumber = function (n = 0, m = 0) {
//     console.log(n + m);
// };

// // call

// const devison = addNumber;
// const number = addNumber;

// addNumber(12, 13);

// devison(4);
// addNumber(3);
// number(2);

// arrow functions

// const arrow = (a, b = 25) => console.log(a + b);
// // call
// arrow(1);

// return

// function addNumber(a, b) {
//     return a + b;
// }

// function minusNumber(a, b) {
//     return a - b;
// }

// function devisonNumber(a, b) {
//     return a * b;
// }

// let sum = addNumber(10, 11);
// let devisionSum = devisonNumber(3, 4);
// let minus = minusNumber(23, 12);

// console.log(sum);
// console.log(devisionSum);
// console.log(minus);

const numberDegree = (n) => {
    if (n % 2 == 0) {
        console.log(n ** 2);
    }
    return;

    if (n > 0) {
        console.log(n + 10);
    }
};

numberDegree(4);
