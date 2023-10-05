import individualTrakingEntry, { NewEntry, NonSensitiveInfoIndivudalTraking, UpdateEntryCourse, UpdateEntryTraking, UpdateEntryUser } from '../Interfaces/individualTraking.interface'
import dataEntries from '../Public/individualTraking.data.json'

const allData: Array<individualTrakingEntry> = dataEntries as Array<individualTrakingEntry>

const getEntries = () => allData

const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoIndivudalTraking> => {
    return allData.map(({ id, idUser }) => {
        return ({ id, idUser })
    })
}

const addEntry = (newEntry: NewEntry): individualTrakingEntry => {
    const updatedEntry = {
        id: Math.max(...allData.map(individual => individual.id)) + 1,
        ...newEntry
    }
    allData.push(updatedEntry)
    return updatedEntry
}

const findById = (id: number): individualTrakingEntry | undefined => allData.find(entry => entry.id === id)

const deleteEntry = (id: number): individualTrakingEntry | undefined => {
    const entry = allData.find(entry => entry.id === id)
    if (entry !== undefined) {
        allData.filter(entry => entry.id !== id)
        return entry
    }
    return entry
}

const updateEntryUser = (updateEntry: UpdateEntryUser, id: number): Array<individualTrakingEntry> => {
    allData.map(entry => {
        if (entry.id === id) {
            return ({
                id,
                idIndividual: entry.idIndividual,
                idCourses: entry.idCourses,
                idTrakings: entry.idTrakings,
                ...updateEntry
            })
        }
        return entry
    })
    return allData
}

const updateEntryCourse = (updateEntry: UpdateEntryCourse, id: number): Array<individualTrakingEntry> => {
    allData.map(entry => {
        if (entry.id === id) {
            return ({
                id,
                idIndividual: entry.idIndividual,
                idUser: entry.idUser,
                idTrakings: entry.idTrakings,
                ...updateEntry
            })
        }
        return entry
    })
    return allData
}

const updateEntryTraking = (updateEntry: UpdateEntryTraking, id: number): Array<individualTrakingEntry> => {
    allData.map(entry => {
        if (entry.id === id) {
            return ({
                id,
                idIndividual: entry.idIndividual,
                idCourses: entry.idCourses,
                idUser: entry.idUser,
                ...updateEntry
            })
        }
        return entry
    })
    return allData
}

export default { getEntries, getEntriesWithoutSensitiveInfo, addEntry, findById, deleteEntry, updateEntryUser, updateEntryCourse, updateEntryTraking }