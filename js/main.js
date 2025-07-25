const menu = document.querySelector('.menuMobile');
const hamburger = document.querySelector('.nav-hamburger');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });

});

const menuLinks = document.querySelectorAll('.menuMobile a');


menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Chiudi il menu
    menu.classList.remove('open');
    hamburger.classList.remove('open');

    // Vai alla sezione
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

