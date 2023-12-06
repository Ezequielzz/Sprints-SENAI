// Código para o Funcionamento do Carrinho de Compras

let carrinhoAberto = false; // Variável para controlar se o carrinho está aberto ou fechado

function toggleCarrinho() {
  const carrinhoMenu = document.getElementById("carrinhoMenu");
  const body = document.querySelector("body");

  if (!carrinhoAberto) {
    carrinhoMenu.classList.add("active");
    body.classList.add("no-scroll");
    carrinhoAberto = true;
  }

  // Verificar se a altura do carrinho excede a altura da janela visível
  const carrinhoContent = document.getElementById("carrinhoElement");
  if (carrinhoContent.scrollHeight > window.innerHeight) {
    carrinhoMenu.style.overflowY = "scroll"; // Habilita o scroll no carrinho
    body.style.overflow = "hidden"; // Esconde o scroll da página
    body.style.overflow = ""; // Restaura o scroll da página
  }
}

function fecharCarrinho() {
  const carrinhoMenu = document.getElementById("carrinhoMenu");
  const body = document.querySelector("body");

  carrinhoMenu.classList.remove("active");
  body.classList.remove("no-scroll");
  carrinhoAberto = false;
}

let carrinhoDeCompras = [];

function adicionarProduto(identificador) {
  const produto = document.getElementById(identificador);
  const imagem = produto.querySelector("img").src;
  const nome = produto.querySelectorAll("p")[0].innerText;
  const preco = produto.querySelectorAll("p")[1].innerText;

  const produtoInfo = {
    imagem: imagem,
    nome: nome,
    preco: preco,
  };

  adicionarAoCarrinho(produtoInfo);
  toggleCarrinho();
}

function adicionarAoCarrinho(produtoInfo) {
  carrinhoDeCompras.push(produtoInfo);
  atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoElement = document.getElementById("carrinhoElement");
    carrinhoElement.innerHTML = "";
  
    carrinhoDeCompras.forEach((produto) => {
      const itemCarrinho = document.createElement("div");
      itemCarrinho.classList.add("itemCarrinho"); // Adiciona uma classe ao contêiner do item
  
      const imagem = document.createElement("img");
      imagem.src = produto.imagem;
      imagem.alt = produto.nome;
      itemCarrinho.appendChild(imagem);
  
      const texto = document.createElement("div");
      texto.classList.add("textoCarrinho"); // Adiciona uma classe ao contêiner do texto
  
      const nomeProduto = document.createElement("p");
      nomeProduto.classList.add("nomeProduto"); // Adiciona uma classe ao nome do produto
      nomeProduto.innerText = produto.nome;
      texto.appendChild(nomeProduto);
  
      const precoProduto = document.createElement("p");
      precoProduto.classList.add("precoProduto"); // Adiciona uma classe ao preço do produto
      precoProduto.innerText = produto.preco;
      texto.appendChild(precoProduto);
  
      itemCarrinho.appendChild(texto);
      carrinhoElement.appendChild(itemCarrinho);
    });
  }
  

// -------------------------------------------------------------------

// Código para o Funcionamento do MenuHamburger

let menuAberto = false;

function toggleMenu() {
    const menu = document.getElementById("menu");

    if (!menuAberto) {
        menu.style.left = "0"; // Exibe o menu
        menuAberto = true;
    } else {
        menu.style.left = "-250px"; // Esconde o menu
        menuAberto = false;
    }
}

function fecharMenu() {
    const menu = document.getElementById("menu");

    menu.style.left = "-250px"; // Esconde o menu
    menuAberto = false;
}

// -------------------------------------------------------------------