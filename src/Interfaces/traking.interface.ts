export default interface trakingEntry {
    id: number,
    idIndividual: number,
    title: string,
    desc: string,
    criminalCase: string,
    date: string,
}

export type NonSensitiveInfoTraking = Pick<trakingEntry, 'id' | 'idIndividual' | 'criminalCase'>

export type NewEntry = Omit<trakingEntry, 'id'>
export type UpdateEntry = Pick<trakingEntry, 'date' | 'title' | 'desc'>