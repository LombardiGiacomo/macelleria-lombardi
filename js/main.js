const menu = document.querySelector('.menuMobile');
const hamburger = document.querySelector('.nav-hamburger');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
});

