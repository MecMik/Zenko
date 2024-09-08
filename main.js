// Pulsazione su immagini al click
document.querySelectorAll('figure img').forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.add('pulse');
        setTimeout(() => {
            img.classList.remove('pulse');
        }, 500);
    });
});

// Smooth scroll per i link della navbar
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
