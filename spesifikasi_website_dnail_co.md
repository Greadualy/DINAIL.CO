# DNAIL.CO STUDIO — WEBSITE ARCHITECTURE & COPYWRITING SPECIFICATION

> **SINGLE SOURCE OF TRUTH UNTUK ANTIGRAVITY**
> **PENTING:** Bangun website ini persis mengikuti Design Tokens, struktur tata letak (Layout Spec), tautan resmi (Official Links), dan teks asli (Exact Copy) di bawah ini. DILARANG mengubah teks di dalam bagian `[Exact Copy]` menjadi kalimat promosi generik. DILARANG menggunakan link kosong (`#`) karena seluruh kanal digital resmi sudah tersedia di bawah ini.

---

## 1. PROJECT OVERVIEW, DATA UMKM & KANAL RESMI

* **Nama Brand:** DNAIL.CO / DINAIL.CO (`DNAIL CO STUDIO`)
* **Lokasi:** Yogyakarta, Daerah Istimewa Yogyakarta
* **Layanan Utama:** Manicure, Custom Gel Nail Art, dan Custom Press-On Nails (kuku palsu *handmade* sesuai ukuran jari).
* **Bukti & Angka Operasional Nyata:**
  * **Usia Operasional:** 1 tahun 8 bulan (20 bulan).
  * **Total Pelanggan:** Dipercaya oleh 5.000+ orang.
  * **Kekuatan Tim:** Dikerjakan secara kolaboratif oleh **5 orang tim operasional & nailist terlatih** (pengerjaan terjaga kualitasnya, jadwal slot lebih teratur, dan tidak terburu-buru).
* **Target Audiens & Masalah Nyata Mereka:**
  1. **Mahasiswa di Yogyakarta:** Sering kecewa saat membawa foto referensi dari Pinterest ke salon kuku tapi hasilnya jauh berbeda, takut harga membengkak di kasir karena biaya tambahan per jari yang tidak transparan, atau terhalang aturan kuliah/praktikum yang melarang kuku gel permanen (sehingga butuh *Custom Press-On Nails* yang bisa dibeli via WhatsApp atau Shopee `dinail.co` untuk acara wisuda/akhir pekan).
  2. **Pekerja Muda & Umum:** Pernah mengalami kutikula perih/berdarah akibat pengerjaan kasar, kuku gel mengelupas (*lifting*) padahal belum 1 minggu, serta khawatir soal kebersihan alat.

### DAFTAR LINK & KONTAK RESMI (WAJIB DI-BIND KE TOMBOL UI)
Gunakan data di bawah ini untuk seluruh *anchor link* (`href`) dan fungsi JavaScript di dalam website:
* **WhatsApp Business:** `+62 882-0089-03525`
  * Direct API URL: `https://wa.me/62882008903525`
* **Instagram:** `@dinail.co` (`https://www.instagram.com/dinail.co`)
* **Threads:** `@dinail.co` (`https://www.threads.net/@dinail.co`)
* **TikTok:** `@dinail.co_` (`https://www.tiktok.com/@dinail.co_`)
* **Shopee Official Store:** `dinail.co` (`https://shopee.co.id/dinail.co`)
* **Lokasi Google Maps:** `https://maps.app.goo.gl/DvvN1yfV7coyBbQa6`
* **Email Owner / Kerjasama:** `varellabdulrozaq17@gmail.com` (`mailto:varellabdulrozaq17@gmail.com`)

---

## 2. TECH STACK & SYSTEM REQUIREMENTS

