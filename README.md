# 🌿 RIMBA — Ruang Inspirasi Melestarikan Bumi dan Alam

<div align="center">


**Platform Digital Konservasi Alam, Eksplorasi Kawasan 360°, dan Pelestarian Satwa Endemik Nusantara**

Karya: **TIM WARUNG NASI RIZKY**  
*Kompetisi TechnoVersary 2026*


[🌐 Kunjungi Live Demo Web RIMBA](https://webdesign-warung-nasi-rizky-technov.vercel.app/)

</div>

---

## 📖 Tentang RIMBA

**RIMBA (Ruang Inspirasi Melestarikan Bumi dan Alam)** adalah platform web inovatif yang didedikasikan untuk meningkatkan kesadaran konservasi alam Indonesia. Menggabungkan eksplorasi kawasan konservasi secara interaktif, visualisasi panorama 360°, ensiklopedia satwa endemik langka, jurnalisme konservasi, tantangan ramah lingkungan harian, serta mobilisasi aksi relawan lapangan.

Proyek ini dibangun dan dikembangkan dengan penuh dedikasi oleh **TIM WARUNG NASI RIZKY** sebagai solusi teknologi hijau (*Green Technology*) untuk menjaga warisan keanekaragaman hayati Nusantara bagi generasi mendatang.

---

## 🌟 Fitur Utama

### 1. 🌓 Tema Gelap & Terang Otomatis (*Dark & Light Mode*)
- Pengguna dapat beralih antara mode terang dan mode gelap kapan saja melalui tombol ikon matahari/bulan di Navbar.
- Preferensi tema disimpan secara persisten di `localStorage`.
- Palet warna dirancang khusus bernuansa alam:
  - **Primary**: `#173D2B` (Hijau Rimba Primer)
  - **Secondary**: `#285B40` (Hijau Hutan Tropis)
  - **Accent**: `#78966B` (Hijau Daun Sage)
  - **Highlight**: `#D9B86C` (Emas Rimba)
  - **Soft**: `#B8C9A8` (Hijau Muda Lembut)
  - **Dark / Light-Dark**: `#0e1317` / `#191f25` (Latar Gelap Elegan)

### 2. 🌐 Multi-Language (*Bilingual: Bahasa Indonesia & English*)
- Dilengkapi **Language Context** yang mendukung alih bahasa instan antara **Bahasa Indonesia (ID)** dan **English (EN)** di seluruh penjuru aplikasi tanpa perlu memuat ulang halaman.
- Semua data JSON (artikel, satwa, relawan, dan kawasan) memiliki struktur bilingual terpadu.

### 3. 🎞️ GSAP Bento Gallery Hero dengan Flip Animation & Dark Overlay
- Galeri foto Bento Grid yang bergerak dinamis mengikuti posisi scroll (*scrubbed scroll animation*).
- Gambar fokus tengah membesar secara halus (*scale-up transition*) memenuhi layar menggunakan **GSAP Flip Plugin**.
- Setiap gambar dilengkapi lapisan *dark opacity* estetis dan tipografi **RIMBA** di tengah foto utama.

### 4. 🗺️ Peta Interaktif & Kawasan Konservasi 360° (*Leaflet + 360° Panorama Viewer*)
- **100% Bebas API Key & Tanpa Watermark**: Menggunakan basemap **Esri World Street Map**, **Esri World Imagery (Citra Satelit)**, dan **OpenStreetMap**.
- **Custom Photo Pin Markers**: Penanda peta berupa bingkai foto *polaroid* mini dengan ujung penunjuk koordinat presisi.
- **Kartu Pratinjau Interaktif**: Pop-up kartu dengan foto, status cagar alam, deskripsi, dan tombol *"Baca Selengkapnya"*.
- **Lapisan Opacity Pembuka**: Menampilkan petunjuk *"Geser dan Ketuk untuk Eksplorasi"* yang memudar halus saat pengguna menyentuh peta.
- **Viewer Panorama 360° Interaktif**:
  - Pengguna dapat menyeret (*drag*) mouse / sentuhan jari 360 derajat horizontal dan vertikal.
  - Fitur kontrol: Zoom In (+), Zoom Out (-), Putar Otomatis (*Auto-spin*), Layar Penuh (*Fullscreen*), dan Kompas arah mata angin dinamis.
  - Memuat data geologis lengkap, luas wilayah, elevasi, koordinat GPS, daya tarik lanskap, dan pedoman bertamu ramah lingkungan.

### 5. 🐅 Ensiklopedia Satwa Endemik Indonesia
- Memuat 8 satwa endemik kebanggaan Indonesia: *Komodo, Harimau Sumatera, Orangutan Kalimantan, Badak Jawa, Cenderawasih Merah, Anoa Dataran Rendah, Bekantan, dan Jalak Bali*.
- **Pencarian Real-Time**: Menyaring satwa berdasarkan nama, nama ilmiah latin, habitat, atau ordo taksonomi.
- **Halaman Detail Split-Screen**: Foto profil satwa vertikal dengan status kepunahan IUCN (*Critically Endangered, Endangered, dsb.*), peran ekologis satwa di ekosistem, serta fakta unik konservasi.

### 6. 🤝 Portal Aksi Relawan & Formulir Pendaftaran Interaktif
- Katalog kegiatan konservasi nyata: penanaman mangrove, patroli sungai, adopsi karang, dan pembersihan sampah plastik.
- Menampilkan detail inisiator, lokasi kegiatan, waktu, dan kuota relawan yang tersisa.
- **Formulir Pendaftaran Relawan**:
  - Input interaktif: Nama Lengkap, Email, Nomor WhatsApp, Kota Domisili, Motivasi Lapangan, dan Checkbox Komitmen Kehadiran.
  - Sistem validasi dan tampilan konfirmasi sukses (*Registration Feedback State*) langsung di halaman detail.

### 7. 📚 Edukasi & Artikel Konservasi
- Pusat artikel lingkungan hidup dengan kategori biodiversitas, restorasi lahan basah, pengurangan jejak karbon, dan ekowisata.
- **Sidebar Sticky**: Menampilkan daftar *"Sering Dibaca"* yang tetap mengikut ke bawah saat halaman di-scroll.
- Indikator estimasi waktu membaca (*read time*) dan integrasi tautan rekomendasi artikel terkait.

### 8. 🌱 Tantangan 7 Hari Tanpa Plastik (*Plastic-Free Challenge*)
- Terletak di halaman utama sebelum section CTA untuk mengajak pengunjung beraksi langsung.
- 7 misi harian: membawa tumbler, menolak kantong kresek, membawa kotak makan sendiri, dsb.
- **Interaksi Klik Coret (*Strikethrough*)**: Teks otomatis tercoret saat misi diselesaikan dengan progress bar persentase dinamis (0–100%).
- Data tersimpan di `localStorage` sehingga tidak terhapus saat berpindah halaman.

### 9. 🚀 Navigasi Cerdas & Auto Scroll to Top
- Navbar *floating glassmorphism* yang muncul elegan saat menggulir melewati area Hero.
- Komponen `ScrollToTop` yang secara otomatis mengembalikan posisi gulir ke paling atas setiap kali pengguna berpindah rute/halaman.

---

## 🛠️ Teknologi & Pustaka yang Digunakan

| Kategori | Teknologi / Library | Kegunaan |
|---|---|---|
| **Core Framework** | [React 19](https://react.dev/) | Library UI berbasis komponen terbaru |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Bundler generasi baru super cepat dengan HMR |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Framework utility-first CSS generasi 4 |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) | Manajemen navigasi SPA dan URL parameter |
| **Animation** | [GSAP 3](https://greensock.com/) & Flip Plugin | Animasi Bento Grid dan transisi interaktif |
| **Geospatial & Map** | [Leaflet 1.9](https://leafletjs.com/) | Peta interaktif berbasis koordinat bebas API key |
| **Basemaps** | Esri World Street, Esri Imagery, OSM | Layer peta topografi, satelit, dan jalanan terbuka |
| **Panorama Engine** | Native HTML5 Canvas 2D | Mesin rendering proyeksi equirectangular 360° |
| **Linter & QA** | [Oxlint](https://oxc.rs/) | Linter performa tinggi berbasis Rust |

---

## 📁 Struktur Direktori Proyek

```text
Rimba/
├── public/                 # Aset statis & gambar pendukung
├── src/
│   ├── assets/             # Logo dan visual lokal
│   ├── components/         # Komponen global aplikasi
│   │   ├── footer/         # Footer web bilingual dengan tautan navigasi
│   │   ├── navbar/         # Navbar floating dengan Dark Mode & Language Switcher
│   │   └── scrollToTop/    # Utilitas auto scroll ke atas saat rute berganti
│   ├── context/            # Global State (LanguageContext: ID & EN)
│   ├── datas/              # Database lokal terstruktur (JSON)
│   │   ├── animals.json    # Data lengkap 8 satwa endemik Indonesia
│   │   ├── articles.json   # Data katalog artikel konservasi
│   │   ├── reserves.json   # Data kawasan konservasi & koordinat GPS 360°
│   │   └── volunteers.json # Data program aksi relawan & kuota
│   ├── sections/           # Komponen modular per bagian
│   │   ├── artikel/        # List artikel, detail artikel, hero & sidebar sticky
│   │   ├── hewan/          # Search hero, kartu satwa grid, dan detail taksonomi
│   │   ├── home/           # Hero Bento GSAP, About, Tantangan 7 Hari, CTA
│   │   ├── maps/           # Leaflet map, custom photo pins, list, Panorama 360°
│   │   └── relawan/        # List relawan, detail aksi & formulir pendaftaran
│   ├── views/              # Halaman utama (Views / Pages)
│   │   ├── artikel/        # Index & Detail artikel
│   │   ├── hewan/          # Index & Detail satwa endemik
│   │   ├── home/           # Landing page utama
│   │   ├── maps/           # Peta interaktif & Detail panorama 360°
│   │   └── relawan/        # Index & Detail aksi relawan
│   ├── App.css
│   ├── App.jsx             # Konfigurasi routing utama
│   ├── index.css           # Konfigurasi Tailwind v4 & tema warna Rimba
│   └── main.jsx            # Entry point aplikasi React
├── package.json
└── README.md
```

---

## 💻 Tata Cara Penginstalan & Menjalankan Proyek

Pastikan di komputer Anda sudah terpasang:
- **Node.js** (Versi 18.x atau yang lebih baru direkomendasikan)
- **NPM** atau **PNPM** / **Yarn**

### 1. Clone Repositori
```bash
git clone https://github.com/username/rimba.git
cd rimba
```

### 2. Pasang Semua Dependensi
Jalankan perintah berikut untuk mengunduh semua library yang diperlukan:
```bash
npm install
```

### 3. Jalankan Server Pengembangan (*Development Server*)
```bash
npm run dev
```
Setelah perintah dijalankan, buka peramban (*browser*) Anda di alamat:
```text
http://localhost:5173
```

### 4. Uji Kualitas Kode (*Linting Check*)
Untuk memastikan tidak ada galat sintaks atau variabel tak terpakai:
```bash
npm run lint
```

### 5. Kompilasi untuk Produksi (*Production Build*)
Untuk membuat berkas rilis final siap hosting di folder `/dist`:
```bash
npm run build
```

Untuk menguji hasil kompilasi produksi di komputer lokal:
```bash
npm run preview
```

---

## 🌐 Tautan Hosting & Panduan Deployment

Proyek ini telah dikonfigurasi secara optimal dan **tidak membutuhkan API key eksternal ataupun database berbayar**, sehingga dapat di-deploy secara instan ke platform hosting manapun:

### Link Live Demo:
🔗 **[https://rimba-nusantara.vercel.app](https://webdesign-warung-nasi-rizky-technov.vercel.app/)**



---

## 👥 Pengembang

Proyek ini dikembangkan oleh:

### **TIM WARUNG NASI RIZKY**
> *"Menghubungkan manusia dengan alam Nusantara melalui kekuatan teknologi dan aksi konservasi nyata."*

- **Karya**: Lomba / Kompetisi TechnoVersary 2026
- **Kategori**: Desain & Pengembangan Web (*Web Design & Development*)

---

<div align="center">
  <p>🌱 <em>Mari bersama lestarikan rimba, satwa liar, dan masa depan bumi Indonesia.</em></p>
  <p>© 2026 <strong>TIM WARUNG NASI RIZKY</strong> — Hak Cipta Dilindungi.</p>
</div>
