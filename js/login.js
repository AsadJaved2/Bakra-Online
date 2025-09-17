document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    // Agar error-message element nahi milta, to error ko handle karna
    if (!errorMessage) {
        console.error("Error: 'error-message' element not found in the DOM.");
        return;
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        let storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            errorMessage.style.color = "red";
            errorMessage.innerText = "No account found. Please sign up first!";
            return;
        }

        if (emailValue !== storedUser.email || passwordValue !== storedUser.password) {
            errorMessage.style.color = "red";
            errorMessage.innerText = "Invalid email or password!";
            return;
        }

        // Store logged-in user
        localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

        errorMessage.style.color = "green";
        errorMessage.innerText = "Login successful! Redirecting...";

        setTimeout(() => {
            window.location.href = "home.html"; // Redirect to Home Page
        }, 2000);
    });
});
