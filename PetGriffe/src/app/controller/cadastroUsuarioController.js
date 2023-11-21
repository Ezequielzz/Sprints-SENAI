import bcrypt from "bcrypt"//usado para criar a hash das senhas
import cadastroUsuarioPost from "../model/tabelaCadastroUsuarioPost.js"
import crypto from "crypto";

const chaveSecreta = crypto.randomBytes(32).toString("hex");//gera uma chave de 32 bytes e converte em hexadecimal

//Rota para a criação de usuário
const cadastroUsuario =  async (req, res) => {
    const { usuario, email, senha, endereco, cep, telefone } = req.body;//recebendo os dados do usuário

    //criando um hash seguro da senha
    bcrypt.hash(senha, 10, async (err, hash) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao criar usuário." });
        } else {
            //Cria o usuário com a senha já hasheada

            try {
                const usuarioCad = await cadastroUsuarioPost.create({
                    usuario,
                    email,
                    senha: hash,
                    endereco,
                    cep,
                    telefone
                });
                res.status(201).json({ message: "Usuário criado com sucesso." })
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Erro ao criar usuário" })
            }
        }
    });
};
export default{
    cadastroUsuario,
};
