const nav = document.querySelector(".nav");
const itemTypes = document.querySelectorAll(".nav__link");
const menuСontent = document.querySelector(".menu-content");
const items = [...menuСontent.children];

console.log(items);

nav.addEventListener("click", (e) => {
  let currentItem = e.target;
  let itemId = currentItem.getAttribute("data-item");
  let currentTab = document.querySelector(`#${itemId}`);
  if (!currentItem.classList.contains("nav__link--active")) {
    if (currentItem.classList.contains("nav__link")) {
      itemTypes.forEach((item) => {
        item.classList.remove("nav__link--active");
      });
      items.forEach((item) => {
        item.classList.add(`${item.id}--hide`);
      });
      currentItem.classList.add("nav__link--active");
      currentTab.classList.remove(`${itemId}--hide`);
    }
  }
});
