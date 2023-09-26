RESUME / RINGKASAN MATERI

REACT FORM

React Hook Form + Zod:

React Hook Form (RHF):

- React Hook Form adalah pustaka yang memungkinkan Anda mengelola formulir dalam aplikasi React menggunakan pendekatan berbasis hook. Ini menyediakan banyak fitur untuk mengontrol dan mengelola formulir dengan efisien.
- RHF memungkinkan Anda mengintegrasikan formulir dengan mudah ke dalam komponen React Anda, mengontrol input, validasi, pengumpulan data, dan manajemen keadaan dengan lebih baik.
- Dalam RHF, setiap input form dikontrol oleh hook yang berdiri sendiri, sehingga Anda dapat mengontrol setiap input secara independen.
Zod:

- Zod adalah pustaka validasi data yang kuat dan tipe data di JavaScript/TypeScript. Ini memungkinkan Anda mendefinisikan skema validasi untuk data Anda.
RHF dapat bekerja dengan berbagai resolusi validasi, dan salah satu resolusi yang populer adalah Zod. Dengan menggunakan Zod, Anda dapat dengan mudah mendefinisikan skema validasi untuk input formulir Anda dan menggunakan skema ini untuk memeriksa dan mengonversi data input.

Instalasi RHF dan Zod:

Instal React Hook Form dan Zod melalui npm
npm install react-hook-form zod

Basic Form
Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya. Dalam react, akan ada banyak hal kita pelajari dari form. Seperti bagaimana menghadle inputan? Bagaimana memvalidasi inputan dsb.
Macam-macam form

1. Elemen input
   Elemen ini biasanya digunakan inputan yang tidak terlalu panjang
2. Elemen textarea
   Elemen ini biasanya digunakan inputan yang cukup panjang, semisal deskripsi.
3. Elemen select
   Elemen ini biasanya digunakan untuk inputan yang pilihannya sudah ditentukan.
4. Radio Button
   Radio Button merupakan salah satu type di elemen input. Kita hanya bisa memilih 1 pilihan menggunakan radio button.
5. Checkbox
   Checkbox merupakan salah type di elemen input. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.
   Type elemen input lainnya
   Selain yang sudah disebutkan, masih banyak lagi type elemen input lainnya, diantaranya.

- Text(default)
- Button
- Color
- Checkbox
- Date
- Datetime-local
- Email
- Dile
- Hidden
- Image
- Month
- Number
- Password
- Radio
- Range
- Reset
- Search
- Submit
- Tel
- Time
- url
- week
  Controlled Component
  Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan react dengan menggunakan state pada react. Kemudian komponen react yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. Sebuah elemen masukan form yang nilainya dikontrol oleh react melalui cara seperti ini disebut “controlled component”.
  Uncontrolled Component
  Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai dari DOM. Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode react dan non-react jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu, pada umumnya kita harus menggunakan controlled component.
  Atribut defaultValue
  Pada lifecycle rendering react, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin react dapat menentukan nilai awal tapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.
  Tag file input
  Pada HTML, sebuah input type = “file” memungkinkan pengguna untuk memilih satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan javaScript lewat API.
  Dalam react, sebuah input type = “file”  merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.
  Controlled component atau uncontrolled component?
  Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita. Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu “buruk”. Lagipula kita selalu dapat bermigrasi ke controlled input.
  Bacic Validation
  Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :

1. mencari input data yang benar dan sesuai format,
   sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi.
2. Melindungi akun pengguna,
   Misalnya, membuat pengguna untuk memasukan data password yang aman.
3. Melindungi sistem/aplikasi,
   Validasi form yang kuta dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi.
   Tipe validasi data formulir

1. Client-side validation
   Validasi dilakukan pada sisi klien(browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server. Kelebihan validasi sisi klien ialah user-friendly, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi.
   Validasi pada sisi klien, terbagi menjadi 2 bagian yaitu:

- Built-in form validation
- Menggunakan javascript

2. Server-side validation
   Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna. Berbeda dengan validasi sisi klien, validasi ini tidak user-frindly. Karena, koreksi kesalahan akan dikirimkan, setelah form di submit.
