import pool from "../../db/config.ts";

export const insertCobranca = async ({
  cpf,
}: { cpf: string | null }) => {
  const response = await pool.query(
    `
      INSERT INTO cobrancas (
        associado_id,
        mes_referencia,
        valor,
        nosso_numero,
        status
      )
      SELECT
        a.id,
        TO_CHAR(CURRENT_DATE, 'YYYY-MM'),
        a.valor_mensalidade,
        gen_random_uuid()::TEXT,
        'PENDENTE'
      FROM associados a
      WHERE
        ($1::VARCHAR IS NOT NULL AND a.cpf = $1)
      RETURNING *
    `,
    [cpf],
  );

  return response;
};

export const selectCobranca = async (nosso_numero: string) => {
  const response = await pool.query(
    `
    SELECT * FROM cobrancas WHERE nosso_numero = $1
  `,
    [nosso_numero],
  );
  
  return response;
};
