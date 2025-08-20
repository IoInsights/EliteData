"use strict";

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
 * header active outher pages
 */

const headerp = document.querySelector("[data-header-pages]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    headerp.classList.add("active");
  } else {
    headerp.classList.add("active");
  }
});

/**
cookies
 */

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
  alert(
    "Painel de preferências de cookies ainda não implementado. Você pode configurar manualmente no seu navegador."
  );
}

/**
 * THEME
 */

/**
 * THEME TOGGLE FUNCTIONALITY
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

// Theme toggle function
themeToggleBtn.addEventListener("click", function () {
  // Toggle the active class on the button
  themeToggleBtn.classList.toggle("active");

  // Check if dark theme should be applied
  const isDark = !themeToggleBtn.classList.contains("active");

  // Apply the appropriate theme
  if (isDark) {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  } else {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  }
});

/**
 * CHECK AND APPLY SAVED THEME FROM LOCALSTORAGE
 */

// Function to initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");

  // Set theme based on saved preference or default to dark
  if (savedTheme === "light_theme") {
    themeToggleBtn.classList.add("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
  } else {
    // Default to dark theme if no preference saved
    themeToggleBtn.classList.remove("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
    localStorage.setItem("theme", "dark_theme");
  }
}

// Initialize theme when page loads
initializeTheme();

/**
 * HELPER FUNCTION FOR TOGGLING ELEMENTS
 * (Assuming this is used elsewhere in your code)
 */
function elemToggleFunc(elem) {
  elem.classList.toggle("active");
}

//Imagens Blog
document.querySelectorAll(".popup-image img").forEach((img) => {
  img.addEventListener("click", function (e) {
    e.preventDefault();
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");

    modal.style.display = "flex";
    modalImg.src = this.src;
    caption.textContent = this.alt;
  });
});

// Fechar modal
document.querySelector(".modal .close").onclick = function () {
  document.getElementById("imageModal").style.display = "none";
};

// Fechar ao clicar fora da imagem
document.getElementById("imageModal").onclick = function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
};

//FAQ

document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".faq-list details").forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    }
  });
});

//#serviços

const galerias = {
  1: ["./assets/images/project-6.png", "./assets/images/project-7.png"],
  2: [
    "./assets/images/project-1.png",
    "./assets/images/project-2.png",
    "./assets/images/project-3.png",
    "./assets/images/project-4.png",
    "./assets/images/project-5.png",
  ],
  3: ["./assets/images/project-8.png"],
};


let currentGallery = [];
let currentIndex = 0;

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");

// 🔹 Abrir modal ao clicar no botão de card
document.querySelectorAll(".card-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const galleryId = this.getAttribute("data-gallery");
    currentGallery = galerias[galleryId];
    currentIndex = 0;
    abrirModal();
  });
});

// 🔹 Abrir modal ao clicar no link do footer
document.querySelectorAll(".footer-link-srv").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // evita recarregar a página
    const galleryId = this.getAttribute("data-gallery");
    currentGallery = galerias[galleryId];
    currentIndex = 0;
    abrirModal();
  });
});

function abrirModal() {
  modal.style.display = "flex"; // centralizado
  modalImg.src = currentGallery[currentIndex];
  caption.textContent = `Imagem ${currentIndex + 1} de ${currentGallery.length}`;
}

// 🔹 Fechar modal
document.querySelector(".modal .close").onclick = function () {
  modal.style.display = "none";
};

// 🔹 Fechar clicando fora da imagem
modal.onclick = function (e) {
  if (e.target === modal) modal.style.display = "none";
};

// 🔹 Navegação
document.querySelector(".prev").onclick = function (e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  abrirModal();
};

document.querySelector(".next").onclick = function (e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentGallery.length;
  abrirModal();
};