* **Framework:** HTML5 + Tailwind CSS + Vanilla JS (atau React + Tailwind CSS + Lucide Icons).
* **Responsiveness:** Mobile-first (mayoritas audiens membuka dari bio Instagram `@dinail.co` atau TikTok `@dinail.co_` di HP), dengan tampilan desktop bergaya *editorial split-screen*.
* **Fitur Interaktif Wajib:**
  1. **Filterable Lookbook Grid:** Filter katalog desain kuku berdasarkan kategori (*Semua Karya*, *Clean & Syrup*, *Chrome & Cat-Eye*, *Wisuda & Bridal*, *3D & Press-On*).
  2. **Interactive Price & Time Estimator + WhatsApp Booking Generator:** Kalkulator interaktif tempat pengunjung memilih layanan, melihat estimasi durasi & total biaya secara transparan, lalu menekan tombol yang otomatis mengarahkan ke `https://wa.me/62882008903525?text=...` dengan rincian pilihan mereka.
  3. **Direct Shopee & Maps Integration:** Tombol khusus untuk membeli *Press-On Nails* via Shopee (`dinail.co`) dan tombol petunjuk arah langsung ke Google Maps Studio.

---

## 3. DESIGN SYSTEM & VISUAL TOKENS

### A. Color Palette (Strict HEX Codes)
Skema warna diubah menjadi nuansa *atelier* yang lebih elegan dan mewah, mengikuti panduan dari gambar referensi:
* **Background Primary (Warm Cream):** `#F9F6F0` (Gunakan sebagai warna dasar halaman untuk memberikan kesan bersih dan berkelas. JANGAN gunakan putih menyilaukan `#FFFFFF` untuk background utama).
* **Background Secondary (Taupe / Greige):** `#EAE5DF` (Digunakan untuk area seksi profil tim/staf dan highlight berlatar abu-abu kecokelatan yang lembut).
* **Surface / Card Pure:** `#FCFBF9` (Untuk permukaan kartu layanan, portofolio, dan elemen *overlay*).
* **Text Primary (Deep Charcoal):** `#232323` (Menggantikan Deep Espresso Ink untuk warna teks heading dan paragraf utama demi keterbacaan yang tajam).
* **Text Muted (Ash Grey):** `#7A756D` (Untuk deskripsi sekunder, subtitle, dan label).
* **Accent Primary (Burgundy Wine):** `#6B1D2F` (Menggantikan Cherry Lacquer. Gunakan warna merah marun pekat ini secara dominan pada latar belakang Hero Section, seksi Testimonial/Footer, dan teks penekanan yang kuat).
* **Accent Secondary (Muted Gold):** `#C8A86B` (Warna emas redup. Gunakan khusus untuk tombol CTA utama seperti "RESERVE", badge aktif, atau penekanan elegan).
* **Border / Hairline Divider:** `#D6CFC4` (Gunakan border `1px solid #D6CFC4` untuk memisahkan setiap seksi dan kolom seperti majalah cetak).

### B. Typography (Google Fonts)
Teks disesuaikan untuk mendukung gaya tipografi yang lebih klasik dan editorial:
1. **Heading / Editorial Display:** `'Playfair Display'` atau `'Instrument Serif'`, Regular & Italic.
   * Ukuran Hero Desktop: `64px` (`leading-[1.05]`, `tracking-tight`).
   * Ukuran Section Title: `44px` (`leading-[1.1]`).
   * Aturan: Gunakan font bergaya *serif* ini pada semua judul (*heading*) agar sesuai dengan nuansa mewah pada gambar.
2. **Body & UI Sans:** `'Plus Jakarta Sans'` atau `'Inter'`, Weight `300`, `400`, `500`.
   * Ukuran Body: `16px` (`leading-[1.6]`).
3. **Technical / Data / Price / Index Numbers:** `'JetBrains Mono'`, Weight `400`, `500`.
   * Gunakan untuk nomor urut seksi (`01`, `02`, `03`), harga (`Rp`), durasi pengerjaan, dan label kategori. Ukuran `12px` – `14px`, `uppercase`, `tracking-wider`.

