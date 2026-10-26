import { Router } from 'express'
import { pagamento } from '../controllers/webhooks.ts'

export default (router: Router) => {
    router.post('/webhooks/pagamento', pagamento)
}