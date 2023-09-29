const startPage = document.querySelector(".start");
const generalPage = document.querySelector(".general");
const aboutPage = document.querySelector(".about");
const howItWorksPage = document.querySelector(".how-it-works");
const purposePage = document.querySelector(".purpose");
const partnersPage = document.querySelector(".partners");
const aboutIntegralPage = document.querySelector(".about-integral");

const list = document.querySelector(".start__list");

const general = document.querySelector(".start__link--general");
const about = document.querySelector(".start__link--about");
const howItWorks = document.querySelector(".start__link--how-it-works");
const purpose = document.querySelector(".start__link--purpose");
const partners = document.querySelector(".start__link--partners");
const aboutIntegral = document.querySelector(".start__link--about-integral");

const back = document.querySelector(".burger-menu__back");

function closeBack() {
  startPage.classList.add("start--hide");
  close.classList.add("burger-menu__close--hide");
  back.classList.remove("burger-menu__back--hide");
}

list.addEventListener("click", (e) => {
  if (e.target === general) {
    generalPage.classList.remove("general--hide");
    closeBack();
  }
  if (e.target === about) {
    aboutPage.classList.remove("about--hide");
    closeBack();
  }
  if (e.target === howItWorks) {
    howItWorksPage.classList.remove("how-it-works--hide");
    closeBack();
  }
  if (e.target === purpose) {
    purposePage.classList.remove("purpose--hide");
    closeBack();
  }
  if (e.target === partners) {
    partnersPage.classList.remove("partners--hide");
    closeBack();
  }
  if (e.target === aboutIntegral) {
    aboutIntegralPage.classList.remove("about-integral--hide");
    closeBack();
  }
});
