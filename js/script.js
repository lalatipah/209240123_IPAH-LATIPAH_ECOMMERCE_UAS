// Inisialisasi keranjang
let keranjang = [];
let totalHarga = 0;

// Data produk (bisa juga pakai untuk versi dinamis nanti)
const produk = [
  { nama: "one set casual wanita", harga: 189000 },
  { nama: "blouse kerah renda", harga: 145000 },
  { nama: "sepatu kest wanita", harga: 179000 },
  { nama: "sneakers sovella wanita", harga: 210000 },
  { nama: "slin bag MOSSDOOM", harga: 165000 },
  { nama: "handbag kecil KAFINA", harga: 199000 }
];

// Fungsi menambah ke keranjang
function tambahKeKeranjang(namaProduk, hargaProduk) {
  keranjang.push({ nama: namaProduk, harga: hargaProduk });
  totalHarga += hargaProduk;

  // Tampilkan notifikasi
  alert(`${namaProduk} berhasil ditambahkan ke keranjang!`);

  // Update tampilan jumlah dan total
  document.getElementById("jumlah-item").innerText = keranjang.length;
  document.getElementById("total-harga").innerText = formatRupiah(totalHarga);
}

// Format harga ke Rupiah
function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID');
}
