import router from "./cadastroUsuarioRoutes";

import loginUsuarioController from "../controller/loginUsuarioController";

router.post("/login", loginUsuarioController.loginUsuario);

export default router;