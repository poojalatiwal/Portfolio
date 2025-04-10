var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100, 
    backSpeed: 50, 
    backDelay: 1500, 
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("about-link");


    if (document.title.includes("About") || window.location.pathname.includes("about.html")) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault(); 
            alert("You are already on the About page!");
        });
    }
});