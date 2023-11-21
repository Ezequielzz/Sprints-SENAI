import express from "express";
import cadastroUsuarioController from "../controller/cadastroUsuarioController";

const router = express.Router();

router.post("/cadastro", cadastroUsuarioController.cadastroUsuario);

export default router;