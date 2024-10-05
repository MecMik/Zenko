// Pianeti in movimento
const mars = document.querySelector('.mars');
const jupiter = document.querySelector('.jupiter');
const saturn = document.querySelector('.saturn');

function movePlanet(planet, minX, maxX, minY, maxY, duration) {
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    planet.style.transition = `transform ${duration}s ease-in-out`;
    planet.style.transform = `translate(${randomX}px, ${randomY}px)`;

    setTimeout(() => {
        movePlanet(planet, minX, maxX, minY, maxY, duration);
    }, duration * 1000);
}

movePlanet(mars, -100, 100, -50, 50, 10);
movePlanet(jupiter, -200, 200, -100, 100, 15);
movePlanet(saturn, -150, 150, -80, 80, 12);

// Animazione dello sfondo
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
