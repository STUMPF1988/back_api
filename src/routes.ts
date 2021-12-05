import { Request, Response, Router } from "express";
import { randomUUID } from "crypto";
import { recadoList } from "./recados";
import { log } from "./middleware";


const routes = Router();


//post - criar um recado
routes.post("/recado", log, (request: Request, response: Response) => {
  const { descricao, detalhamento } = request.body;
 
  const newRecado = { descricao, detalhamento, id: randomUUID() };
  recadoList.push(newRecado);

  return response.json(newRecado);
});


//get - mostrar um recado
routes.get("/recado", log, (_, response: Response) => {
  return response.json(recadoList);
});


//delete - deletar um recado
routes.delete("/recado/:id", log,  (request: Request, response: Response) => {
  const { id } = request.params;

  const index = recadoList.findIndex((recado) => recado.id === id);

  if (index === -1) {
    response.status(404).send({ Message: "Recado não encontrado!" });
  } else {
    recadoList.splice(index, 1);

    response.send({
      message: `Recado removido`,
    });
  }
});


//put - alterar um recado
routes.put("/recado/:id", (request: Request, response: Response) => {
  const { id } = request.params;
  const { descricao, detalhamento } = request.body;

  const index = recadoList.findIndex((recado) => recado.id === id);

  if (index === -1) {
    response.status(404).send({ Message: "Recado não encontrado!" });
  } else {
    recadoList[index].descricao = descricao; 
    recadoList[index].detalhamento = detalhamento; 
    response.status(200).send(recadoList[index]);

    response.send({
      message: `Recado removido`,
    });
  }
});

export default routes;
