import { EX } from "../model/execucaotecnica";
import { Request,Response } from "express";

export class ControllerEX{
    static async getEX(req:Request,res:Response){
        const result = await EX.getEXs()
        return res.json(result)
    }
    static async createEX(req:Request,res:Response){
        const {descricao,ordemdeservico_id} = req.body
        const result = await EX.createEXs(descricao,ordemdeservico_id)
        return res.status(201).json(result)
    }
    static async updateEX(req:Request,res:Response){
        const id = Number(req.params.id)
        const {descricao,ordemdeservico_id} = req.body
        const result = await EX.updateEXs(descricao,ordemdeservico_id,id)
        return res.status(203).json(result)
    }
    static async deleteEX(req:Request,res:Response){
        const id = Number(req.params.id)
        const result = await EX.deleteEXs(id)
        return res.status(204).json(result)
    }
}