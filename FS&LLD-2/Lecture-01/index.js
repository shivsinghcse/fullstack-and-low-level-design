console.log('Hi, I an running from external JS file.');

// valid JS
// var a = true;
// console.log(a);

// var b = false;
// console.log(b);

// will throw error

// var city = "Bangalore";
// console.log(city);

// let city = 'Bangalore';
// console.log(city);

// city = 'Delhi';
// console.log(city);

// const goat = 'Dhoni';
// goat = 'Kohli';

// console.log(goat);

// --- Data type in JS---

// let a = 1;
// let b = 0.12323;
// let c = -120.4;
// let d = 2 / 0;
// let special = 'hello' / 0;

// console.log(a, typeof a);
// console.log(b, typeof b);
// console.log(c, typeof c);
// console.log(d, typeof d);
// console.log(special, typeof special);

/*

1 number
0.12323 number
-120.4 number
Infinity number
NaN number

*/

// --- String

// let str = 'JS';
// let str2 = 'Hello';
// let str3 = `i am a template literal`;

// console.log(str, typeof str);
// console.log(str2, typeof str2);
// console.log(str3, typeof str3);

/*
JS string
Hello string
i am a template literal string
*/

// 50 crore views online.

// let userCount = '50 Crores';
// let message = 'There are ' + userCount + ' users online.';

// let message2 = `There are ${userCount} users online.`

// console.log(message);
// console.log(message2);

// boolean

// let isEven = true;
// let isOdd = false;

// console.log(isEven);
// console.log(isOdd);

// undefined
// when a variable is not defined, then default value is undefined.

// let course;
// console.log(course, '[course]');

// null
// when value for the variable DO NOT Exists.
// nothing or empty
// let finalMarks = null;
// console.log(finalMarks);

// ------Functions -------

function printName(name) {
    console.log('Hi', name);
}

printName('Shiv');

// arrays----

// used to store multiple  values of multiple datatypes.
// saves elements in index manner.
//         0  1  2  3   4     5
// let arr = [1, 2, 3, 4, 'Hi', true]
// array indexing starts from zero.
// console.log(arr); // [1, 2, 3, 4, 'Hi', true]
// console.log(arr[2]); // 3

// arr[0] = undefined;
// console.log(arr[0]);

// console.log(arr.length); // no. of elements in the array

// array methods -----

let cars = ['BMW', 'Mercedes'];
// push = adds an element at the end of the array
// cars.push("Audi");
// pop = deletes the 'Last' element from an array
// const removedValue = cars.pop();
// console.log(removedValue);
// console.log(cars, 'after using the pop');

// unshift
// add an element to begnning of an array
cars.unshift('Ferrari');
console.log(cars, 'after using unshift');

// shift
// remove the first / 0th element
// cars.shift()
// console.log(cars, 'after using shift');

// ------  Objects

// stores data in key-value pairs

let person = {
    name: 'Shiv',
    city: 'Lucknow',
};

console.log(person);
console.log(person.name);
console.log(person['city']);

let captainAmerica = {
    name: 'Steve Rogers',
    age: 102,
    alias: ['captain', 'leader', 'avenger', 'cap'],
    sayHi: function () {
        console.log('Hi from cap.');
    },
    address: {
        country: 'USA',
        city: {
            name: 'California',
            pincode: 123456,
        },
    },
    isDCRanger: false,
};

console.log(captainAmerica);
console.log(captainAmerica.alias[2]);
console.log(captainAmerica.sayHi());
console.log(captainAmerica.isDCRanger);
console.log(captainAmerica.address.country);
console.log(captainAmerica.address.city.name);

/*
    {
  name: 'Steve Rogers',
  age: 102,
  alias: [ 'captain', 'leader', 'avenger', 'cap' ],
  sayHi: [Function: sayHi],
  address: { country: 'USA', city: { name: 'California', pincode: 123456 } },
  isDCRanger: false
}
avenger
Hi from cap.
undefined
false
USA
California
*/

// add a property in object

captainAmerica.movies = ['End game', 'Civil war'];
console.log(captainAmerica, 'after adding movies property');

// delete a property

delete captainAmerica.age;
console.log(captainAmerica, 'after deleting age');