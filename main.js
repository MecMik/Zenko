// Creare stelle animate
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 10 + 5}s`;
        starsContainer.appendChild(star);
    }
}

createStars();

// Movimento pianeti
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
