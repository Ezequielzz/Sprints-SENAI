import bancoDados from "./conexaoBancoDados";

//criando a tabela e definindo a entidade
const CadstroUsuario = bancoDados.sequelize.define("cadastroUsuario", {
    nome: {
        type: bancoDados.Sequelize.STRING
    },
    email: {
        type: bancoDados.Sequelize.STRING,
        uninque: true //garante que os valores de 'email sejam únicos
    },
    senha:{
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    }, 
    endereco:{
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    }, 
    cep: {
        type:bancoDados.Sequelize.INTEGER,
        allowNull: false
    },
    telefone:{
        type:bancoDados.Sequelize.INTEGER,
        allowNull: false
    }
});

//deixando visível para outros modulos
export default CadstroUsuario;

try {
    await CadstroUsuario.sync();//{force: true} <- deve ser usado apenas uma vez, caso você ja tenha usado, e usar novamente,ele forçará a crição de outra tabela, assim perdendo todos os dados contidos nela
} catch (error) {
    console.error(error);
}