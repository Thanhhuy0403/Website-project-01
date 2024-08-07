let menuToggle = false;

const menu = document.querySelector(".menu-icon");
const menuOverlay = document.querySelector(".mobile-header .menu-overlay");
console.log(menuOverlay);
const menuDrawer = document.querySelector(".mobile-header .menu-drawer");

menu.onclick = () => {
    if (menuToggle == false) {
        menuOverlay.style.opacity = 1;
        menuOverlay.style.visibility = "visible";
        menuOverlay.style.transition = "0.3s ease";
        menuToggle = true;

        menuDrawer.style.transform = "translate(0)";
        menuDrawer.style.transition = "0.3s ease";
    }
};

menuOverlay.onclick = () => {
    if (menuToggle == true) {
        menuOverlay.style.opacity = 0;
        menuOverlay.style.visibility = "hidden";
        menuOverlay.style.transition = "0.3s ease";
        menuToggle = false;

        menuDrawer.style.transform = "translate(-100%)";
        menuDrawer.style.transition = "0.3s ease";
    }
};

menuDrawer.innerHTML += document.querySelector(".fix-header .navbar ul").innerHTML;
