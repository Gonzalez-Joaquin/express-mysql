export interface individualEntry {
    id: number,
    name: string,
    credential: number,
    birthDate: string,
    schoolFinished: boolean,
    asJob: boolean
}

export type NonSensitiveInfoIndividual = Pick<individualEntry, 'id' | 'name' | 'credential'>

export type NewEntry = Omit<individualEntry, 'id'>
export type UpdateEntry = Omit<individualEntry, 'id' | 'birthDate' | 'credential'>