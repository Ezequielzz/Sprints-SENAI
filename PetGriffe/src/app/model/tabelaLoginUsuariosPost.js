import bancoDados from "./conexaoBancoDados.js";

const LoginUsuario = bancoDados.sequelize.define("loginUsuario", {
    email: {
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    }
});

//super usuario terá acesso a tudo
async function sincronizarTabela(){
try {
    await LoginUsuario.sync();
} catch (error) {
    console.error(error);
}
}

//Chama a função assíncrona para sincronizar a tabela
sincronizarTabela();

export default LoginUsuario;