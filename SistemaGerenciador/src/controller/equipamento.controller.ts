import { Equipamento } from "../model/equipamento";
import { Request,Response } from "express";

export class ControllerEquipamento{
    static async getEquipamento(req:Request,res:Response){
        const result = await Equipamento.getEquipamentos()
        return res.json(result)
    }
    static async createEquipamento(req:Request,res:Response){
        const {nome,ordem,cliente_id} = req.body
        const result = await Equipamento.createEquipamentos(nome,ordem,cliente_id)
        return res.status(201).json(result)
    }
    static async updateEquipamento(req:Request,res:Response){
        const id = Number(req.params.id)
        const {nome,ordem,cliente_id} = req.body
        const result = await Equipamento.updateEquipamentos(nome,ordem,cliente_id,id)
        return res.status(203).json(result)
    }
    static async deleteEquipamento(req:Request,res:Response){
        const id = Number(req.params.id)
        const result = await Equipamento.deleteEquipamentos(id)
        return res.status(204).json(result)
    }
}