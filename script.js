// script.js
document.addEventListener("DOMContentLoaded", function () {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (document.getElementById("registerForm")) {
        document.getElementById("registerForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const userData = {
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            };

            users.push(userData);
            localStorage.setItem("users", JSON.stringify(users));
            alert("User registered successfully");
            window.location.href = "login.html";
        });
    }

    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const storedUser = users.find(user => user.email === email && user.password === password);

            if (storedUser) {
                localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
                alert("Login successful!");
                window.location.href = "profile.html";
            } else {
                alert("Invalid credentials");
            }
        });
    }

    if (document.getElementById("profileInfo")) {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            document.getElementById("profileInfo").textContent = `Welcome, ${loggedInUser.username} (${loggedInUser.email})`;
        } else {
            window.location.href = "login.html";
        }
    }
});