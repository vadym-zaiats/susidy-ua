let flat;
let accessoryType;
let buyerData;
const flatType = document.querySelector(".flat-type");
const flatAccessories = document.querySelector(".accessories-flat");
const balconyAccessories = document.querySelector(".accessories-balcony");
const terraceAccessories = document.querySelector(".accessories-terrace");

function nextPage(event) {
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

// function nextFurniturePage(furnitureType) {
//   nextPage();

//   // Additional logic specific to the furniture type can be added here
// }

// function submitForm(event) {
//   event.preventDefault(); // Prevent form submission

//   // Collect customer data
//   const customerData = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     roomChoice: document.querySelector('input[name="roomType"]:checked').value,
//     furnitureChoice: getSelectedFurniture(),
//   };

//   // TODO: Send customerData to your backend using an AJAX request

//   console.log("Customer Data:", customerData); // For demonstration purposes, log the data
// }

// function getSelectedFurniture() {
//   const roomType = document.querySelector(
//     'input[name="roomType"]:checked'
//   ).value;
//   const furnitureOptions = document.querySelectorAll(
//     `input[name="furnitureType${capitalizeFirstLetter(roomType)}"]:checked`
//   );
//   const selectedFurniture = Array.from(furnitureOptions).map(
//     (option) => option.value
//   );
//   return selectedFurniture;
// }

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
