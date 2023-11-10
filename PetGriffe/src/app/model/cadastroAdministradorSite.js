import bancoDados from "./conexaoBancoDados";

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

export default AdministradorSite;

try {
  await AdministradorSite.sync();
} catch (error) {
  console.error(error);
}
