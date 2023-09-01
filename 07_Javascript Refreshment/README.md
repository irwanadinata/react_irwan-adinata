RESUME/RINGKASAN MATERI

1. Pengertian Javascript
<p>JavaScript adalah bahasa pemrograman yang dapat digunakan untuk menambahkan interaksi dan dinamisme ke halaman web. JavaScript biasanya berjalan di dalam browser web, sehingga dapat menambahkan JavaScript ke halaman web untuk meningkatkan fungsi dan kemampuan halaman tersebut. JavaScript dapat digunakan untuk mengatur elemen halaman web, memanipulasi data, menangani event, dan banyak hal lainnya yang membuat halaman web lebih interaktif dan menarik.</p>

2. Alasan untuk mempelajari Javascript
- Mudah dipelajari untuk pemula
- Cross platform, artinya JavaScript bisa digunakan untuk membuat
- aplikasi mobile, website, backend, desktop app, maupun machine learning
- Digunakan oleh beberapa big company macam Meta, Netflix, eBay, Google, LinkedIn, Microsoft, Paypal, dll
- Support semua platform browser

3. Cara menjalankan program Javascript
<p>Untuk menjalankan sebuah program JavaScript dibutuhkan satu program yang perlu di install dalam device kita yaitu Node.js. Node.js adalah sebuah platform runtime JavaScript yang dapat digunakan untuk mengembangkan aplikasi web yang responsif dan cepat. Node.js menggunakan engine JavaScript V8 dari Google untuk mengeksekusi kode JavaScript di server, sehingga dapat menggunakan JavaScript untuk mengembangkan aplikasi server-side. Dengan Node.js dapat menulis aplikasi server-side dengan JavaScript yang sama yang digunakan untuk mengembangkan aplikasi client-side, sehingga dapat membuat aplikasi web yang terintegrasi dan responsif.</p>

4. Introducing Data Type
<p>Tipe data adalah sebuah kategori yang menentukan jenis data yang disimpan dalam sebuah variabel atau konstanta di dalam bahasa pemrograman. Di JavaScript, tipe data menentukan jenis data yang disimpan dalam sebuah variabel, seperti apakah itu teks, angka, atau boolean.</p>

