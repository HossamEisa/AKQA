if (screen.width > 991) {
    var target = document.querySelector(".levl-one-menu");
    var target2 = document.querySelector(".levl-two-menu");

    target.addEventListener("mouseover", mOver, false);
    target.addEventListener("mouseout", mOut, false);

    target2.addEventListener("mouseover", mOver1, false);
    target2.addEventListener("mouseout", mOut1, false);

    function mOver() {
        document.getElementById('overlay-one').classList.add('active');
    }

    function mOut() {
        document.getElementById('overlay-one').classList.remove('active');
    }

    function mOver1() {
        document.getElementById('overlay-two').classList.add('active');
    }

    function mOut1() {
        document.getElementById('overlay-two').classList.remove('active');
    }
}


const wrapper = document.querySelector(".wrapper");
const burgerMenu = document.getElementById("menu-toggler");
const navbarMenu = document.querySelector(".mobile-menu-ul");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
    wrapper.classList.toggle("is-open");

    // if (navbarMenu.classList.contains("is-active")) {
    //     navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
    // } else {
    //     navbarMenu.removeAttribute("style");
    // }
});
navbarMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.getElementById('menu-overlay').addEventListener('click', () => {
    setTimeout(function () {
        if (wrapper.classList.contains('is-open')) {
            navbarMenu.classList.remove("is-active");
            burgerMenu.classList.remove("is-active");
            wrapper.classList.remove("is-open");
        } else {
            return false
        }
    }, 100)
});



document.querySelectorAll('.menu-hasdropdown').forEach(element => element.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();

    // let innerLists = element.querySelector('ul');
    if (element) {
        if (!element.classList.contains("is-active")) {
            document.querySelector("ul").querySelectorAll("ul").forEach(elm => {
                if (!isDescendant(elm, element)) {
                    elm.classList.remove("is-active");
                }
            });
        }
        element.classList.toggle("is-active");
    }


    let childItem = element.querySelector('.menu-dropdown');

    // if (element.classList.contains("is-active")) {
    //     element.querySelector('.menu-dropdown').style.maxHeight = element.querySelector('.menu-dropdown').scrollHeight + "px";
    // } else {
    //     element.querySelector('.menu-dropdown').removeAttribute("style");
    // }

}));

function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}