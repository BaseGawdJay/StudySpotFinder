// Kanye Mitchell JavaScript Form Validation  6/19/2025
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("spotForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    // Clear previous errors
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    let hasError = false;

    const name = document.getElementById("name").value.trim();
    const location = document.getElementById("location").value.trim();
    const description = document.getElementById("description").value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');

    //Code is going to check all text areas and rating for completion.
    //Images will remain optional and will still allow for form completion
    if (name === "") {
      document.getElementById("error-name").textContent = "Name is required.";
      hasError = true;
    }

    if (location === "") {
      document.getElementById("error-location").textContent = "Location is required.";
      hasError = true;
    }

    if (description === "") {
      document.getElementById("error-description").textContent = "Description is required.";
      hasError = true;
    }

    if (!rating) {
      document.getElementById("error-rating").textContent = "Please select a rating.";
      hasError = true;
    }
    // If statement will alert the user that the form has been submitted or will display messages for empty fields.
    // If form is submitted successfully form will reset for another response.
    if (!hasError) { 
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
