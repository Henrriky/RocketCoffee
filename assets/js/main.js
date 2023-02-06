const buttons = document.querySelectorAll('.wrapper button')

buttons.forEach(element => {
    element.addEventListener('click', handleMenu);
});

function handleMenu() {
    const navMenu = document.querySelector('.nav__menu');
    const body = document.body;

    body.classList.toggle('menuExpanded');
    navMenu.classList.toggle('open');
}