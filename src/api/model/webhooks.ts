import pool from "../../db/config.ts";

export const updateCobranca = async (
  id_evento: string,
  nosso_numero: string,
  data_pagamento: string
) => {
  const response = await pool.query(
    `
      UPDATE cobrancas
      SET
        status = 'PAGA',
        id_evento = $1,
        data_pagamento = $2
      WHERE
        status = 'PENDENTE'
        AND nosso_numero = $3
      RETURNING *
    `,
    [id_evento, data_pagamento, nosso_numero]
  );

  return response;
};