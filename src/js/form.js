let flat = null;
let accessoryType = null;
let buyerData = null;
const flatType = document.querySelector(".flat-type");

const buyerPage = document.querySelector(".buyer");
const thankYouPagePage = document.querySelector(".thank-you-page");

const accessoriesСontent = document.querySelector(".accessory-type");
const accessoriesItems = [...accessoriesСontent.children];

const flatAccessories = document.querySelector(".accessories-flat");
const balconyAccessories = document.querySelector(".accessories-balcony");
const terraceAccessories = document.querySelector(".accessories-terrace");

const buyerBackText = document.querySelector(".buyer__back-text");
const donateSum = document.querySelector(".buyer__sum");

const certificatePage = document.querySelector(".certificate");

function toAccessoriesPage(event) {
  const roomType = event.target.value;

  switch (roomType) {
    case "до 200 грн":
      flat = roomType;
      flatType.classList.add("flat-type--hide");
      flatAccessories.classList.remove("accessories-flat--hide");
      break;
    case "до 250 грн":
      flat = roomType;
      flatType.classList.add("flat-type--hide");
      balconyAccessories.classList.remove("accessories-balcony--hide");
      break;
    case "до 500 грн":
      flat = roomType;
      flatType.classList.add("flat-type--hide");
      terraceAccessories.classList.remove("accessories-terrace--hide");
      break;
  }
}

function toBuyerData(event) {
  event.preventDefault();

  accessoryType = event.target.value;

  accessoriesItems.forEach((item) => {
    if (!item.classList.contains(`${item.id}--hide`)) {
      item.classList.add(`${item.id}--hide`);
    }
  });

  buyerPage.classList.remove("buyer--hide");

  switch (flat) {
    case "до 200 грн":
      donateSum.min = 200;
      donateSum.setAttribute("placeholder", "Сума донату (не менше 200 грн)");
      buyerBackText.innerText = "Придбати квартиру з балконом та котиком";
      break;
    case "до 250 грн":
      donateSum.min = 250;
      donateSum.setAttribute("placeholder", "Сума донату (не менше 250 грн)");
      buyerBackText.innerText = "Придбати квартиру з функціональною терасою";
      break;
    case "до 500 грн":
      donateSum.min = 500;
      donateSum.setAttribute("placeholder", "Сума донату (не менше 500 грн)");
      buyerBackText.innerText = "Придбати іншу квартиру";
      break;
  }
}

function backToFlatType(event) {
  event.preventDefault();

  accessoriesItems.forEach((item) => {
    if (!item.classList.contains(`${item.id}--hide`)) {
      item.classList.add(`${item.id}--hide`);
    }
  });

  buyerPage.classList.add("buyer--hide");
  flatType.classList.remove("flat-type--hide");

  flat = null;
  accessoryType = null;
}

function submitForm(event) {
  event.preventDefault();
  buyerData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    email: document.getElementById("balconyText").value,
    donate: document.getElementById("donationAmount").value,
  };
  buyerPage.classList.add("buyer--hide");
  thankYouPagePage.classList.remove("thank-you-page--hide");
  console.log(flat, accessoryType, buyerData);
}

function certificateDownload() {
  thankYouPagePage.classList.add("thank-you-page--hide");
  certificatePage.classList.remove("certificate--hide");
}
