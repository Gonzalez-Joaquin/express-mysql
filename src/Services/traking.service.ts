import trakingEntry, { NewEntry, NonSensitiveInfoTraking, UpdateEntry } from '../Interfaces/traking.interface'
import dataEntries from '../Public/traking.data.json'

const allData: Array<trakingEntry> = dataEntries as Array<trakingEntry>

const getEntries = () => allData

const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoTraking> => {
    return allData.map(({ id, idIndividual, criminalCase }) => {
        return ({ id, idIndividual, criminalCase })
    })
}

const addEntry = (newEntry: NewEntry): trakingEntry => {
    const updatedEntry = {
        id: Math.max(...allData.map(individual => individual.id)) + 1,
        ...newEntry
    }
    allData.push(updatedEntry)
    return updatedEntry
}

const findById = (id: number): trakingEntry[] | undefined => allData.filter(entry => entry.idIndividual === id)

const deleteEntry = (id: number): trakingEntry | undefined => {
    const entry = allData.find(entry => entry.id === id)
    if (entry !== undefined) {
        allData.filter(entry => entry.id !== id)
        return entry
    }
    return entry
}

const updateEntry = (updateEntry: UpdateEntry, id: number): Array<trakingEntry> => {
    allData.map(entry => {
        if (entry.id === id) {
            return ({
                id,
                idIndividual: entry.idIndividual,
                criminalCase: entry.criminalCase,
                ...updateEntry
            })
        }
        return entry
    })
    return allData
}

export default { getEntries, getEntriesWithoutSensitiveInfo, addEntry, findById, deleteEntry, updateEntry }