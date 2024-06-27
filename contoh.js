//console.log("hallo");

const prompt = require('prompt-sync')({sigint : true});

num1 = prompt("masukkan angka pertama : ");
num2 = prompt("kini angka ke-2 : ");
num3 = Number(num1) + Number(num2);
console.log("Hasil penjumlahannya : "+num3);