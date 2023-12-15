// Código para o Funcionamento do Carrossel de Imagens

// Variável 'contar' que mantém o controle do slide atual, inicializado como 1
let contar = 1;

// Marcar o primeiro botão de rádio (radio1) como selecionado ao carregar a página
document.getElementById("radio1").checked = true;

// Função para mudar a imagem do carrossel de acordo com o botão de direção (próximo ou anterior) clicado
function mudarImagem(next) {
  // Incrementa ou decrementa o valor da variável 'contar' com base na direção do carrossel
  contar = contar + next;

  // Verifica se 'contar' é menor que 1 (se estiver, define como o último slide - no caso, 4)
  if (contar < 1) {
    contar = 4;
  } else if (contar > 4) {
    // Se 'contar' for maior que 4 (no caso, último slide), redefine como o primeiro slide (1)
    contar = 1;
  }

  // Marca o botão de rádio correspondente ao slide atual como selecionado para exibir a imagem correta
  document.getElementById("radio" + contar).checked = true;
}

// -------------------------------------------------------------------

// Código para o Funcionamento do Carrinho de Compras

let carrinhoAberto = false; // Variável para controlar se o carrinho está aberto ou fechado

function toggleCarrinho() {
  // Obtém referências ao carrinho e ao corpo da página
  const carrinhoMenu = document.getElementById("carrinhoMenu");
  const body = document.querySelector("body");

  if (!carrinhoAberto) {
    // Se o carrinho não estiver aberto, abre o carrinho e desabilita o scroll da página
    carrinhoMenu.classList.add("active");
    body.classList.add("no-scroll");
    carrinhoAberto = true;
    body.style.overflow = "hidden"; // Trava o scroll da página
  }

  // Verifica se a altura do conteúdo do carrinho excede a altura da janela visível
  const carrinhoContent = document.getElementById("carrinhoElement");
  if (carrinhoContent.scrollHeight > window.innerHeight) {
    // Se o conteúdo do carrinho for maior que a janela, habilita o scroll no carrinho
    carrinhoMenu.style.overflowY = "scroll"; // Habilita o scroll no carrinho
    body.style.overflow = "hidden"; // Esconde o scroll da página
    body.style.overflow = ""; // Restaura o scroll da página
  }
}

function fecharCarrinho() {
  // Obtém referências ao carrinho e ao corpo da página
  const carrinhoMenu = document.getElementById("carrinhoMenu");
  const body = document.body;

  // Fecha o carrinho e restaura o scroll da página
  carrinhoMenu.classList.remove("active");
  body.classList.remove("no-scroll");
  carrinhoAberto = false;
  body.style.overflow = "auto"; // Libera o scroll da página
}

// Declaração de uma variável global 'carrinhoDeCompras' que será um vetor vazio para armazenar informações dos produtos adicionados ao carrinho.
let carrinhoDeCompras = [];

// Função 'adicionarProduto' responsável por adicionar um produto ao carrinho ao ser acionada pelo clique em um item específico.
function adicionarProduto(identificador) {
  // Obtém o elemento HTML correspondente ao identificador passado como parâmetro.
  const produto = document.getElementById(identificador);

  // Extrai informações específicas do elemento do produto selecionado (como imagem, nome e preço).
  const imagem = produto.querySelector("img").src; // Obtém o atributo 'src' da tag 'img' para a imagem do produto.
  const nome = produto.querySelectorAll("p")[0].innerText; // Obtém o texto do primeiro parágrafo ('p') como o nome do produto.
  const preco = produto.querySelectorAll("p")[1].innerText; // Obtém o texto do segundo parágrafo ('p') como o preço do produto.

  // Cria um objeto 'produtoInfo' contendo as informações extraídas do produto selecionado.
  const produtoInfo = {
    imagem: imagem,
    nome: nome,
    preco: preco,
  };

  // Chama a função 'adicionarAoCarrinho' passando as informações do produto como argumento.
  adicionarAoCarrinho(produtoInfo);

  // Chama a função 'toggleCarrinho' para exibir/ocultar o carrinho após a adição do produto.
  toggleCarrinho();
}

