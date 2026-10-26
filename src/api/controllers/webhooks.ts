import { type Request, type Response } from "express";
import { updateCobranca } from "../model/webhooks.ts";
import { selectCobranca } from "../model/cobrancas.ts";

export const pagamento = async (req: Request, res: Response) => {
  const { id_evento, nosso_numero, data_pagamento } = req.body;

  try {
    if (!id_evento || !nosso_numero || !data_pagamento) {
      return res.status(400).json({
        error: "id_evento, nosso_numero e data_pagamento são obrigatórios.",
      });
    }

    const response = await updateCobranca(
      id_evento,
      nosso_numero,
      data_pagamento
    );

    if (response.rowCount === 0) {
      const cobranca = await selectCobranca(nosso_numero);

      if (cobranca.rowCount === 0) {
        return res.status(404).json({
          error: "Cobrança não encontrada.",
        });
      }

      if (cobranca.rows[0].status === "PAGA") {
        return res.status(200).json({
          message: "Esta cobrança já foi paga.",
        });
      }

      return res.status(409).json({
        error: `Não é possível pagar uma cobrança com status ${cobranca.rows[0].status}.`,
      });
    }

    return res.status(200).json({
      message: "Cobrança atualizada com sucesso.",
      cobranca: response.rows[0],
    });
  } catch (error) {
    console.error("Erro ao atualizar cobrança:", error);

    return res.status(500).json({
      error: "Erro interno ao atualizar cobrança.",
    });
  }
};