import app from "./src/app";

const port = process.env.PORT || 3000;

import mongoose from "mongoose";

// Conectar ao MongoDB (certifique-se de ter o MongoDB instalado e em execução)
mongoose.connect("mongodb://localhost:27017/encurtador-links", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
});

mongoose.connection.on("error", error => {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
});

mongoose.connection.once("open", () => {
    console.log("Conexão com o MongoDB estabelecida");
});

mongoose.connection.on("disconnected", () => {
    console.log("Conexão com o MongoDB encerrada");
    process.exit(1);
});

app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});
