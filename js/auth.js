document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser && window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
    }
});
