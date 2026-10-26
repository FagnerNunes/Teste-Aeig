import { Router } from 'express'
import { cadastrar, listar } from '../controllers/cobrancas.ts'

export default (router: Router) => {
    router.post('/cobrancas', cadastrar)
    router.get('/cobrancas/:nosso_numero', listar)
}