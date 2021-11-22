import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

class Recado {
  constructor(
    public descricao: string,
    public detalhamento: string,
    public id: string
  ) {}
}

export let recadoList: Recado[] = [];

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);

app.listen(process.env.PORT || 8082, () => console.log("Server iniciou"));
