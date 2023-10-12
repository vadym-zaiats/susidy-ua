const list = document.querySelector(".start__list");
const title = document.querySelectorAll(".start__link");
const startPage = document.querySelector(".start");
const generalPageMenu = document.getElementById("general");
const menuLinks = document.querySelectorAll(".start__link");
const menuLinksDesktop = document.querySelectorAll(".nav__link");

const button = document.querySelector(".burger-menu__button");
const back = document.querySelector(".burger-menu__back");
const header = document.querySelector(".burger-menu__header");
const burgerMenu = document.querySelector(".menu-content");

const thankYouPage = document.querySelector(".thank-you-page");

function openMobileMenu(target) {
  startPage.classList.remove("start--hide");
  target.classList.remove("burger-menu__button--open");
  target.classList.add("burger-menu__button--close");
  header.classList.add("burger-menu__header--active");
  burgerMenu.classList.remove("menu-content--hide");
}

function closeMobileMenu(target) {
  target.classList.add("burger-menu__button--open");
  target.classList.remove("burger-menu__button--close");
  header.classList.remove("burger-menu__header--active");
  burgerMenu.classList.add("menu-content--hide");
}

function backToNavigation(target) {
  button.classList.remove("burger-menu__button--hide");
  back.classList.add("burger-menu__back--hide");
  startPage.classList.remove("start--hide");
  document.getElementById("general").classList.add(`show__general__desktop`);
  Array.from(menuLinksDesktop).forEach((el) => {
    const navElementAttribute = el.getAttribute("data-item");
    if (navElementAttribute !== "general") {
      el.classList.remove("nav__link--active");
    } else {
      el.classList.add("nav__link--active");
    }
  });
  if (!thankYouPage.classList.contains("thank-you-page--hide")) {
    thankYouPage.classList.add("thank-you-page--hide");
    flatType.classList.remove("flat-type--hide");
  }
  if (!certificatePage.classList.contains("certificate--hide")) {
    certificatePage.classList.add("certificate--hide");
    flatType.classList.remove("flat-type--hide");
  }
}

function updateNavElements(action) {
  Array.from(menuLinks).forEach((item) => {
    const navElementAttribute = item.getAttribute("data-nav");
    const navElement = document.getElementById(navElementAttribute);
    action(navElement, navElementAttribute);
  });
}

function hideNavElement(navElement, navElementAttribute) {
  navElement.classList.remove(`${navElementAttribute}--show`);
}

function showNavElement(navElement, navElementAttribute) {
  navElement.classList.add(`${navElementAttribute}--show`);
}

header.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("burger-menu__button--open")) {
    openMobileMenu(target);
    updateNavElements(hideNavElement);
  } else if (target.classList.contains("burger-menu__button--close")) {
    closeMobileMenu(target);
    updateNavElements((navElement, navElementAttribute) => {
      if (navElementAttribute !== "general") {
        hideNavElement(navElement, navElementAttribute);
      } else {
        showNavElement(navElement, navElementAttribute);
      }
    });
  } else if (target.classList.contains("burger-menu__back")) {
    backToNavigation(target);
    updateNavElements((navElement, navElementAttribute) => {
      navElement.classList.remove(
        `${navElementAttribute}--show`,
        `${navElementAttribute}--hide`
      );
    });
  }
});

Array.from(menuLinks).forEach((navElement) => {
  navElement.addEventListener("click", (event) => {
    startPage.classList.add("start--hide");
    let target = event.target;
    const navElementAttribute = navElement.getAttribute("data-nav");
    document
      .getElementById("general")
      .classList.remove(`show__general__desktop`);
    document
      .getElementById(navElementAttribute)
      .classList.remove(`${navElementAttribute}--hide`);
    document
      .getElementById(navElementAttribute)
      .classList.add(`${navElementAttribute}--show`);
    Array.from(menuLinksDesktop).forEach((el) => {
      const navElementAttributeDesktop = el.getAttribute("data-item");
      if (navElementAttributeDesktop === navElementAttribute) {
        el.classList.add("nav__link--active");
      } else {
        el.classList.remove("nav__link--active");
      }
    });
    button.classList.add("burger-menu__button--hide");
    back.classList.remove("burger-menu__back--hide");
  });
});
