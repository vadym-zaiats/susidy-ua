const navigation = document.querySelector("nav");
const startPageMobile = document.querySelector(".start");
const buttonMobile = document.querySelector(".burger-menu__button");
const mobileHeaderMenu = document.querySelector(".burger-menu__header");
const generalPage = document.getElementById("general");
const menuPage = document.getElementById("start");

function activateLink(target) {
    target.classList.add("nav__link--active");
    startPageMobile.classList.add("start--hide");
    mobileHeaderMenu.classList.add("burger-menu__header--active");
    buttonMobile.classList.remove("burger-menu__button--open");
    buttonMobile.classList.remove("burger-menu__button--close");
    buttonMobile.classList.add("burger-menu__button--back");
    burgerMenu.classList.remove("menu-content--hide");
}

function deactivateLinks(menuLinks) {
    Array.from(menuLinks).forEach((element) => {
        element.classList.remove("nav__link--active");
        const navElementAttribute = element.getAttribute("data-item");
        hideElements(navElementAttribute);
    });
}

function showElement(elementId) {
    document.getElementById(elementId).classList.add(`${elementId}--show`);
}

function hideElements(elementId) {
    document.getElementById(elementId).classList.remove(`${elementId}--show`);
    document.getElementById("general").classList.remove(`show__general__desktop`);
}

navigation.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.classList.contains("nav__link")) {
        return;
    }
    const menuLinks = document.querySelectorAll(".nav__link");
    const targetAttribute = target.getAttribute("data-item");

    deactivateLinks(menuLinks, targetAttribute);
    showElement(targetAttribute);
    activateLink(target);
});

