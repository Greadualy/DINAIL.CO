import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    closeMenu();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <div className="top-bar" id="top-bar">
        <div className="top-bar__inner">
          <span className="top-bar__text">
            STUDIO NAIL ART YOGYAKARTA &bull; DIPERCAYA 5.000+ PELANGGAN DALAM 1 TAHUN 8 BULAN &bull; SHOPEE: DINAIL.CO
          </span>
          <div className="top-bar__links">
            <a
              href="https://maps.app.goo.gl/DvvN1yfV7coyBbQa6"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar__link"
            >
              Maps &#8599;
            </a>
            <span className="top-bar__sep">|</span>
            <a
              href="https://shopee.co.id/dinail.co"
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar__link"
            >
              Shopee &#8599;
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar" id="navbar" ref={navRef}>
        <div className="navbar__inner">
          <div className="navbar__brand">
            <a href="#hero" onClick={handleScrollTo('hero')} className="navbar__logo">
              DNAIL.CO
            </a>
            <span className="navbar__sublabel">@dinail.co &bull; YOGYAKARTA</span>
          </div>

          <button
            className={`navbar__hamburger ${isOpen ? 'is-active' : ''}`}
            id="hamburger"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar__menu ${isOpen ? 'is-open' : ''}`} id="nav-menu">
            <li>
              <a href="#layanan" className="navbar__link" onClick={handleScrollTo('layanan')}>
                01. Layanan
              </a>
            </li>
            <li>
              <a href="#press-on" className="navbar__link" onClick={handleScrollTo('press-on')}>
                02. Press-On
              </a>
            </li>
            <li>
              <a href="#katalog" className="navbar__link" onClick={handleScrollTo('katalog')}>
                03. Katalog
              </a>
            </li>
            <li>
              <a href="#estimator" className="navbar__link" onClick={handleScrollTo('estimator')}>
                04. Simulasi Harga
              </a>
            </li>
            <li>
              <a href="#lokasi" className="navbar__link" onClick={handleScrollTo('lokasi')}>
                05. Maps Studio
              </a>
            </li>
            <li className="navbar__menu-cta">
              <a href="#estimator" className="btn btn--primary btn--block" onClick={handleScrollTo('estimator')}>
                Booking Slot WA &#8594;
              </a>
            </li>
          </ul>

          <a href="#estimator" onClick={handleScrollTo('estimator')} className="btn btn--primary navbar__cta">
            Booking Slot WA &#8594;
          </a>
        </div>
      </nav>
    </>
  );
}
