// Function -> math.js
// Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
// Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.

const prompt = require("prompt-sync")({ sigint: true });
// menggunakan libary prompt-sync
const number = parseInt(prompt("Masukkan jari-jari: "));

function circleArea(r) {
  return Math.PI * r * r;
}

console.log(circleArea(number));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);
