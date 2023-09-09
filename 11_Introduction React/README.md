RESUME/RINGKASAN MATERI

1. Overview
<p>React adalah salah satu library JavaScript yang paling populer dan powerful untuk pengembangan aplikasi web modern. Dibuat oleh tim Facebook, React telah merevolusi cara kita membangun antarmuka pengguna, menghadirkan pengalaman yang lebih interaktif dan responsif.</p>
<p>Penggunaan utama React adalah untuk membangun komponen-komponen UI yang dapat digunakan kembali. Dengan menggunakan pendekatan komponen, kita dapat memisahkan UI menjadi bagian-bagian kecil yang terkelola dengan baik. Hal ini membantu meningkatkan efisiensi dalam pengembangan serta pemeliharaan kode. Salah satu keunggulan utama React adalah kemampuannya dalam memperbarui hanya bagian-bagian tertentu dari antarmuka pengguna yang berubah, tanpa harus melakukan reload halaman secara keseluruhan. Ini dikarenakan adanya konsep Virtual DOM pada React, di mana perubahan hanya diterapkan pada elemen-elemen yang benar-benar berubah.</p>

2. Apa itu React dan mengapa hal ini sangat berguna ?
- Library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile
- Open source yang di maintain oleh facebook
- Pada arsitektur MVC (Model- View - Controller), React JS hanya akan mengambil peran pada layer view saja.

<p>React adalah sebuah library JavaScript yang sangat populer untuk membangun antarmuka pengguna (UI) modern. Dikembangkan oleh tim Facebook, React digunakan oleh banyak perusahaan besar seperti Instagram, Netflix, dan Airbnb. Apa yang membuat React begitu berguna adalah kemampuannya dalam memecah antarmuka pengguna menjadi komponen-komponen kecil yang dapat diatur dengan lebih mudah.</p>
<p>Dalam dunia pengembangan web saat ini, tuntutan akan aplikasi yang cepat, interaktif, dan responsif semakin meningkat. Dengan menggunakan React, Anda dapat mencapai semua hal tersebut dengan lebih efisien. React menggunakan konsep Virtual DOM (Document Object Model) yang memungkinkan update hanya pada bagian-bagian tertentu dari halaman web tanpa perlu memuat ulang seluruh halaman tersebut</p>
<p>Selain itu, React memiliki fitur-fitur canggih seperti komponen-komponen reusable dan unidirectional data flow yang membuat pengembangan aplikasi menjadi lebih terorganisir dan mudah dipelajari. Dengan menggunakan konsep komponen, Anda dapat membagi tugas pembangunan UI menjadi potongan-potongan kecil yang independen satu sama lain. Hal ini memungkinkan kolaborasi tim secara efektif dan meningkatkan produktivitas dalam pengembangan aplikasi.</p>

3. Mengapa menggunakan React?
- Deklaratif
<p>React memungkinkan pengembang untuk mendeklarasikan bagaimana tampilan sebuah komponen harus terlihat dalam berbagai kondisi. Ini berarti hanya perlu fokus pada apa yang ingin Anda tampilkan, bukan bagaimana cara mencapainya.</p>
- Berbasis Komponen
<p>React mempromosikan penggunaan komponen sebagai unit dasar dalam pengembangan antarmuka. Anda dapat membagi antarmuka menjadi komponen yang lebih kecil dan menggabungkannya untuk membangun antarmuka yang lebih besar.</p>
- Belajar Sekali tulis di mana saja</p>
<p>React memungkinkan Anda untuk menulis komponen React sekali, lalu menggunakan komponen tersebut di berbagai proyek dan platform. Ini dikarenakan React dapat digunakan baik untuk pengembangan web (dengan ReactJS) maupun pengembangan aplikasi mobile (dengan React Native).</p>
- Popular
<p>React adalah salah satu library JavaScript yang paling populer dan banyak digunakan dalam industri. Banyak perusahaan besar menggunakan React dalam pengembangan produk mereka, sehingga membuatnya menjadi salah satu pilihan yang kuat untuk pengembangan antarmuka pengguna.</p>

4. Cara install react menggunakan vite
- Persiapkan Node.js: Pastikan telah menginstal Node.js (versi 12 atau yang lebih baru) di komputer. Ini diperlukan untuk menjalankan proyek React dengan Vite.
- Membuat Folder Vite dan React: Instal Vite dan React ke dalam proyek dengan menjalankan perintah npm create vite@latest.
- Instalasi node_modules: Karena kalau pakai vite, node modul tidak langsung didownload maka harus download node modules sendiri caranya dengan ketik perintah npm install.