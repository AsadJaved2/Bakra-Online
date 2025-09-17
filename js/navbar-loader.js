document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbar-placeholder");

    fetch('navbar.html')  
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;  

            const logoutButton = document.getElementById("logoutBtn");
            if (logoutButton) {
                logoutButton.addEventListener("click", function () {
                    localStorage.removeItem("loggedInUser"); // Remove session
                    window.location.href = "login.html"; // Redirect to Login Page
                });
            }
        })
        .catch(error => {
            console.error("Error loading the navbar:", error);  
        });
});
