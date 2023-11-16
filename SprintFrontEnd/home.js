let contar = 1;
document.getElementById("radio1").checked = true;

function mudarImagem(next) {
    contar = contar + next;

    if (contar < 1) {
        contar = 4;
    } else if (contar > 4) {
        contar = 1;
    }

    document.getElementById("radio" + contar).checked = true;
}
