const express = require('express');
const app = express();
// Import koneksi database kamu (pastikan file ini ada)
// const db = require('./config/database'); 

const port = 2562;

app.set('view engine', 'ejs');
app.set('views', './view');
app.use(express.static('public'));

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/', (req, res) => {
    // gunakan dummyData dulu agar website TIDAK ERROR saat DB belum siap
    const dummyData = [
        { nama_produk: 'Cappucino', harga: 30000, gambar: 'cappucino.jpg' },
        { nama_produk: 'Espresso', harga: 20000, gambar: 'espressosingle.jpg' },
        { nama_produk: 'Caramel Macchiato', harga: 32000, gambar: 'caramel.jpg' },
        { nama_produk: 'Hazelnut Latte', harga: 35000, gambar: 'hazelnut.jpg' },
        { nama_produk: 'Vanilla Latte', harga: 30000, gambar: 'vanilla.jpg' },
        { nama_produk: 'Gula Aren', harga: 35000, gambar: 'espresso.jpg' }
    ];

    // Jika  pakai Database asli nanti, aktifkan baris db.query di bawah:
    /*
    db.query("SELECT * FROM menu", (err, results) => {
        if (err) return res.render('index', { dataMenu: dummyData });
        res.render('index', { dataMenu: results });
    });
    */

    //  dummyData agar UI muncul
    res.render('index', { dataMenu: dummyData });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});