document.getElementById("hamburger-menu").addEventListener("click", function() {
    var listItems = document.getElementById("list-items").querySelector("ul");
    listItems.classList.toggle("show");
});

// Get the current year
const currentYear = new Date().getFullYear();

// Update the span element with id="currentYear" with the current year
document.getElementById('currentYear').textContent = currentYear;

document.addEventListener('DOMContentLoaded', function () {

    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Navbar
    var navAnimation = gsap.timeline();
    navAnimation.from('.navbar',{ opacity: 0, y: -50, duration: 2 });

    // Hero Section Animation
    var heroAnimation = gsap.timeline();
    heroAnimation.from('.hero-section .left-section', { opacity: 0, x: -50, duration: 1 });
    heroAnimation.from('.hero-section .right-section', { opacity: 0, x: 50, duration: 1 }, '-=1'); // Delayed animation

    // Ensure final z-index values after animation
    heroAnimation.to('.hero-section .left-section', { zIndex: 2 }); // Ensure text is above
    heroAnimation.to('.hero-section .right-section', { zIndex: 1 }); // Ensure image is below

    new ScrollMagic.Scene({
        triggerElement: '.hero-section',
        triggerHook: 0.6, // Adjust trigger point as needed
        reverse: false
    })
    .setTween(heroAnimation)
    .addTo(controller);

    // Main Section 01 Animation
    var section1Animation = gsap.timeline();
    section1Animation.from('.section-one-left', { opacity: 0, y: 50, duration: 1 });
    section1Animation.from('.section-one-right', { opacity: 0, y: 50, duration: 1 }, '-=0.5');

    new ScrollMagic.Scene({
        triggerElement: '.section-one-left',
        triggerHook: 0.6,
        reverse: false
    })
    .setTween(section1Animation)
    .addTo(controller);

    // Section 02 Animation
    var section2Animation = gsap.timeline();
    section2Animation.from('.section-two .section-two-left', { opacity: 0, x: -50, duration: 1 });
    section2Animation.from('.section-two .section-two-right', { opacity: 0, x: 50, duration: 1 }, '-=1');

    new ScrollMagic.Scene({
        triggerElement: '.section-two',
        triggerHook: 0.6,
        reverse: false
    })
    .setTween(section2Animation)
    .addTo(controller);

    // Section 03 Animation
    var section3Animation = gsap.timeline();
    section3Animation.from('.section-three .section-three-left', { opacity: 0, x: -50, duration: 1 });
    section3Animation.from('.section-three .section-three-right', { opacity: 0, x: 50, duration: 1 }, '-=1');

    new ScrollMagic.Scene({
        triggerElement: '.section-three',
        triggerHook: 0.6,
        reverse: false
    })
    .setTween(section3Animation)
    .addTo(controller);


    // Section 04 Animation
    var section4Animation = gsap.timeline();
    section4Animation.from('.section-four .section-four-left', { opacity: 0, x: -50, duration: 1 });
    section4Animation.from('.section-four .section-four-right', { opacity: 0, x: 50, duration: 1 }, '-=1');

    new ScrollMagic.Scene({
        triggerElement: '.section-four', // Adjusted to target '.section-two.four'
        triggerHook: 0.6,
        reverse: false
    })
    .setTween(section4Animation)
    .addTo(controller);

    // Section 05 Animation
    var section5Animation = gsap.timeline();
    section5Animation.from('.section-five .content', { opacity: 0, y: 50, duration: 1 });

    new ScrollMagic.Scene({
        triggerElement: '.section-five',
        triggerHook: 0.6,
        reverse: false
    })
    .setTween(section5Animation)
    .addTo(controller);

    // Footer Animation
    var footerAnimation = gsap.timeline();
    footerAnimation.from('footer', { opacity: 0, y: 50, duration: 1 });

    new ScrollMagic.Scene({
        triggerElement: 'footer',
        triggerHook: 0.9, // Adjust trigger point as needed
        reverse: false
    })
    .setTween(footerAnimation)
    .addTo(controller);

});

