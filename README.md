# 💌 Template website undangan pernikahan sederhana

![Thumbnail](/assets/images/banner.webp)

[![GitHub repo size](https://img.shields.io/github/repo-size/sakib-maho/undangan?color=brightgreen)](https://github.com/sakib-maho/undangan)
[![GitHub License](https://img.shields.io/github/license/sakib-maho/undangan?color=brightgreen)](https://github.com/sakib-maho/undangan/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/sakib-maho/undangan?style=social)](https://github.com/sakib-maho/undangan)
[![GitHub forks](https://img.shields.io/github/forks/sakib-maho/undangan?style=social)](https://github.com/sakib-maho/undangan)

## 🚀 Demo
Untuk kamu yang ingin melihat demo terlebih dahulu:

[https://ulems.my.id/?to=Teman teman semua](https://ulems.my.id/?to=Teman%20teman%20semua)

## 📦 Documentation

* Jalankan perintah `npm install`, lalu `npm run dev`, dan buka `http://localhost:8080`.
* Ubah isi file `index.html` sesuai keinginanmu.
* Jika tidak ingin menggunakan **fitur komentar**, hapus atribut `data-url` dan `data-key` di elemen `<body>` pada index.html.
* Sesuaikan `data-url` pada `<body>` di index dan dashboard sesuai dengan URL backend (jika kamu meng-hosting sendiri).
* Sesuaikan juga `data-key` di index dengan access key yang bisa kamu ambil dari dashboard.
* Jika ingin menggunakan GIF, dapatkan Tenor API key di [developers.google.com/tenor](https://developers.google.com/tenor/guides/quickstart).
* Untuk deployment, jalankan `npm run build:public`. Folder `public` adalah yang akan kamu upload.
* Untuk backend self-hosting, lihat penjelasan di bawah, atau gunakan **trial API** secara gratis.

> Undangan ini hanya menggunakan HTML, CSS, dan JavaScript biasa. NPM digunakan agar file JavaScript bisa langsung dieksekusi (bukan bertipe module lagi).

> Jika tetap ingin tanpa NPM, ubah `src="./dist/guest.js"` menjadi `src="./js/guest.js" type="module"` pada tag `<head>` di index dan dashboard.html, dengan risiko glitch tema di awal loading.

> Jika kamu punya pertanyaan, gunakan fitur `discussions` agar bisa dibaca juga oleh teman-teman lainnya.

> [!WARNING]  
> Gunakan versi 3.14.0, untuk versi 4 masih tahap pengembangan dan berpotensi teredapat bug 🐛

## 🔥 Deployment API

- Video\
    otw

- Presentation
    [https://docs.google.com/presentation](https://docs.google.com/presentation/d/1EY2YmWdZUI7ASoo0f2wvU7ec_Yt0uZanYa8YLbfNysk/edit)

## ⏰ Trial API
Untuk kamu yang ingin mencoba secara gratis:

[https://trial.ulems.my.id](https://trial.ulems.my.id)

## ⚙️ Tech stack

- Bootstrap 5.3.8
- AOS 2.3.4
- Fontawesome 7.1.0
- Canvas Confetti 1.9.3
- Google Fonts
- Vanilla JS

## 🎨 Credit
All visual assets in this project are sourced from Pixabay.

## 🤝 Contributing

I'm very open to those of you who want to contribute to the undangan!

## 🐞 Security Vulnerabilities

If you find any security vulnerabilities in this undangan, please email DKL via [dewanakretarta29@gmail.com](mailto:dewanakretarta29@gmail.com).

## 📜 License

Undangan is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
