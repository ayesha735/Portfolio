// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Enhanced typing effect
const typingEffect = () => {
    const texts = ["UI/UX Designer", "Web Developer", "Graphic Designer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === texts.length) count = 0;
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typing-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 150);
        }
    }());
};

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const form = this;
    const formData = new FormData(form);
    let isValid = true;
    
    formData.forEach((value) => {
        if (!value.trim()) {
            isValid = false;
        }
    });
    
    if (isValid) {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        form.style.opacity = '0';
        setTimeout(() => {
            form.style.display = 'none';
            successMessage.style.display = 'flex';
            setTimeout(() => {
                successMessage.classList.add('show');
            }, 100);
        }, 300);
        
        // Reset form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
            setTimeout(() => {
                successMessage.style.display = 'none';
                form.style.display = 'block';
                setTimeout(() => {
                    form.style.opacity = '1';
                }, 100);
            }, 300);
        }, 5000);
    }
});

// Add active class to navigation links based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.getElementById('mobileNav');
        const bsCollapse = new bootstrap.Collapse(mobileNav);
        bsCollapse.hide();
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    typingEffect();
});
