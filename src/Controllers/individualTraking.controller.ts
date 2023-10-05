import { Request, Response } from 'express'

import validate from '../Utils/individualTraking.utils'
import service from '../Services/individualTraking.service'

const getEntries = (_req: Request, res: Response): Response => {
    return res.send(service.getEntries())
}

const addEntry = (req: Request, res: Response): Response => {
    try {
        const newEntry = validate.toNewEntry(req.body)
        const addedEntry = service.addEntry(newEntry)
        return res.send(addedEntry)
    }
    catch (Error: any) {
        return res.status(400).send(Error.message)
    }
}

const getEntry = (req: Request, res: Response): Response => {
    const entry = service.findById(+req.params.id)
    return entry
        ? res.send(entry)
        : res.sendStatus(404)
}

const deleteEntry = (req: Request, res: Response): Response => {
    const entry = service.deleteEntry(+req.params.id)
    return entry
        ? res.send(`El Individuo con id '${JSON.stringify(entry.id)}' fue eliminado `)
        : res.sendStatus(404)
}

const updateIdCourse = (req: Request, res: Response): Response | void => {
    try {
        const updateEntry = validate.toUpdateEntryCourse(req.body)
        const updatedEntry = service.updateEntryCourse(updateEntry, +req.params.id)
        res.json(updatedEntry)
    }
    catch (Error: any) {
        res.status(400).send(Error.message)
    }
}

const updateIdTraking = (req: Request, res: Response): Response | void => {
    try {
        const updateEntry = validate.toUpdateEntryTraking(req.body)
        const updatedEntry = service.updateEntryTraking(updateEntry, +req.params.id)
        res.json(updatedEntry)
    }
    catch (Error: any) {
        res.status(400).send(Error.message)
    }
}

const updateIdUser = (req: Request, res: Response): Response | void => {
    try {
        const updateEntry = validate.toUpdateEntryUser(req.body)
        const updatedEntry = service.updateEntryUser(updateEntry, +req.params.id)
        res.json(updatedEntry)
    }
    catch (Error: any) {
        res.status(400).send(Error.message)
    }
}

export default { getEntries, addEntry, getEntry, deleteEntry, updateIdUser, updateIdTraking, updateIdCourse }