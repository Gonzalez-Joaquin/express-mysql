import { Router } from 'express'
import controller from '../Controllers/individual.controller'

const individualTrakingRouter = Router()

individualTrakingRouter.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

individualTrakingRouter.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

export default individualTrakingRouter