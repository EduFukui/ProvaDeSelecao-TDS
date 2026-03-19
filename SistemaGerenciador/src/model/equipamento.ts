import { pool } from "../database/connection"

export class Equipamento{
    static async getEquipamentos(){
        const [result] = await pool.execute(
            "SELECT * FROM equipamento"
        )
        return result
    }
    static async createEquipamentos(nome:string,ordem:string,cliente_id:number){
        const result = await pool.execute(
            "INSERT INTO equipamento(nome,ordem,cliente_id) VALUES(?,?,?)",[nome,ordem,cliente_id]
        )
    }
    static async updateEquipamentos(nome:string,ordem:string,cliente_id:number,id:number){
        const result = await pool.execute(
            "UPDATE equipamento SET nome=?, ordem=?, cliente_id=? WHERE id=?",[nome,ordem,cliente_id]
        )
    }
    static async deleteEquipamentos(id:number){
        const [result] = await pool.execute(
            "DELETE FROM equipamento WHERE id=?",[id]
        )
    }
}