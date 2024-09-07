* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Titillium Web', sans-serif;
    background: url('your-image-file-name.webp') no-repeat center center fixed; /* Aggiorna con il nome corretto del file */
    background-size: cover;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

header {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: white;
}

nav ul {
    display: flex;
    gap: 20px;
}

nav ul li {
    list-style: none;
}

nav ul li a {
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #FFD700;
}

main h1 {
    font-size: 4rem;
    margin-bottom: 50px;
    z-index: 10;
}

.buttons {
    display: flex;
    gap: 20px;
    z-index: 10;
}

.button {
    text-decoration: none;
    padding: 15px 30px;
    font-size: 1.5rem;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 3px solid white;
    color: white;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.neon {
    box-shadow: 0 0 20px #32CD32, 0 0 30px #FF00FF, 0 0 40px #FF4500;
}

.button:hover {
    background-color: #FFD700;
    transform: scale(1.1);
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.loading-content {
    text-align: center;
    color: white;
    font-size: 1.5rem;
}

.spinner {
    margin-top: 20px;
    border: 6px solid rgba(255, 255, 255, 0.3);
    border-top: 6px solid #FFD700;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
