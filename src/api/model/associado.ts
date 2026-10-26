import pool from "../../db/config.ts";

export const insertAssociado = async (nome: string, cpf: string, valor_mensalidade: number) => {
  const response = await pool.query(`INSERT INTO "associados" (nome, cpf, valor_mensalidade) VALUES ($1, $2, $3) RETURNING *`, [nome, cpf, valor_mensalidade]);
  return response;
};