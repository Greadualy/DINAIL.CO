/* ── Data ── */
const SERVICES = [
  { name: 'Clean Manicure + Gel Polos/Syrup',             price: 85000,  duration: 60,  isPreorder: false },
  { name: 'Manicure + Cat Eye / Chrome / French',          price: 115000, duration: 75,  isPreorder: false },
  { name: 'Manicure + Custom Nail Art Medium',             price: 145000, duration: 90,  isPreorder: false },
  { name: 'Manicure + Full Complex Nail Art / Wisuda',     price: 180000, duration: 120, isPreorder: false },
  { name: 'Custom Press-On Nails Set Lengkap',             price: 125000, duration: 0,   isPreorder: true  },
];

const ADDONS = [
  { id: 'addon-removal',   name: 'Remove Gel Lama',                price: 35000, duration: 25 },
  { id: 'addon-extension', name: 'Nail Extension / Sambung Kuku',  price: 65000, duration: 30 },
  { id: 'addon-vitamin',   name: 'Vitamin & Intensive Cuticle Care', price: 25000, duration: 15 },
];

let currentOrderType = 'studio';

/* ── Formatter ── */
function formatRupiah(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

/* ── Set Order Type ── */
function setOrderType(type, btn) {
  currentOrderType = type;
  document.querySelectorAll('.order-type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('receipt-type').textContent =
    type === 'studio' ? 'Booking Kursi Studio Jogja' : 'Pre-Order Custom Press-On';
  updateEstimate();
}

/* ── Select Service from Service Menu ── */
function selectService(index) {
  const radio = document.querySelector(`input[name="service"][value="${index}"]`);
  if (radio) {
    radio.checked = true;
    updateEstimate();
    document.getElementById('estimator').scrollIntoView({ behavior: 'smooth' });
  }
}

/* ── Update Estimate (Real-time) ── */
function updateEstimate() {
  const selectedVal = parseInt(document.querySelector('input[name="service"]:checked')?.value ?? '0');
  const svc = SERVICES[selectedVal];

  let totalPrice    = svc.price;
  let totalDuration = svc.duration;
  let addonLines    = '';

  ADDONS.forEach(addon => {
    const checkbox = document.getElementById(addon.id);
    if (checkbox && checkbox.checked) {
      totalPrice    += addon.price;
      totalDuration += addon.duration;
      addonLines += `
        <div class="receipt__row">
          <span class="receipt__item-name">${addon.name}</span>
          <span class="receipt__item-price mono">${formatRupiah(addon.price)}</span>
        </div>`;
    }
  });

  document.getElementById('receipt-service-name').textContent  = svc.name;
  document.getElementById('receipt-service-price').textContent = formatRupiah(svc.price);
  document.getElementById('receipt-addons-list').innerHTML     = addonLines;
  document.getElementById('receipt-total').textContent         = formatRupiah(totalPrice);
  document.getElementById('receipt-duration').textContent      =
    svc.isPreorder ? 'PRE-ORDER 2–4 HARI' : `${totalDuration} MENIT`;
}

/* ── Send to WhatsApp ── */
function sendToWhatsApp() {
  const selectedVal  = parseInt(document.querySelector('input[name="service"]:checked')?.value ?? '0');
  const svc          = SERVICES[selectedVal];
  const name         = document.getElementById('customer-name').value.trim() || '(belum diisi)';
  const schedule     = document.getElementById('customer-schedule').value.trim() || '(belum diisi)';
  const orderType    = currentOrderType === 'studio' ? 'Booking Kursi Studio Jogja' : 'Pre-Order Custom Press-On';

  let totalPrice    = svc.price;
  let totalDuration = svc.duration;
  let addonText     = '';

  ADDONS.forEach(addon => {
    const cb = document.getElementById(addon.id);
    if (cb && cb.checked) {
      totalPrice    += addon.price;
      totalDuration += addon.duration;
      addonText     += `\n   - ${addon.name} (+${formatRupiah(addon.price)})`;
    }
  });

  if (!addonText) addonText = '\n   - (tidak ada tambahan)';

  const durationText = svc.isPreorder ? 'Pre-Order 2–4 Hari' : `±${totalDuration} Menit`;

  const message =
`Halo Admin DNAIL.CO (@dinail.co), saya ${name} ingin konfirmasi slot/pesanan:

- Tipe: ${orderType}
- Layanan: ${svc.name}
- Tambahan:${addonText}
- Rencana Waktu: ${schedule}
- Estimasi Total: ${formatRupiah(totalPrice)} (${durationText})

Apakah slot tersebut masih tersedia?`;

  const url = 'https://wa.me/62882008903525?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ── Lookbook Filter ── */
function filterLookbook(category, btn) {
  /* Update active button */
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  /* Filter cards */
  document.querySelectorAll('.lookbook-card').forEach(card => {
    const cat = card.getAttribute('data-category');
    if (category === 'all' || cat === category) {
      card.style.display = '';
      setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => { card.style.display = 'none'; }, 250);
    }
  });
}

/* ── FAQ Accordion ── */
function toggleFaq(id) {
  const item   = document.getElementById(id);
  const icon   = document.getElementById(id + '-icon');
  const isOpen = item.classList.contains('is-open');

  /* Close all others */
  document.querySelectorAll('.faq__item.is-open').forEach(openItem => {
    openItem.classList.remove('is-open');
    const openIcon = document.getElementById(openItem.id + '-icon');
    if (openIcon) openIcon.textContent = '+';
  });

  /* Toggle current */
  if (!isOpen) {
    item.classList.add('is-open');
    icon.textContent = '−';
  }
}

/* ── Mobile Hamburger ── */
function toggleMobileMenu() {
  const menu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  if (!menu) return;
  const isOpen = menu.classList.toggle('is-open');
  if (hamburger) {
    hamburger.classList.toggle('is-active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  if (menu) menu.classList.remove('is-open');
  if (hamburger) {
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
}

// Close mobile menu if clicked outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  if (menu && menu.classList.contains('is-open')) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

/* ── Init on DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  updateEstimate();

  /* Lookbook card transition setup */
  document.querySelectorAll('.lookbook-card').forEach(card => {
    card.style.transition = 'opacity 0.25s ease, transform 0.25s ease, translateY 0.3s ease';
  });

  /* Intersection Observer for scroll-in animations */
  const observerOptions = { threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.manifesto__card, .service-row, .lookbook-card, .channel-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  /* Custom is-visible class triggers animation */
  const style = document.createElement('style');
  style.textContent = `.is-visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});

