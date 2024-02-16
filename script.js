
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
];

let currentIndex = 0;
const galleryImg = document.getElementById('image-container');
const prevBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
    galleryImg.src = images[index];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowLeft':
            showPrevImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
        default:
            return;
    }
}


showImage(currentIndex);


prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);
document.addEventListener('keydown', handleKeyDown);
