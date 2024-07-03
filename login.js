
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const visibilityIcon = document.querySelector(".visibility-toggle ion-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        visibilityIcon.setAttribute("name", "eye-off-outline");
    } else {
        passwordField.type = "password";
        visibilityIcon.setAttribute("name", "eye");
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    var registeredEmail = localStorage.getItem("userEmail");
    var registeredPassword = localStorage.getItem("userPassword");

 
    if (email === registeredEmail && password === registeredPassword) {

        alert("Login successful!");

        window.location.href = "index.html"; 
    } else {

        document.getElementById("errorMessage").textContent = "Invalid email or password. Please try again.";
    }
});




function redirectToSignUp() {

    window.location.href = "signup.html";
}