// Função 'adicionarAoCarrinho' que recebe as informações do produto e as adiciona à matriz 'carrinhoDeCompras'.
function adicionarAoCarrinho(produtoInfo) {
  carrinhoDeCompras.push(produtoInfo); // Adiciona o objeto 'produtoInfo' à matriz 'carrinhoDeCompras'.
  atualizarCarrinho(); // Chama a função 'atualizarCarrinho' para atualizar a exibição do carrinho.
}

// Função 'atualizarCarrinho' responsável por atualizar dinamicamente a exibição do carrinho de compras na página.
function atualizarCarrinho() {
  // Obtém o elemento HTML do carrinho de compras pelo ID 'carrinhoElement'.
  const carrinhoElement = document.getElementById("carrinhoElement");
  carrinhoElement.innerHTML = ""; // Limpa o conteúdo atual do carrinho para atualização.

  // Itera sobre cada produto no 'carrinhoDeCompras' para criar elementos HTML correspondentes e exibi-los no carrinho.
  carrinhoDeCompras.forEach((produto) => {
    // Cria um novo elemento 'div' para representar um item no carrinho.
    const itemCarrinho = document.createElement("div");
    itemCarrinho.classList.add("itemCarrinho"); // Adiciona uma classe ao contêiner do item

    // Cria um elemento 'img' para exibir a imagem do produto.
    const imagem = document.createElement("img");
    imagem.src = produto.imagem; // Define o atributo 'src' com a URL da imagem do produto.
    imagem.alt = produto.nome; // Define o atributo 'alt' com o nome do produto para acessibilidade.
    itemCarrinho.appendChild(imagem); // Adiciona a imagem ao contêiner do item.

    // Cria um contêiner de texto para o nome e o preço do produto.
    const texto = document.createElement("div");
    texto.classList.add("textoCarrinho"); // Adiciona uma classe ao contêiner do texto

    // Cria um parágrafo ('p') para exibir o nome do produto.
    const nomeProduto = document.createElement("p");
    nomeProduto.classList.add("nomeProduto"); // Adiciona uma classe ao nome do produto
    nomeProduto.innerText = produto.nome; // Define o texto como o nome do produto.
    texto.appendChild(nomeProduto); // Adiciona o nome do produto ao contêiner de texto.

    // Cria um parágrafo ('p') para exibir o preço do produto.
    const precoProduto = document.createElement("p");
    precoProduto.classList.add("precoProduto"); // Adiciona uma classe ao preço do produto
    precoProduto.innerText = produto.preco; // Define o texto como o preço do produto.
    texto.appendChild(precoProduto); // Adiciona o preço do produto ao contêiner de texto.

    // Adiciona o contêiner de texto ao item do carrinho.
    itemCarrinho.appendChild(texto);

    // Adiciona o item do carrinho ao elemento do carrinho na página.
    carrinhoElement.appendChild(itemCarrinho);
  });

  // Cria um botão "Avançar Compra" para permitir ao usuário finalizar a compra.
  const botaoFinalizarCompra = document.createElement("button");
  botaoFinalizarCompra.innerText = "Avançar Compra";
  botaoFinalizarCompra.classList.add("cAbrirPopup"); // Adiciona uma classe ao botão
  botaoFinalizarCompra.addEventListener("click", () => {
    meuPopup.style.display = "block"; // Abre o popup ao clicar no botão "Avançar Compra" no carrinho
  });
  carrinhoElement.appendChild(botaoFinalizarCompra); // Adiciona o botão ao elemento do carrinho na página.
}

// Função 'finalizarCompra' é chamada ao tentar finalizar a compra pelo botão correspondente.
function finalizarCompra(event) {
  event.preventDefault(); // Impede o comportamento padrão do botão (nesse caso, o comportamento padrão do formulário)

  // Verifica se há itens no carrinho (se o comprimento da matriz 'carrinhoDeCompras' é maior que zero).
  if (carrinhoDeCompras.length > 0) {
    // Se houver itens no carrinho:
    alert("Compra finalizada!"); // Mostra um alerta indicando que a compra foi finalizada com sucesso.
    carrinhoDeCompras = []; // Limpa a matriz 'carrinhoDeCompras', removendo todos os itens do carrinho.
    atualizarCarrinho(); // Chama a função 'atualizarCarrinho' para atualizar a exibição do carrinho (agora vazio).
    fecharCarrinho(); // Chama a função 'fecharCarrinho' para ocultar o carrinho após a finalização da compra.
  } else {
    // Se o carrinho estiver vazio:
    alert(
      "Seu carrinho está vazio! Adicione produtos para finalizar a compra."
    ); // Mostra um alerta informando que o carrinho está vazio e pedindo ao usuário para adicionar produtos.
  }
}

