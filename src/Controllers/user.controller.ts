import { Request, Response } from "express"

import userServices from '../Services/users.service'

import validate from "../Utils/users.utils"

// Recibo todos los usuarios
export const getUsers = (_req: Request, res: Response): Response => {
    return res.send(userServices.getEntriesWithoutSensitiveInfo())
}

// Agrego nuevo usuario
export const addUser = (req: Request, res: Response): Response | void => {
    try {
        const newUserEntry = validate.toNewUserEntry(req.body)

        const addedUserEntry = userServices.addUser(newUserEntry)

        res.json(addedUserEntry)
    }
    catch (Error: any) {
        res.status(400).send(Error.message)
    }
}

// Recibo un usuario por id
export const getUser = (req: Request, res: Response): Response => {
    const user = userServices.findById(+req.params.id)
    return user
        ? res.send(user)
        : res.sendStatus(404)
}

// Elimino un usuario por id
export const deleteUser = (req: Request, res: Response): Response => {
    const user = userServices.deleteUser(+req.params.id)
    return user
        ? res.send(`El usuario con id '${JSON.stringify(user.id)}' fue eliminado `)
        : res.sendStatus(404)
}

// Actualizo un usuario por id
export const updateUser = (req: Request, res: Response): Response | void => {
    try {
        const updateUserEntry = validate.toUpdatedUserEntry(req.body)

        const updatedUserEntry = userServices.updateUser(updateUserEntry, +req.params.id)

        res.json(updatedUserEntry)
    }
    catch (Error: any) {
        res.status(400).send(Error.message)
    }
}