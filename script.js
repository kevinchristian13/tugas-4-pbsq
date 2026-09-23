// 1. Array of object berisi minimal 5 data sesuai studi kasus (Studi Kasus: Menu Restoran)
const daftarMenu = [
    { id: 1, nama: "Nasi Goreng Spesial", harga: 25000, kategori: "Makanan", tersedia: true },
    { id: 2, nama: "Mie Goreng Jawa", harga: 20000, kategori: "Makanan", tersedia: false },
    { id: 3, nama: "Ayam Bakar Madu", harga: 30000, kategori: "Makanan", tersedia: true },
    { id: 4, nama: "Es Teh Manis", harga: 5000, kategori: "Minuman", tersedia: true },
    { id: 5, nama: "Jus Alpukat", harga: 12000, kategori: "Minuman", tersedia: true },
    { id: 6, nama: "Kopi Hitam", harga: 8000, kategori: "Minuman", tersedia: false }
];

function tampilkanMenuTersedia(kategoriPilihan) {
    console.log(`\n--- Daftar ${kategoriPilihan} yang Sedang Tersedia ---`);
    let menuDitemukan = 0;

    for (const menu of daftarMenu) {
        if (menu.kategori === kategoriPilihan && menu.tersedia === true) {
            console.log(`- ${menu.nama}: Rp${menu.harga}`);
            menuDitemukan++;
        }
    }

    if (menuDitemukan === 0) {
        console.log(`Maaf, tidak ada ${kategoriPilihan} yang tersedia saat ini.`);
    }
}

function hitungRataRataHarga() {
    let totalHarga = 0;
    let jumlahItem = daftarMenu.length;

    daftarMenu.forEach((menu) => {
        totalHarga += menu.harga;
    });

    let rataRata = totalHarga / jumlahItem;
    console.log(`\n--- Ringkasan Harga ---`);
    console.log(`Rata-rata harga dari seluruh (${jumlahItem}) item di menu adalah: Rp${rataRata.toFixed(2)}`);
    
    return rataRata;
}

console.log("=== SISTEM INFORMASI MENU RESTORAN ===");
tampilkanMenuTersedia("Makanan");
tampilkanMenuTersedia("Minuman");
hitungRataRataHarga();