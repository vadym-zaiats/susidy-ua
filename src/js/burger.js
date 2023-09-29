const open = document.querySelector(".burger-menu__open");
const close = document.querySelector(".burger-menu__close");
const back = document.querySelector(".burger-menu__back");
const header = document.querySelector(".burger-menu__header");
const burgerMenu = document.querySelector(".burger-menu__content");

const startPage = document.querySelector(".start");
const generalPage = document.querySelector(".general");
const aboutPage = document.querySelector(".about");
const howItWorksPage = document.querySelector(".how-it-works");
const purposePage = document.querySelector(".purpose");
const partnersPage = document.querySelector(".partners");
const aboutIntegralPage = document.querySelector(".about-integral");

const list = document.querySelector(".start__list");

const general = document.querySelector(".start__link--general");
const about = document.querySelector(".start__link--about");
const howItWorks = document.querySelector(".start__link--how-it-works");
const purpose = document.querySelector(".start__link--purpose");
const partners = document.querySelector(".start__link--partners");
const aboutIntegral = document.querySelector(".start__link--about-integral");

function backToStartPage(elem, className) {
  if (!elem.classList.contains(className)) {
    elem.classList.add(className);
  }
}

header.addEventListener("click", (e) => {
  if (e.target === open) {
    e.target.classList.add("burger-menu__open--hide");
    close.classList.remove("burger-menu__close--hide");
    header.classList.add("burger-menu__header--active");
    burgerMenu.classList.remove("burger-menu__content--hide");
  }
  if (e.target === close) {
    e.target.classList.add("burger-menu__close--hide");
    open.classList.remove("burger-menu__open--hide");
    header.classList.remove("burger-menu__header--active");
    burgerMenu.classList.add("burger-menu__content--hide");
  }
  if (e.target === back) {
    back.classList.add("burger-menu__back--hide");
    close.classList.remove("burger-menu__close--hide");
    backToStartPage(back, "burger-menu__back--hide");
    backToStartPage(generalPage, "general--hide");
    backToStartPage(aboutPage, "about--hide");
    backToStartPage(howItWorksPage, "how-it-works--hide");
    backToStartPage(purposePage, "purpose--hide");
    backToStartPage(partnersPage, "partners--hide");
    backToStartPage(aboutIntegralPage, "about-integral--hide");
    if (startPage.classList.contains("start--hide")) {
      startPage.classList.remove("start--hide");
    }
  }
});

function openPage(target, nameOfPage, Page, hideClass) {
  if (target === nameOfPage) {
    Page.classList.remove(hideClass);
    startPage.classList.add("start--hide");
    close.classList.add("burger-menu__close--hide");
    back.classList.remove("burger-menu__back--hide");
  }
}

list.addEventListener("click", (e) => {
  openPage(e.target, general, generalPage, "general--hide");
  openPage(e.target, about, aboutPage, "about--hide");
  openPage(e.target, howItWorks, howItWorksPage, "how-it-works--hide");
  openPage(e.target, purpose, purposePage, "purpose--hide");
  openPage(e.target, partners, partnersPage, "partners--hide");
  openPage(e.target, aboutIntegral, aboutIntegralPage, "about-integral--hide");
});

window.addEventListener("resize", () => {
  burgerMenu.classList.add("burger-menu__content--hide");
  open.classList.remove("burger-menu__open--hide");
  close.classList.add("burger-menu__close--hide");
  header.classList.remove("burger-menu__header--active");
  backToStartPage(back, "burger-menu__back--hide");
  backToStartPage(generalPage, "general--hide");
  backToStartPage(aboutPage, "about--hide");
  backToStartPage(howItWorksPage, "how-it-works--hide");
  backToStartPage(purposePage, "purpose--hide");
  backToStartPage(partnersPage, "partners--hide");
  backToStartPage(aboutIntegralPage, "about-integral--hide");
  if (startPage.classList.contains("start--hide")) {
    startPage.classList.remove("start--hide");
  }
});

function removeClassOnResize() {
  if (window.innerWidth < 767) {
    document.querySelector(".general").classList.add("general--hide");
  }
}

window.addEventListener("load", removeClassOnResize);
window.addEventListener("resize", removeClassOnResize);