// -------------------------------------------------------------------

// Código para o Funcionamento do CEP

// Seleciona os elementos HTML correspondentes aos campos de entrada do CEP, endereço, bairro, cidade e mensagem de erro.
const cep = document.querySelector("#cep");
const endereco = document.querySelector("#endereco");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const mensagem = document.querySelector("#mensagem");

// Adiciona um ouvinte de evento para "focusout" no campo de entrada do CEP.
cep.addEventListener("focusout", async () => {
  try {
    // Expressões regulares para verificar se o CEP possui o formato válido (8 dígitos).
    const apenasNumeros = /^[0-9]+$/;
    const cepValido = /^[0-9]{8}$/;

    // Verifica se o valor do campo de entrada do CEP não contém apenas números ou não corresponde ao formato de CEP válido.
    if (!apenasNumeros.test(cep.value) || !cepValido.test(cep.value)) {
      throw { cep_error: "CEP Inválido!" }; // Lança um erro indicando que o CEP é inválido.
    }

    // Faz uma solicitação assíncrona usando fetch para obter informações do CEP da API ViaCEP.
    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    // Verifica se a resposta da solicitação não foi bem-sucedida (por exemplo, erro 404, 500 etc.).
    if (!response.ok) {
      throw await response.json(); // Lança um erro com base na resposta JSON recebida da API.
    }

    // Converte a resposta da solicitação em formato JSON.
    const responseCep = await response.json();

    // Preenche os campos de endereço, bairro e cidade com os dados obtidos da resposta da API ViaCEP.
    endereco.value = responseCep.logradouro;
    bairro.value = responseCep.bairro;
    cidade.value = responseCep.localidade;
  } catch (error) {
    // Captura e manipula os erros que possam ocorrer durante o processamento do código acima.
    if (error?.cep_error) {
      mensagem.textContent = error.cep_error; // Exibe a mensagem de erro no elemento HTML correspondente.
      setTimeout(() => {
        mensagem.textContent = ""; // Limpa a mensagem de erro após 5 segundos.
      }, 5000);
    }
    console.log(error); // Registra o erro no console para fins de depuração.
  }
});

// -------------------------------------------------------------------

// Código para o Funcionamento do MenuHamburger

// Variável global para controlar o estado do menu (aberto ou fechado)
let menuAberto = false;

// Função para alternar a exibição do menu
function toggleMenu() {
  const menu = document.getElementById("menu"); // Obtém o elemento do menu
  const body = document.body; // Obtém o elemento body do documento

  // Verifica se o menu está fechado
  if (!menuAberto) {
    menu.style.left = "0"; // Exibe o menu movendo-o para a posição esquerda 0
    menuAberto = true; // Atualiza o estado do menu para aberto
    body.style.overflow = "hidden"; // Impede o scroll da página enquanto o menu está aberto
  } else {
    menu.style.left = "-250px"; // Esconde o menu movendo-o para fora da tela à esquerda
    menuAberto = false; // Atualiza o estado do menu para fechado
    body.style.overflow = "auto"; // Permite o scroll da página
  }
}

// Função para fechar o menu
function fecharMenu() {
  const menu = document.getElementById("menu"); // Obtém o elemento do menu
  const body = document.body; // Obtém o elemento body do documento

  menu.style.left = "-250px"; // Esconde o menu movendo-o para fora da tela à esquerda
  menuAberto = false; // Atualiza o estado do menu para fechado
  body.style.overflow = "auto"; // Permite o scroll da página
}

// -------------------------------------------------------------------

// TEMPLATE!

// Codigo para o Fundionamento de Cada Carrossel de Card

// Variáveis para armazenar elementos DOM e informações sobre o slider
var container1 = document.getElementById("container1"); // Elemento contêiner do slider
var slider1 = document.getElementById("slider1"); // Elemento slider
var slides1 = document.querySelectorAll("#slider1 .slide").length; // Quantidade de slides
var buttons1 = document.querySelectorAll("#slider-container1 .btn"); // Botões de controle do slider

