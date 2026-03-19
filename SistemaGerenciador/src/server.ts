import express from "express"
import { routeUsuario } from "./routes/usuario.routes"
import { routeCliente } from "./routes/cliente.routes"
import { routeEquipamento } from "./routes/equipamentos.routes"
import { routeOS } from "./routes/ordemDeServico.routes"
import { routeEX } from "./routes/execucaotecnica.routes"

const app = express()

app.use(express.json())
app.use(routeUsuario)
app.use(routeCliente)
app.use(routeEquipamento)
app.use(routeOS)
app.use(routeEX)
const PORT = 3000

app.listen(3000,()=>{
    console.log(`Servidor Rodando em: http://localhost:${PORT}`)
})