### C. UI Styling & Micro-Interactions
* **Tanpa Drop Shadow Berlebihan:** Ganti semua bayangan tebal (`shadow-lg` atau `shadow-xl`) dengan kontras blok warna yang solid atau gunakan border tegas `1px solid #D6CFC4`.
* **Sudut Komponen:** Gunakan sudut siku/tajam (`rounded-none`) pada tata letak grid gambar, kartu layanan, dan tombol untuk meniru struktur desain editorial.
* **Hover Effects:** Saat kursor diarahkan ke foto katalog kuku, tampilkan overlay tipis berisi detail teknis pengerjaan (Jenis Gel, Waktu Pengerjaan, dan Kisaran Harga).

---

## 4. SECTION-BY-SECTION BLUEPRINT & EXACT COPY

### SECTION 01: TOP BAR & EDITORIAL NAVBAR

**[Layout & UI Spec]**
* **Top Announcement Bar:** Latar `#181615`, teks `#F7F4EF` menggunakan font `JetBrains Mono` ukuran `11px`, menyediakan link cepat ke Google Maps & Shopee.
* **Main Navbar:** Sticky di bagian atas, latar `#F7F4EF/95` dengan `backdrop-blur-md`, border bawah `1px solid #D6CFC4`.
* Kiri: Logo teks `DNAIL.CO` dengan sub-label kecil `@dinail.co • YOGYAKARTA` dalam font monospace.
* Tengah: Menu navigasi (`01. Layanan`, `02. Press-On & Shopee`, `03. Katalog`, `04. KalkulatorHarga`, `05. Lokasi Studio`).
* Kanan: Tombol tegas berlatar `#9E2A2B` dengan teks `#FCFBF9` menuju bagian Kalkulator Reservasi.

**[Exact Copy]**
* **Top Bar:** `STUDIO NAIL ART YOGYAKARTA • DIPERCAYA 5.000+ PELANGGAN DALAM 1 TAHUN 8 BULAN • SHOPEE: DINAIL.CO`
* **Brand Logo:** `DNAIL.CO`
* **Nav Links:** `01. Layanan` | `02. Press-On` | `03. Katalog` | `04. Simulasi Harga` | `05. Maps Studio`
* **Nav CTA Button:** `Booking Slot WA →`

---

### SECTION 02: ASYMMETRIC SPLIT HERO

**[Layout & UI Spec]**
* Gunakan Grid 12 kolom dengan garis pembatas vertikal `1px solid #D6CFC4` di antara kolom kiri dan kanan.
* **Kolom Kiri (7 Kolom):** Padding luas (`p-8 lg:p-16`), berisi label indeks monospace, Headline besar dengan kombinasi huruf tegak dan *italic*, paragraf pembuka yang lugas, 2 tombol aksi, dan barisan 4 metrik bukti nyata di bagian bawah yang dipisahkan garis horizontal `1px solid #D6CFC4`.
* **Kolom Kanan (5 Kolom):** Showcase visual bergaya kolase editorial. Tampilkan bingkai foto vertikal hasil nail art jarak dekat (macro shot tangan yang bersih dan estetik), dilengkapi kartu spesifikasi melayang di sudut bawah dengan font `JetBrains Mono` dan tombol kecil menuju Instagram `@dinail.co`.

**[Exact Copy]**
* **Eyebrow Label (Monospace):** `[ YOGYAKARTA NAIL ATELIER • @DINAIL.CO ]`
* **Main Headline:** `Bawa referensi tersulitmu. Kami kerjakan *persis*, bersih, dan tahan lama.`
* **Sub-headline:** `DNAIL.CO adalah studio nail art profesional di Yogyakarta untuk manicure, custom nail art, dan press-on nails. Dikerjakan oleh 5 tim kru & nailist terlatih—tanpa kutikula perih, tanpa gel menggelembung, dan tanpa biaya tambahan kejutan saat di kasir.`
* **Primary CTA (Scroll ke Section 07):** `Hitung Estimasi & Booking WA`
* **Secondary CTA (Buka Link Shopee `https://shopee.co.id/dinail.co` / Scroll ke Press-On):** `Order Press-On via Shopee`
* **4 Data Metrics Bar (Bawah Hero Kiri):**
  * Metric 1: `5.000+` — `Pelanggan telah mempercayakan kukunya pada kami`
  * Metric 2: `1 Thn 8 Bln` — `Konsisten menjaga kualitas & higienitas di Jogja`
  * Metric 3: `5 Kru & Nailist` — `Tim solid yang fokus pada detail & kenyamananmu`
  * Metric 4: `100% Steril` — `Alat logam disterilisasi di setiap pergantian klien`
