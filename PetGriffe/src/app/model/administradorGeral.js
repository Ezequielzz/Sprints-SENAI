import bancoDados from "./conexaoBancoDados";
import Express from "express";

const app = Express();

app.get("/administrador", (req, res) =>{

});


app.listen(7080, ()=>{
    console.log("Servidor rodando em http:localhost:7080");
});