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

console.log(msg);
greet();
  
var msg = 'hello';
function greet() {
    console.log(msg, 'inside greet');
}
