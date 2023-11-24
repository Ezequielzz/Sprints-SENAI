import router from "./cadastroUsuarioRoutes";

import loginUsuarioController from "../controller/loginUsuarioController.js";

router.post("/login", loginUsuarioController.loginUsuario);

export default router;