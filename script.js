// Riferimenti agli elementi
const scrollToTopBtn = document.getElementById('scrollToTop');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');
const checkbox = document.getElementById('privacy');

// Variabili per il controllo del consenso
let privacyClicked = false;
let termsClicked = false;

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

// Chiude il menu quando si clicca su un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
  });
});

// Abilita il checkbox solo dopo aver cliccato sui link
function enableCheckbox(event) {
  if (event.target.href.includes("privacy.html")) {
    privacyClicked = true;
  } else if (event.target.href.includes("terms.html")) {
    termsClicked = true;
  }

  if (privacyClicked && termsClicked) {
    checkbox.disabled = false;
  }
}

// Controlla il checkbox prima di inviare il modulo
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const errorElement = document.createElement('p');
  
  errorElement.style.color = 'red';
  errorElement.style.fontSize = '0.9rem';
  errorElement.style.marginTop = '0.5rem';
  errorElement.textContent = 'Devi accettare la Privacy Policy e i Termini di Servizio prima di inviare.';
  errorElement.style.display = 'none'; // Nascondi l'errore inizialmente

  form.addEventListener('submit', (event) => {
    if (!checkbox.checked) {
      event.preventDefault(); // Blocca l'invio del modulo
      if (!form.contains(errorElement)) {
        checkbox.parentElement.appendChild(errorElement);
      }
      errorElement.style.display = 'block';
    } else {
      errorElement.style.display = 'none'; // Nascondi l'errore se il checkbox è selezionato
    }
  });
});
