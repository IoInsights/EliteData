'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
cookies
 */

<script>
// Verifica se o usuário já fez uma escolha
window.onload = function () {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
        document.getElementById("cookie-banner").style.display = "block";
    } else {
        document.getElementById("cookie-banner").style.display = "none";
    }
};

// Aceita todos os cookies
function acceptCookies() {
    localStorage.setItem("cookieConsent", "accepted");
    document.getElementById("cookie-banner").style.display = "none";
    // Aqui você pode ativar scripts de terceiros, como Google Analytics
    console.log("Cookies aceitos.");
}

// Recusa cookies não essenciais
function rejectCookies() {
    localStorage.setItem("cookieConsent", "rejected");
    document.getElementById("cookie-banner").style.display = "none";
    // Aqui você pode bloquear scripts não essenciais
    console.log("Cookies não essenciais recusados.");
}

// Abre painel de preferências (simulado)
function openPreferences() {
    alert("Painel de preferências de cookies ainda não implementado. Você pode configurar manualmente no seu navegador.");
}
</script>