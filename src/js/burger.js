// document.querySelector(".open").addEventListener("click", (e) => {
//   e.target.classList.add("hide");
//   document.querySelector(".close").classList.remove("hide");
//   document.querySelector(".header__nav--list").classList.add("active");
// });
//
// document.querySelector(".close").addEventListener("click", (e) => {
//   e.target.classList.add("hide");
//   document.querySelector(".open").classList.remove("hide");
//   document.querySelector(".header__nav--list").classList.remove("active");
// });
//
// const burger = document.querySelector(".header__nav--list");
// document.addEventListener("click", (e) => {
//   if (
//     !e.composedPath().includes(burger) &&
//     burger.classList.contains("active") &&
//     !e.target.classList.contains("burger")
//   ) {
//     document.querySelector(".header__nav--list").classList.remove("active");
//     document.querySelector(".open").classList.remove("hide");
//     document.querySelector(".close").classList.add("hide");
//   }
// });
//
// window.addEventListener("resize", () => {
//   document.querySelector(".header__nav--list").classList.remove("active");
//   document.querySelector(".open").classList.remove("hide");
//   document.querySelector(".close").classList.add("hide");
// });
