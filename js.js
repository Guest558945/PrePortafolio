// script.js

// Configuramos el observador
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si el elemento entra en la pantalla...
        if (entry.isIntersecting) {
            // Le añadimos la clase 'active' para que aparezca
            entry.target.classList.add('active');
        }
    });
}, {
    // Esto hace que la animación empiece cuando el 15% del elemento sea visible
    threshold: 0.30
});

// Seleccionamos todos los elementos que tengan la clase .reveal
const hiddenElements = document.querySelectorAll('.reveal');

// Le decimos al observador que vigile cada uno de esos elementos
hiddenElements.forEach((el) => observer.observe(el));