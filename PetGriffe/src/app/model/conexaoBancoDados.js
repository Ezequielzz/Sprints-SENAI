import Sequelize from "sequelize";
//conectando com o banco de dados

//conectando com o banco de dados(banco, usuário, senha,  {host(onde será hospedado)}, dialect(dizendo qual é o banco de dados))
const sequelize = new Sequelize("PetGriffeDB", "administrador", "pgdatabase", {
  host: "localhost",
  dialect: "mysql",
});

//exportando Sequelize e sequelize(deixando visível para outros modulos)
export default {
  sequelize: sequelize,
  Sequelize: Sequelize,
};

//estabelecendo conexão com o  banco de dados
try {//verifica a conexão
  await sequelize.authenticate();
  console.log("Conexão bem sucediada.");
} catch (error) {//captura o erro
  console.error(error);
}
