document.addEventListener("DOMContentLoaded", function() {

    // Set Dynamic Year
    const yearEl = document.getElementById("year");
    if(yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".nav-links a");

    /* ==============================
       NAVBAR SCROLL ACTIVE & EFFETS
    ============================== */
    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        /* Navbar background glassmorphism on scroll */
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        /* Nav link active class switcher */
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });

    /* ==============================
       HAMBURGER MENU LOGIC
    ============================== */
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            // Animasi icon hamburger menjadi silang (X)
            hamburger.classList.toggle("active");
            // Memunculkan menu laci dari kanan
            navMenu.classList.toggle("active");
        });

        /* Tutup menu otomatis saat link diklik (Mobile Friendly) */
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }
});
