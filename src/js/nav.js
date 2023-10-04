const nav = document.querySelector(".nav");
const itemTypes = document.querySelectorAll(".nav__link");
const menuСontent = document.querySelector(".menu-content");
const items = [...menuСontent.children].slice(2, -2);

nav.addEventListener("click", (e) => {
  console.log(e.target);
  let currentItem = e.target;
  let itemId = currentItem.getAttribute("data-item");
  console.log(currentItem);
  let currentTab = document.querySelector(`#${itemId}`);
  if (!currentItem.classList.contains("nav__link--general")) {
    let general = document.getElementById("general");
    general.classList.remove("general--show");
    general.classList.add("general--hide");
  }
  if (!currentItem.classList.contains("nav__link--active")) {
    if (currentItem.classList.contains("nav__link")) {
      itemTypes.forEach((item) => {
        item.classList.remove("nav__link--active");
        item.classList.remove(`${item.id}--show`);
      });
      items.forEach((item) => {
        item.classList.remove(`${item.id}--show`);
      });
      currentItem.classList.add("nav__link--active");
      currentTab.classList.add(`${itemId}--show`);
    }
  }
});
