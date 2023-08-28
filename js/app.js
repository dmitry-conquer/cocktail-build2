const headerMenu = document.querySelector('.header-menu');
const openMenuButton = document.querySelector('.header-open');
const closeMenuButton = document.querySelector('.header-close');

function openMenu() {
   headerMenu.classList.add('active-menu');
}
function closeMenu() {
   headerMenu.classList.remove('active-menu');
}

openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)