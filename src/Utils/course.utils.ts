import { NewEntry, UpdateEntry } from "../Interfaces/course.interface";

import parse from './parse.utils'

const toNewEntry = (object: any): NewEntry => {
    const newEntry: NewEntry = {
        idIndividual: parse.number(object.idIndividual, 'Id Individual'),
        name: parse.string(object.name, 'name'),
        desc: parse.string(object.desc, 'desc'),
        complete: parse.trueOrFalse(object.complete, 'complete'),
        startDate: parse.string(object.startDate, 'startDate'),
        endDate: parse.string(object.endDate, 'endDate')
    }
    return newEntry
}

const toUpdateEntry = (object: any): UpdateEntry => {
    const updateEntry: UpdateEntry = {
        name: parse.string(object.name, 'name'),
        desc: parse.string(object.desc, 'desc'),
        endDate: parse.string(object.endDate, 'endDate')
    }
    return updateEntry
}

export default { toNewEntry, toUpdateEntry }