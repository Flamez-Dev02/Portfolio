// Register GSAP Plugins
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Professional Entrance Animation
    window.addEventListener('load', () => {
        const tl = gsap.timeline();

        // Safe animation sequence
        if (document.querySelector(".navbar")) {
            tl.from(".navbar", { y: -100, opacity: 0, duration: 1, ease: "power4.out" });
        } else if (document.querySelector(".back-btn")) {
            tl.from(".back-btn", { x: -50, opacity: 0, duration: 1, ease: "power4.out" });
        }

        if (document.querySelector(".profile-pic")) {
            tl.from(".profile-pic", { scale: 0, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5");
        }

        if (document.querySelector(".hero-section h1")) {
            tl.from(".hero-section h1", { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
        }

        if (document.querySelector(".hero-section p")) {
            tl.from(".hero-section p", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
        }

        if (document.querySelector(".hero-section .btn")) {
            tl.from(".hero-section .btn", { y: 20, opacity: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" }, "-=0.4");
        }
    });

    // 2. Scroll-Triggered Section Reveals
    const revealElements = document.querySelectorAll('section, .glass-card');
    revealElements.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // 3. Skill Items Staggered Entrance
    if (document.querySelector(".skill-item")) {
        gsap.from(".skill-item", {
            scrollTrigger: {
                trigger: ".skills-grid-wrapper",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out"
        });
    }

    // 4. Magnetic Button Interaction
    const magneticBtns = document.querySelectorAll('.btn-primary-custom, .btn-outline-custom, .social-icon');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
            gsap.to(btn, { x: x, y: y, duration: 0.3, ease: "power2.out" });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        });
    });
}

// 4. Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href.startsWith('#')) return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 5. Typing Animation for Subtitle
const typingEl = document.querySelector(".lead-typing"); // Using a safe selector
if (typingEl) {
    const text = "Front-End Developer | JavaScript Enthusiast | Creative Designer";
    let i = 0;
    function type() {
        if (i < text.length) {
            typingEl.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    window.addEventListener('load', type);
}

// Log Initialization
console.log('✓ DANIEL IYANDA Premium UI System Active');
