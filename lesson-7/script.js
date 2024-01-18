// console.log(true && 1); // 1
// console.log(true || (11 * "" && 12)); // true
// console.log(10 * "");

// truthy

// falthy

// + , - , * , / , %

// console.log("hello" + undefined); // to string
// console.log(1 * true); // number
// console.log(NaN - 1); //
// console.log(1 * "     ,"); //

// let n = null;

// nullish value : null , undefined

// console.log(undefined ?? "topilmadi");

// && , || , ??

// SUPER CONTRACT : 120M
// o'tish balli : IELTS: 5 , TEST: 120, KONTRAKT: 20M
// GRANT: IELTS: 7 , TEST: 170 KONTRAKT: 0

// let IELTS = 7;
// let TEST = 90;
// let CONTRACT = 0;

// if ((IELTS >= 5 && TEST >= 120) || CONTRACT >= 120) {
//     console.log("Welcome to Unversity!");
// } else {
//     console.log("Congratulations successfully Fail!");
// }

// if (day == 1) {
//     console.log("Dushanba");
// } else if (day == 2) {
//     console.log("Seshanba");
// } else {
//     console.log("Bunday kun yo'q");
// }

// let n = 0;

// while (n <= 100) {
//     if (n % 2 == 1) {
//         console.log(n);
//     }
//     n++;
// }

// do {
//     console.log(n); // 0 / 1
//     n++; // 1 // 2
// } while (n <= 10);

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// 1*2*3*4*5*6*7*8*9=9!

// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         document.write(`${i}x ${j}=${i * j}` + "<br />");
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     if (i == 7) {
//         break;
//     }
// }

// let num = +prompt("N=");

// for (let i = 0; i < 100; i++) {
//     if (i == num) {
//         console.log("Your number is" + i);
//         continue;
//     }
// }

// function decloration

// maxnumber(1, 4);

function maxnumber(a, b) {
    console.log(`${a}+${b}=${a + b}`);
}

// function expression

const app = function (a, c) {
    console.log(a + c);
};

let chat = app;

let message = chat;

app(10, 15);
chat(20, 20);
chat(30, 30);

message("salom ", "dunyo");

// arrow

const globalapp = "2345";

const ssn = (n) => console.log(n);

arrowFn(globalapp);
