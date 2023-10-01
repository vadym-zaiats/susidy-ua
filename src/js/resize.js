const generalPage = document.querySelector(".general");
const aboutPage = document.querySelector(".about");
const howItWorksPage = document.querySelector(".how-it-works");
const purposePage = document.querySelector(".purpose");
const partnersPage = document.querySelector(".partners");
const aboutIntegralPage = document.querySelector(".about-integral");

function removeClassOnload() {
  if (window.innerWidth < 768) {
    generalPage.classList.add("general--hide");
    startPage.classList.remove("start--hide");
  }
  if (window.innerWidth > 768) {
    generalPage.classList.remove("general--hide");
    startPage.classList.add("start--hide");
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
window.addEventListener("load", removeClassOnload);
