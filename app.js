// Declared variables to target elements
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// function that displays mobile menu
const mobileMenu = () => {
  // toggle method returns true if token is now present, and false otherwise.
  menu.classList.toggle("is-active"); /* hamburger animation */
  menuLinks.classList.toggle("active"); /* displays menu */
};

menu.addEventListener("click", mobileMenu);

/* Highlighting menu effect when scrolling */
const hightLightMenu = () => {
  const element = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");

  // gets scrollY position of window
  let = scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items (innerWidth makes share highlight is only on desktop view)
  // When scrollY is greater than 600px then change highlight to about section
  if (window.innerWidth > 960 && scrollPos < 600) {
    // scroll for home page
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    // scroll for about page
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    // scroll for services page
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    homeMenu.classList.remove("highlight");
    return;
  }

  // removes the highlight class when website first renders
  if ((element && window.innerWidth < 960 && scrollPos < 600) || element) {
    element.classList.remove("highlight");
  }
};

// listen for scroll & click then trigger highLightMenu function
window.addEventListener("scroll", hightLightMenu);
window.addEventListener("click", hightLightMenu);

// Closes mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  // target the menu bars
  const menuBars = document.querySelector(".is-active"); // 'is-active' means menu is active (true) since dropdown menu is activated
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

// adds event listeners
menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
