// --- 1. CUENTA REGRESIVA ---
const weddingDate = new Date("December 19, 2025 18:00:00").getTime(); // Hora de la recepción

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculo del tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado
    document.getElementById("countdown").innerHTML = `
        <div>${days}<span>Días</span></div>
        <div>${hours}<span>Horas</span></div>
        <div>${minutes}<span>Minutos</span></div>
        <div>${seconds}<span>Segundos</span></div>
    `;

    // Si la cuenta termina
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "¡Estamos casados! ¡Gracias por acompañarnos!";
    }
}, 1000);


// --- 2. ANIMACIÓN AL HACER SCROLL (TEXTO APARECE CON SCROLL) ---
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

function checkVisibility() {
    scrollRevealElements.forEach(element => {
        // Altura de la ventana y posición del elemento
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el elemento está al 80% de la ventana (ajusta el 0.8 si quieres que aparezca antes/después)
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
        } else {
            // Opcional: para que se oculte al hacer scroll hacia arriba
            // element.classList.remove('visible');
        }
    });
}

// Escucha el evento de scroll y el de carga inicial
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);