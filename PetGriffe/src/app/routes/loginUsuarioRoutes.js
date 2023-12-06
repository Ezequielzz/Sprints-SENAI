import {Router} from "express";

import loginUsuarioController from "../controller/loginUsuarioController.js";

const router = Router();

router.post("/login", loginUsuarioController.loginUsuario);

export default router;