import express, {type Request, type Response} from 'express'

import rootRouter from './api/routes/index.ts'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', rootRouter())

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})