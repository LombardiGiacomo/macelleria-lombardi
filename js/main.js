const menu = document.getElementById('menuMobile');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('aperto');
});

