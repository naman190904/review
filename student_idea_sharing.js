
// JavaScript code for handling form submission
document.addEventListener("DOMContentLoaded", function() {
    const ideaForm = document.getElementById("idea-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    ideaForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const ideaTitle = document.getElementById("idea-title").value.trim();
        const ideaDescription = document.getElementById("idea-description").value.trim();
        const ideaTags = document.getElementById("idea-tags").value.trim();

        // Form validation
        if (ideaTitle === "" || ideaDescription === "") {
            errorMessage.textContent = "Please fill in all required fields.";
            errorMessage.style.display = "block";
            return;
        }

        // Simulate form submission (replace with actual AJAX request to server)
        setTimeout(function() {
            // Display success message
            successMessage.style.display = "block";

            // Clear the form fields
            
