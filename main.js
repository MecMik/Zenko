// Selezioniamo gli elementi dei pianeti
const mars = document.querySelector('.mars');
const jupiter = document.querySelector('.jupiter');
const saturn = document.querySelector('.saturn');

// Funzione per muovere i pianeti in modo random
function movePlanet(planet, minX, maxX, minY, maxY, duration) {
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    planet.style.transition = `transform ${duration}s ease-in-out`;
    planet.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Ripetiamo l'animazione in loop
    setTimeout(() => {
        movePlanet(planet, minX, maxX, minY, maxY, duration);
    }, duration * 1000);
}

// Iniziamo a muovere i pianeti
movePlanet(mars, -100, 100, -50, 50, 10);
movePlanet(jupiter, -200, 200, -100, 100, 15);
movePlanet(saturn, -150, 150, -80, 80, 12);

// Sfondo delle costellazioni in movimento
const backgroundSpeed = 0.02;
let backgroundPositionX = 0;
let backgroundPositionY = 0;

function animateBackground() {
    backgroundPositionX += backgroundSpeed;
    backgroundPositionY += backgroundSpeed;

    document.body.style.backgroundPosition = `${backgroundPositionX}px ${backgroundPositionY}px`;

    requestAnimationFrame(animateBackground);
}

animateBackground();