* **Floating Spec Card pada Gambar Kanan (Monospace):**
  * `ARCHIVED LOOK: GLASS CAT-EYE & CHROME`
  * `IG: @dinail.co • TIKTOK: @dinail.co_`

---

### SECTION 03: THE ANTI-BAD-MANICURE MANIFESTO (MASALAH NYATA AUDIENS)

**[Layout & UI Spec]**
* Layout 4 kolom berjejer dengan garis batas `1px solid #D6CFC4` (seperti tabel perbandingan editorial).
* Kolom 1 berisi judul seksi dan pengantar singkat tentang standar kerja 5 kru DNAIL.CO. Kolom 2, 3, dan 4 berisi 3 keluhan paling sering dialami pelanggan salon kuku dan bagaimana DNAIL.CO menyelesaikannya secara teknis.

**[Exact Copy]**
* **Section Index:** `01 / KENAPA DNAIL.CO`
* **Section Heading:** `Tiga alasan kenapa 5.000+ orang di Jogja pindah ke kursi studio kami.`
* **Section Sub-copy:** `Kami membangun DNAIL.CO selama 20 bulan terakhir bersama 5 tim pilihan untuk menghapus trauma salon kuku yang buru-buru.`
* **Card 01:**
  * **Label:** `MASALAH #01 — EKSPEKTASI VS REALITA`
  * **Title:** `Foto Pinterest tidak lagi berakhir kecewa.`
  * **Body:** `Pernah minta gambar garis tipis atau gradasi *blush*, tapi hasilnya miring dan ketebalan gelnya tidak rata? Nailist kami membedah referensi fotomu di awal—mulai dari pencampuran warna dasar (*undertone* kulit) hingga detail 3D terkecil sebelum kuas menyentuh kukumu.`
* **Card 02:**
  * **Label:** `MASALAH #02 — KEBERSIHAN & RASA NYAMAN`
  * **Title:** `Pembersihan kutikula rapi tanpa berdarah.`
  * **Body:** `Kuku cantik percuma kalau pinggir jari perih saat kena air. Kami menggunakan teknik *prep* kutikula yang lembut namun tuntas dengan mata bor (*nail bit*) dan gunting kutikula yang melewati proses sterilisasi ketat untuk setiap satu pelanggan.`
* **Card 03:**
  * **Label:** `MASALAH #03 — KETAHANAN & HARGA JUJUR`
  * **Title:** `Tidak mengelupas dalam seminggu & harga transparan.`
  * **Body:** `Gel yang cepat terangkat (*lifting*) di bagian pangkal biasanya terjadi karena persiapan permukaan kuku yang asal-asalan. Kami mengunci struktur *base gel* dengan presisi agar awet hingga 3–4 minggu, dengan rincian harga yang disepakati di awal sebelum pengerjaan dimulai.`

---

### SECTION 04: TRANSPARENT SERVICE MENU & ARCHITECTURE

**[Layout & UI Spec]**
* Buat tampilan daftar layanan bergaya **Menu Atelier / Indeks Harga Teknis** dengan garis pembatas `1px solid #D6CFC4` di setiap barisnya.
* Setiap baris layanan memiliki: Nomor Indeks, Nama Layanan, Deskripsi Proses Nyata, Estimasi Waktu (Monospace), dan Kisaran Harga, serta tombol aksi yang langsung memilih layanan tersebut di Kalkulator Bawah.

