const open = document.querySelector(".open");
const close = document.querySelector(".close");
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger-menu");

open.addEventListener("click", (e) => {
  e.target.classList.add("hide");
  close.classList.remove("hide");
  header.classList.add("burger-active");
  burgerMenu.classList.remove("hide");
  //   document.querySelector(".header__nav--list").classList.add("active");
});

document.querySelector(".close").addEventListener("click", (e) => {
  e.target.classList.add("hide");
  open.classList.remove("hide");
  header.classList.add("burger-active");
  burgerMenu.classList.add("hide");
  // document.querySelector(".header__nav--list").classList.remove("active");
});

const burger = document.querySelector(".header__nav--list");
document.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(burger) &&
    burger.classList.contains("active") &&
    !e.target.classList.contains("burger")
  ) {
    document.querySelector(".header__nav--list").classList.remove("active");
    open.classList.remove("hide");
    close.classList.add("hide");
  }
});

window.addEventListener("resize", () => {
  document.querySelector(".header__nav--list").classList.remove("active");
  open.classList.remove("hide");
  close.classList.add("hide");
});
