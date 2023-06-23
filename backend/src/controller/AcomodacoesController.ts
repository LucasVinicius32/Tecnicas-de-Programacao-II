import { RequestHandler } from "express";

import { AcomodacoesModel  } from "../database/models/model";


export const createPadraoAcomodacao: RequestHandler = async (req, res) => {
    try{
        const acomod = await AcomodacoesModel.create({...req.body},)
         return res.status(200).json({message: "Acomodação registrada com sucesso! ", data:acomod})
    } catch {
        return res.status(400).json({message: "Erro ao registrar acomodação!"})
    }
}
export const getAllAcomodacoes: RequestHandler = async (req, res) => {
    try {
        const all_acomod = await AcomodacoesModel.findAll();
        if (all_acomod != null) {
            return res.status(200).json({message: "Acomodações Registrados: ", data:all_acomod})
        } else {
            return res.status(400).json({message: "Nenhuma Acomodação Encontrada!: "})
        }
       
    } catch {
        return res.status(400).json({message: "Erro ao carregar Acomodações!"})
    }
}

