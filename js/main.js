const navMobile = document.querySelector('.nav-mobile');
const hamburger = document.querySelector('.hamburger');

navMobile.classList.toggle('aperto');

// Cambia icona hamburger ↔ X
if (navMobile.classList.contains('aperto')) {
  hamburger.textContent = '✖';
} else {
  hamburger.textContent = '☰';
}
