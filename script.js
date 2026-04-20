const slides = document.querySelectorAll('.testimonial');
const dots   = document.querySelectorAll('.dot');
let current  = 0;
let timer;

function goTo(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startAuto() {
  timer = setInterval(() => goTo(current + 1), 5000);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

document.getElementById('prev-btn').addEventListener('click', () => { goTo(current - 1); resetAuto(); });
document.getElementById('next-btn').addEventListener('click', () => { goTo(current + 1); resetAuto(); });
dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));

document.querySelector('.testimonials-card').addEventListener('mouseenter', () => clearInterval(timer));
document.querySelector('.testimonials-card').addEventListener('mouseleave', startAuto);

startAuto();
