import { type Request, type Response } from "express";
import { insertCobranca, selectCobranca } from "../model/cobrancas.ts";
import validarEFormatarCPF from "../utils/validarCpf.ts";

export const cadastrar = async (req: Request, res: Response) => {
  try {
    let { cpf } = req.body;
    const cpfFormatado = validarEFormatarCPF(cpf);

    const cobranca = await insertCobranca({
      cpf: cpfFormatado,
    });

    // Não encontrou associado
    if (cobranca.rowCount === 0) {
      return res.status(404).json({
        error: "Associado não encontrado.",
      });
    }

    return res.status(201).json({
      result: "Cobrança cadastrada com sucesso.",
      cobranca: cobranca.rows[0],
    });
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23505"
    ) {
      return res.status(409).json({
        error: "Já existe uma cobrança para este associado neste mês.",
      });
    }

    console.error(error);

    return res.status(500).json({
      error: "Erro interno ao cadastrar cobrança.",
    });
  }
};

export const listar = async (req: Request, res: Response) => {
  const { nosso_numero } = req.params;

  if (typeof nosso_numero !== "string") {
    return res.status(400).json({
      error: "O parâmetro 'nosso_numero' deve ser uma string.",
    });
  }

  const consulta = await selectCobranca(nosso_numero);

  return res.status(200).json({
    cobranca: consulta.rows[0],
  });
}