// Variabel, Tipe Data, dan Operator -> variabel.js
// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
// Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.

let a = 10;
a = 20;
console.log(a); // Output: 20

const b = 10;
console.log(b); // Output: 10
b = 20;
console.log(b); // Error: Cannot assign to 'b' because it is a constant

var c = 10;
console.log(c); // Output: 10
c = 20;
console.log(c); // Output: 20

let text = "Hello, World!"; // String
let number = 100; // Number
let isValid = true; // Boolean
let data = null; // Null
let notDefined; // Undefined
let person = { name: "Jane", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array

console.log(text, number, isValid, data, notDefined, person, numbers);

// Output:
// Hello, World! 100 true null undefined { name: 'Jane', age: 30 } [ 1, 2, 3, 4, 5 ]

let num1 = 10;
let num2 = 5;
let sum = num1 + num2; // 15
let difference = num1 - num2; // 5
let product = num1 * num2; // 50
let quotient = num1 / num2; // 2
let remainder = num1 % num2; // 0

console.log(sum, difference, product, quotient, remainder);
// Output:
// 15 5 50 2 0

let x = 10;
let y = "10";

console.log(x == y); // true (loose equality)
console.log(x === y); // false (strict equality)
console.log(x != y); // false
console.log(x !== y); // true
console.log(x > 5); // true
console.log(x <= 10); // true

// Output:
// true false true false true true

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue); // false

// Output:
// false
// true
// false
