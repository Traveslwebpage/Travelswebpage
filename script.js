document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰ Menu";
    navToggle.classList.add("nav-toggle");
    document.querySelector("header").prepend(navToggle);

    const navMenu = document.querySelector("nav ul");
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Sticky Navigation on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Contact Form Validation
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();
            
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Form submitted successfully!");
            contactForm.reset();
        });
    }
});
