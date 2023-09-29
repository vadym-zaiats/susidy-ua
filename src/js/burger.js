const open = document.querySelector(".burger-menu__open");
const close = document.querySelector(".burger-menu__close");
const header = document.querySelector(".burger-menu__header");
const burgerMenu = document.querySelector(".burger-menu__content");

open.addEventListener("click", (e) => {
  e.target.classList.add("burger-menu__open--hide");
  close.classList.remove("burger-menu__close--hide");
  header.classList.add("burger-menu__header--active");
  burgerMenu.classList.remove("burger-menu__content--hide");
});

close.addEventListener("click", (e) => {
  e.target.classList.add("burger-menu__close--hide");
  open.classList.remove("burger-menu__open--hide");
  header.classList.remove("burger-menu__header--active");
  burgerMenu.classList.add("burger-menu__content--hide");
});

// const burger = document.querySelector(".header__nav--list");
// document.addEventListener("click", (e) => {
//   if (
//     !e.composedPath().includes(burger) &&
//     burger.classList.contains("active") &&
//     !e.target.classList.contains("burger")
//   ) {
//     document.querySelector(".header__nav--list").classList.remove("active");
//     open.classList.remove("hide");
//     close.classList.add("hide");
//   }
// });

window.addEventListener("resize", () => {
  burgerMenu.classList.add("burger-menu__content--hide");
  open.classList.remove("burger-menu__open--hide");
  close.classList.add("burger-menu__open--hide");
  header.classList.remove("burger-menu__header--active");
});
