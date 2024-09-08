document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent form from submitting
    validateForm(e);  // Pass the event explicitly
});

function validateForm(e) {
    // Get the values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation: check if the fields are empty
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        // If validation passes, submit the form
        e.target.submit();  // `e.target` refers to the form
    }
}

// Email validation function using regular expression
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
