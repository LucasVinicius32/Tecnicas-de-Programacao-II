import express from "express"

import {createCliente, deleteCliente, getAllClientes, getClienteById, updateCliente} from "./controller/ClienteController"
import { createDependente, deleteDependente, getAllDependentes, getDependenteById, updateDependente } from "./controller/DependenteController";
import {createAcomod, DeleteAcomod, getAllAcomod, getAcomodById, updateAcomod} from "./controller/RegistroAcomodController"
import { getAllAcomodacoes, createPadraoAcomodacao } from "./controller/AcomodacoesController";

export const router = express.Router();


router.post("/cliente", createCliente)
router.delete("/cliente/:id",deleteCliente)
router.get("/clientes", getAllClientes)
router.get("/cliente/:id",getClienteById)
router.put("/cliente/:id", updateCliente)



router.post("/dependente", createDependente)
router.delete("/dependente/:id",deleteDependente)
router.get("/dependentes", getAllDependentes)
router.get("/dependente/:id",getDependenteById)
router.put("/dependente/:id", updateDependente)


router.post("/acomodacao", createAcomod)
router.delete("/acomodacao/:id",DeleteAcomod)
router.get("/acomodacao", getAllAcomod)
router.get("/acomodacao/:id",getAcomodById)
router.put("/acomodacao/:id", updateAcomod)

router.get("/acomodacoes", getAllAcomodacoes)
router.post("/acomodacoes", createPadraoAcomodacao)