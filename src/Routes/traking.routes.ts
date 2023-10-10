import { Router } from 'express'
import controller from '../Controllers/traking.controller'

const trakingRouter = Router()

trakingRouter.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

trakingRouter.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

trakingRouter.route('/find/:id')
    .get(controller.getOneEntryById)

export default trakingRouter