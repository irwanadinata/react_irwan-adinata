RESUME/RINGKASAN MATERI

<p>Global State Management</p>

A. Context

1. Introduction
<p>Terkadang, data dilempar dari atas ke bawah (parent to child) melalui props, namun ada beberapa kondisi dan situasi dimana terdapat sebuah data (seperti tema, pilihan bahasa) yang dibutuhkan oleh banyak komponen didalam aplikasi kita. Context memberikan sebuah cara untuk melakukan passing sebuah data melalui component tree tanpa perlu passing props di setiap level.
Dengan kata lain, Context seperti sebuah variabel global yang bisa diakses kapanpun dan dimanapun tanpa parsing props di setiap komponen yang kita miliki.
</p>

2. Kapan menggunakan Context

- Membutuhkan sebuah manajemen State yang simple
- Passing beberapa data secara mendalam tanpa perlu menggunakan Redux
- Poin plus ketika kita memiliki aplikasi dengan skala kecil ke menengah

3. Apa saja penggunaan Context pada umumnya
- Global State
- Tema
- Konfigurasi aplikasi
- Username dari user yang telah login
- Pengaturan user
- Preferensi bahasa
- etc

3. Langkah-langkah penggunaan Context
- Buat Context dengan menggunakan method createContext lalu export
export const MyContext = React.createContext(defaultValue);
- Import Context yang telah dibuat sebelumnya dan bungkus component tree dengan Context Provider, dan letakkan value apapun yang kita inginkan dengan menggunakan value prop
- Baca value yang telah disimpan kedalam Context dengan menggunakan hooks useContext

4. Kekurangan React Context
- Tidak direkomendasikan untuk mengkombinasikan Context dengan hook lain seperti useReducer untuk merubah sebuah nilai karena alasan performa
- Ketika nilai dari sebuah Context berubah atau diganti, maka seluruh component yang mengkonsumsi Context akan re-render

B. Redux

1. Overview
<p>Sebelumnya kita telah mempelajari konsep dari global state dengan menggunakan React Context, bagaimana kita bisa menggunakan sebuah data dari satu komponen ke komponen yang lain tanpa perlu passing props. Namun penggunaan Context tidaklah cukup untuk penggunaan yang berfokus pada perubahan data yang masif dan sering dilakukan dengan skala aplikasi yang masif, maka kita perlu menggunakan sebuah library yang capable dan mampu untuk mengatasi perubahan data tersebut, maka perkenalkan State Management yang lumayan populer digunakan, yaitu Redux.</p>

2. Introduction Redux
<p>Redux merupakan sebuah framework JavaScript yang ditujukan untuk membantu dalam mengelola state dalam aplikasi web. Dengan menggunakan Redux, developer dapat memisahkan state dari komponen-komponen aplikasi, sehingga mempermudah dalam pengelolaan dan pemantauan perubahan-perubahan yang terjadi pada state tersebut.Selain itu, Redux juga memiliki fitur seperti immutability, central store, dan time-travel debugging yang membantu developer dalam mengelola state secara efektif dan efisien.</p>

3. Kapan menggunakan redux
<p>Redux digunakan ketika aplikasi web memiliki state yang kompleks dan berubah-ubah, sehingga membutuhkan pengelolaan yang lebih baik dan terorganisir. Hal ini sering terjadi pada aplikasi web yang memiliki banyak komponen dan interaksi antar-komponen yang rumit. Dengan menggunakan Redux, developer dapat memisahkan state dari komponen-komponen aplikasi, sehingga mempermudah dalam pengelolaan dan pemantauan perubahan-perubahan yang terjadi pada state tersebut.</p>

4. Kelebihan React Redux
<p>Kelebihan dari Redux adalah memiliki fitur seperti immutability, central store, dan time-travel debugging yang membantu developer dalam mengelola state secara efektif dan efisien. Selain itu, Redux juga memiliki dokumentasi yang lengkap dan komunitas yang aktif yang dapat membantu developer dalam mempelajari dan menggunakan Redux.</p> 

5. Kekurangan React Redux
<p>Beberapa kekurangan dari Redux yaitu membutuhkan waktu dan pembelajaran yang lebih untuk memahami dan mengaplikasikannya pada aplikasi web. Selain itu, Redux juga memiliki kode yang lebih panjang dan kompleks dibandingkan dengan state management lainnya.</p>