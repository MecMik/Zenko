// Funzione per creare più stelle
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
