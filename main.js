"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");

// === hamburger menu control ===

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hide");
  hamburgerMenu.classList.toggle("flex");
  hamburgerIcon.classList.toggle("hamburger-active");
});