**[Exact Copy]**
* **Section Index:** `02 / LAYANAN STUDIO & PRODUK`
* **Section Heading:** `Perawatan dari pangkal kutikula hingga ujung desain.`
* **Service Row 01:**
  * **Code:** `SRV—01`
  * **Name:** `Clean Manicure & Structured Gel Polish`
  * **Duration:** `45–60 MENIT`
  * **Price Indicator:** `Mulai Rp 85.000`
  * **Description:** `Perawatan menyeluruh meliputi pembentukan kuku (*shaping*), pembersihan kutikula kering yang rapi, perataan permukaan kuku, aplikasi warna gel pilihan (Polos / Syrup / Cat-Eye / Glitter), hingga nutrisi *cuticle oil*.`
* **Service Row 02:**
  * **Code:** `SRV—02`
  * **Name:** `Custom Signature Nail Art (Basic hingga Complex 3D)`
  * **Duration:** `75–120 MENIT`
  * **Price Indicator:** `Mulai Rp 135.000`
  * **Description:** `Dari *French tip* klasik, *aura/blush nails*, *chrome mirror*, lukis tangan (*hand-painted art*), hingga aksesoris *charms* dan tekstur 3D gel. Bawa desain impianmu sendiri atau konsultasikan warna yang paling masuk di warna kulit tanganmu.`
* **Service Row 03:**
  * **Code:** `SRV—03`
  * **Name:** `Custom Made-to-Measure Press-On Nails`
  * **Duration:** `PRE-ORDER 2–4 HARI • BISA CHECKOUT VIA SHOPEE`
  * **Price Indicator:** `Mulai Rp 110.000 / Set`
  * **Description:** `Solusi untuk mahasiswa kesehatan, pekerja kantoran, atau acara wisuda dan lamaran yang tidak memungkinkan pakai kuku gel permanen setiap hari. Diukur presisi mengikuti lebar ke-10 jarimu, dibuat *handmade* dengan gel asli (bukan plastik tipis pabrikan), lengkap dengan *prep kit* siap pasang.`
* **Service Row 04:**
  * **Code:** `SRV—04`
  * **Name:** `Safe Gel Removal & Nail Recovery`
  * **Duration:** `30 MENIT`
  * **Price Indicator:** `Mulai Rp 35.000`
  * **Description:** `Pelepasan gel lama dengan aman tanpa merusak lapisan kuku asli. Tidak dikelupas paksa yang membuat kuku menjadi tipis dan perih.`

---

### SECTION 05: SPOTLIGHT — CUSTOM PRESS-ON NAILS & SHOPEE OFFICIAL (`dinail.co`)

**[Layout & UI Spec]**
* Seksi khusus dengan latar kontras `#181615` dan teks `#F7F4EF`.
* Layout 2 kolom:
  * **Kolom Kiri:** Menjelaskan mekanisme 3 langkah pemesanan *Custom Press-On* (Ukur -> Buat -> Pasang dalam 5 menit) serta **2 Tombol Pembelian**:
    1. Tombol Utama ke **Shopee Official (`https://shopee.co.id/dinail.co`)** untuk yang ingin checkout praktis / luar kota.
    2. Tombol Kedua ke **WhatsApp (`https://wa.me/62882008903525?text=Halo%20Admin%20DNAIL.CO,%20saya%20mau%20konsultasi%20ukuran%20dan%20desain%20Custom%20Press-On%20Nails`)**.
  * **Kolom Kanan:** Menampilkan tabel visual panduan ukuran milimeter kuku (`Jempol`, `Telunjuk`, `Tengah`, `Manis`, `Kelingking`) dan daftar isi paket *Toolkit* yang didapat di setiap pembelian.

