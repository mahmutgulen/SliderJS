const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');
const imageContainer = document.querySelector('.image-container');
const imgs = document.querySelectorAll('img');

let currentImg = 1;
let timeout;

nextIcon.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImage();
})

prevIcon.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
})

function updateImage() {
    if (currentImg > imgs.length) {
        currentImg = 1;
    }

    if (currentImg < 1) {
        currentImg = imgs.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImage();
    }, 4000);
}
updateImage();

