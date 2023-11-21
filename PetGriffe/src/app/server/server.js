import expres from "express";
import path from "path";
app = expres();

import controllesCadastro from "../controller/cadastroUsuarioController";
import controllesLogin from "../controller/loginUsuarioController";
import controllesAdministrador from "../controller/administradorGeralController";

    //Configurando o expres
app.use(expres.urlencoded({ extended: true }));
app.use(expres.json);

        //Rotas
app.get("app/cadastro", (req, res) => {
    res.render()
});