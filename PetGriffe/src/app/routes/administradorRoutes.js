import { Router } from "express";

import administradorGeral from "../controller/administradorGeralController";

const router = Router();

router.post("/administrador", administradorGeral.cadastroAdministrador);

export default router;
