import { Request, Response } from 'express'

import validate from '../Utils/traking.utils'
import service from '../Services/traking.service'

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
    try {

        const entry = service.findById(+req.params.id)
        return entry
            ? res.send(entry)
            : res.sendStatus(404)
    }
    catch (err: any) {
        return res.status(400).send(err.message)
    }

}

const getOneEntryById = (req: Request, res: Response): Response => {
    const entry = service.findOneById(+req.params.id)
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

const updateEntry = (req: Request, res: Response): Response | void => {
    try {
        const updateEntry = validate.toUpdateEntry(req.body)

        const updatedEntry = service.updateEntry(updateEntry, +req.params.id)

        res.json(updatedEntry)
    }
    catch (Error: any) {
        res.status(400).send(Error.message)
    }
}

export default { getEntries, addEntry, getEntry, deleteEntry, updateEntry, getOneEntryById }