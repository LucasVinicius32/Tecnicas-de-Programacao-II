import express, { json } from "express";
import {router} from "./routes"

import db from "./database/config";
import cors from 'cors';
import { createAcomod } from "./controller/RegistroAcomodController";
import { AcomodacoesModel } from "./database/models/model";

const app = express();


app.use(cors({
  methods: "GET,OPTIONS,PUT,POST,DELETE",
  origin: "*"
}))
app.use(json());
app.use(router)





app.listen(8080, async () => {
  await db.sync();
  await AcomodacoesModel.create({"id_acomodacao":1, "nome_acomodaçao":"Casal Simples","cama_solteiro":0, "cama_casal":1, "suite":1, "garagem":1, "climatizacao":1})
  await AcomodacoesModel.create({"id_acomodacao":2, "nome_acomodaçao":"Familia Simples","cama_solteiro":2, "cama_casal":1, "suite":1, "garagem":1, "climatizacao":1})
  await AcomodacoesModel.create({"id_acomodacao":3, "nome_acomodaçao":"Familia Mais","cama_solteiro":5, "cama_casal":1, "suite":2, "garagem":2, "climatizacao":1})
  await AcomodacoesModel.create({"id_acomodacao":4, "nome_acomodaçao":"Familia Super","cama_solteiro":6, "cama_casal":2, "suite":3, "garagem":2, "climatizacao":1})
  await AcomodacoesModel.create({"id_acomodacao":5, "nome_acomodaçao":"Solteiro Simples","cama_solteiro":1, "cama_casal":0, "suite":1, "garagem":0, "climatizacao":1})
  await AcomodacoesModel.create({"id_acomodacao":6, "nome_acomodaçao":"Solteiro Mais","cama_solteiro":0, "cama_casal":1, "suite":1, "garagem":1, "climatizacao":1})
});