**[Exact Copy]**
* **Section Index:** `03 / CUSTOM PRESS-ON ATELIER • SHOPEE: DINAIL.CO`
* **Heading:** `Kuliah atau kerja dilarang pakai kuku panjang? Pakai saat acara, lepas dalam 5 menit tanpa merusak kuku.`
* **Body Copy:** `Kuku palsu pabrikan sering terlihat aneh karena ukurannya kebesaran di pangkal kutikula dan mudah copot. Press-On Nails DNAIL.CO dilukis manual oleh tim nailist kami menggunakan 100% bahan gel studio dan disesuaikan per milimeter untuk 10 jarimu. Bisa diambil di studio Jogja atau dikirim ke seluruh Indonesia via Shopee.`
* **3-Step Process:**
  * `LANGKAH 01 — UKUR DI STUDIO ATAU DARI RUMAH:` `Datang langsung ke studio Jogja untuk diukur oleh tim kami, atau ukur sendiri dari rumah menggunakan panduan meteran/koin bersama admin WhatsApp kami.`
  * `LANGKAH 02 — HANDMADE DENGAN DESAIN BEBAS:` `Kami kerjakan bentuk kuku (Almond, Coffin, Oval, Short Square) dan lukis desainnya sesuai foto referensimu.`
  * `LANGKAH 03 — CHECKOUT MUDAH & BISA DIPAKAI BERULANG:` `Dilengkapi *sticky gel tab* untuk pemakaian 1–2 hari (kuku bisa disimpan dan dipakai berulang kali) serta lem cair untuk ketahanan hingga 2 minggu.`
* **CTA Buttons:**
  * **Button 1 (Href: `https://shopee.co.id/dinail.co`):** `Beli via Shopee (dinail.co) ↗`
  * **Button 2 (Href: `https://wa.me/62882008903525?text=Halo%20DNAIL.CO,%20saya%20ingin%20pesan%20Custom%20Press-On%20Nails`):** `Kirim Desain Press-On via WhatsApp →`

---

### SECTION 06: INTERACTIVE LOOKBOOK ARCHIVE

**[Layout & UI Spec]**
* Sediakan tombol filter kategori di bagian atas: `Semua Karya`, `Clean & Syrup`, `Chrome & Cat-Eye`, `Wisuda & Bridal`, `3D & Quirky`.
* Grid 3 kolom (Desktop) / 2 kolom (Mobile) dengan rasio foto `4:5`.
* Setiap kartu karya wajib menampilkan tag spesifikasi teknis di bawah foto (Nama Desain, Kategori, Durasi, dan Estimasi Harga) serta tombol kecil `Tanya Desain Ini via WA`.
* Di bagian bawah galeri, tambahkan bar tautan langsung ke **Instagram (`@dinail.co`)**, **TikTok (`@dinail.co_`)**, dan **Threads (`@dinail.co`)** untuk melihat ratusan portofolio video dan foto terbaru.

**[Exact Copy untuk 6 Item Katalog]**
1. **Item 01:** `Blush Aura + Silver Chrome Star` | `Kategori: Chrome & Cat-Eye` | `Durasi: 90 Menit` | `Est. Rp 155.000`
2. **Item 02:** `Milky Oats & Micro French Tip` | `Kategori: Clean & Syrup` | `Durasi: 60 Menit` | `Est. Rp 120.000`
3. **Item 03:** `Pearl Bridal Lace & 3D Floral Ribbon` | `Kategori: Wisuda & Bridal` | `Durasi: 110 Menit` | `Est. Rp 185.000`
4. **Item 04:** `Velvet Magnet Cat-Eye Espresso` | `Kategori: Chrome & Cat-Eye` | `Durasi: 60 Menit` | `Est. Rp 115.000`
5. **Item 05:** `Custom Press-On: Coquette Ribbon Set` | `Kategori: Wisuda & Bridal` | `Tersedia di Shopee: dinail.co` | `Est. Rp 145.000`
6. **Item 06:** `Tortoiseshell Amber & Gold Frame` | `Kategori: 3D & Quirky` | `Durasi: 100 Menit` | `Est. Rp 165.000`

