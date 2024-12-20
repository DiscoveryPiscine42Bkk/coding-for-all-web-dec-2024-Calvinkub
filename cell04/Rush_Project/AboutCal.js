// script.js

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('nav-up');
    } else {
        // Scroll up
        header.classList.remove('nav-up');
    }

    lastScrollTop = scrollTop; // Update last scroll position
});
// animation.js

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project-grid a');

    projects.forEach(project => {
        project.classList.add('card-frame');
    });
});
