const NAV_HOME = document.getElementById("NAV-HOME");
const NAV_SERVICE = document.getElementById("NAV-SERVICE");
const NAV_PRICE = document.getElementById("NAV-PRICE");
const NAV_CONTACT = document.getElementById("NAV-CONTACT");

const SERVICES_SECTION = document.getElementById("SERVICES-SECTION");
const PRICE_SECTION = document.getElementById("PRICE-SECTION");
const CONTACT_SECTION = document.getElementById("CONTACT-SECTION");

// mobile
const NAV_HOME_MOBILE = document.getElementById("NAV-HOME-MOBILE");
const NAV_SERVICE_MOBILE = document.getElementById("NAV-SERVICE-MOBILE");
const NAV_PRICE_MOBILE = document.getElementById("NAV-PRICE-MOBILE");
const NAV_CONTACT_MOBILE = document.getElementById("NAV-CONTACT-MOBILE");

const scrollBoton = (elemento) => {
    const target = document.querySelector(elemento);
    if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY; // Obtiene la posición del elemento
        window.scrollTo({
            top: top,
            behavior: 'smooth' // Desplazamiento suave
        });
    }
};



// elemento centrado
const scrollCenter = (elemento) => {
    const target = document.querySelector(elemento);
    if (target) {
        // Obtener la posición del elemento en relación al documento
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        
        // Calcular el desplazamiento para centrar el elemento
        const offset = (window.innerHeight / 2) - (target.offsetHeight / 2);
        
        // Desplazarse a la posición correcta
        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth' // Desplazamiento suave
        });
    }
};


// inicio
const scrollInicio = () => {
    window.scrollTo({
        top: 0, // Desplazarse al principio de la página
        behavior: 'smooth' // Desplazamiento suave
    });
};

// pc
NAV_HOME.addEventListener('click', () => {scrollInicio();});
NAV_SERVICE.addEventListener("click", () => {scrollBoton('#SERVICES-SECTION');});
NAV_PRICE.addEventListener('click', () => {scrollCenter('#PRICE-SECTION');});
NAV_CONTACT.addEventListener('click', () => {scrollCenter('#CONTACT-SECTION');});

// MOBILE
NAV_HOME_MOBILE.addEventListener('click', () => {scrollInicio();});
NAV_SERVICE_MOBILE.addEventListener("click", () => {scrollBoton('#SERVICES-SECTION');});
NAV_PRICE_MOBILE.addEventListener('click', () => {scrollCenter('#PRICE-SECTION');});
NAV_CONTACT_MOBILE.addEventListener('click', () => {scrollCenter('#CONTACT-SECTION');});