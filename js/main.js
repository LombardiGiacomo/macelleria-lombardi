const menu = document.querySelector('.menuMobile');
const hamburger = document.querySelector('.nav-hamburger');

let menuOpen = false;

function openMenu() {
  menu.style.height = 400 + 'px';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  hamburger.classList.add('open');
  /*menu.classList.add('open');*/
  setTimeout(() => {
    menuOpen = true;
  }, 600); // tempo in ms, puoi regolarlo in base al comportamento reale
}

function closeMenu() {
  // Imposta altezza attuale per poterla animare
  menu.style.height = 400 + 'px';

  // Rimuovi SUBITO la classe .open dall’hamburger (torna subito alle 3 linee)
  hamburger.classList.remove('open');

  requestAnimationFrame(() => {
    // Inizia l'animazione verso l’altezza 0
    menu.style.height = '0px';
  });

  // Quando la transizione dell’altezza è finita
  menu.addEventListener('transitionend', function handler() {
    /*menu.classList.remove('open');*/      // Ora togli anche la classe open dal menu
    menu.removeEventListener('transitionend', handler);
    menuOpen = false;
  });
}

hamburger.addEventListener('click', () => {
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.querySelectorAll('.menuMobile a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    // Aggiungiamo un solo listener alla transizione dell'altezza
    const onTransitionEnd = (event) => {
      if (event.propertyName !== 'height') return;

      menu.removeEventListener('transitionend', onTransitionEnd);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    menu.addEventListener('transitionend', onTransitionEnd);

    closeMenu();
  });
});

// Chiude il menu allo scroll verso il basso
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && menuOpen) {
    closeMenu();
  }
  lastScrollY = currentScrollY;
});
