import bancoDados from "./conexaoBancoDados";

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
export default LoginUsuario;
//super usuario terá acesso a tudo

try {
    await LoginUsuario.sync();
} catch (error) {
    console.error(error);
}