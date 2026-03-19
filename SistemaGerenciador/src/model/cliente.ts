import { pool } from "../database/connection"

export class Cliente{
    static async getClientes(){
        const [result] = await pool.execute(
            "SELECT * FROM cliente"
        )
        return result
    }
    static async createClientes(nome:string,CPF:number,email:string,senha:string){
        const result = await pool.execute(
            "INSERT INTO cliente(nome,CPF,email,senha) VALUES(?,?,?,?)",[nome,CPF,email,senha]
        )
    }
    static async updateClientes(nome:string,CPF:number,email:string,senha:string,id:number){
        const result = await pool.execute(
            "UPDATE cliente SET nome=?, CPF=?, email=?, senha=? WHERE id=?",[nome,CPF,email,senha,id]
        )
    }
    static async deleteClientes(id:number){
        const [result] = await pool.execute(
            "DELETE FROM cliente WHERE id=?",[id]
        )
    }
}