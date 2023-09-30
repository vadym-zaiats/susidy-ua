const nav = document.querySelector(".nav");
const itemType = document.querySelectorAll(".nav__link");

const partnersElement = document.querySelector("#partners");
const aboutElement = document.querySelector("#about");
const aboutIntegralElement = document.querySelector("#about-integral");
const generalElement = document.querySelector("#general");
const howItWorksElement = document.querySelector("#how-it-works");
const purposeElement = document.querySelector("#purpose");

const items = [
  partnersElement,
  aboutElement,
  aboutIntegralElement,
  generalElement,
  howItWorksElement,
  purposeElement,
];

nav.addEventListener("click", (e) => {
  let currentItem = e.target;
  let itemId = currentItem.getAttribute("data-item");
  let currentTab = document.querySelector(`#${itemId}`);

  if (!currentItem.classList.contains("nav__link--active")) {
    if (currentItem.classList.contains("nav__link")) {
      itemType.forEach((item) => {
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
