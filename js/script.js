// datatypes in javascript
// 2 main Datatypes in js which are primitive and reference/ object type

//primitive data types 
//number. floating call numbers{alway have decimal even though it can't be seen}
//string
//boolean
//underfined
//null
//big int
//symbol.

let num = 23;
console.log(num);
let student = "obi";
let greeting = "what's";
let g = true;
let b;
console.log(b);

//LET
let age = 20;
console.log(age);
age = 21;
console.log(age);

//CONST
const birthYear = 1920;
console.log(birthYear);

//VAR
var job = "Programmer";
console.log(job);
job = "teacher";
console.log(job);

//Block scope
{
    let age = 20;
    console.log(typeof age);
}
{
    let age = "age";
    console.log(age);
}

//
const numb = "23";
console.log(typeof numb);

// naming variable
const last_name = "f";
const new3 = 33;
let MYname = "somtoo";

// Arithmettic operators
console.log(2+4);
console.log(4-39);
const year = 2024;
const ageNigeria = year - 1960;
console.log("Nigeria age", ageNigeria);
console.log(year / 10);
console.log(year * 2);

// Modulus
console.log(7 % 2);
console.log(10 % 4);
let x = 10;
console.log(++x);
console.log(x);
// console.log(x++); "Remember: the ++ sign placed before adds 1 immediately but when placed after you have to run console.log(x) to give the current value of x in the console."
console.log(--x);
console.log(x);

// Assignment Operators
let x2 = 3;
let y = 4;
x2 += y;   
// x2 = x2+ y ;; x2 = 3 + 4
console.log(x2);
console.log(y);
y += x2;
// y = x2 + y
console.log(y, x2);
console.log(y + x2);

// loose equality: just checks for the value
// comparison operators
let a = 20;
let c = 30;
console.log(a == c);

// Strict equality: seeks for the data type
// let a = "30";
// let a = 30;
// console.log(a === c); false

// let a = "30";
// let c = "30";
// console.log(a != c); false

// let a = 30;
// let c = 30;
// console.log(a !== c); false
// let a = "30";
// let c = 30;
// console.log(a !== c); true

// console.log(a > c); false
// console.log(a >= c); true
// console.log(a < c); false
// console.log(a <= c); true

// operator precedence
console.log(23 - 50 * 3 **3);
// 23 -50 * 27
// 23 - 1350
console.log((23 - 50) * 3 **3);
// 
// console.log(4 + 5 + 6);
let j = 4 + 5 + 6;
console.log((4 + 5 + 6) / 3);



// Assignment 1
let MW1 = 78;
let MH1 = 1.69;
let JW1 = 92;
let JH1 = 1.95;

let markBMI1 = MW1 / MH1 **2;
let johnBMI1 = JW1 / JH1 **2;

let markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Mark's BMI1", markBMI1);
console.log("John's BMI1", johnBMI1);
console.log("Is Mark's BMI higher than John's", markHigherBMI1);

// second data
let MW2 = 95;
let MH2 = 1.88;
let JW2 = 85;
let JH2 = 1.76;

let markBMI2 = MW2 / MH2 **2;
let johnBMI2 = JW2 / JH2 **2;

let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Mark's BMI2", markBMI2);
console.log("John's BMI2", johnBMI2);
console.log("Is Mark's BMI higher than John's", markHigherBMI2);