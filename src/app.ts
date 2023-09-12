import express from "express";

import { urlencoded, json } from "body-parser";
import routes from "./routes";

const app = express();

// Configurar o body-parser
app.use(urlencoded({ extended: false }));
app.use(json());

// Configurar as rotas
app.use("/", routes);



export default app;
