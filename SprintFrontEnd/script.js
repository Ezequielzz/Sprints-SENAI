function toggleNavbar() {
    var navbarMenu = document.getElementById("navbarMenu");
    var navbarMenuOverlay = document.querySelector(".navbar-menu-overlay");
    navbarMenu.classList.toggle("active");
    navbarMenuOverlay.classList.toggle("active");
}
