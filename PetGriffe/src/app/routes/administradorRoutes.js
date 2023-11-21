import router from "./cadastroUsuarioRoutes";

import administradorGeral from "../controller/administradorGeralController";

router.post("/administrador", administradorGeral.cadastroAdministrador);

export default router;
