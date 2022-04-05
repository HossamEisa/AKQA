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


const burgerMenu = document.getElementById("menu-toggler");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");

    if (navbarMenu.classList.contains("is-active")) {
        navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
    } else {
        navbarMenu.removeAttribute("style");
    }
});