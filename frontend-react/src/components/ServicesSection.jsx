import React from 'react';

export default function ServicesSection({ onSelectService }) {
  const handleSelect = (serviceIndex, hasAddonRemoval = false) => {
    if (onSelectService) {
      onSelectService(serviceIndex, hasAddonRemoval);
    }
    const target = document.getElementById('estimator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services" id="layanan">
      <div className="container">
        <div className="services__header">
          <p className="section-index mono">02 / LAYANAN STUDIO &amp; PRODUK</p>
          <h2 className="section-heading">Perawatan dari pangkal kutikula hingga ujung desain.</h2>
        </div>
        <div className="services__table">
          <div className="service-row">
            <div className="service-row__meta">
              <span className="service-row__code mono">SRV&mdash;01</span>
              <div className="service-row__text">
                <h3 className="service-row__name">Clean Manicure &amp; Structured Gel Polish</h3>
                <p className="service-row__desc">
                  Perawatan menyeluruh meliputi pembentukan kuku (<em>shaping</em>), pembersihan kutikula kering
                  yang rapi, perataan permukaan kuku, aplikasi warna gel pilihan (Polos / Syrup / Cat-Eye / Glitter),
                  hingga nutrisi <em>cuticle oil</em>.
                </p>
              </div>
            </div>
            <div className="service-row__right">
              <span className="service-row__duration mono">45&ndash;60 MENIT</span>
              <span className="service-row__price mono">Mulai Rp 85.000</span>
              <button
                type="button"
                className="btn btn--sm btn--outline"
                onClick={() => handleSelect(0)}
              >
                Pilih Layanan Ini
              </button>
            </div>
          </div>

          <div className="service-row">
            <div className="service-row__meta">
              <span className="service-row__code mono">SRV&mdash;02</span>
              <div className="service-row__text">
                <h3 className="service-row__name">Custom Signature Nail Art (Basic hingga Complex 3D)</h3>
                <p className="service-row__desc">
                  Dari <em>French tip</em> klasik, <em>aura/blush nails</em>, <em>chrome mirror</em>, lukis tangan
                  (<em>hand-painted art</em>), hingga aksesoris <em>charms</em> dan tekstur 3D gel. Bawa desain impianmu
                  sendiri atau konsultasikan warna yang paling masuk di warna kulit tanganmu.
                </p>
              </div>
            </div>
            <div className="service-row__right">
              <span className="service-row__duration mono">75&ndash;120 MENIT</span>
              <span className="service-row__price mono">Mulai Rp 135.000</span>
              <button
                type="button"
                className="btn btn--sm btn--outline"
                onClick={() => handleSelect(2)}
              >
                Pilih Layanan Ini
              </button>
            </div>
          </div>

          <div className="service-row">
            <div className="service-row__meta">
              <span className="service-row__code mono">SRV&mdash;03</span>
              <div className="service-row__text">
                <h3 className="service-row__name">Custom Made-to-Measure Press-On Nails</h3>
                <p className="service-row__desc">
                  Solusi untuk mahasiswa kesehatan, pekerja kantoran, atau acara wisuda dan lamaran yang tidak memungkinkan
                  pakai kuku gel permanen setiap hari. Diukur presisi mengikuti lebar ke-10 jarimu, dibuat <em>handmade</em> dengan
                  gel asli (bukan plastik tipis pabrikan), lengkap dengan <em>prep kit</em> siap pasang.
                </p>
              </div>
            </div>
            <div className="service-row__right">
              <span className="service-row__duration mono">
                PRE-ORDER 2&ndash;4 HARI<br />BISA CHECKOUT VIA SHOPEE
              </span>
              <span className="service-row__price mono">Mulai Rp 110.000 / Set</span>
              <button
                type="button"
                className="btn btn--sm btn--outline"
                onClick={() => handleSelect(4)}
              >
                Pilih Layanan Ini
              </button>
            </div>
          </div>

          <div className="service-row">
            <div className="service-row__meta">
              <span className="service-row__code mono">SRV&mdash;04</span>
              <div className="service-row__text">
                <h3 className="service-row__name">Safe Gel Removal &amp; Nail Recovery</h3>
                <p className="service-row__desc">
                  Pelepasan gel lama dengan aman tanpa merusak lapisan kuku asli. Tidak dikelupas paksa yang membuat kuku
                  menjadi tipis dan perih.
                </p>
              </div>
            </div>
            <div className="service-row__right">
              <span className="service-row__duration mono">30 MENIT</span>
              <span className="service-row__price mono">Mulai Rp 35.000</span>
              <button
                type="button"
                className="btn btn--sm btn--outline"
                onClick={() => handleSelect(0, true)}
              >
                Pilih Layanan Ini
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
