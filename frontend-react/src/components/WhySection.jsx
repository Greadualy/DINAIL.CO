import React from 'react';

export default function WhySection() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto__grid">
        <div className="manifesto__intro">
          <p className="section-index mono">01 / KENAPA DINAIL.CO</p>
          <h2 className="section-heading">Tiga alasan kenapa 5.000+ orang di Jogja pindah ke kursi studio kami.</h2>
          <p className="section-sub">
            Kami membangun DINAIL.CO selama 20 bulan terakhir bersama 5 tim pilihan untuk
            menghapus trauma salon kuku yang buru-buru.
          </p>
        </div>
        <div className="manifesto__card">
          <p className="manifesto__card-label mono">MASALAH #01 &mdash; EKSPEKTASI VS REALITA</p>
          <h3 className="manifesto__card-title">Foto Referensi tidak lagi membuatmu kecewa.</h3>
          <p className="manifesto__card-body">
            Pernah minta gambar garis tipis atau gradasi <em>blush</em>, tapi
            hasilnya miring dan ketebalan gelnya tidak rata? Nailist kami membedah referensi fotomu di
            awal&mdash;mulai dari pencampuran warna dasar (<em>undertone</em> kulit) hingga detail 3D terkecil
            sebelum kuas menyentuh kukumu.
          </p>
        </div>
        <div className="manifesto__card">
          <p className="manifesto__card-label mono">MASALAH #02 &mdash; KEBERSIHAN &amp; RASA NYAMAN</p>
          <h3 className="manifesto__card-title">Pembersihan kutikula rapi tanpa berdarah.</h3>
          <p className="manifesto__card-body">
            Kuku cantik percuma kalau pinggir jari perih saat kena air. Kami
            menggunakan teknik <em>prep</em> kutikula yang lembut namun tuntas dengan mata bor (<em>nail
            bit</em>) dan gunting kutikula yang melewati proses sterilisasi ketat untuk setiap satu
            pelanggan.
          </p>
        </div>
        <div className="manifesto__card">
          <p className="manifesto__card-label mono">MASALAH #03 &mdash; KETAHANAN &amp; HARGA JUJUR</p>
          <h3 className="manifesto__card-title">Tidak mengelupas dalam seminggu &amp; harga transparan.</h3>
          <p className="manifesto__card-body">
            Gel yang cepat terangkat (<em>lifting</em>) di bagian pangkal biasanya
            terjadi karena persiapan permukaan kuku yang asal-asalan. Kami mengunci struktur <em>base gel</em>
            dengan presisi agar awet hingga 3&ndash;4 minggu, dengan rincian harga yang disepakati di awal
            sebelum pengerjaan dimulai.
          </p>
        </div>
      </div>
    </section>
  );
}
