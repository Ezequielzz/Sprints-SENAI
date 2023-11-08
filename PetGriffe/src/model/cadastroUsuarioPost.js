import bancoDados from "./conexaoBancoDados";

//criando a tabela e definindo a entidade
const CadstroUsuario = bancoDados.sequelize.define("cadastroUsuario", {
    nome: {
        type: bancoDados.Sequelize.STRING
    },
    email: {
        type: bancoDados.Sequelize.STRING
    },
    senha:{
        type: bancoDados.Sequelize.STRING
    }, 
    endereco:{
        type: bancoDados.Sequelize.STRING
    }, 
    cep: {
        type:bancoDados.Sequelize.INTEGER
    },
    telefone:{
        type:bancoDados.Sequelize.INTEGER
    }
});

//deixando visível para outros modulos
export default CadstroUsuario;

try {
    await CadstroUsuario.sync({force: true});//<- deve ser usado apenas uma vez, caso você ja tenha usado, e usar novamente,ele forçará a crição de outra tabela, assim perdendo todos os dados contidos nela
} catch (error) {
    console.error(error)
}