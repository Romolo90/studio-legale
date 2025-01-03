// Riferimenti agli elementi
const scrollToTopBtn = document.getElementById('scrollToTop');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');

// Mostra/nasconde il pulsante "Torna su"
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Funzione per tornare in cima alla pagina
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Evento per il menu a tendina
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});
let privacyClicked = false;
let termsClicked = false;

function enableCheckbox() {
  if (event.target.href.includes("privacy.html")) {
    privacyClicked = true;
  } else if (event.target.href.includes("terms.html")) {
    termsClicked = true;
  }

  if (privacyClicked && termsClicked) {
    document.getElementById('privacy').disabled = false;
  }
}