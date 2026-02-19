function startRotatingText() {
    const titles = [
        "Game Developer",
        "Fullstack Developer",
        "Software Engineer",
        "Gamer",
    ];

    const rotatingTextElement = document.querySelector('.rotating-text');
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;

    function type() {
        const currentTitle = titles[currentIndex];

        if (isDeleting) {
            currentText = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        rotatingTextElement.textContent = currentText;

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % titles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

function initCarousels() {
    const carousels = document.querySelectorAll('.image-carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const leftArrow = carousel.querySelector('.left-arrow');
        const rightArrow = carousel.querySelector('.right-arrow');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        leftArrow.addEventListener('click', function (e) {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        rightArrow.addEventListener('click', function (e) {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    });
}

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('DOMContentLoaded', function () {
    startRotatingText();
    initCarousels();
});