// Fade in effect for all sections
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(el => {
        el.classList.add('show');
    });
});
