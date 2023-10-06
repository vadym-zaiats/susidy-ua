const nav = document.querySelector(".nav");
const itemTypes = document.querySelectorAll(".nav__link");
const menuСontent = document.querySelector(".menu-content");
const items = [...menuСontent.children].slice(2, -2);
const donationButtons = document.getElementsByClassName("donation-button");
const generalPage = document.getElementById("general");
const menuPage = document.getElementById("start");

nav.addEventListener("click", (e) => {
    let currentItem = e.target;
    let itemId = currentItem.getAttribute("data-item");
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

function hideAllPages() {
    let navElements = document.getElementsByClassName("start__link");
    Array.from(navElements).forEach((element) => {
        let dataAttributeValue = element.getAttribute("data-nav");
        document.getElementById(`${dataAttributeValue}`).classList.add(`${dataAttributeValue}--hide`);
        document.getElementById(`${dataAttributeValue}`).classList.remove(`${dataAttributeValue}--show`);
    });
}

function menuPageHideAndShowDonationPage() {
    generalPage.classList.remove("general--hide");
    generalPage.classList.add("general--show");
    menuPage.classList.add("start--hide");
}

function handleButtonClick() {
    hideAllPages();
    menuPageHideAndShowDonationPage();
}

Array.from(donationButtons).forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

