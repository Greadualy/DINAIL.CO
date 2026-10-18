import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'Apakah boleh membawa foto desain referensi sendiri dari Pinterest atau Instagram?',
    answer: 'Sangat boleh! Justru mayoritas dari 5.000+ pelanggan kami datang membawa foto referensi sendiri. Kirimkan fotomu melalui WhatsApp ke +62 882-0089-03525 saat booking agar tim kami bisa langsung menginformasikan ketersediaan warna/aksesoris dan harga pastinya di awal.'
  },
  {
    id: 'faq-2',
    question: 'Berapa lama ketahanan kuku gel di DINAIL.CO?',
    answer: 'Dengan persiapan kutikula dan struktur base gel yang kami terapkan, rata-rata bertahan 3 hingga 4 minggu tanpa lifting (mengelupas di pangkal), tergantung aktivitas harian tanganmu.'
  },
  {
    id: 'faq-3',
    question: 'Bagaimana cara pesan Custom Press-On Nails kalau saya sibuk atau di luar kota?',
    answer: 'Kamu bisa konsultasi ukuran jari melalui WhatsApp kami, lalu melakukan pembayaran atau checkout dengan aman melalui akun Shopee resmi kami di dinail.co.'
  },
  {
    id: 'faq-4',
    question: 'Apakah bisa datang langsung (Walk-in) tanpa booking?',
    answer: 'Meskipun kami memiliki 5 kru operasional, setiap sesi pengerjaan memakan waktu 60–120 menit demi menjaga kerapian. Kami sangat menyarankan konfirmasi slot terlebih dahulu via WhatsApp agar kamu langsung dilayani tanpa perlu mengantre.'
  }
];

export default function LocationAndFaq() {
  return (
    <>
      <section className="location" id="lokasi">
        <div className="container">
          <div className="location__grid">
            <div className="location__card">
              <p className="section-index mono">05 / LOKASI STUDIO</p>
              <h2 className="location__heading">Kunjungi Studio DINAIL.CO di Yogyakarta.</h2>
              <p className="location__desc">
                Dikerjakan oleh 5 tim operasional &amp; nailist yang ramah dan teliti.
                Klik tombol di bawah untuk membuka titik lokasi tepat studio kami di Google Maps.
              </p>
              <a
                href="https://maps.app.goo.gl/DvvN1yfV7coyBbQa6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary location__maps-btn"
              >
                Buka Lokasi di Google Maps &#8599;
              </a>
            </div>

            <div className="location__channels">
              <p className="form-label mono" style={{ marginBottom: '1.5rem' }}>KANAL DIGITAL RESMI</p>
              <div className="channel-list">
                <a
                  href="https://wa.me/62882008903525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item"
                >
                  <div className="channel-item__icon ch-wa">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="channel-item__label">WhatsApp Business</p>
                    <p className="channel-item__value mono">+62 882-0089-03525</p>
                  </div>
                  <span className="ch-arrow">&#8599;</span>
                </a>

                <a
                  href="https://www.instagram.com/dinail.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item"
                >
                  <div className="channel-item__icon ch-ig">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="channel-item__label">Instagram &amp; Threads</p>
                    <p className="channel-item__value mono">@dinail.co</p>
                  </div>
                  <span className="ch-arrow">&#8599;</span>
                </a>

                <a
                  href="https://www.tiktok.com/@dinail.co_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item"
                >
                  <div className="channel-item__icon ch-tiktok">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                    </svg>
                  </div>
                  <div>
                    <p className="channel-item__label">TikTok</p>
                    <p className="channel-item__value mono">@dinail.co_</p>
                  </div>
                  <span className="ch-arrow">&#8599;</span>
                </a>

                <a
                  href="https://shopee.co.id/dinail.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item"
                >
                  <div className="channel-item__icon ch-shopee">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.5 9.5h15l-1.5 10h-12L4.5 9.5zM9 9.5V7a3 3 0 0 1 6 0v2.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="channel-item__label">Shopee Official Store</p>
                    <p className="channel-item__value mono">dinail.co</p>
                  </div>
                  <span className="ch-arrow">&#8599;</span>
                </a>

                <a href="mailto:varellabdulrozaq17@gmail.com" className="channel-item">
                  <div className="channel-item__icon ch-email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="channel-item__label">Email Owner / Partnership</p>
                    <p className="channel-item__value mono">varellabdulrozaq17@gmail.com</p>
                  </div>
                  <span className="ch-arrow">&#8599;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__head">
            <p className="section-index mono">FAQ</p>
            <h2 className="section-heading">Pertanyaan yang sering ditanyakan.</h2>
          </div>

          <Accordion.Root type="single" collapsible defaultValue="faq-1" className="faq__list">
            {FAQ_DATA.map((item) => (
              <Accordion.Item key={item.id} value={item.id} className="faq__item border-b border-[var(--border)]">
                <Accordion.Header>
                  <Accordion.Trigger className="faq__question group flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[var(--accent)]">
                    <span className="font-normal">{item.question}</span>
                    <span className="faq__icon mono text-2xl transition-transform duration-300 group-data-[state=open]:rotate-45">
                      +
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-6">
                    <p className="text-[14.5px] leading-relaxed text-[var(--text-muted)]">
                      {item.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__wordmark">DINAIL.CO</div>
            <div className="footer__socials">
              <a href="https://www.instagram.com/dinail.co" target="_blank" rel="noopener noreferrer" className="footer__soc">IG</a>
              <a href="https://www.tiktok.com/@dinail.co_" target="_blank" rel="noopener noreferrer" className="footer__soc">TT</a>
              <a href="https://www.threads.net/@dinail.co" target="_blank" rel="noopener noreferrer" className="footer__soc">TH</a>
              <a href="https://shopee.co.id/dinail.co" target="_blank" rel="noopener noreferrer" className="footer__soc">SP</a>
              <a href="https://wa.me/62882008903525" target="_blank" rel="noopener noreferrer" className="footer__soc">WA</a>
            </div>
          </div>
          <div className="footer__divider"></div>
          <div className="footer__bottom">
            <p className="footer__tagline">
              DINAIL CO STUDIO (@dinail.co) &mdash; Presisi di setiap jari, higienis di setiap sesi.
            </p>
            <p className="footer__meta mono">
              Berdiri sejak 20 bulan lalu di Yogyakarta &bull; Dipercaya oleh 5.000+ Pelanggan &bull; Dikelola oleh 5 Kru Profesional
            </p>
            <p className="footer__email mono">
              Partnership &amp; Owner Inquiry:{' '}
              <a href="mailto:varellabdulrozaq17@gmail.com" className="footer__email-link">
                varellabdulrozaq17@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
