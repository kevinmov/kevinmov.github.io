window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const headerHeight = document.querySelector('header').offsetHeight;

    if (window.scrollY > headerHeight) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0'; // Fija en la parte superior
    } else {
        navbar.style.position = 'relative'; // Vuelve a la posición normal
    }
});