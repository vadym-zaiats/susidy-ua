const list = document.querySelector(".start__list");
const title = document.querySelectorAll(".start__link");
const startPage = document.querySelector(".start");
const generalPageMenu = document.getElementById("general");
const menuLinks = document.querySelectorAll(".start__link");
const menuLinksDesktop = document.querySelectorAll(".nav__link");

const button = document.querySelector(".burger-menu__button");
const close = document.querySelector(".burger-menu__button--close");
const back = document.querySelector(".burger-menu__button--back");
const header = document.querySelector(".burger-menu__header");
const burgerMenu = document.querySelector(".menu-content");

button.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("burger-menu__button--open")) {
        startPage.classList.remove("start--hide");
        target.classList.remove("burger-menu__button--open");
        target.classList.add("burger-menu__button--close");
        header.classList.add("burger-menu__header--active");
        burgerMenu.classList.remove("menu-content--hide");
        Array.from(menuLinks).forEach((item) => {
            const navElementAttribute = item.getAttribute("data-nav");
                document.getElementById(navElementAttribute).classList.remove(`${navElementAttribute}--show`);
                document.getElementById(navElementAttribute).classList.add(`${navElementAttribute}--hide`);
        });
    } else if (target.classList.contains("burger-menu__button--close")) {
        target.classList.add("burger-menu__button--open");
        target.classList.remove("burger-menu__button--close");
        header.classList.remove("burger-menu__header--active");
        burgerMenu.classList.add("menu-content--hide");
        Array.from(menuLinks).forEach((item) => {
            const navElementAttribute = item.getAttribute("data-nav");
            if (navElementAttribute !== "general"){
                document.getElementById(navElementAttribute).classList.remove(`${navElementAttribute}--show`);
                document.getElementById(navElementAttribute).classList.add(`${navElementAttribute}--hide`);
            }else{
                document.getElementById(navElementAttribute).classList.remove(`${navElementAttribute}--hide`);
                document.getElementById(navElementAttribute).classList.add(`${navElementAttribute}--show`);
            }
        });
    } else if (target.classList.contains("burger-menu__button--back")) {
        target.classList.add("burger-menu__button--close");
        target.classList.remove("burger-menu__button--back");
        startPage.classList.remove("start--hide");
        document.getElementById("general").classList.add(`show__general__desktop`);
        Array.from(menuLinks).forEach((item) => {
            const navElementAttribute = item.getAttribute("data-nav");
            document.getElementById(navElementAttribute).classList.remove(`${navElementAttribute}--show`);
            document.getElementById(navElementAttribute).classList.remove(`${navElementAttribute}--hide`);
            item.classList.add(`${item.id}--hide`);
        });
    }
});

Array.from(menuLinks).forEach((navElement) => {
    navElement.addEventListener("click", (event) => {
        startPage.classList.add("start--hide");
        let target = event.target;
        console.log(target);
        const navElementAttribute = navElement.getAttribute("data-nav");
        document.getElementById("general").classList.remove(`show__general__desktop`);
        document.getElementById(navElementAttribute).classList.remove(`${navElementAttribute}--hide`);
        document.getElementById(navElementAttribute).classList.add(`${navElementAttribute}--show`);
        Array.from(menuLinksDesktop).forEach((el) => {
            const navElementAttributeDesktop = el.getAttribute("data-item");
            if (navElementAttributeDesktop === navElementAttribute) {
                el.classList.add("nav__link--active");
            } else {
                el.classList.remove("nav__link--active");
            }
        });
        console.log(navElementAttribute);
        button.classList.remove("burger-menu__button--close");
        button.classList.add("burger-menu__button--back");
    });
});
