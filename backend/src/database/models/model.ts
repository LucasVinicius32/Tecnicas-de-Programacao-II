import {DataTypes} from "sequelize"
import db from "../config"


export const ClienteModel = db.define("clientes", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    nome_social: {
        type: DataTypes.STRING
    },  
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})


export const DependenteModel = db.define("dependentes", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome_social: {
        type: DataTypes.STRING
    },  
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})


export const AcomodacoesModel = db.define("acomodacoes", {
    id_acomodacao: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_acomodaçao: {
        type: DataTypes.STRING,
    },
    cama_solteiro: {
        type: DataTypes.INTEGER
    },
    cama_casal: {
        type: DataTypes.INTEGER
    },
    suite: {
        type: DataTypes.INTEGER
    },
    garagem: {
        type: DataTypes.INTEGER
    },
    climatizacao: {
        type: DataTypes.BOOLEAN
    },
})

export const AcomodacoesRegistradas = db.define("acomodacoes_registradas", {

})


ClienteModel.hasMany(DependenteModel)
DependenteModel.belongsTo(ClienteModel) 



ClienteModel.hasMany(AcomodacoesRegistradas)
AcomodacoesRegistradas.belongsTo(ClienteModel)

AcomodacoesModel.hasMany(AcomodacoesRegistradas)
AcomodacoesRegistradas.belongsTo(AcomodacoesModel)