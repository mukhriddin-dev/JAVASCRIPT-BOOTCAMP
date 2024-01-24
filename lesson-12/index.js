"use strict";

const frontend = {
    technologies: ["html", "css", "js"],
    api: "Aplication programming interfaces",
    browsers: ["chrome", "firefox", "safari"],
    figma: "UI/UX tools",
    codeEditor: ["vsCode", "sublime", "WebStorm"],
    exstensions: ["preetier", "all auto complete", "js snippet"],
    github: "version control cross-platform",
    getYourSkills: function () {
        console.log(this.technologies[0]);
    },
};

// console.log(Object.keys(frontend));
// console.log(Object.values(frontend));

// console.log(Object.entries(frontend));

// console.log(Object.fromEntries(Object.entries(frontend)));

// Object.keys({}) -> Object keys in array format
// Object.values({}) -> Object values in array format
// Object.entries({}) -> Array of elemnt ['key', 'value']
// Object.fromEntries({}) -> Array to orginal Object
// Object.assign({//target zone},{}) -> deep copy object
// Object.freeze({}) -> Object freeze object

// let keys = [];
// for (let key in frontend) {
//     keys.push(key);
// }

// console.log(keys);

// for in

// const arr = ["html", "css", "js", "react"];

// for of and for in

// for (let key of ["html", "css", "js", "react"]) {
//     console.log(key);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// deep copy or shallow copy
// let arr = [1, 2, 3, 4];
// arr.push(6);
// let b = [...arr]; // deep copy

// // let b = arr; // shallow copy

// // for (let i = 0; i < arr.length; i++) {
// //     b.push(arr[i]); // deep copy
// // }
// b.push(5);
// console.log("Arr: ", arr);
// console.log("B: ", b);

// const arr = [];

// arr.push(5);

// front.html = "HTML 5";

// console.log(arr);
// console.log(front);

// const numbers = {
//     one: 1,
//     two: 2,
//     three: 3,
// };

// let copy = Object.assign({}, numbers, colors); // deep copy

// let copy = {...colors, ...numbers};

// copy.test = "test";

// console.log(colors);
// console.log(numbers);
// console.log(copy);

// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// console.log(...c);

// const colors = {
//     red: "#ff000",
//     green: "#afb00",
//     yellow: "#ee000",
// };

// console.log(colors.hasOwnProperty("white"));

// const app = new Object({key: "value"});

// console.log(app);

// class
// OOP

// var text

// var obj = {};
// var obj2 = {};

// console.log(obj === obj2);

// let arr = [1, 2, 3];
// let arr2 = [1, 2, 3];

// console.log(arr == arr2);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function getNumbers(a, b, c, ...d) {
//     console.log(a, b, c, d);
// }

// getNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, [`a`, `b`, `c`, `d`]);
