const hamburger = document.querySelector(".hamburger");
const menuBack = document.querySelector(".menu-back");
const mobileNav = document.querySelector(".nav-m");
hamburger.onclick = function () {
    mobileNav.style.display = "flex";
    menuBack.style.display = "block";
    hamburger.style.display = "none";
    };
menuBack.onclick = function () {
    mobileNav.style.display = "none";
    menuBack.style.display = "none";
    hamburger.style.display = "block";
    };
window.onclick = function (event) {
    if (event.target === mobileNav) {
        mobileNav.style.display = "none";
    }
}
