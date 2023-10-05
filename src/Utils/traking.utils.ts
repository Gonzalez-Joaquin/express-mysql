import { NewEntry, UpdateEntry } from "../Interfaces/traking.interface";

import parse from './parse.utils'

const toNewEntry = (object: any): NewEntry => {
    const newEntry: NewEntry = {
        idIndividual: parse.number(object.idIndividual, 'idIndividual'),
        criminalCase: parse.string(object.criminalCase, 'criminalCase'),
        date: parse.string(object.date, 'date'),
        desc: parse.string(object.desc, 'desc'),
        title: parse.string(object.title, 'title')
    }
    return newEntry
}

const toUpdateEntry = (object: any): UpdateEntry => {
    const updateEntry: UpdateEntry = {
        title: parse.string(object.title, ('title')),
        date: parse.string(object.date, 'date'),
        desc: parse.string(object.desc, 'desc')
    }
    return updateEntry
}

export default { toNewEntry, toUpdateEntry }