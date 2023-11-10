import bancoDados from "./conexaoBancoDados";
import CadastroAdministradorSite from "../model/cadastroAdministradorSite";
import {router, chaveSecreta, bcrypt} from "./cadastroUsuario";
import { hash } from "bcrypt";

const chaveSeguraAdministrador = null;

router.post("/administrador", async (req, res) => {
const {nome, senha, nivel_acesso, chave_segura} = req.body;//recebendo as informações do usuário

bcrypt.hash(senha, 10, async (err, hash) => {
    if(err){//se houver um erro
        console.error(err);
        res.status(500).json({error: "Erro ao criar hash da senha"});
    }else{//sem erros cria o administrador

        try {
           const administrador = await CadastroAdministradorSite.create({
            nome,
            senha: hash,
            nivel_acesso,
            chave_segura
           })
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "Erro ao criar administrador."})
        }
    }
});
});
/*A chave segura é escolhido pelo Administrador geral do site, por exemplo o propritetário ou quem ele conceder esse nível de acesso*/
/*Deixando mais claro:
    O proprietario tem acesso total ao site, banco de dados e concessões de acessos(funcionário,médio e geral).

        Nível funcionário: terá acesso somento ao estoque, ações como, (alterar preço,quantidade, adicionar produtos e remove-los)
        Nível médio: terá acesso*/


