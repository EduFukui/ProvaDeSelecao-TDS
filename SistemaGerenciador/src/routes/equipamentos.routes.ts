import Router from "express"
import { ControllerEquipamento } from "../controller/equipamento.controller"

export const routeEquipamento = Router()

routeEquipamento.get("/equipamentos",ControllerEquipamento.getEquipamento)
routeEquipamento.post("/equipamento",ControllerEquipamento.createEquipamento)
routeEquipamento.put("/equipamento/:id",ControllerEquipamento.updateEquipamento)
routeEquipamento.delete("/equipamento/:id",ControllerEquipamento.deleteEquipamento)
