const signupForm = document.getElementById("signupForm");
const signupErrorMessage = document.getElementById("signupErrorMessage");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        signupErrorMessage.textContent = "Passwords do not match.";
    } else {

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userName", name);
        localStorage.setItem("userPassword", password);

        alert("Signup successful! You will be redirected to the login page.");
        window.location.href = "login.html"; 
    }
});



