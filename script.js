<script>
  document.getElementById("accept-cookies").addEventListener("click", function() {
    document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 365; // Cookie valido per 1 anno
    document.getElementById("cookie-banner").style.display = "none";
  });

  document.getElementById("manage-cookies").addEventListener("click", function() {
    alert("Funzione di gestione preferenze in sviluppo. Nel frattempo puoi leggere la Cookie Policy.");
  });

  // Nascondi il banner se i cookie sono già stati accettati
  if (document.cookie.includes("cookiesAccepted=true")) {
    document.getElementById("cookie-banner").style.display = "none";
  }
    document.getElementById("manage-cookies").addEventListener("click", function () {
  document.getElementById("cookie-preferences").style.display = "block";
});

document.getElementById("save-preferences").addEventListener("click", function () {
  // Salva le preferenze in un cookie
  const checkboxes = document.querySelectorAll("#cookie-preferences input[name='cookieType']");
  const preferences = Array.from(checkboxes).reduce((prefs, checkbox) => {
    prefs[checkbox.value] = checkbox.checked;
    return prefs;
  }, {});
  document.cookie = `cookiePreferences=${JSON.stringify(preferences)}; path=/; max-age=${60 * 60 * 24 * 365}`;
  document.getElementById("cookie-preferences").style.display = "none";
});

</script>

// ======== Riferimenti agli elementi ========
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mainNav = document.getElementById('mainNav');

const scrollToTopBtn = document.getElementById('scrollToTop');

// Accordion (sezione servizi)
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Checkbox privacy e pulsante invio
const privacyCheckbox = document.getElementById('privacy');
const submitButton = document.getElementById('submitButton');

// ======== Funzioni ========

// Toggle menu mobile
function toggleMenu() {
  mainNav.classList.toggle('active');
}

// Torna all’inizio della pagina
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostra o nasconde il pulsante "Torna su"
function handleScroll() {
  scrollToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
}

// Controllo form: se la checkbox non è selezionata, blocca l’invio
function handleFormSubmit(e) {
  if (!privacyCheckbox.checked) {
    e.preventDefault();
    alert('Devi accettare la Privacy Policy e i Termini di Servizio prima di inviare.');
  }
}

// Accordion
function toggleAccordion() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
  // Chiudi tutti gli accordion prima
  accordionHeaders.forEach(header => {
    header.setAttribute('aria-expanded', 'false');
  });
  
  // Se era chiuso, apri l’accordion cliccato
  if (!isExpanded) {
    this.setAttribute('aria-expanded', 'true');
  }
}

// ======== Event Listener ========
document.addEventListener('DOMContentLoaded', () => {
  // Evento click sul pulsante hamburger
  if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', toggleMenu);

    // Chiude il menu quando si clicca su un link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // Pulsante "Torna su"
  window.addEventListener('scroll', handleScroll);
  scrollToTopBtn.addEventListener('click', scrollToTop);

  // Accordion
  accordionHeaders.forEach(header => {
    header.addEventListener('click', toggleAccordion);
  });

  // Controllo form
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});
