import { NewEntry, UpdateEntryCourse, UpdateEntryTraking, UpdateEntryUser } from "../Interfaces/individualTraking.interface";

import parse from './parse.utils'

const toNewEntry = (object: any): NewEntry => {
    const newEntry: NewEntry = {
        idIndividual: parse.number(object.idIndividual, 'idIndividual'),
        idCourses: parse.numberOrArrayOfNumberOrNull(object.idCourses, 'idCourses'),
        idTrakings: parse.numberOrArrayOfNumber(object.idTrakings, 'idTrakings'),
        idUser: parse.numberOrArrayOfNumber(object.idUser, 'idUser')
    }
    return newEntry
}

const toUpdateEntryCourse = (object: any): UpdateEntryCourse => {
    const updatedEntry: UpdateEntryCourse = {
        idCourses: parse.numberOrArrayOfNumberOrNull(object.idCourse, 'idCourse')
    }
    return updatedEntry
}

const toUpdateEntryTraking = (object: any): UpdateEntryTraking => {
    const updatedEntry: UpdateEntryTraking = {
        idTrakings: parse.numberOrArrayOfNumber(object.idCourse, 'idCourse')
    }
    return updatedEntry
}

const toUpdateEntryUser = (object: any): UpdateEntryUser => {
    const updatedEntry: UpdateEntryUser = {
        idUser: parse.numberOrArrayOfNumber(object.idCourse, 'idCourse')
    }
    return updatedEntry
}

export default { toNewEntry, toUpdateEntryCourse, toUpdateEntryTraking, toUpdateEntryUser }