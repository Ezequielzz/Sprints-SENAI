import bancoDados from "./conexaoBancoDados.js";

const AdministradorSite = bancoDados.sequelize.define("adiministradorSite", {
  nome: {
    type: bancoDados.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: bancoDados.Sequelize.STRING,
    allowNull: false,
  },
  nivel_acesso: {
    type: bancoDados.Sequelize.STRING,
    allowNull: false
  },
  chave_segura: {
    type: bancoDados.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});


try {
  await AdministradorSite.sync();
} catch (error) {
  console.error(error);
}

export default AdministradorSite;