* **Bottom Archive Callout:** `Lihat update desain harian dan video proses pengerjaan tim kami di Instagram @dinail.co dan TikTok @dinail.co_`

---

### SECTION 07: INTERACTIVE PRICE ESTIMATOR & WHATSAPP BOOKING ENGINE

**[Layout & UI Spec]**
* Komponen konversi utama berlatar `#EDE7DD` dengan border `1px solid #181615`.
* **Bagian Kiri (Form Pilihan Interaktif):**
  1. Pilih Tipe Pesanan: `[ Booking Kursi Studio Jogja ]` atau `[ Pre-Order Custom Press-On ]`
  2. Pilih Layanan Utama (Radio Cards dengan harga & durasi):
     * `Clean Manicure + Gel Polos/Syrup (Rp 85.000 • 60 Menit)`
     * `Manicure + Cat Eye / Chrome / French (Rp 115.000 • 75 Menit)`
     * `Manicure + Custom Nail Art Medium (Rp 145.000 • 90 Menit)`
     * `Manicure + Full Complex Nail Art / Wisuda (Rp 180.000 • 120 Menit)`
     * `Custom Press-On Nails Set Lengkap (Rp 125.000 • Pre-Order)`
  3. Pilih Tambahan / Add-ons (Checkboxes):
     * `Remove Gel Lama (+Rp 35.000 • +25 Menit)`
     * `Nail Extension / Sambung Kuku (+Rp 65.000 • +30 Menit)`
     * `Vitamin & Intensive Cuticle Care (+Rp 25.000 • +15 Menit)`
  4. Input Nama Pelanggan & Rencana Hari/Jam Kedatangan (contoh: *Sabtu, 14.00 WIB*).
* **Bagian Kanan (Struk Estimasi Real-time & WhatsApp Trigger):**
  * Desain menyerupai struk cetak studio menggunakan font `JetBrains Mono`.
  * Menampilkan daftar item yang dipilih, **Total Estimasi Waktu Pengerjaan**, dan **Total Estimasi Biaya**.
  * **Logika JavaScript Wajib:** Saat tombol CTA diklik, susun pesan otomatis dan buka URL:
    `https://wa.me/62882008903525?text=` + `encodeURIComponent("Halo Admin DNAIL.CO (@dinail.co), saya [Nama] ingin konfirmasi slot/pesanan:\n\n- Tipe: [Tipe]\n- Layanan: [Layanan]\n- Tambahan: [Add-ons]\n- Rencana Waktu: [Jadwal]\n- Estimasi Total: Rp [Total] (±[Durasi] menit)\n\nApakah slot tersebut masih tersedia?")`

**[Exact Copy]**
* **Section Index:** `04 / SIMULASI HARGA & RESERVASI WHATSAPP`
* **Heading:** `Cek estimasi biaya & waktu sebelum kamu datang ke studio.`
* **Sub-copy:** `Tidak perlu sungkan bertanya harga. Pilih layanan yang kamu inginkan di bawah ini untuk melihat kisaran biaya dan durasi pengerjaan, lalu kirim rinciannya langsung ke WhatsApp Business kami (+62 882-0089-03525).`
* **Primary Button on Receipt:** `Kirim Rincian ke WhatsApp (+62 882-0089-03525) →`
* **Catatan Struk:** `*Harga final untuk Custom Nail Art menyesuaikan tingkat kerumitan foto referensi yang kamu kirimkan ke Admin via WhatsApp.`

---

### SECTION 08: LOKASI STUDIO (MAPS), FAQ & EDITORIAL FOOTER

