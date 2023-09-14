// memunculkan alert
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let alertMessage = "Username: " + username + "\nEmail: " + email + "\nMessage: " + message;
    
    alert(alertMessage);
    
    // Atur formulir kembali ke nilai awal
    document.getElementById("contact-form").reset();
});