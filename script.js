/* ── Testimonials carousel ── */
const slides = document.querySelectorAll('.testimonial');
const dots   = document.querySelectorAll('.dot');
let current  = 0;
let timer;

function goTo(index) {
  if (!slides.length) return;
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startAuto() {
  timer = setInterval(() => goTo(current + 1), 6000);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));

const testimonialsCard = document.querySelector('.testimonials-card');
if (testimonialsCard) {
  testimonialsCard.addEventListener('mouseenter', () => clearInterval(timer));
  testimonialsCard.addEventListener('mouseleave', startAuto);
}
if (slides.length) startAuto();

/* ── Hamburger menu ── */
const hamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

function closeMenu() {
  navMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger && navMenu) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.contains('open');
    isOpen ? closeMenu() : (navMenu.classList.add('open'), hamburger.setAttribute('aria-expanded', 'true'));
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
}

/* ── Expertise tabs ── */
const expTabs = document.querySelectorAll('.expertise-tab');
const expPanels = document.querySelectorAll('.expertise-panel');

expTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.panel;
    expTabs.forEach(t => t.classList.remove('active'));
    expPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(target);
    if (panel) panel.classList.add('active');
  });
});
