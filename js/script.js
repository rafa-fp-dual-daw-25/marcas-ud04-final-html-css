// Hamburguesa en móvil
const nav = document.querySelector('.navegacion');
const menu = document.querySelector('.menu');

// crear botón
const btn = document.createElement('button');
btn.className = 'btn-hamburger';
btn.textContent = '☰';
nav.prepend(btn);

// toggle
btn.onclick = () => {
    menu.classList.toggle('menu-activo');
};

// Arrow-up con scroll
const arrow = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        arrow.style.opacity = '1';
        arrow.style.pointerEvents = 'auto';
    } else {
        arrow.style.opacity = '0';
        arrow.style.pointerEvents = 'none';
    }
});
