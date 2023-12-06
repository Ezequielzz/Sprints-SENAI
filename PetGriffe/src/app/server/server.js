import Express from "express";
import path from "path";
import cors from "cors";
import cadastrousuarioRoutes from "../routes/cadastroUsuarioRoutes.js";
import loginUsuarioRoutes from "../routes/loginUsuarioRoutes.js";

const app = Express();


//Configurando o Cors
app.use(cors());

//Configurando o express
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
//Rotas
app.use("/api/cadastro", cadastrousuarioRoutes);
app.use("/api/login", loginUsuarioRoutes);

app.use((err, req, res, next) => {
  console.error("Erro no servidor", err);
  res.status(500).send("Erro interno no servidor");
})
if (process.env.NODE_ENV === 'production') {
    app.use(Express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
  }
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rorando na porta ${PORT}`);
});