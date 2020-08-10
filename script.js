const prevButton= document.querySelector('.slider-button-previous');
const nextButton= document.querySelector('.slider-button-next');

let shiftSize = 0;

function sliderScroll(scrollSize) {

    const sliderElement = document.querySelector('.teachers-list');
    sliderElement.style.margin = `0 0 0 ${scrollSize}px`;
}

function sliderScrollLeft() {

    shiftSize = shiftSize - 30;
    sliderScroll(shiftSize);
}

function sliderScrollRight() {

    shiftSize = shiftSize + 30;
    sliderScroll(shiftSize);
}

prevButton.addEventListener('click', sliderScrollLeft);
nextButton.addEventListener('click', sliderScrollRight);