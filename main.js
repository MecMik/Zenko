// Effetto di pulsazione su immagini al click
document.querySelectorAll('figure img').forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.add('pulse');
        setTimeout(() => {
            img.classList.remove('pulse');
        }, 500);
    });
});

// Smooth scroll per i link di navigazione
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scroll({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
