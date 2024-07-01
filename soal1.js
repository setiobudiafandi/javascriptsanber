const prompt = require('prompt-sync')({sigint : true});

x = prompt("Masukkan nilai x : ");
let y;

if(x < 0) {
    console.log("Tidak bisa input bilangan negatif")
} 
else if (x % 2 !== 0) {
    console.log("Tidak bisa input bilangan ganjil")
}
else {
    y = Math.sqrt(x)
    console.log("Hasil angkar pangkat 2 : " + y)
}