import Router from "express"
import { ControllerEX } from "../controller/execucaotecnica.controller"

export const routeEX = Router()

routeEX.get("/ex",ControllerEX.getEX)
routeEX.post("/ex",ControllerEX.createEX)
routeEX.put("/ex/:id",ControllerEX.updateEX)
routeEX.delete("/ex/:id",ControllerEX.deleteEX)
