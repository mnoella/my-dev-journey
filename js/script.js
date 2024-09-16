
// Toggle burger menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
    
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-hidden ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
    });
});

