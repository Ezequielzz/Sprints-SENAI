import tabelaLoginUsuariosPost from "./tabelaLoginUsuariosPost.js"
import tabelaCadastroUsuarioPost from "./tabelaCadastroUsuarioPost.js";
import tabelaGerenciamentoEstoque from "./tabelaGerenciamentoEstoque.js";
import tabelaCadastroAdministradorSite from "./tabelaCadastroAdministradorSite.js";

//função para criar as tabelas
//exportando ela
export default async function criarTabelas(){

try {
    await Promise.all([
         tabelaLoginUsuariosPost.sync().then(()=>console.log("Tabela LoginUsuarioPost criada com sucesso.")),
         tabelaCadastroUsuarioPost.sync().then(()=>console.log("Tabela CadastroUsusarioPost criada com sucesso.")),
         tabelaGerenciamentoEstoque.sync().then(()=>console.log("Tabela GerenciamentoEstoque criada com suesso")),
         tabelaCadastroAdministradorSite.sync().then(()=>console.log("Tabela CadastroAdministradorSite criada com sucesso."))
    ]);
console.log("Tudo certo, tabelas criadas com sucesso, cuidado para não recria-las novamente.")
} catch (error) {
    
    //se houver erros
    console.error("Ops, erro ao criar as tabelas", error);
}
}   

