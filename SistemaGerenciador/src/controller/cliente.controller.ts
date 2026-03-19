import { hash } from "bcrypt";
import { Cliente } from "../model/cliente";
import { Request,Response } from "express";
import { randomInt } from "node:crypto";

export class ControllerCliente{
    static async getCliente(req:Request,res:Response){
        const result = await Cliente.getClientes()
        return res.json(result)
    }
    static async createCliente(req:Request,res:Response){
        const {nome,CPF,email,senha} = req.body

        //Bcrypt para Senhas 
        const AleatorioSalt = randomInt(10,16)
        const senhaHash = await hash(senha,AleatorioSalt)

        const result = await Cliente.createClientes(nome,CPF,email,senhaHash)
        return res.status(201).json(result)
    }
    static async updateCliente(req:Request,res:Response){
        const id = Number(req.params.id)
        const {nome,CPF,email,senha} = req.body

        //Bcrypt para Senhas
        const AleatorioSalt = randomInt(10,16)
        const senhaHash = await hash(senha,AleatorioSalt)
        const result = await Cliente.updateClientes(nome,CPF,email,senhaHash,id)
        return res.status(203).json(result)
    }
    static async deleteCliente(req:Request,res:Response){
        const id = Number(req.params.id)
        const result = await Cliente.deleteClientes(id)
        return res.status(204).json(result)
    }
}