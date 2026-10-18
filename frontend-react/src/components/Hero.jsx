import React from 'react';

export default function Hero() {
  const handleScrollToEstimator = (e) => {
    e.preventDefault();
    const target = document.getElementById('estimator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__grid">
        <div className="hero__left">
          <p className="hero__eyebrow mono">[ YOGYAKARTA NAIL ATELIER &bull; @DINAIL.CO ]</p>
          <h1 className="hero__headline">
            Bawa referensi tersulitmu. Kami kerjakan <em>persis</em>, bersih, dan tahan lama.
          </h1>
          <p className="hero__sub">
            DNAIL.CO adalah studio nail art profesional di Yogyakarta untuk manicure, custom nail art, dan
            press-on nails. Dikerjakan oleh 5 tim kru &amp; nailist terlatih&mdash;tanpa kutikula perih, tanpa
            gel menggelembung, dan tanpa biaya tambahan kejutan saat di kasir.
          </p>
          <div className="hero__ctas">
            <a href="#estimator" onClick={handleScrollToEstimator} className="btn btn--gold">
              Hitung Estimasi &amp; Booking WA
            </a>
            <a
              href="https://shopee.co.id/dinail.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                color: '#F7F4EF',
                borderColor: '#F7F4EF',
                border: '1px solid #F7F4EF',
                backgroundColor: 'transparent',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(247, 244, 239, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Order Press-On via Shopee
            </a>
          </div>
          <div className="hero__metrics">
            <div className="metric">
              <span className="metric__value mono">5.000+</span>
              <span className="metric__label">Pelanggan telah mempercayakan kukunya pada kami</span>
            </div>
            <div className="metric__divider"></div>
            <div className="metric">
              <span className="metric__value mono">20 Bln</span>
              <span className="metric__label">Konsisten menjaga kualitas &amp; higienitas di Jogja</span>
            </div>
            <div className="metric__divider"></div>
            <div className="metric">
              <span className="metric__value mono">5 Kru &amp; Nailist</span>
              <span className="metric__label">Tim solid yang fokus pada detail &amp; kenyamananmu</span>
            </div>
            <div className="metric__divider"></div>
            <div className="metric">
              <span className="metric__value mono">100% Steril</span>
              <span className="metric__label">Alat logam disterilisasi di setiap pergantian klien</span>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__img-wrap">
            <img
              src="/assets/hero_nail_art.jpg"
              alt="Glass Cat-Eye dan Chrome nails hasil karya DNAIL.CO Yogyakarta"
              className="hero__img"
              loading="eager"
            />
            <div className="hero__spec-card">
              <p className="hero__spec-label mono">ARCHIVED LOOK: GLASS CAT-EYE &amp; CHROME</p>
              <p className="hero__spec-social mono">IG: @dinail.co &bull; TIKTOK: @dinail.co_</p>
              <a
                href="https://www.instagram.com/dinail.co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--spec"
              >
                Lihat di Instagram &#8599;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
