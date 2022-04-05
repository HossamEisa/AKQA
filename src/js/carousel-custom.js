//Touch FUnc for Carousel
document.querySelector('.hero-carousel').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.hero-carousel').addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}


function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
            /* right swipe */
            document.querySelector('.next').click();
        } else {
            /* left swipe */
            document.querySelector('.prev').click();

        }
    } else {
        if (yDiff > 0) {
            /* down swipe */

        } else {
            /* up swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

// Carousel init
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    const slides = button.closest("[data-carousel]").querySelector('[data-slides]');

    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1,
            activeSlide = slides.querySelector("[data-active]");

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;

        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    });

    button.closest("[data-carousel]").querySelector('[data-slides]').children[0].dataset.active = true;

});