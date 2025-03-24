// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event listener for navbar background color change
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 58, 138, 0.95)'; // Slightly transparent primary color
    } else {
        header.style.background = 'var(--primary)';
    }
});

// Initialize animations for elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
    // This is a placeholder for potential future animations
    // You could add libraries like AOS (Animate On Scroll) here
    console.log('Website loaded successfully!');
});
