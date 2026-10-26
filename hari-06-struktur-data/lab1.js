
const peserta = [
  { id: 1, nama: "Sari", kelas: "Web", nilai: 90, aktif: true },
  { id: 2, nama: "Budi", kelas: "Web", nilai: 68, aktif: true },
  { id: 3, nama: "Citra", kelas: "Data", nilai: 82, aktif: false },
  { id: 4, nama: "Destya", kelas: "AI", nilai: 55, aktif: true },
  { id: 5, nama: "Erica", kelas: "Web", nilai: 98, aktif: true },
  { id: 6, nama: "Fikri", kelas: "AI", nilai: 70, aktif: false },
  { id: 7, nama: "Ganang", kelas: "AI", nilai: 75, aktif: true },
  { id: 8, nama: "Helene", kelas: "Data", nilai: 79, aktif: false },
  { id: 9, nama: "Iris", kelas: "Web", nilai: 100, aktif: true },
  { id: 10, nama: "Jesse", kelas: "Data", nilai: 86, aktif: false }
];

// 1. Display only active participants (filter)
function getPesertaAktif(data) {
  return data.filter(p => p.aktif);
}

console.log("\n1. Active participants:");
console.log(getPesertaAktif(peserta));


// 2. Sort participants by name without modifying the original array
function sortByNama(data) {
  return [...data].sort((a, b) =>
    a.nama.localeCompare(b.nama)
  );
}

console.log("\n2. Participants sorted by name:");
console.log(sortByNama(peserta));

console.log("Original array remains unchanged:",
  peserta[0].nama === "Sari"
);


// 3. Find a participant by ID (find)
function cariPeserta(data, id) {
  const hasil = data.find(p => p.id === id);

  if (!hasil) {
    return `Participant with ID ${id} was not found.`;
  }

  return hasil;
}

console.log("\n3. Find participant with ID 3:");
console.log(cariPeserta(peserta, 3));

console.log("Find participant with ID 99:");
console.log(cariPeserta(peserta, 99));


// 4. Count participants in each class
function hitungPerKelas(data) {
  return data.reduce((jumlah, p) => {
    if (jumlah[p.kelas] === undefined) {
      jumlah[p.kelas] = 0;
    }

    jumlah[p.kelas]++;
    return jumlah;
  }, {});
}

console.log("\n4. Number of participants per class:");
console.log(hitungPerKelas(peserta));


// 5. Add, update, and delete participants
function tambahPeserta(data, pesertaBaru) {
  data.push(pesertaBaru);
}

function ubahNilai(data, id, nilaiBaru) {
  const pesertaDitemukan = data.find(p => p.id === id);

  if (!pesertaDitemukan) {
    return false;
  }

  pesertaDitemukan.nilai = nilaiBaru;
  return true;
}

function hapusPeserta(data, id) {
  const dataBaru = data.filter(p => p.id !== id);

  if (dataBaru.length === data.length) {
    return null;
  }

  return dataBaru;
}

// Use a copy so the original dataset stays unchanged
let dataUji = [...peserta];

console.log("\n5. Add, update, and delete participants:");

// Add a participant
tambahPeserta(dataUji, {
  id: 11,
  nama: "Kevin",
  kelas: "Data",
  nilai: 88,
  aktif: true
});

console.log("After adding Kevin:");
console.log(dataUji);

// Update a participant's score
const berhasilUbah = ubahNilai(dataUji, 2, 80);

console.log("Updated Budi's score:", berhasilUbah);
console.log(dataUji.find(p => p.id === 2));

// Delete a participant
dataUji = hapusPeserta(dataUji, 4) ?? dataUji;

console.log("After deleting participant with ID 4:");
console.log(dataUji);


// 6. Convert the array into an object indexed by ID (reduce)
function buatIndeksPeserta(data) {
  return data.reduce((indeks, p) => {
    indeks[p.id] = p;
    return indeks;
  }, {});
}

const indeksPeserta = buatIndeksPeserta(peserta);

console.log("\n6. Participant index:");
console.log(indeksPeserta);

console.log("Find participant with ID 5:");
console.log(indeksPeserta[5]);

console.log("Find participant with ID 99:");
console.log(indeksPeserta[99] ?? "Participant not found.");
