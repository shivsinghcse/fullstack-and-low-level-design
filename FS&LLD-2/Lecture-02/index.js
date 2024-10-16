// function declaration

// function sayHi() {
//     console.log('Hi');
// }

// sayHi()

// function as expressions

// let sayHiFromExpression = function(){
//     console.log('Hi, I am a first class citizen');
//     return sayHi();
// }
// sayHiFromExpression()

// Hoisting

// console.log(msg);
// greet();

// var msg = 'hello';
// function greet() {
//     console.log(msg, 'inside greet');
// }

// let someVal = 'hello world';
// var msg = 'hello';
// function greet() {
//     var msg = 'i m msg inside greet.'
//     console.log(msg, 'happy holidays');
// }

// console.log(msg);
// greet();

// var msg = 'hello';

// greet1();
// greet2();

// console.log(msg);
// function greet1() {
//     var msg = 'inside greet1';
//     console.log(msg);
// }

// function greet2() {
//     var msg = 'inside greet2';
//     console.log(msg);
// }

debugger;
console.log(a);
var a = 9; // -- will work
let a = 9; // error (TDZ)
