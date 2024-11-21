const menu = document.getElementById('menu');
const toggleBtn = document.getElementById('toggle-btn');

let isOpen = false;

const toggleMenu = () => {
    if (isOpen) {
        menu.style.left = '-270px'; // Fecha o menu
    } else {
        menu.style.left = '0'; // Abre o menu
    }
    isOpen = !isOpen;
};

toggleBtn.addEventListener('click', toggleMenu);
