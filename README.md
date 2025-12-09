# 🍉 Fruit Slice – Web Browser Game

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Canvas](https://img.shields.io/badge/Canvas-API-orange)
![License](https://img.shields.io/badge/license-MIT-green)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://brurnyansah.github.io/fruit-slice/)

Fruit Slice adalah game sederhana berbasis **JavaScript**, **HTML5 Canvas**, dan **WebGL Draw Style**, di mana pemain harus mengiris buah yang muncul dari bawah layar. Namun hati-hati! Jika kamu mengiris **bom**, permainan langsung berakhir!

Game ini ringan, cepat, dan dapat dimainkan langsung di browser tanpa instalasi apa pun.

---

## 🚀 Demo

**[🎮 PLAY NOW - Klik di sini!](https://bruryansah.github.io/Fruit-Slice/)**

> Game berjalan di semua browser modern (Chrome, Firefox, Safari, Edge)

---

## 🎮 Fitur Game

- ✨ **Iris buah dengan geser krusor mouse** – Slice buah untuk dapat poin
- 💣 **Bom = Game Over** – Hindari bom atau permainan berakhir
- 🔁 **Restart instan** – Cukup klik restart untuk main lagi
- 📈 **Score system** – Semakin banyak buah, semakin tinggi skor
- ⚡ **Performa tinggi** – Ringan & berjalan smooth di semua browser
- 🔓 **Open-source** – Kode bebas dipelajari dan dimodifikasi

---

## 🕹️ Cara Bermain

1. **Klik buah** untuk mendapatkan skor (+1 poin per buah)
2. **Jangan kena bom** 💣 – Sekali kena = Game Over!
3. Buah akan terus bermunculan dari bawah layar
4. Kalau **Game Over**, klik tombol restart untuk restart

**Tips:** Fokus pada buah yang jatuh lambat terlebih dahulu!

---

## ⚙️ Cara Kerja (Technical Overview)

Game ini dibangun dengan **HTML5 Canvas API** dan menggunakan konsep:

- **Object Spawning**: Buah & bom muncul dari bawah dengan posisi & kecepatan random
- **Collision Detection**: Sistem deteksi klik mouse dengan koordinat object (radius-based)
- **Game Loop**: Menggunakan `requestAnimationFrame()` untuk pergerakan smooth 60fps
- **Particle System**: Efek visual saat buah teriris
- **Game State Management**: Pengelolaan status game (playing, game over, restart)

---

## 📂 Struktur Folder

```
fruit-slice/
├── index.html          # File utama game
├── style.css           # Styling fullscreen canvas
├── game.js             # Logic game (Canvas API + JavaScript)
├── README.md           # Dokumentasi project
└── assets/             # Asset gambar (opsional)
    ├── fruits1.png
    ├── fruits2.png
    ├── fruits3.png
    ├── splash.png
    └── bomb.png
```

---

## 📦 Instalasi & Menjalankan (Local)

### Method 1: Clone Repository
```bash
# Clone repository
git clone https://github.com/bruryansah/Fruit-Slice.git

# Masuk ke folder
cd Fruit-Slice

# Buka file index.html di browser
# Atau gunakan Live Server (VSCode extension)
```

### Method 2: Download ZIP
1. Download ZIP dari [GitHub Repository](https://github.com/bruryansah/Fruit-Slice)
2. Extract file ZIP
3. Buka `index.html` di browser

### Method 3: Live Server (Recommended)
```bash
# Jika pakai VSCode, install extension "Live Server"
# Lalu klik kanan index.html → "Open with Live Server"
```

**Tidak perlu instalasi dependencies!** Semua berjalan native di browser.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5 Canvas** – Untuk rendering grafis 2D
- **Pure JavaScript (ES6+)** – Logic game tanpa framework
- **CSS3** – Styling minimal untuk fullscreen layout
- **RequestAnimationFrame API** – Game loop optimization

> ⚡ **Tidak ada library eksternal** — 100% native JavaScript!

---

---

## 🐛 Known Issues

- [ ] Buah kadang keluar dari layar di resolusi sangat kecil (<320px)
- [ ] Belum ada sound effect saat slice
- [ ] Collision detection kurang presisi di kecepatan tinggi

---

## 📋 Roadmap & TODO

### v1.1 (Coming Soon) *kalo niat & ada waktu
- [ ] Sound effects (slice sound, bomb explosion, background music)
- [ ] Particle effects saat buah teriris
- [ ] Combo system (slice 3+ buah sekaligus)
- [ ] Mobile touch support (swipe gesture)

### v1.2 (Future) (Coming Soon) *kalo niat & ada waktu
- [ ] Multiple game modes (Classic, Time Attack, Zen Mode)
- [ ] Local highscore dengan localStorage
- [ ] Power-ups (slow motion, double score, bomb shield)
- [ ] Leaderboard online dengan Firebase

### v2.0 (Long-term) (Coming Soon) *kalo niat & ada waktu
- [ ] Multiplayer mode
- [ ] Achievement system
- [ ] Berbagai tema (tropical, winter, desert)
- [ ] Progressive Web App (PWA) support

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika kamu punya ide atau ingin fix bug:

1. **Fork** repository ini
2. Buat **branch** baru (`git checkout -b feature/amazing-feature`)
3. **Commit** perubahan (`git commit -m 'Add some amazing feature'`)
4. **Push** ke branch (`git push origin feature/amazing-feature`)
5. Buat **Pull Request**

### Guidelines Kontribusi
- Pastikan kode clean dan commented
- Test di berbagai browser sebelum PR
- Update README jika menambah fitur baru
- Ikuti coding style yang sudah ada

---

## 📝 Lisensi

Projek ini dilisensikan di bawah **MIT License** — bebas digunakan, dimodifikasi, dan didistribusikan untuk keperluan pribadi maupun komersial.

Lihat file [LICENSE](LICENSE) untuk detail lengkap.

---

## 🙏 Credits & Acknowledgments

- Inspired by classic **Fruit Ninja** game
- Canvas API documentation from [MDN Web Docs](https://developer.mozilla.org/)
- Icons and design patterns from modern web games

---

## 👨‍💻 Dibuat oleh

**Bruryansah**

[![GitHub](https://img.shields.io/badge/GitHub-bruryansah-black?logo=github)](https://github.com/bruryansah)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue)](https://bruryansah.github.io/portfolio/)

---

## 📞 Kontak & Support

Punya pertanyaan atau saran? Jangan ragu untuk:
- 🐛 [Report Bug](https://github.com/bruryansah/Fruit-Slice/issues)
- 💡 [Request Feature](https://github.com/bruryansah/Fruit-Slice/issues)
- ⭐ Kasih **Star** jika project ini bermanfaat!

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/bruryansah/Fruit-Slice?style=social)
![GitHub forks](https://img.shields.io/github/forks/bruryansah/Fruit-Slice?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/bruryansah/Fruit-Slice?style=social)

---

<div align="center">

**Selamat bermain dan happy coding! 🍉🔥**

Made with ❤️ and ☕ by Bruryansah

</div>
