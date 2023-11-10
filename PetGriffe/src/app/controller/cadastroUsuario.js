import express from "express";
import bancoDados from "../model/conexaoBancoDados";
import bcrypt, { hash } from "bcrypt"//usado para criar a hash das senhas
import cadastroUsuarioPost from "../model/cadastroUsuarioPost"
import crypto from "crypto";

const chaveSecreta = crypto.randomBytes(32).toString("hex");//gera uma chave de 32 bytes e converte em hexadecimal
const router = express.Router();

//Rota para a criação de usuário
router.post("/cadastro", async (req, res) => {
    const { nome, email, senha, endereco, cep, telefone } = req.body;//recebendo os dados do usuário

    //criando um hash seguro da senha
    bcrypt.hash(senha, 10, async (err, hash) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao criar usuário" });
        } else {
            //Cria o usuário com a senha já hasheada

            try {
                const usuario = await cadastroUsuarioPost.create({
                    nome,
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
});
export {router, chaveSecreta, bcrypt};
