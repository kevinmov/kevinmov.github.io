//PARA LA BARRA DE NAVEGACION
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

const container = document.getElementById('carrousel-container');
const totalImages = document.querySelectorAll('.carrousel-img').length;
let currentIndex = 0;
const imagesPerView = 4;
const imageWidth = 300;

function showImages() {
    const maxIndex = totalImages - imagesPerView;
    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const offset = -(currentIndex * imageWidth);
    container.style.transform = `translateX(${offset}px)`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = currentIndex - imagesPerView;
    showImages();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = currentIndex + imagesPerView;
    showImages();
});

showImages();
