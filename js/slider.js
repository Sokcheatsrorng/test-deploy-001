// js/slider.js
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const prevSlide = document.getElementById('prev-slide');
    const nextSlide = document.getElementById('next-slide');
    let currentIndex = 0;
    const slides = slider.children;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (nextSlide) {
        nextSlide.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        });
        nextSlide.addEventListener('touchstart', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        });
    }

    if (prevSlide) {
        prevSlide.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        });
        prevSlide.addEventListener('touchstart', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        });
    }

    // Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        } else if (touchEndX - touchStartX > 50) {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
    });
});