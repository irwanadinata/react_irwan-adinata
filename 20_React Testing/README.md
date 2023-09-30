RESUME/RINGKASAN MATERI

<p>Apa itu testing?</p>

<p>Testing adalah proses memverivikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.</p>

<p>Manfaat Testing</p>

1. Ketika aplikasi kita mempunyai coverage yang baik( mayoritas codebase tercover oleh test). Kita akan merasa percara diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebutm dan ada bagiab yang lain menjadi broken kita akan segera mengetahuinya.
2. Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

<p>Kategori Testing</p>
Secara umum, cara mengakses di React terbagi menjadi dua kategori, yaitu:

1. Rendering Componenet Trees
   <p>Didalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.</p>
2. Menjalankan Aplikasi Lengkap
   <p>Didalam environment peramaban(browser) asli. Ini dikenal sebagai tes “end-to-end”.</p>

<p>Pertimbangan memilih Perkakas</p>

1. Kecepatan iterasi vs environment yang realistis
   <p>Beberapa kakas menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan da melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lainmungkin menggunakan environment peramban asli, tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.</p>
2. Seberapa banyak mock
   <p>Dengan komponen, perbedaan antara tes “unit” dan tes “integrasi” bisa tidak sesuai. Jika kita mengetes sebuah form haruskah tes yang dilakukan juga menguji tombol yang ada didalamnya? Atau haruskah komponen memiliki rangkaian tes sendiri? Haruskah refactoring pada tombol merusak tes pada form?</p>

<p>Rekomendasi Tools untuk Testing</p>

1. Jest
2. React Testing Library

<p>Create Basic Testing With RTL</p>

1. Render dan Debug
   <p>Fungsi render RTL akan merender file JSX apapun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.
   React Testing Libaray digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.</p>

2. Memilih Element
   <p>React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL.</p>
   <p>Salah satu contohnya ialah getByTExt untuk memilih teks dari elemen yang sudah dipilih.</p>

3. Testing Custom Hook
   <p>Libraray yang digunakan untuk custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat-alat untuk mengetes hooks tanpa merender satu komponen</p>