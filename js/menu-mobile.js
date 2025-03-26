function toggleMenu() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('MENU-MOBILE');

    menu.classList.toggle('open');
    button.classList.toggle('active');
}

// Cerrar el menú al hacer clic en una opción
const menuOptions = document.querySelectorAll('.NAV-OPTION');
menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        const button = document.getElementById('MENU-MOBILE');
        menu.classList.remove('open');
        button.classList.remove('active');
    });
});