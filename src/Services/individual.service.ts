import { NewEntry, NonSensitiveInfoIndividual, individualEntry, UpdateEntry } from '../Interfaces/individual.interface'
import individualData from '../Public/individual.data.json'

const allData: Array<individualEntry> = individualData as Array<individualEntry>

const getEntries = () => allData

const getEntriesWithoutSensitiveInfo = (): Array<NonSensitiveInfoIndividual> => {
    return allData.map(({ id, name, credential }) => {
        return ({ id, name, credential })
    })
}

const addEntry = (newIndividualEntry: NewEntry): individualEntry => {
    const newEntry = {
        id: Math.max(...allData.map(individual => individual.id)) + 1,
        ...newIndividualEntry
    }
    allData.push(newEntry)
    return newEntry
}

const findById = (id: number): individualEntry | undefined => {
    return allData.find(entry => entry.id === id)
}

const deleteEntry = (id: number): individualEntry | undefined => {
    const entry = allData.find(entry => entry.id === id)
    if (entry !== undefined) {
        allData.filter(entry => entry.id !== id)
        return entry
    }
    return entry
}

const updateEntry = (updateEntry: UpdateEntry, id: number): Array<individualEntry> => {
    allData.map(entry => {
        if (entry.id === id) {
            return ({
                id,
                credential: entry.credential,
                birthDate: entry.birthDate,
                ...updateEntry
            })
        }
        return entry
    })
    return allData
}

export default { getEntries, getEntriesWithoutSensitiveInfo, addEntry, findById, deleteEntry, updateEntry }