const headerButton = document.querySelector(".header__burger button"),
  headerButtonShell = document.querySelector(".header__burger"),
  headerMenu = document.querySelector(".header__menu");

headerButton.addEventListener("click", toggleActiveHeaderElements);
window.addEventListener("resize", removeActiveHeaderElements);

function toggleActiveHeaderElements() {
  toggleActiveClass(headerButton);
  toggleActiveClass(headerButtonShell);
  toggleActiveClass(headerMenu);
}

function removeActiveHeaderElements() {
  removeActiveClass(headerButton);
  removeActiveClass(headerButtonShell);
  removeActiveClass(headerMenu);
}

function toggleActiveClass(element) {
  element.classList.toggle("active");
}

function removeActiveClass(element) {
  element.classList.remove("active");
}
