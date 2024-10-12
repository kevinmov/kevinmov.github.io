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
