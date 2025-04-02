document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Get all sections
    const sections = document.querySelectorAll('.section');

    // Set the first section (Home/Hero) as active by default
    if (sections.length > 0) {
        sections[0].classList.add('active');
        navLinks[0].classList.add('active');
    }

    // Function to activate a section
    function activateSection(sectionId) {
        // Remove active class from all sections
        sections.forEach(section => section.classList.remove('active'));

        // Add active class to target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update navigation links
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target section id from the link's href
            const targetId = this.getAttribute('href').substring(1);

            // Activate the target section
            activateSection(targetId);
        });
    });

    // Add click event listener for CTA button in hero section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Get target section from the button's href attribute
            const targetId = this.getAttribute('href').substring(1);

            // Activate the contact section
            activateSection(targetId);
        });
    }

    // Check if there's a hash in the URL and navigate to that section
    if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        if (document.getElementById(sectionId)) {
            activateSection(sectionId);
        }
    }
});