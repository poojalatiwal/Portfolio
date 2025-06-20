document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

    // ✅ Only run Typed.js if the element exists
    const typingElement = document.querySelector(".typing");
    if (typingElement) {
        new Typed(".typing", {
            strings: ["Full Stack Developer", "Web Developer", "Java Programmer", "Backend Developer"],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1200,
            loop: true
        });
    }

    // Detect current page
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "index";
    console.log("Current page:", currentPage);

    // Link mapping
    const links = {
        "index": "home-link",
        "about": "about-link",
        "skills": "skills-link",
        "projects": "projects-link",
        "contact": "contact-link",
    };

    // Add alert if user is already on the page
    for (const [page, linkId] of Object.entries(links)) {
        const linkElement = document.getElementById(linkId);
        if (linkElement && currentPage === page) {
            linkElement.addEventListener("click", function (event) {
                event.preventDefault();
                alert(`You are already on the ${linkElement.textContent} page!`);
            });
        }
    }
});
