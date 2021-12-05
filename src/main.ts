import express from "express";
import routes from "./routes";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());




app.use(express.json());
app.use(express.urlencoded());

app.use(routes);






app.listen(process.env.PORT || 8082, () => console.log("Server iniciou"));
