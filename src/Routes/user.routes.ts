import { Router } from 'express'
import * as userController from '../Controllers/user.controller'

const userRouter = Router()

userRouter.route('/')
    .get(userController.getUsers)
    .post(userController.addUser)

userRouter.route('/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .put(userController.updateUser)

userRouter.route('/login')
    .post(userController.loginByUsername)

export default userRouter