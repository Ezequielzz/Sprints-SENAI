// Codigo para o Fundionamento de Cada Carrossel de Card

var container1 = document.getElementById('container1');
var slider1 = document.getElementById('slider1');
var slides1 = document.querySelectorAll('#slider1 .slide').length;
var buttons1 = document.querySelectorAll('#slider-container1 .btn');

var currentPosition1 = 0;
var currentMargin1 = 0;
var slidesPerPage1 = 0;
var slidesCount1 = slides1 - slidesPerPage1;

function setParams1(w) {
    if (w < 551) {
        slidesPerPage1 = 1;
    } else if (w < 901) {
        slidesPerPage1 = 2;
    } else if (w < 1101) {
        slidesPerPage1 = 3;
    } else {
        slidesPerPage1 = 4;
    }

    slidesCount1 = slides1 - slidesPerPage1;

    if (currentPosition1 > slidesCount1) {
        currentPosition1 -= slidesPerPage1;
    }

    currentMargin1 = -currentPosition1 * (100 / slidesPerPage1);
    slider1.style.marginLeft = currentMargin1 + '%';

    if (currentPosition1 > 0) {
        buttons1[0].classList.remove('inactive');
    } else {
        buttons1[0].classList.add('inactive');
    }

    if (currentPosition1 < slidesCount1) {
        buttons1[1].classList.remove('inactive');
    } else {
        buttons1[1].classList.add('inactive');
    }
}

setParams1(container1.offsetWidth);

function slideRight1() {
    if (currentPosition1 !== 0) {
        slider1.style.marginLeft = currentMargin1 + (100 / slidesPerPage1) + '%';
        currentMargin1 += (100 / slidesPerPage1);
        currentPosition1--;
    }

    if (currentPosition1 === 0) {
        buttons1[0].classList.add('inactive');
    }

    if (currentPosition1 < slidesCount1) {
        buttons1[1].classList.remove('inactive');
    }
}

function slideLeft1() {
    if (currentPosition1 !== slidesCount1) {
        slider1.style.marginLeft = currentMargin1 - (100 / slidesPerPage1) + '%';
        currentMargin1 -= (100 / slidesPerPage1);
        currentPosition1++;
    }

    if (currentPosition1 === slidesCount1) {
        buttons1[1].classList.add('inactive');
    }

    if (currentPosition1 > 0) {
        buttons1[0].classList.remove('inactive');
    }
}

window.addEventListener("resize", function() {
    setParams1(container1.offsetWidth);
});


// -------------------------------------------------------------------

// Carrossel 2

// Variáveis específicas para o Carrossel 2
var container2 = document.getElementById('container2');
var slider2 = document.getElementById('slider2');
var slides2 = document.querySelectorAll('#slider2 .slide').length;
var buttons2 = document.querySelectorAll('#slider-container2 .btn');

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
    slider2.style.marginLeft = currentMargin2 + '%';

    if (currentPosition2 > 0) {
        buttons2[0].classList.remove('inactive');
    } else {
        buttons2[0].classList.add('inactive');
    }

    if (currentPosition2 < slidesCount2) {
        buttons2[1].classList.remove('inactive');
    } else {
        buttons2[1].classList.add('inactive');
    }
}

// Chamar a função setParams2() para inicializar o Carrossel 2
setParams2(container2.offsetWidth);

// Função para avançar slides do Carrossel 2
function slideRight2() {
    if (currentPosition2 !== 0) {
        slider2.style.marginLeft = currentMargin2 + (100 / slidesPerPage2) + '%';
        currentMargin2 += (100 / slidesPerPage2);
        currentPosition2--;
    }

    if (currentPosition2 === 0) {
        buttons2[0].classList.add('inactive');
    }

    if (currentPosition2 < slidesCount2) {
        buttons2[1].classList.remove('inactive');
    }
}

// Função para retroceder slides do Carrossel 2
function slideLeft2() {
    if (currentPosition2 !== slidesCount2) {
        slider2.style.marginLeft = currentMargin2 - (100 / slidesPerPage2) + '%';
        currentMargin2 -= (100 / slidesPerPage2);
        currentPosition2++;
    }

    if (currentPosition2 === slidesCount2) {
        buttons2[1].classList.add('inactive');
    }

    if (currentPosition2 > 0) {
        buttons2[0].classList.remove('inactive');
    }
}

