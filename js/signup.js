document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        let message = document.getElementById("message");

        if (!name || !email || !phone || !password || !confirmPassword) {
            message.style.color = "red";
            message.innerText = "All fields are required!";
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            message.style.color = "red";
            message.innerText = "Invalid email format!";
            return;
        }

        if (phone.length < 10 || isNaN(phone)) {
            message.style.color = "red";
            message.innerText = "Invalid phone number!";
            return;
        }

        if (password.length < 6) {
            message.style.color = "red";
            message.innerText = "Password must be at least 6 characters long!";
            return;
        }

        if (password !== confirmPassword) {
            message.style.color = "red";
            message.innerText = "Passwords do not match!";
            return;
        }

        // Save user data in localStorage
        let userData = { name, email, phone, password };
        localStorage.setItem("user", JSON.stringify(userData));

        // User ko logged-in state 
        localStorage.setItem("loggedInUser", JSON.stringify(userData));

        message.style.color = "green";
        message.innerText = "Signup successful! Redirecting to home...";

        setTimeout(() => {
            window.location.href = "home.html"; // Redirect to Home Page
        }, 2000);
    });

    // Password strength checker
    document.getElementById("password").addEventListener("input", function () {
        let strengthText = document.getElementById("strength");
        let password = this.value;
        if (password.length < 6) {
            strengthText.style.color = "red";
            strengthText.innerText = "Weak password";
        } else if (password.length < 10) {
            strengthText.style.color = "orange";
            strengthText.innerText = "Moderate password";
        } else {
            strengthText.style.color = "green";
            strengthText.innerText = "Strong password";
        }
    });
});
