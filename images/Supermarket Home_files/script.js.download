





document.addEventListener('DOMContentLoaded', function () {
    // Increase quantity
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function () {
            const quantityInput = this.previousElementSibling;
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    });

    // Decrease quantity
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function () {
            const quantityInput = this.nextElementSibling;
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    });
});





// review 


const wrapper = document.querySelector('.testimonial-wrapper');
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
}

function updateSliderPosition() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    moveToNextSlide();
}, 3000); // Auto-slide every 5 seconds





