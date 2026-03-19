import { pool } from "../database/connection"

export class OS{
    static async getOSs(){
        const [result] = await pool.execute(
            "SELECT * FROM ordemdeservico"
        )
        return result
    }
    static async createOSs(descricao:string,cliente_id:number,equipamento_id:number){
        const result = await pool.execute(
            "INSERT INTO ordemdeservico(descricao,cliente_id,equipamento_id) VALUES(?,?,?)",[descricao,cliente_id,equipamento_id]
        )
    }
    static async updateOSs(descricao:string,cliente_id:number,equipamento_id:number,id:number){
        const result = await pool.execute(
            "UPDATE ordemdeservico SET descricao=?,cliente_id=?,equipamento_id=? WHERE id=?",[descricao,cliente_id,equipamento_id,id]
        )
    }
    static async deleteOSs(id:number){
        const [result] = await pool.execute(
            "DELETE FROM ordemdeservico WHERE id=?",[id]
        )
    }
}