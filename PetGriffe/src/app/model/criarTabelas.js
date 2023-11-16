import tabelaLoginUsuarioPost from "./tabelaLoginUsuariosPost";
import tabelaCadastroUsuarioPost from "./tabelaCadastroUsuarioPost";
import tabelaGerenciamentoEstoque from "./tabelaGerenciamentoEstoque";
import tabelaCadastroAdministradorSite from "./tabelaCadastroAdministradorSite";

//função para criar as tabelas
//exportando ela
export default async function criarTabelas(){

try {
    await Promise.all([
         tabelaLoginUsuarioPost.sync().then(()=>console.log("Tabela LoginUsuarioPost criada com sucesso.")),
         tabelaCadastroUsuarioPost.sync().then(()=>console.log("Tabela CadastroUsusarioPost criada com sucesso.")),
         tabelaGerenciamentoEstoque.sync().then(()=>console.log("Tabela GerenciamentoEstoque criada com suesso")),
         tabelaCadastroAdministradorSite.sync().then(()=>console.log("Tabela CadastroAdministradorSite criada com sucesso."))
    ]);
console.log("Tudo certo, tabelas criadas com sucesso, cuidado para não recria-las novamente.")
} catch (error) {
    
    //se houver erros
    console.error("Ops", error);
}
}   

