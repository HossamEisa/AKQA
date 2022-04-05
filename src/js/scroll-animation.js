const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled"); 
};

// For reverse animation 
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
        //comment this else if you want animation run once
        else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

// execute  the func when scrolling
window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

// init the func when document loaded
document.addEventListener("DOMContentLoaded", function () {
    handleScrollAnimation();
});