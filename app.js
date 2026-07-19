// Menu burger
const burger = document.getElementById('burger-menu');
const navigation = document.querySelector('.navigation');

// Créer un overlay pour fermer le menu en cliquant à côté
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Ouvrir/fermer le menu
burger.addEventListener('click', (e) => {
    e.stopPropagation();
    navigation.classList.toggle('active');
    overlay.classList.toggle('active');
    burger.classList.toggle('bx-x');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        overlay.classList.remove('active');
        burger.classList.remove('bx-x');
    });
});

// Fermer le menu en cliquant sur l'overlay
overlay.addEventListener('click', () => {
    navigation.classList.remove('active');
    overlay.classList.remove('active');
    burger.classList.remove('bx-x');
});

// Navigation scroll - ajout de la classe active
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active', window.scrollY > 50);
});