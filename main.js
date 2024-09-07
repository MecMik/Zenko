document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button');

  ctaButton.addEventListener('mouseenter', () => {
    ctaButton.style.transform = 'scale(1.1)';
  });

  ctaButton.addEventListener('mouseleave', () => {
    ctaButton.style.transform = 'scale(1)';
  });

  // Aggiungere altre animazioni se necessario
});
