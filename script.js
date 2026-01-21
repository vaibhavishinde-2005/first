function showMessage() {
    document.getElementById("msg").innerText =
        "Thank you for reaching out! 😊";
}

function scrollDown() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}
