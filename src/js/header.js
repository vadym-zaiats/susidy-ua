const list = document.querySelector(".start__list");
const title = document.querySelectorAll(".start__link");
const startPage = document.querySelector(".start");

const open = document.querySelector(".burger-menu__open");
const close = document.querySelector(".burger-menu__close");
const back = document.querySelector(".burger-menu__back");
const header = document.querySelector(".burger-menu__header");
const burgerMenu = document.querySelector(".menu-content");

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
    items.forEach((item) => {
      item.classList.add(`${item.id}--hide`);
    });
    if (startPage.classList.contains("start--hide")) {
      startPage.classList.remove("start--hide");
    }
  }
});

list.addEventListener("click", (e) => {
  let currentItem = e.target;
  let itemId = currentItem.getAttribute("data-nav");
  let currentTab = document.querySelector(`#${itemId}`);
  if (currentItem.classList.contains("start__link")) {
    items.forEach((item) => {
      item.classList.add(`${item.id}--hide`);
    });
    currentTab.classList.remove(`${itemId}--hide`);
    startPage.classList.add("start--hide");
  }
  if (startPage.classList.contains("start--hide")) {
    close.classList.add("burger-menu__close--hide");
    open.classList.add("burger-menu__open--hide");
    back.classList.remove("burger-menu__back--hide");
  }
});
