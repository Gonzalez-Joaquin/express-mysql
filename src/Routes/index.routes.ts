import { Router } from 'express'

const indexRouter = Router()

indexRouter.route('/').get(() => console.log(`API REST por Joaquin "Que habilidade" Gonzalez.`))

export default indexRouter