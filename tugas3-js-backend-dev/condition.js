// Struktur Kontrol (if else, switch) -> condition.js
// Buat program yang meminta input dari pengguna dan menggunakan struktur if else untuk menentukan apakah angka tersebut genap atau ganjil.
// Buat program yang menggunakan switch untuk mencetak nama hari berdasarkan nomor hari (1 untuk Senin, 2 untuk Selasa, dst.).

const prompt = require("prompt-sync")({ sigint: true });
// menggunakan libary prompt-sync
const number = parseInt(prompt("Enter a number: "));

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input.");
}
