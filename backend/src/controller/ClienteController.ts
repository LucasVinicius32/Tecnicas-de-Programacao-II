import { RequestHandler } from "express";

import { ClienteModel } from "../database/models/model";

export const updateCliente: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        await ClienteModel.update({...req.body}, {where: {id}})
        const ClienteUpdated = await ClienteModel.findByPk(id)
        return res.status(200).json({message: "Cliente atualizado com sucesso!", data:ClienteUpdated})
    } catch {
        return res.status(400).json({message: "Erro ao atualizar cliente"})
    }
}

export const getAllClientes: RequestHandler = async (req, res) => {
    try {
        const all_clientes = await ClienteModel.findAll();
        if (all_clientes != null) {
            return res.status(200).json({message: "Clientes Registrados: ", data:all_clientes})
        } else {
            return res.status(400).json({message: "Nenhum Cliente Registrado!: "})
        }
       
    } catch {
        return res.status(400).json({message: "Erro ao carregar Clientes!"})
    }
}
export const createCliente: RequestHandler = async (req, res) => {
    try {
        const cliente = await ClienteModel.create({...req.body});
        return res.status(200).json({message: "Cliente registrado com sucesso! ", data:cliente})
    } catch {
        return res.status(400).json({message: "Erro ao registrar cliente!"})
    }
}


export const deleteCliente: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted_cliente = await ClienteModel.findByPk(id)
        if (deleted_cliente != null) {
            await ClienteModel.destroy({where:{id}})
            return res.status(200).json({message: "Cliente deletado com sucesso!"})
        } else {
            return (res.status(400).json({message: "Cliente não encontrado!"}))
        }
    } catch {
        return res.status(400).json({message: "Erro ao deletar Cliente!"})

    }
}


export const getClienteById: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const cliente = await ClienteModel.findByPk(id);
        if (cliente != null) {
            return res.status(200).json({message: "Cliente Encontrado: ", data:cliente})
        } else { 
            return res.status(400).json({message: "Nenhum cliente registrado referente a esse ID!: "})
        }
        
    } catch {
        return res.status(400).json({message: "Erro ao carregar Cliente!"})
    }
}


