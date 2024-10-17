// console.log(a);
// var a = 10;
// function test() {
//     console.log('I am a test func');
// }
// test();
//  output===
// undefined
// I am a function test

// console.log(a);
// var a = 10;
// test();
// function test(){
//     console.log('I am a test func');
// }

// undefined
// I am a test func.

// var a = 20;
// function parent() {
//     console.log(a);
// }

// parent();
// since a was in global scope, output eas 20

// function parent() {
//     var a = 20; // a is not in global scope.
//     function child() {
//         console.log(a);
//     }
//     child();
// }

// parent();

// function parent(){
//     var a = 20;
//     function child(){
//         console.log(a);

//         function grandChild(){
//             console.log(a);
//         }
//         grandChild();
//     }
//     child();
// }

// parent(); // 20 20

// function parent(){
//     function child(){
//         console.log(a); // ReferenceError: a is not defined

//         function grandChild(){
//             var a = 20;
//             console.log(a);
//         }
//         grandChild();
//     }
//     child();
// }

// parent();

// All children function will have access to its parent.
// Top-down hierarchial order
// This is known as Lexical scope.
// chain that forms from grandchild to child to parent is called as scope chain.
// scope :- refers to where in a program a variable or function is accessible.

// Lexical Environment:
// Local memory + environment of the parent

function greet() {
    var msg = 'happy holidays';
    sayHH();
    function sayHH() {
        console.log('inside HH ', msg);
    }
}
greet();
console.log('Outer', msg); // error
// 'sayHH' is lexically inside the 'greet' function
// whenever EC is created, we also get access to the Lexical environment of the parent.