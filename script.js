/* =========================================================
   JIYA BHOLA PORTFOLIO
   FINAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       1. OPENING SCREEN — 5 SECONDS
    ===================================================== */

    const openingScreen =
        document.getElementById("opening-screen");

    if (openingScreen) {

        document.body.style.overflow = "hidden";


        setTimeout(() => {

            openingScreen.classList.add("hidden");

            document.body.style.overflow = "";

        }, 5000);


        setTimeout(() => {

            openingScreen.style.display = "none";

        }, 5700);

    }



    /* =====================================================
       2. SMOOTH SCROLLING
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });



    /* =====================================================
       3. ACTIVE NAVBAR LINK
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );


    const updateActiveNav = () => {

        let currentSection = "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;


            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.id;

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );


    updateActiveNav();



    /* =====================================================
       4. SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, .glass-card, .skill-card, .project-card, .experience-card, .direction-point, .opportunity-banner, .contact-social"
        );


    revealElements.forEach(element => {

        element.classList.add(
            "reveal"
        );

    });


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "show"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(
                element
            );

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "show"
            );

        });

    }



    /* =====================================================
       5. STAGGERED ANIMATION
    ===================================================== */

    const animatedGroups = [

        ".skill-card",
        ".project-card",
        ".experience-card",
        ".direction-point",
        ".contact-social"

    ];


    animatedGroups.forEach(selector => {

        const elements =
            document.querySelectorAll(
                selector
            );


        elements.forEach(
            (element, index) => {

                element.style.transitionDelay =
                    `${index * 70}ms`;

            }
        );

    });



    /* =====================================================
       6. PROJECT HOVER
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "project-hover"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "project-hover"
                );

            }
        );

    });



    /* =====================================================
       7. DEVELOPMENT JOURNEY
       Pause while mouse is over ticker
    ===================================================== */

    const journeyTrack =
        document.querySelector(
            ".journey-track"
        );


    if (journeyTrack) {

        journeyTrack.addEventListener(
            "mouseenter",
            () => {

                journeyTrack.style.animationPlayState =
                    "paused";

            }
        );


        journeyTrack.addEventListener(
            "mouseleave",
            () => {

                journeyTrack.style.animationPlayState =
                    "running";

            }
        );

    }



    /* =====================================================
       8. EXTERNAL LINKS
    ===================================================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });



    /* =====================================================
       9. EMAIL
    ===================================================== */

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );


    emailLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "Opening email: jiyajiyabhola888@gmail.com"
                );

            }
        );

    });



    /* =====================================================
       10. HERO PHOTO FALLBACK
    ===================================================== */

    const heroPhoto =
        document.querySelector(
            ".hero-photo"
        );


    if (heroPhoto) {

        heroPhoto.addEventListener(
            "error",
            () => {

                console.warn(
                    "Professional profile image could not be loaded."
                );

            }
        );

    }



    /* =====================================================
       11. NORMAL MOUSE
       NO cursor tracking
       NO eye tracking
       NO custom cursor
    ===================================================== */

    document.body.style.cursor =
        "default";



    /* =====================================================
       12. CURRENT YEAR
    ===================================================== */

    const copyright =
        document.querySelector(
            ".copyright"
        );


    if (copyright) {

        copyright.textContent =
            `© ${new Date().getFullYear()} Jiya Bhola. All rights reserved.`;

    }



    /* =====================================================
       13. PAGE LOADED
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    console.log(
        "✓ Jiya Bhola Portfolio loaded successfully."
    );

});