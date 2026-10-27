// Pencarian linear: O(n), tidak perlu terurut
function cariLinear(daftar, target) {
    for (let i = 0; i < daftar.length; i++) {
        if (daftar[i] === target) return i;
    }
    return -1;
}
// Pencarian biner: O(log n), WAJIB terurut
function cariBiner(daftarUrut, target) {
    let kiri = 0;
    let kanan = daftarUrut.length - 1;
    while (kiri <= kanan) {
        const tengah = Math.floor((kiri + kanan) / 2);
        if (daftarUrut[tengah] === target) return tengah;
        if (daftarUrut[tengah] < target) kiri = tengah + 1;
        else kanan = tengah - 1;
    }
    return -1;
}
// Bubble sort: O(n^2), sederhana untuk belajar
function bubbleSort(daftar) {
    const hasil = [...daftar];
    for (let i = 0; i < hasil.length - 1; i++) {
        let adaTukar = false;
        for (let j = 0; j < hasil.length - 1 - i; j++) {
            if (hasil[j] > hasil[j + 1]) {
                [hasil[j], hasil[j + 1]] = [hasil[j + 1], hasil[j]];
                adaTukar = true;
            }
        }
        if (!adaTukar) break;
    }
    return hasil;
}
// Merge sort: O(n log n), membagi lalu menggabungkan
function mergeSort(daftar) {
    if (daftar.length <= 1) return daftar;
    const tengah = Math.floor(daftar.length / 2);
    return gabung(mergeSort(daftar.slice(0, tengah)), mergeSort(daftar.slice(tengah)));
}
function gabung(kiri, kanan) {
    const hasil = [];
    let i = 0;
    let j = 0;
    while (i < kiri.length && j < kanan.length) {
        hasil.push(kiri[i] <= kanan[j] ? kiri[i++] : kanan[j++]);
    }
    return hasil.concat(kiri.slice(i), kanan.slice(j));
}


const arrayKosong = [];
const arraySatuElemen = [42];
const arrayTerurut = [1, 2, 3, 4, 5];
const arrayTerbalik = [5, 4, 3, 2, 1];
const arrayDuplikat = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log("cariLinear:", cariLinear(arrayTerurut, 3));
console.log("cariBiner:", cariBiner(arrayTerurut, 3));
console.log("bubbleSort:", bubbleSort(arrayTerbalik));
console.log("bubbleSort:", bubbleSort(arrayDuplikat));
console.log("mergeSort:", mergeSort(arrayTerbalik));
console.log("mergeSort:", mergeSort(arrayDuplikat));
