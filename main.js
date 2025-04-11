document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

    // Typed.js animation
    const typedElement = document.querySelector(".text");
    if (typedElement) {
        new Typed(".text", {
            strings: ["Frontend Developer", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
            loop: true
        });
    }

    const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";
    console.log("Current page:", currentPage);

    const links = {
        "index": "home-link",
        "about": "about-link",
        "skills": "skills-link",
        "projects": "projects-link",
        "contact": "contact-link",
    };

    for (const [page, linkId] of Object.entries(links)) {
        const linkElement = document.getElementById(linkId);
        console.log(`Checking: ${page}, Link ID: ${linkId}, Current: ${currentPage}`);

        if (linkElement && currentPage === page) {
            console.log(`Adding listener to: ${linkId}`);
            linkElement.addEventListener("click", function (event) {
                event.preventDefault();
                alert(`You are already on the ${linkElement.textContent} page!`);
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Current page:", window.location.pathname);
    const aboutLink = document.getElementById("about-link");
    console.log("about-link:", aboutLink);
});
