// -------------------------------------------------------------------

// Código para o Funcionamento do MenuHamburger

let menuAberto = false;

function toggleMenu() {
  const menu = document.getElementById("menu");
  const body = document.body;

  if (!menuAberto) {
      menu.style.left = "0"; // Exibe o menu
      menuAberto = true;
      body.style.overflow = "hidden"; // Trava o scroll da página
  } else {
      menu.style.left = "-250px"; // Esconde o menu
      menuAberto = false;
      body.style.overflow = "auto"; // Libera o scroll da página
  }
}

function fecharMenu() {
  const menu = document.getElementById("menu");
  const body = document.body;

  menu.style.left = "-250px"; // Esconde o menu
  menuAberto = false;
  body.style.overflow = "auto"; // Libera o scroll da página
}


// -------------------------------------------------------------------