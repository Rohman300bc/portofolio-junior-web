<form method="post">
    <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">

    <p>
        <label for="nama">Nama</label><br>
        <input id="nama" name="nama" value="<?= e($lama['nama'] ?? '') ?>">
        <?php if (isset($galat['nama'])): ?>
            <span style="color:red;"><?= e($galat['nama']) ?></span>
        <?php endif; ?>
    </p>

    <!-- Kolom lainnya... -->

    <button type="submit">Simpan</button>
    <a href="index.php">Batal</a>
</form>