import express from "express";

import loginUsuarioController from "../controller/loginUsuarioController.js";

const router = express.Router();

router.post("/login", loginUsuarioController.loginUsuario);

export default router;