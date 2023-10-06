const list = document.querySelector(".start__list");
const title = document.querySelectorAll(".start__link");
const startPage = document.querySelector(".start");
const generalPageMenu = document.getElementById("general");

const button = document.querySelector(".burger-menu__button");
const open = document.querySelector(".burger-menu__button--open");
const close = document.querySelector(".burger-menu__button--close");
const back = document.querySelector(".burger-menu__button--back");
const header = document.querySelector(".burger-menu__header");
const burgerMenu = document.querySelector(".menu-content");

header.addEventListener("click", (e) => {
  const t = e.target;
  if (t.classList.contains("burger-menu__button--open")) {
    t.classList.remove("burger-menu__button--open");
    t.classList.add("burger-menu__button--close");
    header.classList.add("burger-menu__header--active");
    burgerMenu.classList.remove("menu-content--hide");
    startPage.classList.remove("start--hide")
    generalPageMenu.classList.remove("general--show")
    generalPageMenu.classList.add("general--hide")
  } else if (t.classList.contains("burger-menu__button--close")) {
    t.classList.add("burger-menu__button--open");
    t.classList.remove("burger-menu__button--close");
    header.classList.remove("burger-menu__header--active");
    burgerMenu.classList.add("menu-content--hide");
  } else if (t.classList.contains("burger-menu__button--back")) {
    t.classList.add("burger-menu__button--close");
    t.classList.remove("burger-menu__button--back");
    startPage.classList.remove("start--hide");
    items.forEach((item) => {
      item.classList.add(`${item.id}--hide`);
    });
  }
});

list.addEventListener("click", (e) => {
  let t = e.target;
  let itemId = t.getAttribute("data-nav");
  let currentTab = document.querySelector(`#${itemId}`);
  if (t.classList.contains("start__link")) {
    currentTab.classList.remove(`${itemId}--hide`);
    currentTab.classList.add(`${itemId}--show_1`);
    startPage.classList.add("start--hide");
  }
  if (startPage.classList.contains("start--hide")) {
    button.classList.remove("burger-menu__button--close");
    button.classList.add("burger-menu__button--back");
  }
});
