import Router from "express"
import { ControllerOS } from "../controller/ordemDeServico.controller"

export const routeOS = Router()

routeOS.get("/os",ControllerOS.getOS)
routeOS.post("/os",ControllerOS.createOS)
routeOS.put("/os/:id",ControllerOS.updateOS)
routeOS.delete("/os/:id",ControllerOS.deleteOS)
