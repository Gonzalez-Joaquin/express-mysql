import courseEntry, { NewEntry, NonSensitiveInfoCourse, UpdateEntry } from '../Interfaces/course.interface'
import dataEntries from '../Public/course.data.json'

const allData: Array<courseEntry> = dataEntries as Array<courseEntry>

const getEntries = () => allData

const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoCourse> => {
    return allData.map(({ id, idIndividual, name }) => {
        return ({ id, idIndividual, name })
    })
}

const addEntry = (newEntry: NewEntry): courseEntry => {
    const updatedEntry = {
        id: Math.max(...allData.map(individual => individual.id)) + 1,
        ...newEntry
    }
    allData.push(updatedEntry)
    return updatedEntry
}

const findById = (id: number): courseEntry[] | undefined => {
    return allData.filter(entry => entry.idIndividual === id)
}

const deleteEntry = (id: number): courseEntry | undefined => {
    const entry = allData.find(entry => entry.id === id)
    if (entry !== undefined) {
        allData.filter(entry => entry.id !== id)
        return entry
    }
    return entry
}

const updateEntry = (updateEntry: UpdateEntry, id: number): Array<courseEntry> => {
    allData.map(entry => {
        if (entry.id === id) {
            return ({
                id,
                idIndividual: entry.idIndividual,
                startDate: entry.startDate,
                ...updateEntry
            })
        }
        return entry
    })
    return allData
}

export default { getEntries, getEntriesWithoutSensitiveInfo, addEntry, findById, deleteEntry, updateEntry }