// Variáveis para controle de posição, margem, número de slides por página e contagem total de slides
var currentPosition1 = 0; // Posição atual do slider
var currentMargin1 = 0; // Margem atual do slider
var slidesPerPage1 = 0; // Quantidade de slides exibidos por página
var slidesCount1 = slides1 - slidesPerPage1; // Quantidade total de slides considerando as páginas

// Função para definir parâmetros do slider com base na largura do contêiner
function setParams1(w) {
  // Define a quantidade de slides por página com base na largura do contêiner
  if (w < 551) {
    slidesPerPage1 = 1;
  } else if (w < 901) {
    slidesPerPage1 = 2;
  } else if (w < 1101) {
    slidesPerPage1 = 3;
  } else {
    slidesPerPage1 = 4;
  }

  slidesCount1 = slides1 - slidesPerPage1; // Atualiza a contagem total de slides considerando as páginas

  // Ajusta a posição e margem do slider com base nos novos parâmetros
  if (currentPosition1 > slidesCount1) {
    currentPosition1 -= slidesPerPage1;
  }

  currentMargin1 = -currentPosition1 * (100 / slidesPerPage1);
  slider1.style.marginLeft = currentMargin1 + "%";

  // Ativa ou desativa os botões de controle com base na posição atual do slider
  if (currentPosition1 > 0) {
    buttons1[0].classList.remove("inactive");
  } else {
    buttons1[0].classList.add("inactive");
  }

  if (currentPosition1 < slidesCount1) {
    buttons1[1].classList.remove("inactive");
  } else {
    buttons1[1].classList.add("inactive");
  }
}

// Inicializa os parâmetros do slider com base na largura inicial do contêiner
setParams1(container1.offsetWidth);

// Função para mover o slider para a direita
function slideRight1() {
  // Verifica se não estamos no primeiro slide
  if (currentPosition1 !== 0) {
    // Move o slider para a direita (para exibir os slides anteriores)
    slider1.style.marginLeft = currentMargin1 + 100 / slidesPerPage1 + "%";
    currentMargin1 += 100 / slidesPerPage1;
    currentPosition1--; // Atualiza a posição atual do slider para o slide anterior
  }

  // Se estiver no primeiro slide, desativa o botão esquerdo
  if (currentPosition1 === 0) {
    buttons1[0].classList.add("inactive");
  }

  // Se a posição atual for menor que o número total de slides, ativa o botão direito
  if (currentPosition1 < slidesCount1) {
    buttons1[1].classList.remove("inactive");
  }
}

// Função para mover o slider para a esquerda
function slideLeft1() {
  // Verifica se não estamos no último slide
  if (currentPosition1 !== slidesCount1) {
    // Move o slider para a esquerda (para exibir os próximos slides)
    slider1.style.marginLeft = currentMargin1 - 100 / slidesPerPage1 + "%";
    currentMargin1 -= 100 / slidesPerPage1;
    currentPosition1++; // Atualiza a posição atual do slider para o próximo slide
  }

  // Se estiver no último slide, desativa o botão direito
  if (currentPosition1 === slidesCount1) {
    buttons1[1].classList.add("inactive");
  }

  // Se a posição atual for maior que 0, ativa o botão esquerdo
  if (currentPosition1 > 0) {
    buttons1[0].classList.remove("inactive");
  }
}

// Ouvinte de evento para redimensionamento da janela, atualiza os parâmetros do slider quando a janela é redimensionada
window.addEventListener("resize", function () {
  setParams1(container1.offsetWidth);
});

// -------------------------------------------------------------------

// Carrossel 2

// Variáveis específicas para o Carrossel 2
var container2 = document.getElementById("container2");
var slider2 = document.getElementById("slider2");
var slides2 = document.querySelectorAll("#slider2 .slide").length;
var buttons2 = document.querySelectorAll("#slider-container2 .btn");

var currentPosition2 = 0;
var currentMargin2 = 0;
var slidesPerPage2 = 0;
var slidesCount2 = slides2 - slidesPerPage2;

