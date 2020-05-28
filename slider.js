let currentSlide = 0;
let arrayOfSlides = Array.from(document.querySelectorAll('.slide'));
arrayOfSlides[currentSlide].style.opacity = '1';

function nextSlide() {
    arrayOfSlides[currentSlide].style.opacity = '0';
    

    if (currentSlide==arrayOfSlides.length-1) {
        currentSlide=0;
    } else {
        currentSlide++;
    }
    
    arrayOfSlides[currentSlide].style.opacity = '1';
}

function prevSlide() {
    arrayOfSlides[currentSlide].style.opacity = '0';
    

    if (currentSlide==0) {
        currentSlide=arrayOfSlides.length-1;
    } else {
        currentSlide--;
    }

    arrayOfSlides[currentSlide].style.opacity = '1';
}