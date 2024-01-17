// let number = 12;
// let toAbsolute = Math.abs(number);
// let min = Math.floor(number);
// console.log(toAbsolute, min);
// console.log(number);

// Math

// floor -> kichik tomonga yaxlitlash
// ceil -> katta tomonga yaxlitlash
// round -> haqiqiy yaxlitlash
// abs -> absolute yaxlitlash
// trunc -> faqat butun qimini yaxlitlash
// pow -> songa daraja tayinlash
// sqrt -> kvadrat darajadan chiqarish
// min . max ->

// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));
// console.log(Math.abs(number));
// console.log(Math.min(1, 2, 3, 4));
// console.log(Math.trunc(Math.random() * 100)); // 0-10a
// console.log(Math.pow(512, 1 / 9));
// console.log(Math.sqrt(25));

// let number = 20240262626;

// let num = Number(10);

// Number.isInteger(num) // butun yoki butun son emaslikka tekshiradi.
// console.log(Number.isInteger(number));
// console.log(Number.isSafeInteger(number));
// console.log(Number.parseInt(number));
// console.log(Number.parseFloat(number));
// console.log(number.toFixed()); // butun qismi
// console.log(number.toPrecision()); // string conversion
// console.log(number.toString()); // to String conversion
// console.log(number.toLocaleString("de-DE"));

// let str = "12";

// // + , - , / , * , %  to number
// // Number(number) to number
// // console.log(` number:  ${number} okay `); // template literal / interpolation

// console.log("number:", String(number));
// console.log("str: " + typeof Number(str));

// console.log(window);

let number = +prompt("Please enter a number");

// A butun son berilgan , A son musbat sonligi tekshirilisn!

const isInteger = Number.isInteger(number);
const isJuft = number % 2 == 0;

console.log(isInteger, isMusbat);

if (Number.isInteger(number) && number % 2 == 0) {
    console.log("sucessfully entered");
} else {
    console.log("Fail");
}
