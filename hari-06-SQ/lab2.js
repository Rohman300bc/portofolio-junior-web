
console.log("===== LAB 2: MAP AND SET =====");

// ========================================
// 1. Count word frequency using Map
// ========================================

console.log("\n1. Word Frequency");

function hitungFrekuensi(kalimat) {
  const kata = kalimat.split(" ");
  const frekuensi = new Map();

  for (const k of kata) {
    if (frekuensi.has(k)) {
      frekuensi.set(k, frekuensi.get(k) + 1);
    } else {
      frekuensi.set(k, 1);
    }
  }

  // Convert Map entries into an array and sort by frequency
  const hasil = [...frekuensi.entries()].sort(
    (a, b) => b[1] - a[1]
  );

  return hasil;
}

const kalimat = "saya belajar web saya suka web";
const hasilFrekuensi = hitungFrekuensi(kalimat);

console.log("Sentence:", kalimat);
console.log("Words sorted by frequency:");

for (const [kata, jumlah] of hasilFrekuensi) {
  console.log(`${kata}: ${jumlah}`);
}


// ========================================
// 2. Remove duplicate email addresses using Set
// ========================================

console.log("\n2. Remove Duplicate Emails");

function hapusDuplikatEmail(email) {
  return [...new Set(email)];
}

const emailPeserta = [
  "sari@email.com",
  "budi@email.com",
  "sari@email.com",
  "citra@email.com",
  "budi@email.com",
  "destya@email.com"
];

console.log("Before:", emailPeserta);

const emailUnik = hapusDuplikatEmail(emailPeserta);

console.log("After:", emailUnik);


// ========================================
// 3. Find intersection of Class A and Class B
// ========================================

console.log("\n3. Participants in Both Classes");

function cariIrisan(kelasA, kelasB) {
  const setB = new Set(kelasB);

  return [...new Set(kelasA)].filter(
    peserta => setB.has(peserta)
  );
}

const kelasA = ["Sari", "Budi", "Citra", "Erica"];
const kelasB = ["Citra", "Erica", "Fikri", "Ganang"];

console.log("Class A:", kelasA);
console.log("Class B:", kelasB);
console.log("Participants in both classes:", cariIrisan(kelasA, kelasB));


// ========================================
// 4. Check whether an array has duplicates
// ========================================

console.log("\n4. Check for Duplicates");

function adaDuplikat(daftar) {
  return new Set(daftar).size !== daftar.length;
}

console.log("Empty array:", adaDuplikat([]));
console.log("One element:", adaDuplikat(["Sari"]));
console.log("Repeated elements:", adaDuplikat(["Sari", "Budi", "Sari"]));
console.log("No repeated elements:", adaDuplikat(["Sari", "Budi", "Citra"]));
