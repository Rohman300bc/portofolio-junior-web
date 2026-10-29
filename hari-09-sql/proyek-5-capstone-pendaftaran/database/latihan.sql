-- 1. Tampilkan semua pendaftar diurutkan nama A-Z
SELECT *
FROM pendaftar 
ORDER BY nama ASC;

-- 2. Tampilkan 5 pendaftar terbaru
SELECT * 
FROM pendaftar 
ORDER BY tgl_daftar 
DESC LIMIT 5;

-- 3. Cari pendaftar yang namanya mengandung "an"
SELECT * 
FROM pendaftar 
WHERE nama 
LIKE '%an%';

-- 4. Tampilkan nama pendaftar beserta nama kelas (JOIN)
SELECT p.nama, k.nama_kelas 
FROM pendaftar p 
JOIN kelas k ON k.id = p.kelas_id;

-- 5. Hitung jumlah pendaftar per kelas (GROUP BY)
SELECT k.nama_kelas, COUNT(p.id) AS jumlah_pendaftar
FROM kelas k 
LEFT JOIN pendaftar p ON k.id = p.kelas_id
GROUP BY k.id, k.nama_kelas;

-- 6. Tampilkan kelas yang belum memiliki pendaftar (LEFT JOIN IS NULL)
SELECT k.nama_kelas 
FROM kelas k 
LEFT JOIN pendaftar p ON k.id = p.kelas_id
WHERE p.id IS NULL;

-- 7. Ubah nomor HP satu pendaftar (dengan WHERE)
-- Contoh ; Menguba nomor HP pendaftar denggan id = 1 --
UPDATE pendaftar 
SET no_hp = '081224466889' 
WHERE id = 1;

-- 8. Hapus satu pendaftar
-- Contoh; Mengubah nomor hp pendaftar dengan id = 8 --
DELETE FROM pendaftar 
WHERE id = 8;

-- 9. Memasukkan email ganda untuk mengamati error (1062 Duplicate entry)
-- Menjalankan dua perintah INSERT berikut akan memicu error pada perintah kedua --
-- karena kolom email memiliki constrait UNIQUE --
INSERT INTO pendaftar (nama, email, no_hp, alamat, kelas_id) 
VALUES ('Duplikat', 'sari@gmail.com', '089999999999', 'Solo', 1);

-- 10. Menghapus kelas yang masih memiliki pendaftar untuk mengamati error Foreign Key (1451)
DELETE FROM kelas 
WHERE id = 1;