// Evento de redimensionamento para o Carrossel 2
window.addEventListener("resize", function() {
    setParams2(container2.offsetWidth);
});


// -------------------------------------------------------------------

// Carrossel 3

var container3 = document.getElementById('container3');
var slider3 = document.getElementById('slider3');
var slides3 = document.querySelectorAll('#slider3 .slide').length;
var buttons3 = document.querySelectorAll('#slider-container3 .btn');

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
    slider3.style.marginLeft = currentMargin3 + '%';

    if (currentPosition3 > 0) {
        buttons3[0].classList.remove('inactive');
    } else {
        buttons3[0].classList.add('inactive');
    }

    if (currentPosition3 < slidesCount3) {
        buttons3[1].classList.remove('inactive');
    } else {
        buttons3[1].classList.add('inactive');
    }
}

setParams3(container3.offsetWidth);

function slideRight3() {
    if (currentPosition3 !== 0) {
        slider3.style.marginLeft = currentMargin3 + (100 / slidesPerPage3) + '%';
        currentMargin3 += (100 / slidesPerPage3);
        currentPosition3--;
    }

    if (currentPosition3 === 0) {
        buttons3[0].classList.add('inactive');
    }

    if (currentPosition3 < slidesCount3) {
        buttons3[1].classList.remove('inactive');
    }
}

function slideLeft3() {
    if (currentPosition3 !== slidesCount3) {
        slider3.style.marginLeft = currentMargin3 - (100 / slidesPerPage3) + '%';
        currentMargin3 -= (100 / slidesPerPage3);
        currentPosition3++;
    }

    if (currentPosition3 === slidesCount3) {
        buttons3[1].classList.add('inactive');
    }

    if (currentPosition3 > 0) {
        buttons3[0].classList.remove('inactive');
    }
}

window.addEventListener("resize", function() {
    setParams3(container3.offsetWidth);
});




var container4 = document.getElementById('container4');
var slider4 = document.getElementById('slider4');
var slides4 = document.querySelectorAll('#slider4 .slide').length;
var buttons4 = document.querySelectorAll('#slider-container4 .btn');

var currentPosition4 = 0;
var currentMargin4 = 0;
var slidesPerPage4 = 0;
var slidesCount4 = slides4 - slidesPerPage4;

function setParams4(w) {
    if (w < 551) {
        slidesPerPage4 = 1;
    } else if (w < 901) {
        slidesPerPage4 = 2;
    } else if (w < 1101) {
        slidesPerPage4 = 3;
    } else {
        slidesPerPage4 = 4;
    }

    slidesCount4 = slides4 - slidesPerPage4;

    if (currentPosition4 > slidesCount4) {
        currentPosition4 -= slidesPerPage4;
    }

    currentMargin4 = -currentPosition4 * (100 / slidesPerPage4);
    slider4.style.marginLeft = currentMargin4 + '%';

    if (currentPosition4 > 0) {
        buttons4[0].classList.remove('inactive');
    } else {
        buttons4[0].classList.add('inactive');
    }

    if (currentPosition4 < slidesCount4) {
        buttons4[1].classList.remove('inactive');
    } else {
        buttons4[1].classList.add('inactive');
    }
}

setParams4(container4.offsetWidth);

function slideRight4() {
    if (currentPosition4 !== 0) {
        slider4.style.marginLeft = currentMargin4 + (100 / slidesPerPage4) + '%';
        currentMargin4 += (100 / slidesPerPage4);
        currentPosition4--;
    }

    if (currentPosition4 === 0) {
        buttons4[0].classList.add('inactive');
    }

    if (currentPosition4 < slidesCount4) {
        buttons4[1].classList.remove('inactive');
    }
}

function slideLeft4() {
    if (currentPosition4 !== slidesCount4) {
        slider4.style.marginLeft = currentMargin4 - (100 / slidesPerPage4) + '%';
        currentMargin4 -= (100 / slidesPerPage4);
        currentPosition4++;
    }

    if (currentPosition4 === slidesCount4) {
        buttons4[1].classList.add('inactive');
    }

    if (currentPosition4 > 0) {
        buttons4[0].classList.remove('inactive');
    }
}

window.addEventListener("resize", function() {
    setParams4(container4.offsetWidth);
});
