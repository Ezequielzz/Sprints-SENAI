import express from "express";
import path from "path";
import cors from "cors";
import cadastrousuarioRoutes from "../routes/cadastroUsuarioRoutes.js";


const app = express();


//Configurando o Cors
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

//Configurando o express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });


//Rotas
app.use("/api", cadastrousuarioRoutes);

app.get("/i", (req, res) => {
  res.send('ola')
})

app.use((err, req, res, next) => {
  console.error("Erro no servidor", err);
  res.status(500).json({ error: "Erro interno no servidor" });


})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rorando na porta ${PORT}`);
});