let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).style.display = "none";
  currentPage++;
  document.getElementById(`page${currentPage}`).style.display = "block";
}

function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Collect customer data
  const customerData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    roomChoice: document.querySelector('input[name="roomType"]:checked').value,
    furnitureChoice: document.querySelector(
      'input[name="furnitureType"]:checked'
    ).value,
  };

  // TODO: Send customerData to your backend using an AJAX request

  console.log("Customer Data:", customerData); // For demonstration purposes, log the data
}
