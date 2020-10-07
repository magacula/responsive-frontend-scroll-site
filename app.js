const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// function that displays mobile menu
const mobileMenu = () => {
  // toggle method returns true if token is now present, and false otherwise.
  menu.classList.toggle("is-active"); /* hamburger animation */
  menuLinks.classList.toggle("active"); /* displays menu */
};

menu.addEventListener("click", mobileMenu);
