import express from "express";
import courseRoutes from "./routes/courseRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/courses", courseRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
