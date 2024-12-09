let toggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.links'); 

function toggleMenu() {
    menu.classList.toggle('open');
}

/* toggle the menu */
toggle.addEventListener('click', toggleMenu);