import { NewEntry, UpdateEntry } from "../Interfaces/individual.interface";

import parse from './parse.utils'

const toNewEntry = (object: any): NewEntry => {
    const newEntry: NewEntry = {
        name: parse.name(object.name),
        credential: parse.credentials(object.credential),
        birthDate: parse.date(object.birthDate, 'Birth Date'),
        schoolFinished: parse.trueOrFalse(object.schoolFinished, 'School Finished'),
        asJob: parse.trueOrFalse(object.asJob, 'As Job')
    }
    return newEntry
}

const toUpdateEntry = (object: any): UpdateEntry => {
    const updateEntry: UpdateEntry = {
        name: parse.name(object.name),
        schoolFinished: parse.trueOrFalse(object.schoolFinished, 'School Finished'),
        asJob: parse.trueOrFalse(object.asJob, 'As Job')
    }
    return updateEntry
}

export default { toNewEntry, toUpdateEntry }