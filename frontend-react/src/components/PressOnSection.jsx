import React from 'react';

export default function PressOnSection() {
  return (
    <section className="press-on" id="press-on">
      <div className="press-on__grid">
        <div className="press-on__left">
          <p className="section-index mono" style={{ color: '#C8A86B' }}>
            03 / CUSTOM PRESS-ON ATELIER &bull; SHOPEE: DINAIL.CO
          </p>
          <h2 className="press-on__heading">
            Kuliah atau kerja dilarang pakai kuku panjang? Pakai saat acara, lepas dalam 5 menit tanpa merusak kuku.
          </h2>
          <p className="press-on__body">
            Kuku palsu pabrikan sering terlihat aneh karena ukurannya kebesaran di pangkal
            kutikula dan mudah copot. Press-On Nails DINAIL.CO dilukis manual oleh tim nailist kami menggunakan
            100% bahan gel studio dan disesuaikan per milimeter untuk 10 jarimu. Bisa diambil di studio Jogja
            atau dikirim ke seluruh Indonesia via Shopee.
          </p>
          <div className="press-on__steps">
            <div className="press-on__step">
              <span className="press-on__step-label mono">
                LANGKAH 01 &mdash; UKUR DI STUDIO ATAU DARI RUMAH:
              </span>
              <p>
                Datang langsung ke studio Jogja untuk diukur oleh tim kami, atau ukur sendiri dari rumah
                menggunakan panduan meteran/koin bersama admin WhatsApp kami.
              </p>
            </div>
            <div className="press-on__step">
              <span className="press-on__step-label mono">
                LANGKAH 02 &mdash; HANDMADE DENGAN DESAIN BEBAS:
              </span>
              <p>
                Kami kerjakan bentuk kuku (Almond, Coffin, Oval, Short Square) dan lukis desainnya sesuai
                foto referensimu.
              </p>
            </div>
            <div className="press-on__step">
              <span className="press-on__step-label mono">
                LANGKAH 03 &mdash; CHECKOUT MUDAH &amp; BISA DIPAKAI BERULANG:
              </span>
              <p>
                Dilengkapi <em>sticky gel tab</em> untuk pemakaian 1&ndash;2 hari (kuku bisa disimpan dan
                dipakai berulang kali) serta lem cair untuk ketahanan hingga 2 minggu.
              </p>
            </div>
          </div>
          <div className="press-on__ctas">
            <a
              href="https://shopee.co.id/dinail.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
            >
              Beli via Shopee (dinail.co) &#8594;
            </a>
            <a
              href="https://wa.me/62882008903525?text=Halo%20DINAIL.CO%2C%20saya%20ingin%20pesan%20Custom%20Press-On%20Nails"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold"
            >
              Kirim Desain Press-On via WhatsApp &#8594;
            </a>
          </div>
        </div>

        <div className="press-on__right">
          <h3 className="press-on__table-title mono">PANDUAN UKURAN KUKU (mm)</h3>
          <table className="press-on__table">
            <thead>
              <tr>
                <th>Jari</th>
                <th>XS</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>XL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jempol</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Telunjuk</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Tengah</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Manis</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
              <tr>
                <td>Kelingking</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
              </tr>
            </tbody>
          </table>
          <div className="press-on__toolkit">
            <p className="press-on__toolkit-title mono">ISI PAKET TOOLKIT (TIAP PEMBELIAN)</p>
            <ul className="press-on__toolkit-list">
              <li>&#10022; 10 keping kuku sesuai ukuran jarimu</li>
              <li>&#10022; Sticky gel tab (pemakaian 1&ndash;2 hari)</li>
              <li>&#10022; Nail glue cair (ketahanan hingga 2 minggu)</li>
              <li>&#10022; Mini nail file &amp; cuticle stick</li>
              <li>&#10022; Panduan pemasangan &amp; pelepasan aman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
