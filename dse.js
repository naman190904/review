document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const gradeSelect = document.getElementById("grade");

        // Validate inputs
        if (nameInput.value.trim() === "") {
            alert("Please enter your full name.");
            nameInput.focus();
            return false;
        }

        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return false;
        }

        if (gradeSelect.value === "") {
            alert("Please select your grade.");
            gradeSelect.focus();
            return false;
        }

        // If all inputs are valid, submit the form
        alert("Registration successful!");
        registrationForm.reset(); // Reset the form
        window.location.href="student_idea_sharing.html";
    });

    // Function to validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});