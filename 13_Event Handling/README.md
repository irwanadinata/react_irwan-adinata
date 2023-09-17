RESUME/RINGKASAN MATERI

1. Apa itu Event Handling

<p>Penanganan event adalah konsep penting dalam pengembangan perangkat lunak, terutama dalam konteks pengembangan web dan aplikasi. Panduan ini akan mencakup konsep penting terkait penanganan event, termasuk pengelolaan keadaan (state), perbedaan antara komponen berkeadaan dan tanpa keadaan, serta cara menangani event dengan efektif.</p>

2. State dalam Event Handling

<p>Dalam penanganan event, "state" merujuk pada kondisi atau data saat ini dari aplikasi pada suatu waktu tertentu. Ini mewakili informasi yang diperlukan oleh aplikasi untuk berfungsi dengan benar dan memberikan pengalaman pengguna yang berarti. Keadaan (state) dapat berubah sebagai respons terhadap tindakan pengguna atau peristiwa eksternal.</p>

3. Statefull – Stateless

- Komponen Berkeadaan (Stateful)
Komponen berkeadaan adalah komponen yang mempertahankan dan mengelola keadaan internalnya sendiri. Mereka dapat mengubah keadaannya sebagai respons terhadap event atau interaksi pengguna. Komponen berkeadaan sering digunakan untuk elemen UI yang kompleks atau yang memerlukan keberlanjutan data.
- Komponen Tanpa Keadaan (Stateless)
Komponen tanpa keadaan, juga dikenal sebagai "komponen fungsional" dalam beberapa kerangka kerja seperti React, tidak mengelola keadaan mereka sendiri. Mereka lebih sederhana dan lebih fokus pada perenderan UI berdasarkan properti input. Komponen tanpa keadaan sering digunakan untuk tujuan presentasi.

4. Penanganan Event

<p>Penanganan event melibatkan merespons tindakan pengguna atau peristiwa sistem dengan cara yang memperbarui keadaan aplikasi atau memicu perilaku tertentu. Ini bisa mencakup tindakan seperti klik tombol, pengiriman formulir, pergerakan mouse, dan input keyboard.</p>

4. Konsep penting dalam penanganan event meliputi:

- Pendengar Event (Event Listeners): Fungsi yang mendengarkan event tertentu dan menjalankan kode sebagai respons.
- Penangan Event (Event Handlers): Fungsi yang dijalankan saat suatu event terpicu, biasanya terkait dengan pendengar event.
- Propagasi Event (Event Propagation): Urutan pengiriman event ke elemen dalam hierarki DOM, termasuk fase penangkapan (capturing) dan fase pelemparan (bubbling).