<p>Jenis-jenis tipe data</p>
Berikut adalah beberapa tipe data yang ada di JavaScript:
<p>A. Primitive:</p>
<p>- String: tipe data yang menyimpan teks, seperti "hello". Kamu dapat membuat string dengan menggunakan tanda petik, baik tanda petik tunggal (') maupun tanda petik ganda (").</p>
<p>- Number: tipe data yang menyimpan angka, seperti 42. Kamu tidak perlu menggunakan tanda petik untuk membuat number.
<p>- Boolean: tipe data yang menyimpan nilai true atau false.</p>
<p> Null: tipe data yang menyimpan nilai null, yang merupakan sebuah nilai yang tidak memiliki nilai.</p>
<p>- Undefined: tipe data yang menyimpan nilai undefined, yang merupakan sebuah nilai yang tidak memiliki nilai dan tidak terdefinisi.</p>

<p>B. Collection</p>
<p>- Object: tipe data yang menyimpan kumpulan pasangan kunci-nilai. Kamu dapat membuat object dengan menggunakan tanda kurung kurawal.</p>
<p>Array: tipe data yang menyimpan kumpulan elemen yang dapat berupa tipe data apa saja. Kamu dapat membuat array dengan menggunakan tanda kurung siku [].</p>

5. Introduction Variable
<p>Variabel adalah komponen penting dalam pemrograman JavaScript yang digunakan untuk menyimpan nilai dan memberikannya nama yang dapat digunakan dalam program. Dalam JavaScript, variabel dapat berfungsi sebagai wadah untuk menyimpan data seperti angka, teks, atau bahkan fungsi. Dengan menggunakan variabel, pengembang dapat dengan mudah mengakses dan memanipulasi nilai-nilai tersebut di seluruh program. Dalam JavaScript, variabel juga bersifat dinamis, artinya tipe datanya dapat berubah saat program dieksekusi.</p>
<p>Ada 3 cara mendeklarasikan variable:</p>
- var
<p>Var memiliki cakupan yang terbatas pada fungsi atau global, sehingga variabel yang dibuat dengan var dapat diakses dari bagian manapun dalam fungsi tersebut ataupun secara global. Meskipun begitu, penggunaan var dapat menimbulkan masalah seperti hoisting.</p>
- let
<p>let digunakan untuk mendeklarasikan variabel dengan lingkup blok. Variabel yang dideklarasikan dengan let hanya dapat diakses di dalam blok tempat mereka dideklarasikan. Ini membantu mencegah konflik nama variabel dan membuat kode lebih aman dan mudah dipelihara.</p>
- const
<p>digunakan untuk mendeklarasikan variabel dengan nilai tetap atau konstan yang tidak dapat diubah setelah diberikan nilai awal. Ini sangat berguna ketika kita ingin menghindari perubahan tak disengaja pada nilai variabel.</p>

6. Function
<p>Function merupakan salah satu konsep paling fundamental dalam bahasa pemrograman, termasuk JavaScript. Dalam konteks JavaScript, function adalah sekumpulan pernyataan yang dirancang untuk melakukan tugas tertentu secara berulang atau sesuai kebutuhan. Function ini sangat penting karena memberikan fleksibilitas dan modularitas pada kode kita.</p>
<p>Salah satu manfaat utama dari penggunaan function adalah kemampuan untuk menghindari pengulangan kode. Dengan menggunakan function, kita dapat menulis blok kode yang berguna dan dapat digunakan kembali di berbagai bagian program kita. Hal ini membantu menjaga kebersihan dan keterbacaan kode, serta meminimalisir jumlah kesalahan yang mungkin terjadi.</p>
<p>Tidak hanya itu, menggunakan function juga memungkinkan kita untuk memecah program menjadi bagian-bagian kecil yang lebih mudah dikelola. Misalnya, jika kita memiliki sebuah tugas kompleks yang terdiri dari beberapa langkah, maka kita dapat memecah tugas tersebut menjadi beberapa function yang lebih sederhana dan terpisah. Hal ini membantu meningkatkan struktur program secara keseluruhan.</p>
<p>Keuntungan lainnya adalah reusabilitas code (kode dapat digunakan kembali). Ketika kita membuat sebuah function yang bisa dipanggil berkali-kali di berbagai bagian program, maka itu artinya kita tidak perlu menulis ulang blok kode yang sama setiap kali kita ingin melakukan tugas tersebut. Ini tidak hanya menghemat waktu tapi juga membuat pengembangan aplikasi menjadi lebih efisien dan produktif.</p>

<p>A. Cara membuat function</p>
<p>Function merupakan salah satu fitur yang paling penting dalam bahasa pemrograman JavaScript. Dengan menggunakan function, kita dapat mengorganisir dan mengelompokkan kode ke dalam blok-blok terpisah, yang dapat dipanggil kapan saja sesuai kebutuhan. Membuat function dengan JavaScript sangatlah mudah dan fleksibel. Untuk membuat function, kita perlu menggunakan kata kunci function, diikuti oleh nama function yang kita inginkan. Nama function tersebut sebaiknya memilih nama yang deskriptif dan mencerminkan apa yang akan dilakukan oleh function tersebut. Setelah itu, diberikan tanda kurung buka (), di mana parameter-parameter function bisa didefinisikan di dalamnya jika ada.</p>

<p>B. Cara memanggil function</p>
<p>- Pemanggilan langsung: Kita dapat memanggil function secara langsung dengan menyebutkan namanya di dalam kode program. Misalnya, jika kita memiliki sebuah function bernama hitungLuasPersegi, kita dapat memanggilnya dengan menulis hitungLuasPersegi(). Ini akan menghasilkan eksekusi dari semua pernyataan yang ada di dalam function tersebut.</p>
<p>- Memasukkan nilai ke dalam parameter: Jika sebuah function memiliki parameter, kita harus memberikan nilai ke parameter tersebut saat memanggil function. Misalnya, jika terdapat sebuah function bernama tambahDuaAngka dengan dua parameter (a dan b), maka pemanggilaannya akan terlihat seperti ini: tambahDuaAngka(5, 7). Ini akan menjalankan pernyataan-pernyataan yang ada di dalam function dan menggunakan nilai 5 sebagai nilai untuk parameter a, dan nilai 7 sebagai nilai untuk parameter b.</p>
<p>- Menyimpan hasil pemanggilan ke dalam variabel: Kita bisa menyimpan hasil dari pemanggilan suatu function ke dalam variabel. Hal ini berguna ketika kita ingin menggunakan hasil dari function tersebut di beberapa bagian kode yang lain. Misalnya, jika kita memiliki function bernama hitungVolumeKubus yang mengembalikan nilai volume kubus berdasarkan panjang sisi yang diberikan, kita bisa menyimpan hasil pemanggilan tersebut ke dalam variabel seperti ini: const volume = hitungVolumeKubus(3). Variabel volume sekarang akan menampung nilai volume kubus dengan panjang sisi 3.</p>
<p>- Menggunakan return value: Beberapa function mungkin mengembalikan suatu nilai. Jika demikian, kita bisa menggunakan nilai tersebut dalam eksekusi program kita. Misalnya, jika terdapat sebuah function bernama tambahDuaAngka, maka pemanggilannya dapat digunakan untuk menjumlahkan dua angka dan mengembalikan hasil penjumlahannya ke dalam program utama. Contohnya: const hasil = tambahDuaAngka(5, 7). Sekarang variabel hasil akan berisi nilai 12 yang merupakan hasil penjumlahan dari 5 dan 7.</p>

7. Branching
<p>A. If Else</p>
<p>Dalam bahasa pemrograman JavaScript, salah satu cara yang paling umum untuk melakukan percabangan adalah menggunakan konsep If Else. Konsep ini sangat penting untuk dipahami karena memberikan kemampuan kepada kita untuk membuat keputusan berdasarkan kondisi tertentu. Statement If Else digunakan ketika kita ingin menjalankan blok kode tertentu jika suatu kondisi tertentu terpenuhi. Namun, jika kondisi tersebut tidak terpenuhi, kita dapat menjalankan blok kode alternatif menggunakan statement else. If Else dalam JavaScript memungkinkan kita untuk membuat program yang responsif dan adaptif. Kita dapat mengatur alur logika program dengan memberikan instruksi yang berbeda tergantung pada nilai dari suatu variabel atau hasil evaluasi ekspresi. Penerapan konsep If Else dapat menghasilkan kode yang jauh lebih fleksibel dan efisien. Dengan memahami penggunaannya dengan baik, kita dapat menghindari melakukan tindakan yang tidak perlu dan mempercepat eksekusi program.</p>

<p>B. Percabangan Switch</p>
<p>Salah satu alternatif yang bisa digunakan dalam percabangan JavaScript adalah menggunakan statement switch. Switch digunakan ketika terdapat banyak kondisi yang harus dievaluasi dan tindakan yang berbeda-beda akan diambil berdasarkan nilai dari suatu ekspresi. Dibandingkan dengan if else, switch sering kali memberikan kesan kode yang lebih terstruktur dan mudah dibaca. Ia memisahkan blok kode untuk setiap kasus tertentu, memungkinkan pemrogram untuk dengan jelas melihat tindakan apa yang akan diambil berdasarkan nilai ekspresi. Menggunakan switch dalam percabangan juga dapat meningkatkan efisiensi dalam penggunaan memori dan waktu eksekusi kode. Ketika ada banyak kondisi, if else harus mengevaluasi setiap kondisi secara berurutan, sedangkan switch langsung melompat ke kasus yang sesuai, menghindari pengecekan kondisi berlebihan.</p>

8. Looping
<p>A. for Loop</p>
<p>Ini adalah bentuk looping paling umum dalam JavaScript. Dengan menggunakan sintaks 'for', kamu dapat mengatur inisialisasi variabel, kondisi perulangan, dan perubahan nilai variabel pada setiap iterasi. For loop sangat fleksibel dan memungkinkan kamu mengakses indeks dalam array atau objek.</p>

<p>B. While Loop</p>
<p>Loop ini akan terus berjalan selama kondisi yang ditentukan benar. Sintaks dasarnya sederhana: while (kondisi) pernyataan. While loop berguna ketika kita tidak tahu berapa kali iterasi diperlukan sebelumnya atau ketika ingin melakukan pengulangan sebanyak mungkin sampai kondisi dihentikan.</p>

<p>C. Do-while loop</p>
<p>Mirip dengan while loop, namun bedanya adalah do-while loop akan menjalankan pernyataan setidaknya satu kali sebelum memeriksa kondisi. Ini memastikan bahwa setidaknya satu iterasi dilakukan meskipun kondisinya salah dari awal. Do-while loop berguna ketika kita ingin memastikan bahwa setidaknya satu blok kode dijalankan sebelum memeriksa kondisi.</p>

<p>D. For In Loop</p>
<p>Loop ini digunakan untuk mengulangi properti dari sebuah objek. Dalam setiap iterasi, for...in loop akan memberikan nama properti ke variabel yang ditentukan. Ini sangat berguna ketika kamu perlu secara dinamis menelusuri properti dalam objek dan melakukan tugas tertentu pada setiap properti tersebut</p>

<p>E. For of loop</p>
<p>Perulangan for...of sangat berguna untuk mengiterasi melalui elemen-elemen dalam array, string, dan objek yang dapat di-iterable. Ia memberikan cara yang lebih sederhana dan mudah dibaca untuk melakukan pengulangan daripada metode-metode lain.</p>

<p>F. ForEach loop</p>
<p>forEach adalah metode bawaan dalam JavaScript yang digunakan untuk melakukan iterasi melalui setiap elemen dalam array dan menjalankan fungsi pada setiap elemen tersebut. Metode forEach ini memudahkan untuk melakukan tugas yang sama pada setiap elemen dalam array tanpa harus menggunakan perulangan manual.</p>