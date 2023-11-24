import express from "express";
import cadastroUsuarioController from "../controller/cadastroUsuarioController.js";

const router = express.Router();

router.post("/api/cadastro", cadastroUsuarioController.cadastroUsuario);

export default router;