CREATE DATABASE db_pelatihan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 
USE db_pelatihan; 
 
CREATE TABLE kelas ( 
  id INT AUTO_INCREMENT PRIMARY KEY, 
  nama_kelas VARCHAR(100) NOT NULL, 
  kuota INT NOT NULL DEFAULT 30 
) ENGINE=InnoDB; 
 
CREATE TABLE pendaftar ( 
  id INT AUTO_INCREMENT PRIMARY KEY, 
  nama VARCHAR(100) NOT NULL, 
  email VARCHAR(120) NOT NULL UNIQUE, 
  no_hp VARCHAR(20) NOT NULL, 
  alamat TEXT NULL, 
  kelas_id INT NOT NULL, 
  tgl_daftar TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  CONSTRAINT fk_pendaftar_kelas FOREIGN KEY (kelas_id) REFERENCES kelas(id) 
    ON DELETE RESTRICT ON UPDATE CASCADE 
) ENGINE=InnoDB; 
 
CREATE INDEX idx_pendaftar_nama ON pendaftar (nama);

-- Dummy data kelas
INSERT INTO kelas (nama_kelas, kuota) VALUES
('Web programming', 30),
('Data science', 20),
('Machine Learning', 25);


INSERT INTO pendaftar (nama, email, no_hp, alamat, kelas_id) VALUES 
('Sari Wijaya', 'sariw@contoh.com', '085859594567890', 'Surakarta', 1),
('Raden Hadi', 'hadir@contoh.com', '0812358585890', 'Surakarta', 3),
('Queenza Salima', 'queensa@contoh.com', '08157565667890', 'Johannesburg', 1),
('Parmin Ahmad', 'ahmadpa@contoh.com', '0812344857590', 'Surakarta', 2),
('Oktaviani Pancasari', 'oktavtinggi@contoh.com', '081457587890', 'Surakarta', 1),
('Novia Sembiring', 'sembiragung@contoh.com', '0840000567890', 'Oslo', 2),
('Manhal Waworuntu', 'dianam@contoh.com', '08927547890', 'Santiago', 1),
('Lintang Sumunar', 'jkla297@contoh.com', '081939947890', 'Quebec', 3),
('Kalista Ahmad', 'kalistenan@contoh.com', '0828293567890', 'Jakarta', 1),
('Johan Annasir', 'jojojo@contoh.com', '081234588490', 'Manado', 3);  