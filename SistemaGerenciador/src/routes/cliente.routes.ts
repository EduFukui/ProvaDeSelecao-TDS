import Router from "express"
import { ControllerCliente } from "../controller/cliente.controller"

export const routeCliente = Router()

routeCliente.get("/clientes",ControllerCliente.getCliente)
routeCliente.post("/cliente",ControllerCliente.createCliente)
routeCliente.put("/cliente/:id",ControllerCliente.updateCliente)
routeCliente.delete("/cliente/:id",ControllerCliente.deleteCliente)