**[Layout & UI Spec]**
* **Bagian Atas (2 Kolom - Lokasi Studio & Kanal Digital):**
  * Kolom Kiri menampilkan kartu informasi lokasi Studio DNAIL.CO di Yogyakarta lengkap dengan tombol tegas menuju Google Maps (`https://maps.app.goo.gl/DvvN1yfV7coyBbQa6`).
  * Kolom Kanan menampilkan daftar seluruh kanal digital resmi yang bisa diklik langsung (Instagram, TikTok, Threads, Shopee, WhatsApp, dan Email).
* **Bagian Tengah (Accordion FAQ - 4 Pertanyaan Nyata):** Menggunakan garis pemisah `1px solid #D6CFC4` dan tanda `+` / `-` monospace.
* **Bagian Bawah (Footer):** Latar `#181615`, teks `#F7F4EF`, dengan tipografi besar `DNAIL.CO` selebar layar.

**[Exact Copy — Kartu Lokasi & Kontak]**
* **Heading Lokasi:** `Kunjungi Studio DNAIL.CO di Yogyakarta.`
* **Deskripsi Lokasi:** `Dikerjakan oleh 5 tim operasional & nailist yang ramah dan teliti. Klik tombol di bawah untuk membuka titik lokasi tepat studio kami di Google Maps.`
* **Tombol Maps (Href: `https://maps.app.goo.gl/DvvN1yfV7coyBbQa6`):** `Buka Lokasi di Google Maps ↗`
* **Daftar Kanal Resmi:**
  * **WhatsApp Business:** `+62 882-0089-03525` (`https://wa.me/62882008903525`)
  * **Instagram & Threads:** `@dinail.co` (`https://www.instagram.com/dinail.co` & `https://www.threads.net/@dinail.co`)
  * **TikTok:** `@dinail.co_` (`https://www.tiktok.com/@dinail.co_`)
  * **Shopee Official:** `dinail.co` (`https://shopee.co.id/dinail.co`)
  * **Email Owner / Partnership:** `varellabdulrozaq17@gmail.com`

**[Exact Copy — FAQ]**
1. **Q:** `Apakah boleh membawa foto desain referensi sendiri dari Pinterest atau Instagram?`
   **A:** `Sangat boleh! Justru mayoritas dari 5.000+ pelanggan kami datang membawa foto referensi sendiri. Kirimkan fotomu melalui WhatsApp ke +62 882-0089-03525 saat booking agar tim kami bisa langsung menginformasikan ketersediaan warna/aksesoris dan harga pastinya di awal.`
2. **Q:** `Berapa lama ketahanan kuku gel di DNAIL.CO?`
   **A:** `Dengan persiapan kutikula dan struktur *base gel* yang kami terapkan, rata-rata bertahan 3 hingga 4 minggu tanpa *lifting* (mengelupas di pangkal), tergantung aktivitas harian tanganmu.`
3. **Q:** `Bagaimana cara pesan Custom Press-On Nails kalau saya sibuk atau di luar kota?`
   **A:** `Kamu bisa konsultasi ukuran jari melalui WhatsApp kami, lalu melakukan pembayaran atau checkout dengan aman melalui akun Shopee resmi kami di dinail.co.`
4. **Q:** `Apakah bisa datang langsung (Walk-in) tanpa booking?`
   **A:** `Meskipun kami memiliki 5 kru operasional, setiap sesi pengerjaan memakan waktu 60–120 menit demi menjaga kerapian. Kami sangat menyarankan konfirmasi slot terlebih dahulu via WhatsApp agar kamu langsung dilayani tanpa perlu mengantre.`

**[Exact Copy — Footer]**
* **Tagline:** `DNAIL CO STUDIO (@dinail.co) — Presisi di setiap jari, higienis di setiap sesi.`
* **Metadata:** `Berdiri sejak 20 bulan lalu di Yogyakarta • Dipercaya oleh 5.000+ Pelanggan • Dikelola oleh 5 Kru Profesional`
* **Contact Email:** `Partnership & Owner Inquiry: varellabdulrozaq17@gmail.com`