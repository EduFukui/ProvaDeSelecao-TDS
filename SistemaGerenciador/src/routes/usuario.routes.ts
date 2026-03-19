import Router from "express"
import { ControllerUsuario } from "../controller/usuario.controller"

export const routeUsuario = Router()

routeUsuario.get("/usuarios",ControllerUsuario.getUsuario)
routeUsuario.post("/usuario",ControllerUsuario.createUsuario)
routeUsuario.put("/usuario/:id",ControllerUsuario.updateUsuario)
routeUsuario.delete("/usuario/:id",ControllerUsuario.deleteUsuario)
