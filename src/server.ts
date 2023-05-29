import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

//Configurando dotenv
dotenv.config();

const server = express();

//Configurando Mustache
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

//Configurando Pasta Pública
server.use(express.static(path.join(__dirname, "../public")));

//Configurando Rotas
server.use(mainRoutes);

//Configurando mensagem de página não encontrada
server.use((req:Request, res:Response)=>{
    res.status(404).render("pages/404");
});

server.listen(process.env.PORT);