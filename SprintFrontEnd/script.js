// Código para o Funcionamento do Carrinho de Compras

function toggleCarrinho() {
    var carrinhoMenu = document.getElementById("carrinhoMenu");
    carrinhoMenu.classList.toggle("active");

    // Seleciona o elemento body
    var body = document.querySelector("body");

    // Toggla a classe para habilitar/desabilitar o scroll
    body.classList.toggle("no-scroll");
}

let carrinhoDeCompras = [];

function adicionarProduto(identificador) {
    const produto = document.getElementById(identificador);
    const imagem = produto.querySelector('img').src;
    const nome = produto.querySelectorAll('p')[0].innerText;
    const preco = produto.querySelectorAll('p')[1].innerText;

    const produtoInfo = {
        imagem: imagem,
        nome: nome,
        preco: preco
    };

    adicionarAoCarrinho(produtoInfo);
}

// Restante do código...
