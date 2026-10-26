import { Router } from "express";
import associados from './associados.ts'
import cobrancas from './cobrancas.ts'
import webhooks from './webhooks.ts'

const router = Router();

export default function RootRouter() {
    associados(router);
    cobrancas(router);
    webhooks(router);

    return router;
}