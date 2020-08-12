const prevButton= document.querySelector('.slider-button-previous');
const nextButton= document.querySelector('.slider-button-next');

let shiftSize = 0;

function sliderScroll(scrollSize) {

    const sliderElement = document.querySelector('.teachers-list');
    sliderElement.style.left = `${scrollSize}px`;
}

function sliderScrollLeft(event) {
    event.stopPropagation();
    shiftSize = shiftSize - 30;
    sliderScroll(shiftSize);
}

function sliderScrollRight(event) {
    event.stopPropagation();
    shiftSize = shiftSize + 30;
    sliderScroll(shiftSize);
}

prevButton.addEventListener('click', sliderScrollLeft);
nextButton.addEventListener('click', sliderScrollRight);

const spaceBetween = document.querySelector('.slider');

function error1() {
    alert('!!!');
}

spaceBetween.addEventListener('click', error1);