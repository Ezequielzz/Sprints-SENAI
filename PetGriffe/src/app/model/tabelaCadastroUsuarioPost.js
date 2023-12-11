import bancoDados from "./conexaoBancoDados.js";

//criando a tabela e definindo a entidade
const CadstroUsuario = bancoDados.sequelize.define("cadastroUsuario", {
    nome: {
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: bancoDados.Sequelize.STRING,
        unique: true, //garante que os valores de 'email sejam únicos
        allowNull: false,
    },
    senha: {
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: bancoDados.Sequelize.STRING,
        allowNull: false
    }
});

    
    try {
        await CadstroUsuario.sync();//{force: true} <- deve ser usado apenas uma vez, caso você ja tenha usado, e usar novamente,ele forçará a crição de outra tabela, assim perdendo todos os dados contidos nela
    } catch (error) {
        console.error(error);
    }

//deixando visível para outros modulos
export default CadstroUsuario;