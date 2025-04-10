import express from "express";
import tarefaRoutes from "./routes/courseRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/tarefas", tarefaRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
