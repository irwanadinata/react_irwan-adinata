RESUME / RINGKASAN MATERI

1. Apa itu clean code?
Clean code adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer.

2. Kenapa Clean Code?
Clean code dipergunakan karena memiliki memiliki beberapa aspek yang sangat penting, diantaranya:
- Work Collaboration
- Feature Development
- Faster Development

3. Karakteristik Clean Code
- Penamaan mudah difahami
- Mudah dieja dan dicari
- Singkat namun mendeskripsikan konteks
- Konsisten
- Hindari konteks yang tidak perlu
- Komentar
- Good function
- Gunakan konvensi
- Formating

Beberapa saran untuk formatting :
- Lebar baris code 80 – 120 karakter
- Satu class 300 – 500 baris
- Baris code yang berhubungan saling berdekatan
- Dekatkan fungsi dengan pemanggilnya
- Deklarasi variable berdekatan dengan penggunanya
- Perhatikan indentasi
- Menggunakan prettier atau formater

3. Clean code principle
a. KISS (Keep It So Simple)
<p>Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst. Tips untuk selalu KISS :</p>

- Fungsi atau class harus kecil
- Fungsi dibuat untuk melakukan satu tugas saja
- Jangan gunakan terlalu banyak argumen pada fungsi
- Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal

b. DRY (Dry Repeat Yourself)
<p>Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.</p>

c.	Refactoring
<p>Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.</p>

Teknik refactoring :
-	Membuat sebuah abstraksi 
-	Memecah kode dengan fungsi / class
-	Perbaiki penamaan dan lokasi koded
-	Deteksi kode yang memiliki duplikasi