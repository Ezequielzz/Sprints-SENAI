import express from "express";
import jwt from "jsonwebtoken";
import LoginUsuario from "../model/loginUsuariosPost";
import { router, chaveSecreta, bcrypt } from "./cadastroUsuario";
//ordem padrão requisição e resposta, pode ser outros nomes 
router.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    //Buscando o usuário com base no email
    const usuario = await LoginUsuario.findOne({where: {email}});

    if(!usuario){
        return res.status(401).json({error: "Usuário não encontrado."});
    }

    //Verificando a senha com bcrypt
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if(!senhaCorreta){
        return res.status(401).json({error: "Senha incorreta."});
    }

    const token = jwt.sign({userId: usuario.id}, chaveSecreta, {expiresIn: "1h"});

    res.status(200).json({token});
});