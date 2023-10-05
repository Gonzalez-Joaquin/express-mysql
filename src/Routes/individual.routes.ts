import { Router } from 'express'

import controller from '../Controllers/individual.controller'

const individualRouter = Router()

individualRouter.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

individualRouter.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.addEntry)

export default individualRouter