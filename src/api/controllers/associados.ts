import { type Request, type Response } from "express";
import { insertAssociado } from "../model/associado.ts";
import validarEFormatarCPF from "../utils/validarCpf.ts";

export const cadastrar = async (req: Request, res: Response) => {
  try {
    const { nome, cpf, valor_mensalidade } = req.body;
    const cpfFormatado = validarEFormatarCPF(cpf); // Valida CPF

    if (typeof valor_mensalidade !== "number") {
      return res
        .status(400)
        .json({ error: "O valor da mensalidade deve ser um número." });
    }

    if (!cpfFormatado) {
      return res.status(422).json({ error: "CPF inválido." });
    }

    if (nome.trim() === "") {
      return res.status(400).json({ error: "O nome do associado é obrigatório." });
    }

    if (valor_mensalidade <= 0 || isNaN(valor_mensalidade)) {
      return res
        .status(400)
        .json({ error: "Valor da mensalidade deve ser um número positivo." });
    }

    if (valor_mensalidade <= 0 || isNaN(valor_mensalidade)) {
      return res
        .status(400)
        .json({ error: "Valor da mensalidade deve ser um número positivo." });
    }

    const user = await insertAssociado(nome, cpfFormatado, valor_mensalidade);

    if (!user) {
      return res.status(500).json({
        error: "Não foi possível cadastrar o associado.",
      });
    }

    return res.status(201).json({
      result: "Associado cadastrado com sucesso.",
      user: user.rows,
    });
  } catch (error: any) {

    if (error?.code === "23505") {
      return res.status(409).json({ error: "CPF já cadastrado." });
    }

    return res.status(500).json({ error });
  }
};
