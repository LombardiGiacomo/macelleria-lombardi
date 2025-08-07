document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById('menuOverlay');
  const hamburger = document.querySelector('.nav-hamburger');
  let menuOpen = false;

  // Toggle menu
  hamburger.addEventListener('click', () => {
    overlay.classList.toggle('active');
    hamburger.classList.toggle('open');
    menuOpen = overlay.classList.contains('active');
    if (menuOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Chiudi menu al clic su una voce
  document.querySelectorAll('.menuMobile a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));

      overlay.classList.remove('active');
      hamburger.classList.remove('open');
      menuOpen = false;

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Chiudi menu se si scrolla verso il basso
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && menuOpen) {
      overlay.classList.remove('active');
      hamburger.classList.remove('open');
      menuOpen = false;
    }
    lastScrollY = currentScrollY;
  });

  // Slideshow automatico
  const slideshows = document.querySelectorAll(".slideshow");
  slideshows.forEach(slideshow => {
    let slides = slideshow.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3000);
  });
});
