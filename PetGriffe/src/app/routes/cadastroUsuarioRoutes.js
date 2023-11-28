import express from "express";
import cadastroUsuarioController from "../controller/cadastroUsuarioController.js";

const router = express.Router();
//rota cadastro (sem prefixo /api)
router.post("/cadastro", cadastroUsuarioController.cadastroUsuario);

export default router;