const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || "0s";

            el.style.transitionDelay = delay;
            el.classList.add('visible');

            // Dejamos de observar para que no se repita
            observer.unobserve(el);
        }
    });
});

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

// animacion de aparecimiento