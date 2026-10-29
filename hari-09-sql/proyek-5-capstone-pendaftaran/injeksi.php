<?php
declare(strict_types=1);

// Memanggil file koneksi yang sudah ada
require_once __DIR__ . '/config/database.php';

$pdo = getConnection();
$emailInput = $_GET['email'] ?? "x' OR '1'='1";

echo "<h2>Demonstrasi SQL Injection</h2>";
echo "<p>Input Email: <code>" . htmlspecialchars($emailInput) . "</code></p>";


// 1. VERSI BERBAHAYA (Vulnerable)

echo "<h3>1. Versi Berbahaya (String Concatenation)</h3>";
$sqlVulnerable = "SELECT * FROM pendaftar WHERE email = '" . $emailInput . "'";
echo "<p>SQL yang dieksekusi: <code>" . htmlspecialchars($sqlVulnerable) . "</code></p>";

try {
    $stmtVulnerable = $pdo->query($sqlVulnerable);
    $hasilVulnerable = $stmtVulnerable->fetchAll();
    echo "<p>Jumlah data ditemukan: <strong>" . count($hasilVulnerable) . "</strong> (Kebocoran data terjadi!)</p>";
} catch (Exception $e) {
    echo "<p>Error: " . $e->getMessage() . "</p>";
}

echo "<hr>";

// -----------------------------------------------------------------------------
// 2. VERSI AMAN (Prepared Statement)
// -----------------------------------------------------------------------------
echo "<h3>2. Versi Aman (Prepared Statement)</h3>";
$sqlSafe = "SELECT * FROM pendaftar WHERE email = :email";
echo "<p>SQL yang dieksekusi: <code>" . htmlspecialchars($sqlSafe) . "</code></p>";

$stmtSafe = $pdo->prepare($sqlSafe);
$stmtSafe->execute(['email' => $emailInput]);
$hasilSafe = $stmtSafe->fetchAll();

echo "<p>Jumlah data ditemukan: <strong>" . count($hasilSafe) . "</strong> (Aman, data tidak bocor)</p>";
?>

<h3>Penjelasan Keamanan:</h3>
<p>
    Pada <strong>Versi Berbahaya</strong>, input <code>x' OR '1'='1</code> mengubah struktur perintah SQL sehingga kondisi WHERE selalu bernilai TRUE. Hal ini menyebabkan seluruh baris pada database berhasil diambil oleh peretas[cite: 4].
</p>
<p>
    Pada <strong>Versi Aman</strong>, prepared statement memisahkan sintaks SQL dengan data input. Input pengguna dikirim sebagai parameter literal, sehingga karakter khusus seperti petik satu (<code>'</code>) diperlakukan murni sebagai nilai teks, bukan pengubah perintah query[cite: 5].
</p>