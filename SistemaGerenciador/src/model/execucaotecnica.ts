import { pool } from "../database/connection"

export class EX{
    static async getEXs(){
        const [result] = await pool.execute(
            "SELECT * FROM execucaotecnica"
        )
        return result
    }
    static async createEXs(descricao:string,ordemdeservico_id:number){
        const result = await pool.execute(
            "INSERT INTO execucaotecnica(descricao,ordemdeservico_id) VALUES(?,?)",[descricao,ordemdeservico_id]
        )
    }
    static async updateEXs(descricao:string,ordemdeservico_id:number,id:number){
        const result = await pool.execute(
            "UPDATE execucaotecnica SET descricao=?,ordemdeservico_id=? WHERE id=?",[descricao,ordemdeservico_id,id]
        )
    }
    static async deleteEXs(id:number){
        const [result] = await pool.execute(
            "DELETE FROM execucaotecnica WHERE id=?",[id]
        )
    }
}