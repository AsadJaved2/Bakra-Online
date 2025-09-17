document.addEventListener("DOMContentLoaded", function () {
    let storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (storedUser) {
        document.getElementById("userName").textContent = storedUser.name;
        document.getElementById("userEmail").textContent = storedUser.email;
        document.getElementById("userContact").textContent = storedUser.phone;
    }

    document.getElementById("editProfile").addEventListener("click", function () {
        document.getElementById("editForm").style.display = "block";
        document.getElementById("name").value = document.getElementById("userName").textContent;
        document.getElementById("email").value = document.getElementById("userEmail").textContent;
        document.getElementById("contact").value = document.getElementById("userContact").textContent;
    });

    document.getElementById("saveProfile").addEventListener("click", function () {
        let updatedUser = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("contact").value,
            password: storedUser.password 
        };

        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

        document.getElementById("userName").textContent = updatedUser.name;
        document.getElementById("userEmail").textContent = updatedUser.email;
        document.getElementById("userContact").textContent = updatedUser.phone;
        
        document.getElementById("editForm").style.display = "none";
    });
});
