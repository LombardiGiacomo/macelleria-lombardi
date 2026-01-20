document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById('menuOverlay');
  const hamburger = document.querySelector('.nav-hamburger');
  let menuOpen = false;

  const header = document.querySelector(".header"); 

  function handleHeaderScroll() {
    if (menuOpen) return;

    const scrolled = window.scrollY > 20;
    header.classList.toggle("is-scrolled", scrolled);
  }

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();

  // Toggle menu
  hamburger.addEventListener('click', () => {
    overlay.classList.toggle('active');
    hamburger.classList.toggle('open');
    menuOpen = overlay.classList.contains('active');

    if (menuOpen) {
      // congela l'header nello stato "scrolled" così non cresce mentre il menu scende
      header.classList.add('is-scrolled');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // quando chiudi, ripristina lo stato corretto in base allo scroll
      handleHeaderScroll();
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
      header.classList.remove('menu-open');
      handleHeaderScroll();

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
      header.classList.remove('menu-open');
      handleHeaderScroll();
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

