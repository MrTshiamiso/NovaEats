/* ============================================
   NOVA EATS - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    const feedbackForm = document.getElementById('feedbackForm');
    const successMessage = document.getElementById('successMessage');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get all form fields
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const rating = document.querySelector('input[name="rating"]:checked');
            const message = document.getElementById('message').value.trim();

            let isValid = true;
            let errorMessage = '';

            if (fullName === '') {
                errorMessage += '• Please enter your full name.\n';
                isValid = false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorMessage += '• Please enter a valid email address.\n';
                isValid = false;
            }

            const phonePattern = /^[0-9]{8}$/;
            if (!phonePattern.test(phone)) {
                errorMessage += '• Phone number must be exactly 8 digits.\n';
                isValid = false;
            }

            if (subject === '') {
                errorMessage += '• Please select a subject.\n';
                isValid = false;
            }

            if (!rating) {
                errorMessage += '• Please rate your experience.\n';
                isValid = false;
            }

            if (message === '') {
                errorMessage += '• Please enter your message.\n';
                isValid = false;
            }

            if (!isValid) {
                alert('⚠️ Please fix the following errors:\n\n' + errorMessage);
                return;
            }

            // SHOW POPUP ALERT
            alert('✅ Thank you ' + fullName + '! Your feedback has been received successfully. We will get back to you soon.');

            // Also show the green success message on the page
            successMessage.style.display = 'block';
            feedbackForm.reset();

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });

            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.custom-nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.backgroundColor = '#1a1a2e';
            }
        });
    }

    // Auto-close mobile navbar
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.getElementById('navMenu');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navCollapse && navCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navCollapse);
                bsCollapse.hide();
            }
        });
    });

    console.log('Nova Eats website loaded successfully!');
});