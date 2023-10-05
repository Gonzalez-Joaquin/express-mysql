import { Router } from 'express'
import controller from '../Controllers/courses.controller'

const courseRouter = Router()

courseRouter.route('/')
    .get(controller.getEntries)
    .post(controller.addEntry)

courseRouter.route('/:id')
    .get(controller.getEntry)
    .delete(controller.deleteEntry)
    .put(controller.updateEntry)

export default courseRouter