// "use strict";

/// Object literal syntax

// const person = {
//     name: "Jahongir",
//     age: 21,
//     isStudent: true,
//     hobbies: ["play game", "reading books", "coding"],
// };

// console.log(person.hobbies[1]);

// Class instance

// const person = new Object({
//     name: "Jahongir",
//     age: 21,
//     isStudent: true,
// });

// console.log(person);

// const arr = [11];
// arr[0] = 13;
// arr[0] = "A";
// arr[1] = "B";

// console.log(arr);

// const room = {
//     color: "red",
// };

// // const laptop = {};

// // room.name = "Netflix";
// // room.size = "Large";
// // room.peoples = [];
// // room.peoples.push("Abdulaziz");
// // room.peoples.push("Abdulloh");
// // room.color = "white";

// console.log(room);

// const laptop = {
//     myName: "Macbook pro M2",
//     brand: "Apple",
//     color: "Silver",
//     cpu: "16GB",
//     memory: {
//         ssd: 512,
//         hdd: false,
//     },
//     screenSize: ["2556x1400", "1920x1080"],
//     language: ["English", "French", "Deutsch", "Russian", "Uzbek"],
//     batteryCylce: 102,
//     year: 2023,
//     price: 1400,
//     getFullname: function (n) {
//         console.log(this.name + " " + this.brand + "  " + this.color + " " + this.cpu);
//     },
// };

// console.log(this);

// const calc = {
//     add: function (a, b) {
//         return a + b;
//     },
// };

// const result = calc.add(11, 12);

// console.log(result);

// console.log(this); // Global window

// function test() {
//     console.log(this); // if "use stric" -> undefined
// }
// test();

// const exp = function () {
//     console.log(this); // if "use stric" -> undefined
// };

// exp();

// const arrow = () => {
//     console.log(this); // Global window
// };

// arrow();

// const obj = {
//     name: "Test Object",
//     type: "Test",
//     getInfo: function () {
//         console.log(this.name);
//     },
// };

// obj.getInfo();

// const NT = {
//     name: "NAJOT TA'LIM",
//     branches: [
//         {
//             name: "NAJOT TA'LIM Chilonzor filiali",
//             size: "Large",
//             isMain: true,
//             roomCount: 50,
//         },
//         {
//             name: "NAJOT TA'LIM Xadra filiali",
//             size: "medium",
//             isMain: false,
//             roomCount: 15,
//         },
//         {
//             name: "NAJOT TA'LIM Chimboy filiali",
//             size: "medium",
//             isMain: false,
//             roomCount: 20,
//         },
//         {
//             name: "NAJOT TA'LIM Farg'ona filiali",
//             size: "Large",
//             isMain: false,
//             roomCount: 27,
//         },
//     ],
//     type: "IT EDUCATION SYSTEM",
//     founder: "Temurbek Adhamov",
//     foundedYear: 2017,
// };

// const chilonzorBranch = {
//     name: "NAJOT TA'LIM chilonzor branch",
//     roomsCount: 50,
//     size: "large",
//     location: "Chilonzor 9",
// };

// const XadraBranch = {
//     ...NT,
//     ...chilonzorBranch,
//     name: "NAJOT TA'LIM Xadra branch",
//     location: "Xadra branch",
//     roomsCount: 21,
//     size: "medium",
// };

// delete XadraBranch.branches;

// console.log(XadraBranch);

// const app = {
//     name: "telegram",
//     ...{name: "Instagram", key: "smth"},
// };

// console.log(app);
