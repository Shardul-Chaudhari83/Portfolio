// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // The magic part!
        });
    });
});

