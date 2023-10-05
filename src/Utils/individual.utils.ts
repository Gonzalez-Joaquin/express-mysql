import { NewEntry, UpdateEntry } from "../Interfaces/individual.interface";

import parse from './parse.utils'

const toNewEntry = (object: any): NewEntry => {
    const newEntry: NewEntry = {
        name: parse.string(object.name, 'name'),
        credential: parse.number(object.credential, 'credential'),
        birthDate: parse.string(object.birthDate, 'birthDate'),
        schoolFinished: parse.trueOrFalse(object.schoolFinished, 'schoolFinished'),
        asJob: parse.trueOrFalse(object.asJob, 'asJob')
    }
    return newEntry
}

const toUpdateEntry = (object: any): UpdateEntry => {
    const updateEntry: UpdateEntry = {
        name: parse.string(object.name, 'name'),
        schoolFinished: parse.trueOrFalse(object.schoolFinished, 'schoolFinished'),
        asJob: parse.trueOrFalse(object.asJob, 'asJob')
    }
    return updateEntry
}

export default { toNewEntry, toUpdateEntry }