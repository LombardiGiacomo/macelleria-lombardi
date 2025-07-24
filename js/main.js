const menu = document.getElementById('menuMobile');
const hamburger = document.querySelector('.hamburger');

menu.classList.toggle('aperto');

// Cambia simbolo ☰ <-> ✖
if (menu.classList.contains('aperto')) {
  hamburger.textContent = '✖';
} else {
  hamburger.textContent = '☰';
}
