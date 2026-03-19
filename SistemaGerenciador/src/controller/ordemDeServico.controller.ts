import { OS } from "../model/ordemDeServico";
import { Request,Response } from "express";

export class ControllerOS{
    static async getOS(req:Request,res:Response){
        const result = await OS.getOSs()
        return res.json(result)
    }
    static async createOS(req:Request,res:Response){
        const {descricao,cliente_id,equipamento_id} = req.body
        const result = await OS.createOSs(descricao,cliente_id,equipamento_id)
        return res.status(201).json(result)
    }
    static async updateOS(req:Request,res:Response){
        const id = Number(req.params.id)
        const {descricao,cliente_id,equipamento_id} = req.body
        const result = await OS.updateOSs(descricao,cliente_id,equipamento_id,id)
        return res.status(203).json(result)
    }
    static async deleteOS(req:Request,res:Response){
        const id = Number(req.params.id)
        const result = await OS.deleteOSs(id)
        return res.status(204).json(result)
    }
}