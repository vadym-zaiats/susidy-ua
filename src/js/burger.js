const open = document.querySelector(".burger-menu__open");
const close = document.querySelector(".burger-menu__close");
const back = document.querySelector(".burger-menu__back");
const header = document.querySelector(".burger-menu__header");
const burgerMenu = document.querySelector(".menu-content");

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
    burgerMenu.classList.remove("menu-content--hide");
    if (startPage.classList.contains("start--hide")) {
      close.classList.add("burger-menu__close--hide");
      open.classList.add("burger-menu__open--hide");
      back.classList.remove("burger-menu__back--hide");
    }
  }
  if (e.target === close) {
    e.target.classList.add("burger-menu__close--hide");
    open.classList.remove("burger-menu__open--hide");
    header.classList.remove("burger-menu__header--active");
    burgerMenu.classList.add("menu-content--hide");
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

function openPage(target, nameOfPage, page, hideClass) {
  if (target === nameOfPage) {
    page.classList.remove(hideClass);
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

function removeClassOnload() {
  if (window.innerWidth < 768) {
    generalPage.classList.add("general--hide");
  }
  if (window.innerWidth > 768) {
    generalPage.classList.remove("general--hide");
  }
}

function removeClassOnResize() {
  if (window.innerWidth < 768) {
    items.forEach((item) => {
      if (!item.classList.contains(`${item.id}--hide`)) {
        itemTypes.forEach((itemType) => {
          itemType.classList.remove("nav__link--active");
          if (itemType.getAttribute("data-item") === item.id) {
            itemType.classList.add("nav__link--active");
          }
        });
      }
      if (startPage.classList.contains("start--hide")) {
        header.classList.add("burger-menu__header--active");
        burgerMenu.classList.remove("menu-content--hide");
        close.classList.add("burger-menu__close--hide");
        open.classList.add("burger-menu__open--hide");
        back.classList.remove("burger-menu__back--hide");
      }
    });
  }
  if (window.innerWidth > 768) {
    if (!startPage.classList.contains("start--hide")) {
      startPage.classList.add("start--hide");
      generalPage.classList.remove("general--hide");
    } else {
      items.forEach((item) => {
        if (!item.classList.contains(`${item.id}--hide`)) {
          itemTypes.forEach((itemType) => {
            itemType.classList.remove("nav__link--active");

            if (itemType.getAttribute("data-item") === item.id) {
              itemType.classList.add("nav__link--active");
            }
          });
        }
      });
    }
  }
}
window.addEventListener("resize", removeClassOnResize);
