const donationButtons = document.getElementsByClassName("donation-button");
const generalPage = document.getElementById("general");

function hideAllPages() {
    let navElements = document.getElementsByClassName("start__link");
    Array.from(navElements).forEach((element) => {
        let dataAttributeValue = element.getAttribute("data-nav");
        document.getElementById(`${dataAttributeValue}`).classList.add(`${dataAttributeValue}--hide`);
        document.getElementById(`${dataAttributeValue}`).classList.remove(`${dataAttributeValue}--show`);
    });
}

function menuPageHideAndShowDonationPage() {
    const menuLinks = document.querySelectorAll(".nav__link");
    Array.from(menuLinks).forEach((element) => {
        element.classList.remove("nav__link--active");
        const navElementAttribute = element.getAttribute("data-item");
        if (navElementAttribute === "general") {
            element.classList.add("nav__link--active");
        }
    });
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
