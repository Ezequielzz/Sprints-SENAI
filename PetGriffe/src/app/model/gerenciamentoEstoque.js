import bancoDados from "./conexaoBancoDados";

const Estoque = bancoDados.sequelize.define("estoque", {
    produto: {
        type: bancoDados.Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    codigo: {
        type: bancoDados.Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    quantidade: {
        type: bancoDados.Sequelize.INTEGER,
        allowNull: false
    },
    preco: {
        type: bancoDados.Sequelize.FLOAT,
        allowNull: false
    }
});

//função para gerar um código aleatória para cada produto
function gerarCodigoProduto() {
    return Math.floor(Math.random() * 10000);
}

//os ganchos são usados para adicionar lógica personalizada para eventos específicos, (hook) <- extenxão ou local para enganchar

Estoque.addHook("beforeCreate", (estoque, options/*usados para informações adicionais*/) => {
    //após o código gerado, será atribuido ao campo "codigo"
    estoque.codigo = gerarCodigoProduto();
});

export default Estoque;

try {
     await Estoque.sync({ force: true });//criará a tabela
} catch (error) {
console.error(error);
}

