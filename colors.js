const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");
// Display Mobile Menu

menu.addEventListener(
  "click",
  (mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  })
);
function highLight() {
  const elem = document.querySelector(".highLight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");

  let scrollPos = window.scrollY;

  //add 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highLight");
    aboutMenu.classList.remove("highLight");
    servicesMenu.classList.remove("highLight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highLight");
    homeMenu.classList.remove("highLight");
    servicesMenu.classList.remove("highLight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add("highLight");
    aboutMenu.classList.remove("highLight");
    homeMenu.classList.remove("highLight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highLight");
  }
}
window.addEventListener("scroll", highLight);
window.addEventListener("click", highLight);

// Close mobile Menu when clicking on a menu item
const hiddenMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hiddenMenu);
navLogo.addEventListener("click", hiddenMenu);