var menuElement = document.getElementById("menu");

menuElement.addEventListener("click", function() {
    if (this === menuElement) {
        document.getElementById("menu").style.backgroundColor = "rgb(76, 163, 210)";
    } else {
        document.getElementById("menu").style.backgroundColor = "rgb(0,0,0)";
    }
});






// JavaScript pour les modals
/*var phoneModal = document.getElementById("modal-phone");
var emailModal = document.getElementById("modal-email");
var phoneIcon = document.querySelector(".phone-icon");
var emailIcon = document.querySelector(".email-icon");
var closeButtons = document.querySelectorAll(".close");

phoneIcon.addEventListener("click", function() {
    phoneModal.style.display = "block";
});

emailIcon.addEventListener("click", function() {
    emailModal.style.display = "block";
});

closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        phoneModal.style.display = "none";
        emailModal.style.display = "none";
    });
});*/