// Função para definir os parâmetros do Carrossel 2
function setParams2(w) {
  if (w < 551) {
    slidesPerPage2 = 1;
  } else if (w < 901) {
    slidesPerPage2 = 2;
  } else if (w < 1101) {
    slidesPerPage2 = 3;
  } else {
    slidesPerPage2 = 4;
  }

  slidesCount2 = slides2 - slidesPerPage2;

  if (currentPosition2 > slidesCount2) {
    currentPosition2 -= slidesPerPage2;
  }

  currentMargin2 = -currentPosition2 * (100 / slidesPerPage2);
  slider2.style.marginLeft = currentMargin2 + "%";

  if (currentPosition2 > 0) {
    buttons2[0].classList.remove("inactive");
  } else {
    buttons2[0].classList.add("inactive");
  }

  if (currentPosition2 < slidesCount2) {
    buttons2[1].classList.remove("inactive");
  } else {
    buttons2[1].classList.add("inactive");
  }
}

// Chamar a função setParams2() para inicializar o Carrossel 2
setParams2(container2.offsetWidth);

// Função para avançar slides do Carrossel 2
function slideRight2() {
  if (currentPosition2 !== 0) {
    slider2.style.marginLeft = currentMargin2 + 100 / slidesPerPage2 + "%";
    currentMargin2 += 100 / slidesPerPage2;
    currentPosition2--;
  }

  if (currentPosition2 === 0) {
    buttons2[0].classList.add("inactive");
  }

  if (currentPosition2 < slidesCount2) {
    buttons2[1].classList.remove("inactive");
  }
}

// Função para retroceder slides do Carrossel 2
function slideLeft2() {
  if (currentPosition2 !== slidesCount2) {
    slider2.style.marginLeft = currentMargin2 - 100 / slidesPerPage2 + "%";
    currentMargin2 -= 100 / slidesPerPage2;
    currentPosition2++;
  }

  if (currentPosition2 === slidesCount2) {
    buttons2[1].classList.add("inactive");
  }

  if (currentPosition2 > 0) {
    buttons2[0].classList.remove("inactive");
  }
}

// Evento de redimensionamento para o Carrossel 2
window.addEventListener("resize", function () {
  setParams2(container2.offsetWidth);
});

// -------------------------------------------------------------------

// Carrossel 3

var container3 = document.getElementById("container3");
var slider3 = document.getElementById("slider3");
var slides3 = document.querySelectorAll("#slider3 .slide").length;
var buttons3 = document.querySelectorAll("#slider-container3 .btn");

var currentPosition3 = 0;
var currentMargin3 = 0;
var slidesPerPage3 = 0;
var slidesCount3 = slides3 - slidesPerPage3;

function setParams3(w) {
  if (w < 551) {
    slidesPerPage3 = 1;
  } else if (w < 901) {
    slidesPerPage3 = 2;
  } else if (w < 1101) {
    slidesPerPage3 = 3;
  } else {
    slidesPerPage3 = 4;
  }

  slidesCount3 = slides3 - slidesPerPage3;

  if (currentPosition3 > slidesCount3) {
    currentPosition3 -= slidesPerPage3;
  }

  currentMargin3 = -currentPosition3 * (100 / slidesPerPage3);
  slider3.style.marginLeft = currentMargin3 + "%";

  if (currentPosition3 > 0) {
    buttons3[0].classList.remove("inactive");
  } else {
    buttons3[0].classList.add("inactive");
  }

  if (currentPosition3 < slidesCount3) {
    buttons3[1].classList.remove("inactive");
  } else {
    buttons3[1].classList.add("inactive");
  }
}

setParams3(container3.offsetWidth);

function slideRight3() {
  if (currentPosition3 !== 0) {
    slider3.style.marginLeft = currentMargin3 + 100 / slidesPerPage3 + "%";
    currentMargin3 += 100 / slidesPerPage3;
    currentPosition3--;
  }

  if (currentPosition3 === 0) {
    buttons3[0].classList.add("inactive");
  }

  if (currentPosition3 < slidesCount3) {
    buttons3[1].classList.remove("inactive");
  }
}

function slideLeft3() {
  if (currentPosition3 !== slidesCount3) {
    slider3.style.marginLeft = currentMargin3 - 100 / slidesPerPage3 + "%";
    currentMargin3 -= 100 / slidesPerPage3;
    currentPosition3++;
  }

  if (currentPosition3 === slidesCount3) {
    buttons3[1].classList.add("inactive");
  }

  if (currentPosition3 > 0) {
    buttons3[0].classList.remove("inactive");
  }
}

window.addEventListener("resize", function () {
  setParams3(container3.offsetWidth);
});
