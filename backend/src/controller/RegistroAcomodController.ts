import { RequestHandler } from "express";

import { AcomodacoesRegistradas } from "../database/models/model";


export const updateAcomod: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        await AcomodacoesRegistradas.update({...req.body}, {where: {id}})
        const AcomodUpdated = await AcomodacoesRegistradas.findByPk(id)
        return res.status(200).json({message: "Acomodação atualizado com sucesso!", data:AcomodUpdated})
    } catch {
        return res.status(400).json({message: "Erro ao atualizar acomodação"})
    }
}

export const getAllAcomod: RequestHandler = async (req, res) => {
    try {
        const all_acomod = await AcomodacoesRegistradas.findAll();
        if (all_acomod != null) {
            return res.status(200).json({message: "Acomodações Registrados: ", data:all_acomod})
        } else {
            return res.status(400).json({message: "Nenhuma Acomodação Registrada!: "})
        }
       
    } catch {
        return res.status(400).json({message: "Erro ao carregar Acomodações!"})
    }
}

export const DeleteAcomod: RequestHandler = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedRegistro = await AcomodacoesRegistradas.findByPk(id)
        if(deletedRegistro != null) {
            await AcomodacoesRegistradas.destroy({where:{id}})
            return res.status(200).json({message: "Hospedagem deletada com sucesso! "})
        } else { 
            return (res.status(400).json({message: "Hospedagem Não encontrada!"}))
        }
    } catch {
        return res.status(400).json({message: "Erro ao deletar Hospedagem!"})
    }
}

export const createAcomod: RequestHandler = async (req, res) => {
    try{
        const registro = await AcomodacoesRegistradas.create({...req.body},)
         return res.status(200).json({message: "Hospedagem registrada com sucesso! ", data:registro})
    } catch {
        return res.status(400).json({message: "Erro ao registrar acomodação!"})
    }
}





export const getAcomodById: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const acomodacao = await AcomodacoesRegistradas.findByPk(id);
        if (acomodacao != null) {
            return res.status(200).json({message: "Acomodacao Encontrada: ", data:acomodacao})
        } else { 
            return res.status(400).json({message: "Nenhum Acomodacao registrada com esse ID!: "})
        }
        
    } catch {
        return res.status(400).json({message: "Erro ao carregar acomodacao!"})
    }
}

