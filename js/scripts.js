/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.addEventListener("DOMContentLoaded", function() {
    const elementsToFade = document.querySelectorAll(".fade-in");

    function fadeInElements() {
        elementsToFade.forEach(function(element) {
            const bounding = element.getBoundingClientRect();
            if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
                element.classList.add("visible");
            }
        });
    }

    document.addEventListener("scroll", fadeInElements);
    window.addEventListener("resize", fadeInElements);

    fadeInElements(); // Initial check in case elements are already in view
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');

    setInterval(() => {
        slideIndex++;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slides.forEach(slide => {
            slide.style.transition = 'transform 1s ease-in-out';
            slide.style.transform = `translateX(${-slideIndex * 100}%)`;
        });
    }, 2000); 
}










