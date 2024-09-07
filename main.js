document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();  // Evita il comportamento predefinito del link
            const page = e.target.textContent;
            showLoading(page);
        });
    });

    function showLoading(page) {
        // Creare un pop-up di caricamento simulato
        const loadingOverlay = document.createElement('div');
        loadingOverlay.classList.add('loading-overlay');
        loadingOverlay.innerHTML = `<div class="loading-content">
                                        <p>Caricamento ${page}...</p>
                                        <div class="spinner"></div>
                                    </div>`;
        document.body.appendChild(loadingOverlay);

        // Rimuovere l'overlay dopo 2 secondi e simulare il caricamento della nuova pagina
        setTimeout(() => {
            loadingOverlay.remove();
            alert(`${page} è pronto (funzione in arrivo)!`);
        }, 2000);
    }
});
