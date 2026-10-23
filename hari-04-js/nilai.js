
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const NILAI_MIN = 0;
const NILAI_MAKS = 100;
const BATAS_LULUS = 70;
const BATAS_GRADE_A = 85;
const BATAS_GRADE_B = 70;
const BATAS_GRADE_C = 55;

async function main() {
  const rl = readline.createInterface({ input, output });

  // Menyimpan nama dan nilai siswa berdasarkan indeks yang sama
  const daftarNama = [];
  const daftarNilai = [];

  let jalan = true;

  while (jalan) {
    console.log('\n===== PENGOLAH NILAI =====');
    console.log('1. Input nilai siswa');
    console.log('2. Tampilkan statistik');
    console.log('3. Tampilkan predikat per siswa');
    console.log('4. Keluar');

    const pilihan = (await rl.question('Pilih menu (1-4): ')).trim();

    switch (pilihan) {
      case '1': {
        const nama = (await rl.question('Nama siswa: ')).trim();

        // Baca nilai sebagai teks terlebih dahulu untuk memeriksa input kosong
        const inputNilai = (await rl.question('Nilai (0-100): ')).trim();
        const nilai = Number(inputNilai);

        // Validasi nama dan nilai
        if (nama === '') {
          console.log('Nama siswa tidak boleh kosong.');
        } else if (inputNilai === '' || Number.isNaN(nilai)) {
          console.log('Nilai harus berupa angka.');
        } else if (nilai < NILAI_MIN || nilai > NILAI_MAKS) {
          console.log(`Nilai harus antara ${NILAI_MIN} dan ${NILAI_MAKS}.`);
        } else {
          // Simpan nama dan nilai jika input valid
          daftarNama.push(nama);
          daftarNilai.push(nilai);

          console.log(`Nilai ${nama} berhasil disimpan.`);
        }

        break;
      }

      case '2': {
        // Periksa apakah sudah ada data siswa
        if (daftarNilai.length === 0) {
          console.log('Belum ada nilai siswa yang dimasukkan.');
          break;
        }

        let totalNilai = 0;
        let nilaiTertinggi = daftarNilai[0];
        let nilaiTerendah = daftarNilai[0];
        let jumlahLulus = 0;
        let jumlahTidakLulus = 0;

        // Hitung total, nilai tertinggi, terendah, dan jumlah kelulusan
        for (let i = 0; i < daftarNilai.length; i++) {
          const nilai = daftarNilai[i];

          totalNilai += nilai;

          if (nilai > nilaiTertinggi) {
            nilaiTertinggi = nilai;
          }

          if (nilai < nilaiTerendah) {
            nilaiTerendah = nilai;
          }

          if (nilai >= BATAS_LULUS) {
            jumlahLulus++;
          } else {
            jumlahTidakLulus++;
          }
        }

        const rataRata = totalNilai / daftarNilai.length;

        console.log('\n===== STATISTIK NILAI =====');
        console.log(`Jumlah siswa      : ${daftarNilai.length}`);
        console.log(`Rata-rata         : ${rataRata.toFixed(2)}`);
        console.log(`Nilai tertinggi   : ${nilaiTertinggi}`);
        console.log(`Nilai terendah    : ${nilaiTerendah}`);
        console.log(`Jumlah lulus      : ${jumlahLulus}`);
        console.log(`Jumlah tidak lulus: ${jumlahTidakLulus}`);

        break;
      }

      case '3': {
        if (daftarNilai.length === 0) {
          console.log('Belum ada nilai siswa yang dimasukkan.');
          break;
        }

        console.log('\n===== PREDIKAT SISWA =====');

        // Gunakan indeks yang sama untuk mengambil nama dan nilai
        for (let i = 0; i < daftarNilai.length; i++) {
          const nama = daftarNama[i];
          const nilai = daftarNilai[i];

          let grade;

          if (nilai >= BATAS_GRADE_A) {
            grade = 'A';
          } else if (nilai >= BATAS_GRADE_B) {
            grade = 'B';
          } else if (nilai >= BATAS_GRADE_C) {
            grade = 'C';
          } else {
            grade = 'D';
          }

          // Tentukan status kelulusan
          let status;

          if (nilai >= BATAS_LULUS) {
            status = 'Lulus';
          } else {
            status = 'Tidak lulus';
          }

          console.log(`${nama} | Nilai: ${nilai} | Grade: ${grade} | ${status}`);
        }

        break;
      }

      case '4': {
        jalan = false;
        console.log('Terima kasih.');
        break;
      }

      default: {
        console.log('Pilihan tidak valid. Masukkan 1, 2, 3, atau 4.');
      }
    }
  }

  rl.close();
}

main();
