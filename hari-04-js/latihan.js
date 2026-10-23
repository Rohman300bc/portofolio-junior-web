/*
let nama = "Muhammad Taufiqurrohman";
let umur = 50;
let tinggiBadan = 1.74;
let statusAktif = true;

console.log(`Halo, ${nama} Umur ${umur} tahun.`);


let radius = 10;

luasLingkaran = Math.PI * radius * radius;
kelilingLingkaran = Math.PI * radius * 2;
console.log(`Luas lingkaran dengan jari-jari ${radius} cm adalah ${luasLingkaran} cm2 `);
console.log(`Keliling lingkaran dengan jari-jari ${radius} cm adalah ${kelilingLingkaran} cm.`)



let celcius = 50;
fahrenheit = celcius * 9/5 + 32;
console.log(`Suhu ${celcius} Celcius adalah ${fahrenheit} Fahrenheit.`);
*/

// Program A: konversi nilai ke huruf 
const nilai = Number(prompt('Nilai (0-100):')); 
let grade; 
if (nilai >= 85) grade = 'A'; 
else if (nilai >= 70) grade = 'B'; 
else if (nilai >= 55) grade = 'C'; 
else grade = 'D'; 
console.log(`Grade: ${grade}`); 