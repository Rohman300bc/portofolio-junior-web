
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

// Constants for score validation and passing grade
const NILAI_MIN = 0;
const NILAI_MAKS = 100;
const BATAS_LULUS = 70;

// Constants for letter grades
const BATAS_GRADE_A = 85;
const BATAS_GRADE_B = 70;
const BATAS_GRADE_C = 55;

async function main() {
    const rl = readline.createInterface({ input, output });

    // Store student names and scores in matching array positions
    const daftarNama = ['Angga','Betty','Cahyo','Dian','Erika'];
    const daftarNilai = [80,70,97,50,69];

    let jalan = true;

    // Repeat the menu until the user chooses to exit
    while (jalan) {
        console.log('\n===== PENGOLAH NILAI =====');
        console.log('1. Input nilai siswa');
        console.log('2. Tampilkan statistik');
        console.log('3. Tampilkan predikat per siswa');
        console.log('4. Keluar');

        const pilihan = (await rl.question('Pilih menu (1-4): ')).trim();

        switch (pilihan) {
            // MENU 1: Input student name and score
            case '1': {
                const nama = (await rl.question('Nama siswa: ')).trim();

                // Read the score as text before converting it to a number
                const inputNilai = (await rl.question('Nilai (0-100): ')).trim();
                const nilai = Number(inputNilai);

                // Validate the student's name
                if (nama === '') {
                    console.log('Nama siswa tidak boleh kosong.');
                }
                // Validate that the score is a number
                else if (inputNilai === '' || Number.isNaN(nilai)) {
                    console.log('Nilai harus berupa angka.');
                }
                // Validate that the score is between 0 and 100
                else if (nilai < NILAI_MIN || nilai > NILAI_MAKS) {
                    console.log(`Nilai harus antara ${NILAI_MIN} dan ${NILAI_MAKS}.`);
                }
                // Save the student if all input is valid
                else {
                    daftarNama.push(nama);
                    daftarNilai.push(nilai);

                    console.log(`Nilai ${nama} berhasil disimpan.`);
                }

                break;
            }

            // MENU 2: Display class statistics
            case '2': {
                // Check whether any scores have been entered
                if (daftarNilai.length === 0) {
                    console.log('Belum ada nilai siswa yang dimasukkan.');
                    break;
                }

                let totalNilai = 0;

                // Start with the first score as the highest and lowest
                let nilaiTertinggi = daftarNilai[0];
                let nilaiTerendah = daftarNilai[0];

                let jumlahLulus = 0;
                let jumlahTidakLulus = 0;

                // Go through every student's score
                for (let i = 0; i < daftarNilai.length; i++) {
                    const nilai = daftarNilai[i];

                    // Add the score to the total
                    totalNilai += nilai;

                    // Find the highest score
                    if (nilai > nilaiTertinggi) {
                        nilaiTertinggi = nilai;
                    }

                    // Find the lowest score
                    if (nilai < nilaiTerendah) {
                        nilaiTerendah = nilai;
                    }

                    // Count passing and failing students
                    if (nilai >= BATAS_LULUS) {
                        jumlahLulus++;
                    } else {
                        jumlahTidakLulus++;
                    }
                }

                // Calculate the average score
                const rataRata = totalNilai / daftarNilai.length;

                // Display the statistics
                console.log('\n===== STATISTIK NILAI =====');
                console.log(`Jumlah siswa       : ${daftarNilai.length}`);
                console.log(`Rata-rata          : ${rataRata.toFixed(2)}`);
                console.log(`Nilai tertinggi    : ${nilaiTertinggi}`);
                console.log(`Nilai terendah     : ${nilaiTerendah}`);
                console.log(`Jumlah lulus       : ${jumlahLulus}`);
                console.log(`Jumlah tidak lulus : ${jumlahTidakLulus}`);

                break;
            }

            // MENU 3: Display each student's grade and pass/fail status
            case '3': {
                // Check whether any students have been entered
                if (daftarNilai.length === 0) {
                    console.log('Belum ada nilai siswa yang dimasukkan.');
                    break;
                }

                console.log('\n===== PREDIKAT SISWA =====');

                // Use the same index to get each student's name and score
                for (let i = 0; i < daftarNilai.length; i++) {
                    const nama = daftarNama[i];
                    const nilai = daftarNilai[i];

                    let grade;

                    // Determine the letter grade
                    if (nilai >= BATAS_GRADE_A) {
                        grade = 'A';
                    } else if (nilai >= BATAS_GRADE_B) {
                        grade = 'B';
                    } else if (nilai >= BATAS_GRADE_C) {
                        grade = 'C';
                    } else {
                        grade = 'D';
                    }

                    // Determine whether the student passed
                    let status;

                    if (nilai >= BATAS_LULUS) {
                        status = 'Lulus';
                    } else {
                        status = 'Tidak lulus';
                    }

                    // Print the student's result
                    console.log(
                        `${nama} | Nilai: ${nilai} | Grade: ${grade} | ${status}`
                    );
                }

                break;
            }

            // MENU 4: Exit the program
            case '4': {
                jalan = false;
                console.log('Terima kasih.');
                break;
            }

            // Handle invalid menu choices
            default: {
                console.log('Pilihan tidak valid. Masukkan 1-4.');
            }
        }
    }

    // Close the terminal interface
    rl.close();
}

// Start the program
main();

