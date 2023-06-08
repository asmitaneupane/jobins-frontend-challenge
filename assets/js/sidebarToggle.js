const hamburgerMenu = document.getElementById('hamburger-menu');
const aside = document.getElementById('aside');
const closeIcon = document.getElementById('indent-decrease');

hamburgerMenu.addEventListener('click', () => {
    aside.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    aside.classList.remove('active');
});