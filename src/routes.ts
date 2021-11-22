import { Request, Response, Router } from "express";
import { randomUUID } from "crypto";
import { recadoList } from "./main";

const routes = Router();

//post - criar um recado
routes.post("/recado", (request: Request, response: Response) => {
  const { descricao, detalhamento } = request.body;

  const newRecado = { descricao, detalhamento, id: randomUUID() };
  recadoList.push(newRecado);

  return response.json(newRecado);
});

//get
routes.get("/recado", (_, response: Response) => {
  return response.json(recadoList);
});

routes.get("/recado/:id", (request: Request, response: Response) => {
  const { id } = request.params;

  const index = recadoList.findIndex((recado) => recado.id === id);

  const recadoForEdit = recadoList[index];

  return response.json(recadoForEdit);
});

//delete - deletar um recado
routes.delete("/recado/:id", (request: Request, response: Response) => {
  const { id } = request.params;

  const index = recadoList.findIndex((recado) => recado.id === id);

  const recadoForEdit = recadoList[index];

  recadoList.splice(index, 1);

  response.send({
    message: `Recado removido`,
  });
});

//put - alterar um recado
routes.put("/recado/:id", (request: Request, response: Response) => {
  const { id } = request.params;
  const { descricao, detalhamento } = request.body;

  const newRecado = { descricao, detalhamento, id: randomUUID() };
  recadoList.push(newRecado);

  return response.json(newRecado);
});

export default routes;
