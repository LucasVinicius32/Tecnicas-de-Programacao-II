import { RequestHandler } from "express";

import { DependenteModel } from "../database/models/model";


export const updateDependente: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        await DependenteModel.update({...req.body}, {where: {id}})
        const DependenteUpdated = await DependenteModel.findByPk(id)
        return res.status(200).json({message: "Dependente atualizado com sucesso!", data:DependenteUpdated})
    } catch {
        return res.status(400).json({message: "Erro ao atualizar dependente"})
    }
}

export const deleteDependente: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const dependente = await DependenteModel.findByPk(id);
        if (dependente != null) {
            console.log(dependente)
            await DependenteModel.destroy({where:{id}})
            return res.status(200).json({message: "Dependente deletado com sucesso!"})
        } else {
            return (res.status(400).json({message: "Dependente não encontrado!"}))
        }
    } catch {
        return res.status(400).json({message: "Erro ao deletar Dependente!"})

    }
}

export const getAllDependentes: RequestHandler = async (req, res) => {
    try {
        const all_dependentes = await DependenteModel.findAll();
        if (all_dependentes != null) {
            return res.status(200).json({message: "Dependentes Registrados: ", data:all_dependentes})
        } else {
            return res.status(400).json({message: "Nenhum Dependente Registrado!: "})
        }
       
    } catch {
        return res.status(400).json({message: "Erro ao carregar Dependentes!"})
    }
}

export const createDependente: RequestHandler = async (req, res) => {
    try {
        const dependente = await DependenteModel.create({...req.body});
        return res.status(200).json({message: "Dependente registrado com sucesso! ", data:dependente})
    } catch {
        return res.status(400).json({message: "Erro ao registrar dependente!"})
    }
}

export const getDependenteById: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const dependente = await DependenteModel.findByPk(id);
        if (dependente != null) {
            return res.status(200).json({message: "Dependente Encontrado: ", data:dependente})
        } else { 
            return res.status(400).json({message: "Nenhum Dependente registrado referente a esse ID!: "})
        }
        
    } catch {
        return res.status(400).json({message: "Erro ao carregar Dependente!"})
    }
}



