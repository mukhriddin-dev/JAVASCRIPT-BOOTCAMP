"use strict";

// 1- pure function

// function create(a, b) {
//     return a + b;
// }

// create(11, 10);

// impure function

// let arr = [];

// function addElement(a) {
//     arr.push(a);
//     return arr;
// }

// addElement(21);

/// 2- CallBack function

// function funA(test) {
//     console.log("function A" + test);
//     // 4s
// }

// function funB(test) {
//     console.log("function B" + test);
//     // 3s
// }

// function funC(test, callback1, callback2) {
//     console.log("function C" + test);
//     callback1("-2 ");
//     callback2("-3");
//     //1s
// }

// funC("-1", funB, funA);

// Btn.addEvenetListener("clcik", () => {});

// 3-Closure / Lexical environment

// let a = "Hello World";

// function closure() {
//     // let a = "Goodbye World";

//     console.log(a);

//     function innerFunc() {
//         let a = "GOOD";
//         console.log(a);
//     }
//     innerFunc();
// }

// closure();

// 4 . HOF -> Higher order function

// function funF(data) {
//     if (data.length > 0) {
//         return data;
//     }
// }

// function HighhOrderedFunc(callback) {
//     return callback([-1]);
// }

// const result = HighhOrderedFunc(funF);
// console.log(result);
// console.log(...result);

// 5.  Currying

// const f = (a, b, c, d) => {
//     a += 10;
//     return a + b + c + d;
// };

// const a = (a) => {
//     a += 10;
//     return (b) => {
//         b++;
//         return (c) => {
//             c -= 1;
//             return (d) => {
//                 d *= 5;
//                 return a + b + c + d;
//             };
//         };
//     };
// };

// console.log(summa);
// console.log(1, 2, 3, 4);

// console.log(a(1)(2)(3)(5));

// 6. Pipe function

// const task1 = (arg) => arg + 10;
// const task2 = (arg) => arg / 2;
// const task3 = (arg) => arg * 0.007;

// const result = task3(task2(task1(10)));

// console.log(result);

// 7. Factory function ->

// ES5  KEY:VALUE
// ES6

// const laptop = (name, brand, color, memory, price) => {
//     return {
//         name,
//         brand,
//         color,
//         memory,
//         price,
//         getInfo: function () {
//             console.log(
//                 `Full info: Name:${name} , brand: ${brand} , color: ${color} , memory: ${memory} , price: ${price}`
//             );
//         },
//     };
// };

// let hpEnevyX360 = laptop("envy x360", "hp", "silver", "512GB SSD", 800);
// let macBookProM2 = laptop("MacBook Pro M2", "Apple", "Silver", "512GB SSD", 1350);

// macBookProM2.getInfo();
// hpEnevyX360.getInfo();

// const count = () => {
//     return 12;
// };

/// 8. Function Generator

// function* signUpTelegram() {
//     yield "telefon raqamingizni kiriting";
//     yield "SMS kodni kiriting";
//     yield "Tabriklaymiz!";
// }

// const telegram = signUpTelegram();

// // console.log(telegram);
// console.log(telegram.next().value);
// console.log(telegram.next().value);
// console.log(telegram.next().value);
// console.log(telegram.next().done);

let fomSubmit = document.getElementById("taskForm");
let taskTitle = document.getElementById("title");
let renderList = document.getElementById("list");

let taskArray = [];

fomSubmit.addEventListener("submit", () => {
    let task = {
        title: taskTitle.value,
    };

    taskArray.push(task);

    taskTitle.value = "";
});
