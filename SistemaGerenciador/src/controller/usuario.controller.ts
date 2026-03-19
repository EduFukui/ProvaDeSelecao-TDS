import { Usuario } from "../model/usuario";
import { Request,Response } from "express";
import { hash } from "bcrypt";
import { randomInt } from "node:crypto";

export class ControllerUsuario{
    static async getUsuario(req:Request,res:Response){
        const result = await Usuario.getUsuarios()
        return res.status(200).json(result)
    }
    static async createUsuario(req:Request,res:Response){
        const {nome,CPF,email,senha,categoria,ordemdeservico_id} = req.body

        //Bcrypt para Senhas 
        const AleatorioSalt = randomInt(10,16)
        const senhaHash = await hash(senha,AleatorioSalt)
        
        const result = await Usuario.createUsuarios(nome,CPF,email,senhaHash,categoria,ordemdeservico_id)
        return res.status(201).json(result)
    }
    static async updateUsuario(req:Request,res:Response){
        const id = Number(req.params.id)
        const {nome,CPF,email,senha,categoria,ordemdeservico_id} = req.body
        const nomeNovo = nome.trim()
        
        //Bcrypt para Senhas
        const AleatorioSalt = randomInt(10,16)
        const senhaHash = await hash(senha,AleatorioSalt)
        const result = await Usuario.updateUsuarios(nomeNovo,CPF,email,senhaHash,categoria,ordemdeservico_id,id)
        return res.status(203).json(result)
    }
    static async deleteUsuario(req:Request,res:Response){
        const id = Number(req.params.id)
        const result = await Usuario.deleteUsuarios(id)
        return res.status(204).json(result)
    }
}