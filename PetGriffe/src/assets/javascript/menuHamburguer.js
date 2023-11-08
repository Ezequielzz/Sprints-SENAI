document.addEventListener("DOMContentLoaded", function() {
    const menuHamburguer = document.getElementById("menu-hamburguer");
    const menuResponsivo = document.getElementById("menu-responsivo");

    menuHamburguer.addEventListener("click", function() {
        menuResponsivo.classList.toggle("active");
    })
})