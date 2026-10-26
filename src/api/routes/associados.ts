import { Router } from 'express'
import { cadastrar } from '../controllers/associados.ts'

export default (router: Router) => {
    router.post('/associados', cadastrar)
}