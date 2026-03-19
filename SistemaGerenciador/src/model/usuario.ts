import { pool } from "../database/connection"

export class Usuario{
    static async getUsuarios(){
        const [result] = await pool.execute(
            "SELECT * FROM usuarios"
        )
        return result
    }
    static async createUsuarios(nome:string,CPF:number,email:string,senha:string,categoria:string,ordemdeservico_id:number){
        const result = await pool.execute(
            "INSERT INTO usuarios(nome,CPF,email,senha,categoria,ordemdeservico_id) VALUES(?,?,?,?,?,?)",[nome,CPF,email,senha,categoria,ordemdeservico_id]
        )
    }
    static async updateUsuarios(nome:string,CPF:number,email:string,senha:string,categoria:string,ordemdeservico_id:number,id:number){
        const result = await pool.execute(
            "UPDATE usuarios nome=?, CPF=?, email=?,senha=?, categoria=?,ordemdeservico_id=? WHERE id=?",[nome,CPF,email,senha,categoria,ordemdeservico_id,id]
        )
    }
    static async deleteUsuarios(id:number){
        const [result] = await pool.execute(
            "DELETE usuarios WHERE id=?",[id]
        )
    }
}