import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const LOOKBOOK_ITEMS = [
  {
    id: 1,
    category: 'chrome',
    name: 'Blush Aura + Silver Chrome Star',
    img: '/assets/catalog_blush_chrome.jpg',
    tags: ['Chrome & Cat-Eye', '90 Menit', 'Est. Rp 155.000'],
    price: 'Est. Rp 155.000',
    meta: 'Chrome & Cat-Eye • 90 Menit',
    waText: 'Halo DINAIL.CO, saya tertarik desain Blush Aura + Silver Chrome Star',
    type: 'studio'
  },
  {
    id: 2,
    category: 'clean',
    name: 'Milky Oats & Micro French Tip',
    img: '/assets/catalog_milky_french.jpg',
    tags: ['Clean & Syrup', '60 Menit', 'Est. Rp 120.000'],
    price: 'Est. Rp 120.000',
    meta: 'Clean & Syrup • 60 Menit',
    waText: 'Halo DINAIL.CO, saya tertarik desain Milky Oats & Micro French Tip',
    type: 'studio'
  },
  {
    id: 3,
    category: 'bridal',
    name: 'Pearl Bridal Lace & 3D Floral Ribbon',
    img: '/assets/catalog_bridal_pearl.jpg',
    tags: ['Wisuda & Bridal', '110 Menit', 'Est. Rp 185.000'],
    price: 'Est. Rp 185.000',
    meta: 'Wisuda & Bridal • 110 Menit',
    waText: 'Halo DINAIL.CO, saya tertarik desain Pearl Bridal Lace & 3D Floral Ribbon',
    type: 'studio'
  },
  {
    id: 4,
    category: 'chrome',
    name: 'Velvet Magnet Cat-Eye Espresso',
    img: '/assets/catalog_cat_eye.jpg',
    tags: ['Chrome & Cat-Eye', '60 Menit', 'Est. Rp 115.000'],
    price: 'Est. Rp 115.000',
    meta: 'Chrome & Cat-Eye • 60 Menit',
    waText: 'Halo DINAIL.CO, saya tertarik desain Velvet Magnet Cat-Eye Espresso',
    type: 'studio'
  },
  {
    id: 5,
    category: 'bridal',
    name: 'Custom Press-On: Coquette Ribbon Set',
    img: '/assets/catalog_press_on_coquette.jpg',
    tags: ['Wisuda & Bridal', 'Shopee: dinail.co', 'Est. Rp 145.000'],
    price: 'Est. Rp 145.000',
    meta: 'Wisuda & Bridal • Shopee: dinail.co',
    isShopee: true,
    shopeeUrl: 'https://shopee.co.id/dinail.co',
    type: 'press-on'
  },
  {
    id: 6,
    category: '3d',
    name: 'Tortoiseshell Amber & Gold Frame',
    img: '/assets/catalog_tortoiseshell.jpg',
    tags: ['3D & Quirky', '100 Menit', 'Est. Rp 165.000'],
    price: 'Est. Rp 165.000',
    meta: '3D & Quirky • 100 Menit',
    waText: 'Halo DINAIL.CO, saya tertarik desain Tortoiseshell Amber & Gold Frame',
    type: 'studio'
  }
];

export default function LookbookCatalog() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = LOOKBOOK_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section className="lookbook" id="katalog">
      <div className="container">
        <div className="lookbook__header">
          <p className="section-index mono">04 / LOOKBOOK ARCHIVE</p>
          <h2 className="section-heading">Karya terpilih dari studio kami.</h2>
        </div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Tabs.List className="lookbook__filters" aria-label="Filter kategori lookbook">
            <Tabs.Trigger
              value="all"
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            >
              Semua Karya
            </Tabs.Trigger>
            <Tabs.Trigger
              value="clean"
              className={`filter-btn ${activeTab === 'clean' ? 'active' : ''}`}
            >
              Clean &amp; Syrup
            </Tabs.Trigger>
            <Tabs.Trigger
              value="chrome"
              className={`filter-btn ${activeTab === 'chrome' ? 'active' : ''}`}
            >
              Chrome &amp; Cat-Eye
            </Tabs.Trigger>
            <Tabs.Trigger
              value="bridal"
              className={`filter-btn ${activeTab === 'bridal' ? 'active' : ''}`}
            >
              Wisuda &amp; Bridal
            </Tabs.Trigger>
            <Tabs.Trigger
              value="3d"
              className={`filter-btn ${activeTab === '3d' ? 'active' : ''}`}
            >
              3D &amp; Quirky
            </Tabs.Trigger>
          </Tabs.List>

          <div className="lookbook__grid" id="lookbook-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="lookbook-card" data-category={item.category}>
                <div className="lookbook-card__img-wrap">
                  <img
                    src={item.img}
                    alt={`${item.name} nail art DINAIL.CO`}
                    className="lookbook-card__img"
                    loading="lazy"
                  />
                  <div className="lookbook-card__overlay">
                    <p className="lookbook-card__overlay-title">{item.name}</p>
                    <p className="lookbook-card__overlay-meta mono">{item.meta}</p>
                    <p className="lookbook-card__overlay-price mono">{item.price}</p>
                    {item.isShopee ? (
                      <a
                        href={item.shopeeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--sm btn--wa-overlay"
                      >
                        Beli di Shopee dinail.co
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/62882008903525?text=${encodeURIComponent(item.waText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--sm btn--wa-overlay"
                      >
                        Tanya Desain Ini via WA
                      </a>
                    )}
                  </div>
                </div>
                <div className="lookbook-card__info">
                  <h3 className="lookbook-card__name">{item.name}</h3>
                  <div className="lookbook-card__tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="tag mono">{tag}</span>
                    ))}
                  </div>
                  {item.isShopee ? (
                    <a
                      href={item.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lookbook-card__wa mono"
                    >
                      Beli di Shopee dinail.co &#8594;
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/62882008903525?text=${encodeURIComponent(item.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lookbook-card__wa mono"
                    >
                      Tanya Desain Ini via WA &#8594;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Tabs.Root>

        <div className="lookbook__archive-bar">
          <p className="lookbook__archive-text">
            Lihat update desain harian dan video proses pengerjaan tim kami di
            Instagram @dinail.co dan TikTok @dinail.co_
          </p>
          <div className="lookbook__archive-links">
            <a
              href="https://www.instagram.com/dinail.co"
              target="_blank"
              rel="noopener noreferrer"
              className="archive-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram @dinail.co
            </a>
            <a
              href="https://www.tiktok.com/@dinail.co_"
              target="_blank"
              rel="noopener noreferrer"
              className="archive-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
              TikTok @dinail.co_
            </a>
            <a
              href="https://www.threads.net/@dinail.co"
              target="_blank"
              rel="noopener noreferrer"
              className="archive-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">
                <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
              </svg>
              Threads @dinail.co
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
