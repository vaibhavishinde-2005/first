function showMessage() {
    document.getElementById("msg").innerText =
        "Thank you for visiting my portfolio! 😊";
}

function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}
