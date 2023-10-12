let flat = null,
  accessoryType = null,
  buyerData = null;

const form = document.querySelector(".general__form");
const flatType = document.querySelector(".flat-type");
const flatTypeList = document.querySelector(".flat-type__list");
const accessoryTypeList = document.querySelector(".accessory-type");

const buyerPage = document.querySelector(".buyer");
const thankYouPagePage = document.getElementById("thank-you-page");
const certificatePage = document.querySelector(".certificate");

const accessoriesСontent = document.querySelector(".accessory-type");
const accessoriesItems = [...accessoriesСontent.children];

const flatAccessories = document.getElementById("accessories-flat");
const balconyAccessories = document.getElementById("accessories-balcony");
const terraceAccessories = document.getElementById("accessories-terrace");

const buyerBackText = document.querySelector(".buyer__back-text");
const donateSum = document.querySelector(".buyer__sum");

const toDownloadButton = document.querySelector(".thank-you-page__download");
const toCertificateButton = document.querySelector(".certificate__button");

function flatTypeVar(event) {
  event.preventDefault();
  const eventTargetValue = event.target.value;
  switch (eventTargetValue) {
    case "flat":
      flat = eventTargetValue;
      flatType.classList.add("flat-type--hide");
      flatAccessories.classList.remove("accessories-styles--hide");
      donateSum.min = 200;
      donateSum.setAttribute("placeholder", "Сума донату (не менше 200 грн)");
      break;
    case "balcony":
      flat = eventTargetValue;
      flatType.classList.add("flat-type--hide");
      balconyAccessories.classList.remove("accessories-styles--hide");
      donateSum.min = 250;
      donateSum.setAttribute("placeholder", "Сума донату (не менше 250 грн)");
      break;
    case "terrace":
      flat = eventTargetValue;
      flatType.classList.add("flat-type--hide");
      terraceAccessories.classList.remove("accessories-styles--hide");
      donateSum.min = 500;
      donateSum.setAttribute("placeholder", "Сума донату (не менше 500 грн)");
      break;
  }
}
function accessoriesTypeVar(event) {
  event.preventDefault();
  const eventTargetValue = event.target.value;
  const eventTargetParent = event.target.parentElement;
  if (eventTargetParent.classList.contains("accessories-styles__label")) {
    accessoryType = eventTargetValue;
    buyerPage.classList.remove("buyer--hide");
    accessoriesItems.forEach((item) => {
      if (!item.classList.contains("accessories-styles--hide")) {
        item.classList.add("accessories-styles--hide");
      }
    });
    buyerBackText.innerText = event.target.getAttribute("data-text");
  }
  if (event.target.classList.contains("back-button")) {
    flat = null;
    flatType.classList.remove("flat-type--hide");
    event.target.parentElement.classList.add("accessories-styles--hide");
  }
}
function backToAccessoriesType(event) {
  if (event.target.type !== "submit") {
    event.preventDefault();
    if (event.target.classList.contains("buyer__img")) {
      accessoryType = null;
      buyerPage.classList.add("buyer--hide");
      switch (flat) {
        case "flat":
          flatAccessories.classList.remove("accessories-styles--hide");
          break;
        case "balcony":
          balconyAccessories.classList.remove("accessories-styles--hide");
          break;
        case "terrace":
          terraceAccessories.classList.remove("accessories-styles--hide");
          break;
      }
    }
  }
}
function handleSubmit(event) {
  event.preventDefault();
  buyerData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    text: document.getElementById("balconyText").value,
    donate: document.getElementById("donationAmount").value,
  };
  buyerPage.classList.add("buyer--hide");
  if (!event.submitter.classList.contains("thank-you-page__download")) {
    thankYouPagePage.classList.remove("thank-you-page--hide");
  }
  console.log(flat, accessoryType, buyerData);
  flat = null;
  accessoryType = null;
  buyerData = null;
}
function toCertificatePage() {
  thankYouPagePage.classList.add("thank-you-page--hide");
  certificatePage.classList.remove("certificate--hide");
}
function downloadCertificate(event) {
  event.preventDefault();
  alert("Тут має початись скачування сертифікату");
}

flatTypeList.addEventListener("click", flatTypeVar);
accessoryTypeList.addEventListener("click", accessoriesTypeVar);
buyerPage.addEventListener("click", backToAccessoriesType);
toDownloadButton.addEventListener("click", toCertificatePage);
toCertificateButton.addEventListener("click", downloadCertificate);
form.addEventListener("submit", handleSubmit);
