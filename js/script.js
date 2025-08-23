// Luminary Co. - Main JavaScript
// Extracted from index.html for better organization and maintainability

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Testimonial Slider
    initializeTestimonialSlider();

    // Fade-in on Scroll
    initializeFadeInEffects();
    
    // Performance optimization: Intersection Observer for images
    initializeLazyLoading();
});

// Testimonial Slider Functionality
function initializeTestimonialSlider() {
    const slider = document.querySelector('#testimonial-slider .flex');
    const dotsContainer = document.getElementById('testimonial-dots');
    
    if (!slider || !dotsContainer) return;
    
    const testimonials = slider.children;
    let currentIndex = 0;

    // Create dots
    Array.from(testimonials).forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition-colors');
        dot.classList.add(index === 0 ? 'bg-golden-yellow' : 'bg-gray-700');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.children;

    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateDots();
    }
    
    function updateDots() {
        Array.from(dots).forEach((dot, index) => {
            dot.classList.toggle('bg-golden-yellow', index === currentIndex);
            dot.classList.toggle('bg-gray-700', index !== currentIndex);
        });
    }

    // Auto-advance slides every 5 seconds
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % testimonials.length;
        goToSlide(nextIndex);
    }, 5000);
}

// Fade-in Effects on Scroll
function initializeFadeInEffects() {
    const faders = document.querySelectorAll('.fade-in');
    
    if (faders.length === 0) return;
    
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}

// Lazy Loading for Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}
