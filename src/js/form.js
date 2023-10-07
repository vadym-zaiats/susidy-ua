let flat = null;
let accessoryType = null;
let buyerData = null;
let originalHTML;

const form = document.querySelector(".general__form");

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
const qwe = document.querySelector(".certificate__button");

function buyText() {
  switch (flat) {
    case "flat":
      switch (accessoryType) {
        case "cat":
          buyerBackText.innerText = "Придбати квартиру з котиком";
          break;
        case "curtains":
          buyerBackText.innerText = "Придбати квартиру зі шторами";
          break;
        case "blinds":
          buyerBackText.innerText = "Придбати квартиру з ролетами";
          break;
        case "flower":
          buyerBackText.innerText = "Придбати квартиру з квіткою";
          break;
        case "shrub":
          buyerBackText.innerText = "Придбати квартиру з кущем";
          break;
        case "vase":
          buyerBackText.innerText = "Придбати квартиру з вазою";
          break;
        case "without":
          buyerBackText.innerText = "Придбати квартиру";
          break;
      }
      break;
    case "balcony":
      switch (accessoryType) {
        case "uaFlag":
          buyerBackText.innerText =
            "Придбати квартиру з балконом та прапорами України";
          break;
        case "bike":
          buyerBackText.innerText =
            "Придбати квартиру з балконом та велосипедом";
          break;
        case "clothes":
          buyerBackText.innerText = "Придбати квартиру з балконом та речами";
          break;
        case "cond":
          buyerBackText.innerText =
            "Придбати квартиру з балконом та кондиціонером";
          break;
        case "curtains":
          buyerBackText.innerText = "Придбати квартиру з балконом та шторами";
          break;
        case "chairs":
          buyerBackText.innerText = "Придбати квартиру з балконом та кріслами";
          break;
        case "garden":
          buyerBackText.innerText = "Придбати квартиру з балконом та садком";
          break;
        case "lights":
          buyerBackText.innerText =
            "Придбати квартиру з балконом та ліхтариками";
          break;
        case "flags":
          buyerBackText.innerText = "Придбати квартиру з балконом та прапорами";
          break;
        case "plants":
          buyerBackText.innerText =
            "Придбати квартиру з балконом та квітами в горшечку";
          break;
        case "plants2":
          buyerBackText.innerText = "Придбати квартиру з балконом та вазоном";
          break;
        case "plants3":
          buyerBackText.innerText =
            "Придбати квартиру з балконом та вазоном на підставці";
          break;
        case "plants4":
          buyerBackText.innerText =
            "Придбати квартиру з балконом та рослинністю";
          break;
        case "plants5":
          buyerBackText.innerText =
            "Придбати квартиру з балконом та трьома горшечками";
          break;
        case "without":
          buyerBackText.innerText = "Придбати квартиру з балконом";
          break;
      }
      break;
    case "terrace":
      switch (accessoryType) {
        case "flags":
          buyerBackText.innerText = "Придбати терасу з прапорами";
          break;
        case "bicycle":
          buyerBackText.innerText = "Придбати терасу з велосипедом";
          break;
        case "flags2":
          buyerBackText.innerText = "Придбати терасу з прапорцями";
          break;
        case "garden":
          buyerBackText.innerText = "Придбати терасу з садком";
          break;
        case "garden2":
          buyerBackText.innerText = "Придбати терасу з квітами";
          break;
        case "grape":
          buyerBackText.innerText = "Придбати терасу з виноградом";
          break;
        case "lights":
          buyerBackText.innerText = "Придбати терасу з ліхтарями";
          break;
        case "without":
          buyerBackText.innerText = "Придбати терасу";
          break;
      }
      break;
  }
}

function formActions(event) {
  if (event.target.type !== "submit") {
    event.preventDefault();
    const eventTargetValue = event.target.value;
    const eventTargetParent = event.target.parentElement;

    switch (eventTargetValue) {
      case "flat":
        flat = eventTargetValue;
        flatType.classList.add("flat-type--hide");
        flatAccessories.classList.remove("accessories-flat--hide");
        donateSum.min = 200;
        donateSum.setAttribute("placeholder", "Сума донату (не менше 200 грн)");
        originalHTML = form.innerHTML;
        break;
      case "balcony":
        flat = eventTargetValue;
        flatType.classList.add("flat-type--hide");
        balconyAccessories.classList.remove("accessories-balcony--hide");
        donateSum.min = 250;
        donateSum.setAttribute("placeholder", "Сума донату (не менше 250 грн)");
        break;
      case "terrace":
        flat = eventTargetValue;
        flatType.classList.add("flat-type--hide");
        terraceAccessories.classList.remove("accessories-terrace--hide");
        donateSum.min = 500;
        donateSum.setAttribute("placeholder", "Сума донату (не менше 500 грн)");
        break;
    }

    if (eventTargetParent.classList.contains("accessories-styles__label")) {
      accessoryType = eventTargetValue;
      buyerPage.classList.remove("buyer--hide");
      accessoriesItems.forEach((item) => {
        if (!item.classList.contains(`${item.id}--hide`)) {
          item.classList.add(`${item.id}--hide`);
        }
      });
      buyText();
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
  thankYouPagePage.classList.remove("thank-you-page--hide");
  console.log(flat, accessoryType, buyerData);
}
form.addEventListener("click", formActions);
form.addEventListener("submit", handleSubmit);

function toCertificatePage() {
  thankYouPagePage.classList.add("thank-you-page--hide");
  certificatePage.classList.remove("certificate--hide");
}

function backToAccessoriesType(event) {
  event.preventDefault();
  form.innerHTML = originalHTML;
  accessoryType = null;
}

function downloadCertificate(event) {
  event.preventDefault();
  alert("Тут має початись скачування сертифікату");
}
