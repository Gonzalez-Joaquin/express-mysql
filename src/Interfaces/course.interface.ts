export default interface courseEntry {
    id: number,
    idIndividual: number,
    name: string,
    desc: string,
    complete: boolean,
    startDate: string,
    endDate: string | 'En progreso'
}

export type NonSensitiveInfoCourse = Pick<courseEntry, 'id' | 'idIndividual' | 'name'>

export type NewEntry = Omit<courseEntry, 'id'>
export type UpdateEntry = Pick<courseEntry, 'endDate' | 'name' | 'desc'>